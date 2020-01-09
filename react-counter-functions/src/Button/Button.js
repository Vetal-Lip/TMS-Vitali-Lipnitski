import React from 'react';
import styles from './styles.module.css';

export default function Button(props){
    return(
    <div className={`${styles.button} ${styles.center} ${props.styles}`} onClick={props.onClick}>{props.children}</div>
    )
}
