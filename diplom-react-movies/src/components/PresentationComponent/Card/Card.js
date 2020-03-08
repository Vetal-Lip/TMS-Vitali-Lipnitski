import React from 'react';
import styles from './styles.module.css';



export default function Card(props) {
    console.log(props.state)
    console.log(props.searchValue)

    let filtredData = [];
    let sortedData = [];

    if (props.state) {
        filtredData = props.state.filter((el) => {
            if (props.searchBy === 'title') {
                return el.title.indexOf(props.searchValue) > -1
            } else {
                if (props.searchBy === 'genre') {
                    return el.genres.includes(props.searchValue)
                }
            }
        })

    }

    sortedData = [...filtredData].sort((a, b) => {
        if (props.sortBy === 'rating') {
            return b.vote_average > a.vote_average ? 1 : -1
        } else {
            if (props.sortBy === 'date') {
                return b.release_date > a.release_date ? 1 : -1
            }
        }
    })
    

    return (props.state && props.sortBy) ? sortedData.map((el, i) => {
        return <div id={el.id} className={styles.card_wrapper} onClick={props.openModal}>
            <div className={styles.card_item}>
                <img className={styles.img_card} src={el.poster_path} alt={"Movies"} />
            </div>
            <div className={styles.content_wrapper}>
                <div>
                    <div>{el.title}</div>
                    <div>{el.genres.join(" & ")}</div>
                </div>
                <div className={styles.date}>{el.release_date.split("-", 1)}</div>
            </div>

        </div>
    }) : null;

}



