import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

/**
 * Configuração do i18next.
 * Utiliza o 'i18next-http-backend' para carregar os arquivos de tradução de forma assíncrona
 * a partir da pasta pública, em vez de importá-los diretamente no bundle JS.
 */
i18n
  .use(Backend) // Habilita o carregamento via HTTP (fetch) dos arquivos de tradução
  .use(initReactI18next) // Passa a instância do i18n para o react-i18next
  .init({
    // Idiomas suportados pela aplicação. 
    // Importante: Garanta que existem pastas correspondentes em /public/locales/
    supportedLngs: ["pt", "en", "es", "zh"],

    // Idioma padrão caso o idioma do navegador não seja suportado ou falhe o carregamento
    fallbackLng: "pt",

    // Idioma inicial (forçado para português neste caso)
    lng: "pt",

    backend: {
      // Caminho para carregar os arquivos de tradução.
      // {{lng}} é substituído pelo idioma e import.meta.env.BASE_URL garante que funcione
      // corretamente mesmo se a aplicação não estiver na raiz do domínio (ex: GitHub Pages).
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/translation.json`,
    },

    debug: false, // Defina como true para ver logs de tradução no console durante o desenvolvimento

    interpolation: {
      escapeValue: false, // React já protege contra XSS nativamente
    },
  });

export default i18n;