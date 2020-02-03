import React from 'react';
import styles from './styles.module.css';


export default function Form(props) {

    const onSubmitForm = (event) => {
        event.preventDefault();
    }


    const onChangeInput = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div className={styles.center}>
            <form onSubmit={onSubmitForm}>
                <label className={styles.label}> Add a toDo today:</label>
                <input onChange={onChangeInput} value={props.value} />
                <button className={styles.button} onClick={props.onClick}> Add </button>
            </form>
        </div>
    )

}