import React from 'react';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

export default function NavBar(){
    return(
        <nav className={styles.nav}>
            <div className={styles.nav_item} ><NavLink to='/all'>all</NavLink></div>
            <div className={styles.nav_item}><NavLink to='/completed'>completed</NavLink></div>
            <div className={styles.nav_item}><NavLink to='/uncompleted'>uncompleted</NavLink></div>
        </nav>   
    )
}