import React from 'react';
import styles from './styles.module.css';

export default function TodoItem(props) {

    return (
        <React.Fragment>
            <div className={`${styles.task_wrapper} ${props.completed ? styles.completedStyle : ''}`}>{props.children}</div>
            <div className={styles.button_wrapper}>
                <button onClick={() => props.onClick(props.indexId)} className={styles.buttonDelete}>Delete</button>
                <button className={styles.buttonComplete} onClick={() => props.onComplete(props.indexId)}>{props.completed ? 'Uncompleted' : 'Completed'}</button>
            </div>
        </React.Fragment>
    )
} 