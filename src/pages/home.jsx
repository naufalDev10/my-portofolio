import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Elements/Button";
import {
    BsInstagram,
    BsGithub,
    BsEnvelopeAt,
    BsLinkedin,
} from "react-icons/bs";
import { motion } from "framer-motion";


const MotionButton = motion.create(Button);
const MotionLink = motion.create(Link);

const Home = () => {

    return (
        <>
            <div className="flex justify-center w-full pt-24 xl:pt-0">
                <div className="flex flex-col justify-between items-center gap-11 w-full max-w-[1440px] md:flex-row md:px-[7%] md:gap-0 xl:h-screen">
                    <div className="flex flex-col gap-2 px-3 xl:gap-3 md:max-w-1/2">
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-white text-xl text-center font-medium md:text-left lg:text-2xl xl:text-3xl">
                            Hello, <span className="text-primaryGreen">Saya</span>
                        </motion.h3>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            className="text-white text-2xl text-center font-medium md:text-left lg:text-3xl xl:text-4xl">Naufal Ahmad Junaedi</motion.h2>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                            className="text-white text-3xl text-center font-medium md:text-left lg:text-4xl xl:text-5xl">Mahasiswa <span className="text-primaryGreen">Informatika</span></motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                            className="text-white text-center font-light md:text-left lg:text-md">Saya seorang mahasiswa yang memiliki ketertarikan di bidang web development dan teknologi</motion.p>
                        <MotionButton
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 2, ease: "easeOut" }}
                            className="bg-primaryGreen font-semibold w-32 h-9 rounded-sm mt-4 mx-auto cursor-pointer md:mx-0">
                            Download CV
                        </MotionButton>
                        <div className="flex justify-center items-center gap-4 mt-4 md:justify-start md:mt-5">
                            <MotionLink
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 2, ease: "easeOut" }}
                                to="" className="text-white text-xl" >
                                <BsInstagram />
                            </MotionLink>
                            <MotionLink
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
                                to="" className="text-white text-xl" >
                                <BsGithub />
                            </MotionLink>
                            <MotionLink
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2, delay: 2, ease: "easeOut" }}
                                to="" className="text-white text-xl" >
                                <BsEnvelopeAt />
                            </MotionLink>
                            <MotionLink
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2.5, delay: 2, ease: "easeOut" }}
                                to="" className="text-white text-xl" >
                                <BsLinkedin />
                            </MotionLink>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <motion.img
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                            src="/blob1.svg" alt="" className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 -z-10  md:-top-14 md:w-[25rem]" />
                        <div className="relative">
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                                src="/naufal-image.png" alt="" className="w-[20rem] md:w-[25rem] lg:w-[30rem]" />
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-b from-transparent to-background"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full pt-28 xl:pt-0">
                <div className="flex justify-between items-center w-full px-[10%] max-w-[1440px] xl:h-screen">
                    <div className="hidden md:relative md:block md:max-w-1/2">
                        <motion.img
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            src="/naufal-foto2.png" alt="image" className="md:w-52 md:bg-darkGray xl:w-72" />
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
                            className="md:absolute md:top-[7%] md:left-[10%] md:w-52 md:h-[17rem] md:border-4 md:border-primaryGreen md:-z-10 xl:w-[19rem] xl:h-[23rem]"></motion.div>
                    </div>
                    <div className="md:max-w-1/2">
                        <div className="">
                            <motion.h2
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                                className="inline-block mb-3 text-white font-semibold text-xl xl:text-2xl">Tentang <span className="text-primaryGreen">Saya</span></motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
                                className="inline-block mb-2 text-white xl:text-md">Saya seorang mahasiswa jurusan Informatika yang
                                memiliki ketertarikan di bidang web development. Saya senang mempelajari hal - hal baru, terutama yang berkaitan dengan dunia teknologi dan pemrograman.</motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
                                className="text-white">Saat ini saya sedang fokus
                                mengembangkan kemampuan front-end
                                development dan mempertajam logika
                                pemrograman untuk membangun modern website yang interaktif, resposif dan user-friendly.</motion.p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Home;
