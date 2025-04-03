import React from 'react';
import '../styles.css';

export default function Header(){
    return (
        <div className='header'>
            <img className='logo' src='logo.png' alt='Moviedux'></img>
            <h2 className='app-subtitle'>It's time to find popcorn! Find your next Movie here.</h2>
        </div>
    )
}
