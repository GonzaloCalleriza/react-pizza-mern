import React, { useState } from 'react';
import styles from '../styles/OrderDetail.module.css';

const OrderDetail = ({ total, createOrder }) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleClick = () => {
        createOrder({ customer, address, total, method: 0 })
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>You will pay ${total} after delivery</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Name and Surname</label>
                    <input placeholder='John Doe' type='text' className={styles.input} onChange={(e) => setName=(e.target.value) }/>
                </div> 
                <div className={styles.item}>
                    <label className={styles.label}>Phone number</label>
                    <input placeholder='+1 234 567 89' type='text' className={styles.input} onChange={(e) => setPhoneNumber=(e.target.value) }/>
                </div> 
                <div className={styles.item}>
                    <label className={styles.label}>Address</label>
                    <input placeholder='John Doe' type='text' className={styles.input} onChange={(e) => setAddress=(e.target.value) }/>
                </div> 
                <button className={styles.button} onClick={handleClick}>Order</button>
            </div>
            
        </div>
    );
}

export default OrderDetail;
