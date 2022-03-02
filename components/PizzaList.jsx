import React from 'react';
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzaList }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                Founded in 1955, we sell the best pizza in the trystate area

            </p>
            <div className={styles.wrapper}>
                {pizzaList.map((pizza) => (
                    <PizzaCard pizza={pizza} key={pizza._id} />
                ))}
            </div>
        </div>
    );
}

export default PizzaList;
