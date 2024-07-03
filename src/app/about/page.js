'use client'

import styles from './style.module.scss'
import Image from 'next/image'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Modal from '@/components/Modal';

export default function About() {

    const [modalOpen, setModalOpen] = useState(false);

    const isMobile = useMediaQuery({ query: '(max-width: 720px)' });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <></>

    const close = () => {

        setModalOpen(false);

        var nav = document.getElementById("nav-container");
        if (isMobile) {
            nav.style.zIndex = "1";
        }

    }

    const open = () => {

        setModalOpen(true);

        var nav = document.getElementById("nav-container");
        if (isMobile) {
            nav.style.zIndex = "0";
        }

    }

    const desc = <>
        <div className={styles.description}>
            <p>Welcome friends!!
                Allow me to introduce myself and this website - this is <b>Njerdoesitagain</b> and I am <b>Njeri Gitau</b>, a Kenyan artist currently living in Canada. Although I formally began creating art in 2024, my passion for artistic expression has been a lifelong journey. Visual Art has consistently been my sanctuary, like a second reality for me.

                Since moving to Canada in 2019, I wanted to discover how I could pursue art more professionally. And in 2023, I tried, and applied, to an art competition in the hopes that I would win and some art connoisseur would discover me. Regardless to say, with no active portfolio or known online presence, my piece was not chosen and I did not win that competition. Nevertheless, this experience reignited a sense of purpose within me. By the end of the year, I decided that I will still put myself out there and start my own business.

                And here we are: Hi again! I’m excited that you found my page!! Allow me to share some of the types of work I specialize in:
            </p>
            <ul>
                <li><b>Acrylic and water colour work</b></li>
                <li><b>Oil painting</b></li>
                <li><b>Marker and colour pencil work</b></li>
            </ul>
            <p>
                Additionally, I find great joy in creating still life paintings and have recently ventured into abstract art. As I define my artistic niche, my current focus is on showcasing pieces of my beautiful home of Kenya, through my paintings, to the world.
                Thank you for visiting, and I look forward to sharing more of my artistic journey with you.


            </p>
            <p>
                Stick around, won’t you?
            </p>
        </div>


    </>


    return (
        <AnimatePresence
            initial={false}
            onExitComplete={() => null}
        >

            <div className={styles.container}>
                <motion.div
                    className={styles.card}
                    initial={{ transformPerspective: "1500px" }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}

                    whileHover={{
                        transformPerspective: "3000px",
                        rotateX: 2,
                        translateY: -15,

                    }}

                >
                    <h1>Hi, I&apos;m Njeri!</h1>
                    <div className={styles.body}>
                        {!isMobile ?
                            <div className={styles.description}>
                                <p>Welcome friends!!
                                    Allow me to introduce myself and this website - this is <b>Njerdoesitagain</b> and I am <b>Njeri Gitau</b>, a Kenyan artist currently living in Canada. Although I formally began creating art in 2024, my passion for artistic expression has been a lifelong journey. Visual Art has consistently been my sanctuary, like a second reality for me.

                                    Since moving to Canada in 2019, I wanted to discover how I could pursue art more professionally. And in 2023, I tried, and applied, to an art competition in the hopes that I would win and some art connoisseur would discover me. Regardless to say, with no active portfolio or known online presence, my piece was not chosen and I did not win that competition. Nevertheless, this experience reignited a sense of purpose within me. By the end of the year, I decided that I will still put myself out there and start my own business.

                                    And here we are: Hi again! I’m excited that you found my page!! Allow me to share some of the types of work I specialize in:
                                </p>
                                <ul>
                                    <li><b>Acrylic and water colour work</b></li>
                                    <li><b>Oil painting</b></li>
                                    <li><b>Marker and colour pencil work</b></li>
                                </ul>
                                <p>
                                    Additionally, I find great joy in creating still life paintings and have recently ventured into abstract art. As I define my artistic niche, my current focus is on showcasing pieces of my beautiful home of Kenya, through my paintings, to the world.
                                    Thank you for visiting, and I look forward to sharing more of my artistic journey with you.


                                </p>
                                <p>
                                    Stick around, won’t you?
                                </p>
                            </div> : null
                        }
                        <motion.div
                            className={styles.imageContainer}
                            style={isMobile ? { width: "100%" } : { width: "60%" }}
                            onClick={() => modalOpen ? close() : open()}
                        >
                            <motion.div className={styles.inner}>
                                <Image
                                    fill={true}
                                    src={`/images/me.jpg`}
                                    alt="image"
                                >

                                </Image>
                            </motion.div>

                        </motion.div>
                    </div>
                </motion.div>
            </div>
            {(isMobile && modalOpen) && <Modal modalOpen={modalOpen} handleClose={close} imSrc={['me.jpg']} desc={desc} />}
        </AnimatePresence>
    )
}
