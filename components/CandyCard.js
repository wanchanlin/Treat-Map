import React from 'react';
import styles from '../styles/Home.module.css';

const CandyCard = ({ name, image, description }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={name} className={styles.image} />
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default CandyCard;