import React from "react";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Phone } from "lucide-react";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <a
            href="https://www.swanhoteis.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://lirp.cdn-website.com/02637c80/dms3rep/multi/opt/Ativo+1-10259147-1920w.png"
              alt="Swan Hotéis"
            />
          </a>
        </div>

        <div className={styles.footerContacts}>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/swanhoteis/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Swan Hotéis">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com/swanhoteis/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Swan Hotéis">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/swanhoteis/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Swan Hotéis">
              <FaLinkedinIn size={20} />
            </a>
          </div>

          <div className={styles.phoneContacts}>
            <a href="tel:08007077106" aria-label="Telefone Central de Reservas 0800 707 7106" className={styles.phoneLink}>
              <Phone size={16} /> Central de Reservas: 0800 707 7106
            </a>
            <a href="tel:+555135532222" aria-label="Telefone da Unidade (51) 3553-2222" className={styles.phoneLink}>
              <Phone size={16} /> Unidade: (51) 3553-2222
            </a>
            <a href="https://wa.me/5551992286457" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp (51) 9 9228-6457" className={styles.phoneLink}>
              <FaWhatsapp size={16} /> WhatsApp: (51) 9 9228-6457
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        <small>{t("footer.copyright")}</small>
      </div>
      {/* <div className={styles.footerDev}>
        {t("footer.devCredit")}
        <a
          href="https://SEU_LINK_DO_LINKEDIN_AQUI"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vanov Moretto
        </a>
      </div> */}
    </footer>
  );
}

export default Footer;