import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

// Mapeamento entre o código de idioma do i18next e o código de país para a biblioteca de bandeiras (flag-icon-css)
const langToCountryCode = {
  pt: "br",
  en: "us",
  es: "es",
  zh: "cn",
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Ref usada para detectar cliques fora do componente (para fechar o dropdown)
  const dropdownRef = useRef(null);

  // Normaliza o idioma atual (ex: 'pt-BR' vira 'pt') para bater com o mapa langToCountryCode
  const currentLang = i18n.language.split("-")[0];
  
  // Filtra 'cimode', que é um modo de debug do i18next, para não aparecer na lista
  const supportedLanguages = i18n.options.supportedLngs.filter(
    (lng) => lng !== "cimode"
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // Effect para lidar com o comportamento de "clicar fora" para fechar o menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const currentCountryCode = langToCountryCode[currentLang];

  return (
    <div className={styles.switcherWrapper} ref={dropdownRef}>
      {/* Botão principal que exibe a bandeira atual */}
      <button
        className={styles.currentLangButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Alterar idioma"
      >
        <span className={`fi fi-${currentCountryCode} ${styles.flagIcon}`} />
      </button>

      {/* Dropdown com as outras opções */}
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {supportedLanguages
            .filter((lng) => lng !== currentLang)
            .map((lng) => {
              const countryCode = langToCountryCode[lng];
              return (
                <button
                  key={lng}
                  className={styles.dropdownItem}
                  onClick={() => changeLanguage(lng)}
                  disabled={lng === currentLang}
                >
                  <span className={`fi fi-${countryCode} ${styles.flagIcon}`} />
                </button>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;