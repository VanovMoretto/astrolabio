import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import SubAccordion from "../components/SubAccordion";
import styles from "../components/Accordion.module.css";
// Ícones importados da biblioteca lucide-react
import {
  Wifi,
  Clock,
  Coffee,
  Utensils,
  Dumbbell,
  Lock,
  ConciergeBell,
  Users,
  Dog,
  ShieldAlert,
  Building,
  BedDouble,
  Sparkles,
  Baby,
} from "lucide-react";

/* COMPONENTES DE CONTEÚDO
  Cada componente abaixo representa o conteúdo interno de uma das abas do Accordion.
  Eles utilizam o hook useTranslation para buscar textos e o componente Trans
  para permitir interpolação de tags HTML (como <strong>) dentro das strings de tradução.
*/

const linkStyle = {
  fontWeight: "bold",
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};

const ContentInternet = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <strong>{t("accordion.internet.wifiTitle")}</strong>{" "}
        {t("accordion.internet.wifiDesc")}
        <small>
          <br />
          {/* Trans permite renderizar componentes dentro da string traduzida. <1> mapeia para <strong> */}
          <Trans
            i18nKey="accordion.internet.wifiNet"
            components={{ 1: <strong /> }}
          />
          <br />
          {t("accordion.internet.wifiLogin")}
          <br />
          <Trans
            i18nKey="accordion.internet.wifiUser"
            components={{ 1: <strong /> }}
          />
          <br />
          <Trans
            i18nKey="accordion.internet.wifiPass"
            components={{ 1: <strong /> }}
          />
        </small>
      </p>
      <p>
        <strong>{t("accordion.internet.phonesTitle")}</strong>
        <br />
        <Trans
          i18nKey="accordion.internet.phonesReception"
          components={{ 1: <strong /> }}
        />
        <br />
        <Trans
          i18nKey="accordion.internet.phonesRestaurant"
          components={{ 1: <strong /> }}
        />
        <br />
        <Trans
          i18nKey="accordion.internet.phonesHotel"
          components={{ 1: <a href="tel:+555135532222" style={linkStyle} /> }}
        />
        <br />
        <Trans
          i18nKey="accordion.internet.whatsappReception"
          components={{
            1: (
              <a
                href="https://wa.me/5551992286457"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              />
            ),
          }}
        />
        <br />
        <Trans
          i18nKey="accordion.internet.phonesReservation"
          components={{ 1: <a href="tel:08007077106" style={linkStyle} /> }}
        />
      </p>
    </>
  );
};

const ContentCafe = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>{t("accordion.breakfast.description")}</p>
      <p>
        <strong>{t("accordion.breakfast.weekdaysTitle")}</strong>
        <br />
        {t("accordion.breakfast.weekdaysTime")}
      </p>
      <p>
        <strong>{t("accordion.breakfast.weekendsTitle")}</strong>
        <br />
        {t("accordion.breakfast.weekendsTime")}
      </p>
      <div className={styles.breakfastFootnoteWrapper}>
        <small>
          {t("accordion.breakfast.breakfastFootnote.line1")}
          <br />
          {t("accordion.breakfast.breakfastFootnote.line2")}
          <br />
          <Trans
            i18nKey="accordion.breakfast.breakfastFootnote.line3"
            components={{ 1: <strong /> }}
          />
        </small>
      </div>
    </>
  );
};

const ContentRestaurante = ({ onOpenFrigobarModal }) => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <strong>{t("accordion.restaurant.restaurantTitle")}</strong>
        <br />
        {t("accordion.restaurant.hours")}
        <br />
        <small>{t("accordion.restaurant.closedNote")}</small>
      </p>
      <p>
        <strong>{t("accordion.restaurant.roomServiceTitle")}</strong>
        <br />
        {t("accordion.restaurant.roomServiceHours")}
      </p>
      {/* Botão para link externo (Goomer) */}
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <button
          className="button-primary"
          onClick={() =>
            window.open("https://swan-hoteis-2.goomer.app/menu", "_blank")
          }
        >
          {t("accordion.restaurant.menuButton")}
        </button>
      </div>
      <p>
        <strong>{t("accordion.restaurant.minibarTitle")}</strong>
        <br />
        {t("accordion.restaurant.minibarDesc")}
      </p>
      {/* Botão que dispara a abertura do modal interno (recebido via props) */}
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <button className="button-primary" onClick={onOpenFrigobarModal}>
          {t("accordion.restaurant.menuButton")}
        </button>
      </div>
    </>
  );
};

