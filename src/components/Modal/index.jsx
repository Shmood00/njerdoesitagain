import { motion, useTransform } from "framer-motion";
import Backdrop from "../Backdrop";
import styles from './style.module.scss'
import Image from 'next/image';
import { useMediaQuery } from "react-responsive";


import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css'


const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 50,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0
    },
};


const Modal = ({ handleClose, imSrc, i, progress, range, targ, isCarousel, rgbColor }) => {

    const isMobile = useMediaQuery({ query: '(max-width: 720px)' });

    const scale = useTransform(progress, range, [1, targ]);

    return (
        isMobile ?
            <Backdrop onClick={handleClose}>
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className={styles.modal}
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"

                >

                    {isCarousel ?
                        <AwesomeSlider
                            style={{height: "100%"}}
                            bullets={false}
                            infinite={true}
                        >
                            {
                                imSrc.map((img, index) => {
                                    return (

                                        <div key={index}>
                                            <Image
                                                fill={true}
                                                id={`artPiece-${i}`}
                                                alt="im"
                                                src={`/images/${img}`}
                                                placeholder="blur"
                                                blurDataURL={rgbColor}

                                            />
                                        </div>

                                    )

                                })
                            }
                        </AwesomeSlider>
                        :
                        <Image
                            fill
                            src={`/images/${imSrc[[0]]}`}
                            alt="im"
                            
                            onClick={handleClose}
                            style={{ top: `calc(-5vh + ${i * 25}px)` }}
                        />
                    }
                    <span className={styles.close} onClick={handleClose}>
                        &times;
                    </span>
                </motion.div>
            </Backdrop>
            :
            <motion.div
                onClick={(e) => e.stopPropagation()}
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className={styles.modal}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"

            >

                <Image
                    fill
                    src={`/images/${imSrc[0]}`}
                    alt="im"
                    //placeholder="blur"
                    //blurDataURL={`/images/${imSrc}`}
                    onClick={handleClose}
                    style={{ top: `calc(-5vh + ${i * 25}px)` }}
                />

            </motion.div>
    );
};

export default Modal;
