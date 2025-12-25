import React from "react";
import styles from "./Modal.module.css";
import { X, AlertCircle } from "lucide-react"; // Opcional: ícone de alerta se quiser
import { useTranslation } from "react-i18next";


function Modal({ isOpen, onClose, title, note, data }) {
  const { t } = useTranslation();

  if (!isOpen || !data) {
    return null;
  }

  const hasQuantity = data[0]?.items[0]?.qty !== undefined;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        {/* HEADER */}
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <button className={styles.closeButton} onClick={onClose} aria-label="Fechar">
            <X size={24} />
          </button>
        </div>
        {note && (
          <div style={{ 
            padding: "0 24px 10px 24px",
            fontSize: "0.9rem",
            color: "var(--azul-swan)",
            fontStyle: "italic",
            lineHeight: "1.4"
          }}>
            {note}
          </div>
        )}

        <div className={styles.modalBody}>
          {data.map((categoryData, index) => (
            <div key={index} className={styles.categoryWrapper}>
              <h3 className={styles.categoryTitle}>{categoryData.category}</h3>

              <table className={styles.priceTable}>
                {hasQuantity && (
                  <thead>
                    <tr>
                      <th className={styles.qtyCol}>{t("modal.table.qty")}</th>
                      <th className={styles.productCol}>
                        {t("modal.table.item")}
                      </th>
                      <th className={styles.priceCol}>
                        {t("modal.table.unitPrice")}
                      </th>
                    </tr>
                  </thead>
                )}

                <tbody>
                  {categoryData.items.map((item, itemIndex) => (
                    <tr key={itemIndex}>
                      {hasQuantity && (
                        <td className={styles.qtyCol}>{item.qty}</td>
                      )}
                      <td className={!hasQuantity ? styles.productColOnly : ""}>
                        {item.name}
                      </td>
                      <td className={styles.priceCol}>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;