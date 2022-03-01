import React, { useState } from 'react';
import styles from '../styles/Featured.module.css';
import Image from 'react/image';

const Featured = () => {

    const [index, setIndex] = useState(0);

    const images = [
        '../public/img/pizza.png',
        '../public/img/pizza.png',
        '../public/img/pizza.png'
    ]

    const handleArrow = (direction) => {
        if(direction === 'l'){
            setIndex(index !== 0 ? index -1 : images.length -1)
        }

        if(direction === 'r'){
            setIndex(index !== images.length -1 ? index + 1 : 0)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}} onClick={() => handleArrow('l')}>
                <Image src='../public/img/arrowl.png' alt='arrow left' layout='fill' />
            </div>
            <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}} >
                <div className={styles.imgContainer}>
                    {images.map((img, i) =>
                        <div className={styles.imgContainer} key={i}>
                            <Image src={img} alt='featured pizza' layout='fill' objectFit='contain' />
                        </div>)
                    }
                </div>
            </div> 
            <div className={styles.arrowContainer} style={{right:0}} onClick={() => handleArrow('r')}>
                <Image src='../public/img/arrowr.png' alt='arrow right' layout='fill'/>
            </div>
        </div>
    );
}

export default Featured;
