import { motion, useScroll, useTransform } from "framer-motion";
import Backdrop from "../Backdrop";
import styles from './style.module.scss'
import Image from 'next/image';
import { useMediaQuery } from "react-responsive";


import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css'
import { useRef, useState } from "react";


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




const Modal = ({ handleClose, imSrc, i, progress, range, targ, isCarousel, rgbColor, desc }) => {

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    
    if (!progress) progress = scrollYProgress;
    if (!range) range = [0,1];
    if (!i) i = 0;

    const isMobile = useMediaQuery({ query: '(max-width: 720px)' });

    var scale = useTransform(progress, range, [1, targ]);

    const [descOpen, setDescOpen] = useState(false);

    const openDesc = () => {
        setDescOpen(true);

        var desc = document.getElementById("caption-" + i);

        desc.style.opacity = 1;
        desc.style.backgroundColor = "rgba(135, 130, 132, 0.95)";
        desc.style.width = "100vw";
        desc.style.height = "100vh";
        desc.style.position = "absolute";
        desc.style.color = "#000000";
        desc.style.zIndex = "1";
        desc.style.overflow = "scroll";


    }

    const closeDesc = () => {
        setDescOpen(false);



        var desc = document.getElementById("caption-" + i);

        desc.style.opacity = 0;
        desc.style.zIndex = "0";


    }


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
                        <motion.div id="carousel-container">
                            <AwesomeSlider
                                style={{ height: "100%" }}
                                bullets={false}
                                infinite={true}
                            >
                                {
                                    imSrc.map((img, index) => {
                                        return (

                                            <motion.div key={index} onClick={descOpen ? closeDesc : openDesc}>
                                                <Image
                                                    fill={true}
                                                    id={`artPiece-${i}`}
                                                    alt="im"
                                                    src={`/images/${img}`}
                                                    placeholder="blur"
                                                    blurDataURL={rgbColor}

                                                />

                                            </motion.div>

                                        )

                                    })
                                }
                            </AwesomeSlider>
                            <motion.div
                                className={styles.caption}
                                style={{ opacity: 0 }}

                                id={`caption-${i}`}
                            >
                                {desc}

                            </motion.div>
                        </motion.div>
                        :
                        <motion.div onClick={descOpen ? closeDesc : openDesc}>
                            <Image
                                fill
                                src={`/images/${imSrc[[0]]}`}
                                alt="im"

                                style={{ top: `calc(-5vh + ${i * 25}px)` }}
                            />
                            <motion.div
                                className={styles.caption}
                                style={{ opacity: 0 }}
                                id={`caption-${i}`}

                            >
                                {desc}
                            </motion.div>
                        </motion.div>
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

                    onClick={handleClose}
                    style={{ top: `calc(-5vh + ${i * 25}px)` }}
                />

            </motion.div>
    );
};

export default Modal;
