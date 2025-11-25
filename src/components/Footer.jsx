import React from "react";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
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
