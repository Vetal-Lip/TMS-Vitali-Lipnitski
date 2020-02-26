import React from 'react';
import styles from './styles.module.css';


export default function Modal(props) {
  console.log(props.isOpen)
  return (props.isOpen === true)? <div className="vmodal">
      <div className={styles.modal_overlay} >
        <div className={styles.modal_window}>
          <div className={styles.modal_header}>
            <span className={styles.modal_title}>Modal Title</span>
            <span className={styles.modal_close} onClick={props.closeModal}>&times;</span>
          </div>
          <div className={styles.modal_body}>
            <span className={styles.modal_genre}>Drama</span>
            <div className={styles.modal_description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className={styles.modal_popularity}>55.345.678</div>
            <div className={styles.modal_budget}>2.000.000$</div>
          </div>
          <div className={styles.modal_footer}>

          </div>
        </div>
      </div>
    </div>:null;

}