const ContentCheckInOut = () => {
  const { t } = useTranslation();
  return (
    <>
      <p style={{ marginTop: "20px" }}>
        <strong>{t("accordion.checkin.checkinTitle")}</strong>{" "}
        {t("accordion.checkin.checkinTime")}
      </p>
      <p>
        <strong>{t("accordion.checkin.checkoutTitle")}</strong>{" "}
        {t("accordion.checkin.checkoutTime")}
      </p>
      <div style={{ padding: "10px", fontSize: "10px" }}>
        <p>
          <strong>{t("accordion.checkin.importantTitle")}</strong>{" "}
          {t("accordion.checkin.importantNote")}
        </p>
        <li>{t("accordion.checkin.note1")}</li>
        <li>{t("accordion.checkin.note2")}</li>
        <br />
        <span style={{ fontStyle: "italic" }}>
          {t("accordion.checkin.note3")}
        </span>
      </div>
    </>
  );
};

const ContentLazer = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <strong>{t("accordion.leisure.gymTitle")}</strong>
        <br />
        {t("accordion.leisure.gymHours")}
      </p>
      <p>
        <Trans
          i18nKey="accordion.leisure.poolTitle"
          components={{ 1: <strong />, 2: <small /> }}
        />
        <br />
        {t("accordion.leisure.poolHours")}
      </p>
      <p>
        <Trans
          i18nKey="accordion.leisure.saunaTitle"
          components={{ 1: <strong />, 2: <small /> }}
        />
        <br />
        {t("accordion.leisure.saunaHours")}
      </p>
      {/*<p>
        <strong>{t("accordion.leisure.gameRoomTitle")}</strong>
        <br />
        {t("accordion.leisure.gameRoomHours")}
      </p> */}
      <small style={{ fontSize: "10px" }}>
        {t("accordion.leisure.note1")}
        <br />
        {t("accordion.leisure.note2")}
      </small>
    </>
  );
};

const ContentServicos = ({ onOpenLaundryModal }) => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <strong>{t("accordion.services.parkingTitle")}</strong>
        <br />
        {t("accordion.services.parkingDesc")}
      </p>
      {/*  APAGAR AS CHAVES { E AS BARRAS /* QUANDO VOLTAR O SERVIÇO, ADICIONAR LOCAL NO MAPA DO HOTEL TAMBÉM}
      <p>
        <strong>{t("accordion.services.massageTitle")}</strong>
        <br />
        {t("accordion.services.massageDesc")}{" "}
        <a
          style={{
            fontWeight: "bold",
            textDecoration: "none",
            color: "inherit",
          }}
          href="https://wa.me/5551999983202"
          rel="noopener noreferrer"
          target="_blank"
        >
          Eternity <FaWhatsapp size={15} />
        </a>
      </p>
      */}
      <p>
        <strong>{t("accordion.services.laundryTitle")}</strong>
        <br />
        {t("accordion.services.laundryDesc")}
      </p>
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <button className="button-primary" onClick={onOpenLaundryModal}>
          {t("accordion.services.laundryButton")}
        </button>
      </div>
    </>
  );
};

const ContentLocais = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <strong>{t("accordion.map.floorSCTitle")}</strong>
        <br />
        <Trans
          i18nKey="accordion.map.floorSCItems"
          components={{ br: <br /> }}
        />
      </p>
      <p>
        <strong>{t("accordion.map.floorPTitle")}</strong>
        <br />
        <Trans
          i18nKey="accordion.map.floorPItems"
          components={{ br: <br /> }}
        />
      </p>
      <p>
        <strong>{t("accordion.map.floorM1Title")}</strong>
        <br />
        <Trans i18nKey="accordion.map.floorM1Items" />
      </p>
      <p>
        <strong>{t("accordion.map.floorM2Title")}</strong>
        <br />
        <Trans i18nKey="accordion.map.floorM2Items" />
      </p>
    </>
  );
};

