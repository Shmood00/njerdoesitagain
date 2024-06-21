'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll, AnimatePresence, useAnimationControls } from 'framer-motion';
import { useRef, useState } from 'react';
import Modal from '../Modal'
import { useMediaQuery } from 'react-responsive';


import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/open-animation.css'


const Card = ({ i, title, description, src, color, rgbColor, progress, range, targetScale, carousel }) => {


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
            width: "30%",
            paddingTop: "50px",
            top: "0",
            position: "sticky"
        },

        slideBack: {
            textAlign: "center",
            width: "100%",
            paddingTop: "0px"
        },


    }

    const animateDescription = {
        changeDescWidth: {
            width: "20%",
            paddingTop: "80px",
            top: "0",
            position: "sticky",
            alignSelf: "flex-start",
            height: "auto"

        },

        descWidth: {
            width: "40%",
            paddingTop: "0",
            position: "relative",
            alignSelf: "unset"
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

    const imgInnerSettings = {
        resize: {
            width: "80%",
            height: "100%"
        },

        exit: {
            width: "100%",
            height: "100%"
        }
    }

    const h3Animate = {
        normal: {
            opacity: 0,
        },

        animateh3: {
            opacity: 1,
            color: "#ffffff"
        }
    }

    const controls = useAnimationControls();
    const triggerTitleAnimation = useAnimationControls();
    const controlDescription = useAnimationControls();
    const imContainerAnimation = useAnimationControls();
    const bodyAnimate = useAnimationControls();
    const cardContainerAnimate = useAnimationControls();
    const imgInnerAnimate = useAnimationControls();
    const triggerh3 = useAnimationControls();

    const close = () => {

        var nav = document.getElementById("nav-container");
        var artPiece = document.getElementById("artPiece-" + i);


        setModalOpen(false);

        controls.start('exit');

        triggerTitleAnimation.start('slideBack');

        controlDescription.start("descWidth");

        imContainerAnimation.start("addBorders");

        bodyAnimate.start("back");

        cardContainerAnimate.start("revert");

        imgInnerAnimate.start("exit");

        triggerh3.start("normal");

        artPiece.style.objectFit = "cover";



        if (isMobile) {
            nav.style.zIndex = "1";
        }


    }

    const open = () => {

        var nav = document.getElementById("nav-container");
        var artPiece = document.getElementById("artPiece-" + i);

        controls.start('move');


        triggerTitleAnimation.start("slideLeft");

        controlDescription.start("changeDescWidth");

        imContainerAnimation.start("removeBorders");

        bodyAnimate.start("modify")

        cardContainerAnimate.start("display");

        imgInnerAnimate.start("resize");

        triggerh3.start("animateh3");


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
                        animate={triggerTitleAnimation}


                    >
                        {title}
                    </motion.h2>
                    {(carousel && modalOpen) ?
                        <motion.h3
                            variants={h3Animate}
                            animate={triggerh3}
                            initial="normal"

                            onClick={() => close()}
                            whileHover={{ fontStyle: "italic", cursor: "pointer" }}
                        >
                            &times;
                        </motion.h3>
                        :
                        null
                    }
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
                            onClick={() => ((!carousel && modalOpen) ? close() : open())}
                            variants={imContainer}
                            animate={imContainerAnimation}
                        >

                            <motion.div
                                className={styles.inner}
                                id="imgInner"
                                style={{ scale: imageScale, opacity: 1 }}
                                whileHover={{ opacity: 0.93 }}
                                variants={imgInnerSettings}
                                animate={imgInnerAnimate}

                            >

                                {carousel ?

                                    <AwesomeSlider
                                        style={{ height: "100%" }}
                                        bullets={false}
                                        infinite={true}
                                        fillParent={true}
                                        animation='openAnimation'
                                        
                                    >
                                        {
                                            src.map((img, index) => {
                                                return (

                                                    <div key={index}>
                                                        <Image

                                                            fill={true}
                                                            id={`artPiece-${i}`}
                                                            src={`/images/${img}`}
                                                            placeholder='blur'
                                                            blurDataURL={rgbColor}

                                                        />
                                                    </div>

                                                )

                                            })
                                        }

                                    </AwesomeSlider>



                                    : <Image
                                        id={`artPiece-${i}`}
                                        fill={true}
                                        src={`/images/${src[0]}`}
                                        alt="image"
                                        placeholder="blur"
                                        blurDataURL={rgbColor}


                                    />

                                }

                            </motion.div>
                        </motion.div>

                    </motion.div>

                </motion.div>

                {(isMobile && modalOpen) && <Modal modalOpen={modalOpen} handleClose={close} imSrc={src} i={i} progress={progress} range={range} targ={targetScale} isCarousel={carousel} rgbColor={rgbColor}/>}


            </motion.div>


        </AnimatePresence>
    )
}

export default Card