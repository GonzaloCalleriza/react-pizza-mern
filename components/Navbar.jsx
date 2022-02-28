import Image from 'next/image';
import React from 'react';
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.button} >
                    <Image src='/public/img/telephone.png' alt='telephone' width='32' height='32' />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Order Now!</div>
                    <div className={styles.text}>012 345 678</div>
                </div>
            </div>
            <div className={styles.item}>
                
            </div>
            <div className={styles.item}>
                
            </div>
        </div>
    );
}

export default Navbar;
