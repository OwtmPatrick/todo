import {createPortal} from 'react-dom';
import {FC} from 'react';
import plusIcon from '../../assets/plus.svg';
import styles from './styles.module.css';

interface ModalProps {
  title: string;
  onClose: () => void;
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const Modal: FC<ModalProps> = ({onClose, title, text, onConfirm, onCancel}) => {
  return createPortal(
    <div className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p>{text}</p>
        <div className={styles.actions}>
          <button type="button" className={styles.actionBtn} onClick={onConfirm}>
            Да
          </button>
          <button type="button" className={styles.actionBtn} onClick={onCancel}>
            Нет
          </button>
        </div>
        <button type="button" onClick={onClose} className={styles.closeBtn}>
          Close modal
          <img src={plusIcon} alt="close icon" className={styles.closeIcon} />
        </button>
      </div>
    </div>,
    document.body
  );
};
