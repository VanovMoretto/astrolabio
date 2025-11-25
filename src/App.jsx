import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAccordionData } from "./data/accordionData";
import Accordion from "./components/Accordion";
import Modal from "./components/Modal";
import { useLaundryData } from "./data/laundryData";
import { useFrigobarData } from "./data/frigobarData";
import "./App.css";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";

// Componente simples para o Logo, mantido no mesmo arquivo por ser exclusivo da App
function Logo() {
  return (
    <div className="logo">
      <img
        src="https://lirp.cdn-website.com/02637c80/dms3rep/multi/opt/Astrol%C3%A1bio+logo-1920w.png"
        alt="Logo Astrolábio"
      />
    </div>
  );
}

function App() {
  const { t } = useTranslation();
  
  // Hooks personalizados para buscar dados estruturados já traduzidos
  const accordionData = useAccordionData();
  const laundryPriceList = useLaundryData();
  const frigobarPriceList = useFrigobarData();

  // Estado para controlar o conteúdo do Modal. 
  // Se null, o modal está fechado. Se tiver objeto, o modal abre com esse conteúdo.
  const [modalContent, setModalContent] = useState(null);

  /**
   * Funções de helper para abrir modais específicos.
   * Essas funções são passadas como props para os componentes que precisam disparar o modal.
   */
  const openLaundryModal = () =>
    setModalContent({
      title: t("modal.laundryTitle"),
      data: laundryPriceList,
    });

  const openFrigobarModal = () =>
    setModalContent({
      title: t("modal.frigobarTitle"),
      data: frigobarPriceList,
    });

  const closeModal = () => setModalContent(null);

  return (
    <>
      <div className="app-container">
        <LanguageSwitcher />

        <Logo />
        
        <section className="intro-text">
          <p>{t("introText")}</p>
        </section>

        {/* Renderização dinâmica da lista de sanfonas (accordions) */}
        <main className="accordion-list">
          {accordionData.map((item) => {
            // O componente de conteúdo é dinâmico, definido em accordionData.jsx
            const ContentComponent = item.content;

            return (
              <Accordion key={item.id} icon={item.icon} title={item.title}>
                {/* Passamos as funções de modal apenas para os itens que precisam delas.
                  ID 6 = Serviços (Lavanderia), ID 3 = Restaurante (Frigobar)
                  Isso evita passar props desnecessárias para todos os itens.
                */}
                <ContentComponent
                  onOpenLaundryModal={item.id === 6 ? openLaundryModal : null}
                  onOpenFrigobarModal={item.id === 3 ? openFrigobarModal : null}
                />
              </Accordion>
            );
          })}
        </main>

        {/* Modal genérico que renderiza baseado no estado modalContent */}
        <Modal
          isOpen={!!modalContent}
          onClose={closeModal}
          title={modalContent?.title}
          data={modalContent?.data}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;