const ContentPoliticas = () => {
  const { t } = useTranslation();
  return (
    <>
      <div style={{ padding: "10px 0 0 0" }}>
        {/* Cofre */}
        <SubAccordion
          icon={<Lock size={20} />}
          title={t("accordion.policies.safeTitle")}
        >
          <p>{t("accordion.policies.safeP1")}</p>
          <p>{t("accordion.policies.safeP2")}</p>
          <p>{t("accordion.policies.safeP3")}</p>
          <p>{t("accordion.policies.safeP4")}</p>
          <p>{t("accordion.policies.safeP5")}</p>
          <p>{t("accordion.policies.safeP6")}</p>
        </SubAccordion>

        <SubAccordion
          icon={<BedDouble size={20} />}
          title={t("accordion.policies.rulesTitle")}
        >
          <p>
            <Trans
              i18nKey="accordion.policies.rulesP1"
              components={{ 1: <strong />, br: <br /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey="accordion.policies.rulesP2"
              components={{ 1: <strong />, br: <br /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey="accordion.policies.rulesP3"
              components={{ 1: <strong />, br: <br /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey="accordion.policies.rulesP4"
              components={{ 1: <strong />, br: <br /> }}
            />
          </p>
        </SubAccordion>

        {/* Menores */}
        <SubAccordion
          icon={<Baby size={20} />}
          title={t("accordion.policies.minorsTitle")}
        >
          <p>{t("accordion.policies.minorsP1")}</p>
          <p>{t("accordion.policies.minorsP2")}</p>
        </SubAccordion>

        {/* Hóspedes */}
        <SubAccordion
          icon={<Users size={20} />}
          title={t("accordion.policies.guestsTitle")}
        >
          <p>{t("accordion.policies.guestsP1")}</p>
        </SubAccordion>

        {/* Pets */}
        <SubAccordion
          icon={<Dog size={20} />}
          title={t("accordion.policies.petTitle")}
        >
          <ul style={{ paddingLeft: "20px", margin: 0, fontSize: "0.9rem" }}>
            <li>{t("accordion.policies.petLi1")}</li>
            <li>{t("accordion.policies.petLi2")}</li>
            <li>{t("accordion.policies.petLi3")}</li>
            <li>{t("accordion.policies.petLi4")}</li>
            <li>{t("accordion.policies.petLi5")}</li>
            <li>{t("accordion.policies.petLi6")}</li>
            <li>{t("accordion.policies.petLi7")}</li>
            <li>{t("accordion.policies.petLi8")}</li>
          </ul>
        </SubAccordion>
      </div>
    </>
  );
};

export const useAccordionData = () => {
  const { t } = useTranslation();

  const accordionData = [
    {
      id: 1,
      icon: <ShieldAlert size={24} />,
      title: t("accordion.policies.title"),
      content: ContentPoliticas,
    },
    {
      id: 2,
      icon: <Clock size={24} />,
      title: t("accordion.checkin.title"),
      content: ContentCheckInOut,
    },
    {
      id: 3,
      icon: <Wifi size={24} />,
      title: t("accordion.internet.title"),
      content: ContentInternet,
    },
    {
      id: 4,
      icon: <Coffee size={24} />,
      title: t("accordion.breakfast.title"),
      content: ContentCafe,
    },
    {
      id: 5,
      icon: <Utensils size={24} />,
      title: t("accordion.restaurant.title"),
      content: ContentRestaurante,
    },
    {
      id: 6,
      icon: <ConciergeBell size={24} />,
      title: t("accordion.services.title"),
      content: ContentServicos,
    },
    {
      id: 7,
      icon: <Building size={24} />,
      title: t("accordion.map.title"),
      content: ContentLocais,
    },
    {
      id: 8,
      icon: <Sparkles size={24} />,
      title: t("accordion.leisure.title"),
      content: ContentLazer,
    },
  ];

  return accordionData;
};
