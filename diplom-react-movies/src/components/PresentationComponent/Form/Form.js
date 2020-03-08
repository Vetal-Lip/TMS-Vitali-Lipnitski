import React from 'react';
import styles from './styles.module.css';


export default function Form(props) {

    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input className={styles.input} value={props.state} onChange={props.onChange} placeholder={(props.searchBy === 'title') ? 'enter film name' : 'enter jenre name'} />
                <div className={styles.search_wrapper}>
                    <div className={styles.searchby_wrapper}>
                        <p className={styles.searchby_title}>search by</p>
                        <div id='title' onClick={props.getSearchBy} className={styles.searchby_item} style={{ background: `${props.searchBy === 'title' ? `rgb(221, 4, 4)` : ''}` }}>title</div>
                        <div id='genre' onClick={props.getSearchBy} className={styles.searchby_item} style={{ background: `${props.searchBy === 'genre' ? `rgb(221, 4, 4)` : ''}` }}>genre</div>
                    </div>
                    <div><button className={styles.button} onMouseUp={props.onMouseUp} onMouseDown={props.onMouseDown} disabled={!props.state?'disabled':''} >{props.loading ? "Loading..." : "Search"}</button></div>
                </div>
            </form>
            <div className={styles.wrapper}>
                <div>{props.countMovies} movies found</div>
                <div className={styles.sortby_wrapper}>
                    <div className={styles.sortby}>sort by:</div>
                    <div id='date' className={styles.sortby_item} onClick={props.onClickReleaseDate} style={{color: `${props.sortBy === 'date'?`rgb(221, 4, 4)` : ` `}`}} >release date</div>
                    <div id='rating' className={styles.sortby_item} onClick={props.onClickRaiting} style={{color: `${props.sortBy === 'rating'?`rgb(221, 4, 4)` : ` `}`}} >rating</div>
                </div>
            </div>
        </div>
    )
}