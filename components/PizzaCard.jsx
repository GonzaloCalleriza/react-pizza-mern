import Image from 'next/image';
import React from 'react';
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src='../public/img/pizza.png' alt='pizza' width='500px' height='500px' />
            <h1 className={styles.title}>Fiori di Zucca</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>
                The best pizza with pepperoni and peppers
            </p>
        </div>
    );
}

export default PizzaCard;
