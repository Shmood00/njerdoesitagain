'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll, AnimatePresence, useAnimationControls, stagger } from 'framer-motion';
import { useRef, useState } from 'react';
import Modal from '../Modal'
import { useMediaQuery } from 'react-responsive';


const Card = ({ i, title, description, src, color, rgbColor, progress, range, targetScale, linearGradient }) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })


    const imageScale = useTransform(scrollYProgress, [0, 1], [4, 1]);


    const scale = useTransform(progress, range, [1, targetScale]);

    const [modalOpen, setModalOpen] = useState(false);

    const isMobile = useMediaQuery({ query: '(max-width: 720px)' });



    const settings = {
        normal: {
            left: 0,
            x: 0,
            scale: scale.current,
            transformPerspective: "1500px",
        },

        move: {
            width: "100vw",
            height: "100vh",
            //top: 120,
            borderRadius: "0px 0px 0px 0px",
            backgroundColor: "#000000",
            color: "#ffffff"
        },

        exit: {
            width: "1000px",
            height: "500px",
            top: `calc(-5vh + ${i * 25}px)`,
            borderRadius: "25px 25px 25px 25px",
            backgroundColor: color,
            color: "#000000"
        },


    }


    const animateTitle = {
        slideLeft: {
            textAlign: "left",
            width: "30%"
        },

        slideBack: {
            textAlign: "center",
            width: "100%"
        },


    }

    const animateDescription = {
        changeDescWidth: {
            width: "20%"
        },

        descWidth: {
            width: "40%"
        }
    }


    const imContainer = {
        removeBorders: {
            borderRadius: 0,
        },

        addBorders: {
            borderRadius: "25px 25px 25px 25px"
        }
    }

    const overallBody = {
        modify: {
            marginTop: 0,
            display: "flex",
            flexDirection: isMobile ? "column" : "unset"
        },

        back: {
            marginTop: "50px",
            display: "flex",
            flexDirection: "unset"
        }
    }

    const cardContainerDisplay = {
        display: {
            position: "relative",
            zIndex: 1
        },

        revert: {
            position: "sticky",
            zIndex: 0
        }
    }


    const controls = useAnimationControls();
    const newControl = useAnimationControls();
    const controlDescription = useAnimationControls();
    const imContainerAnimation = useAnimationControls();
    const bodyAnimate = useAnimationControls();
    const cardContainerAnimate = useAnimationControls();

    const close = () => {

        var nav = document.getElementById("nav-container");
        var artPiece = document.getElementById("artPiece-" + i);


        setModalOpen(false);

        controls.start('exit');

        newControl.start('slideBack');

        controlDescription.start("descWidth");

        imContainerAnimation.start("addBorders");

        bodyAnimate.start("back");

        cardContainerAnimate.start("revert");

        artPiece.style.objectFit = "cover";



        if (isMobile) {
            nav.style.zIndex = "1";
        }


    }

    const open = () => {

        var nav = document.getElementById("nav-container");
        var artPiece = document.getElementById("artPiece-" + i);

        controls.start('move');

        
        newControl.start("slideLeft");

        controlDescription.start("changeDescWidth");

        imContainerAnimation.start("removeBorders");

        bodyAnimate.start("modify")

        cardContainerAnimate.start("display");


        artPiece.style.objectFit = "contain";



        setModalOpen(true);

        if (isMobile) {
            nav.style.zIndex = "0";
        }


    };


    return (

        <AnimatePresence
            initial={false}
            onExitComplete={() => null}
        >
            <motion.div
                ref={container}
                className={styles.cardContainer}
                id={`cardContainer-${i}`}
                variants={cardContainerDisplay}
                animate={cardContainerAnimate}

            >
                <motion.div
                    style={{ scale, top: `calc(-5vh + ${i * 25}px)`, backgroundColor: color }}
                    className={styles.card}
                    id="cardMain"
                    variants={settings}
                    initial="normal"
                    animate={controls}
                    exit="exit"
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    whileHover={{ transformPerspective: "3000px", rotateX: 2, translateY: -20 }}


                >
                    <motion.h2

                        variants={animateTitle}
                        animate={newControl}

                    >
                        {title}
                    </motion.h2>
                    <motion.div
                        className={styles.body}
                        variants={overallBody}
                        animate={bodyAnimate}
                        id="cardBody"
                    >
                        <motion.div className={styles.description} id="imgDescription"
                            variants={animateDescription}
                            animate={controlDescription}
                        >
                            <p>{description}</p>
                        </motion.div>

                        <motion.div
                            id={i}
                            className={styles.imageContainer}
                            onClick={() => (modalOpen ? close() : open())}
                            variants={imContainer}
                            animate={imContainerAnimation}
                        >

                            <motion.div
                                className={styles.inner}
                                id="imgInner"
                                style={{ scale: imageScale, opacity: 1 }}
                                whileHover={{ opacity: 0.93 }}
                                

                            >
                                <Image
                                    id={`artPiece-${i}`}
                                    fill={true}
                                    src={`/images/${src}`}
                                    alt="image"
                                    placeholder="blur"
                                    blurDataURL={rgbColor}

                                />
                            </motion.div>
                        </motion.div>

                    </motion.div>

                </motion.div>

                {(isMobile && modalOpen) && <Modal modalOpen={modalOpen} handleClose={close} imSrc={src} i={i} progress={progress} range={range} targ={targetScale} />}


            </motion.div>


        </AnimatePresence>
    )
}

export default Card