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
                    <div className="flex flex-col gap-2 px-3 xl:gap-3">
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-white text-xl text-center font-medium md:text-left lg:text-2xl xl:text-3xl">
                            Hello, <span className="text-primaryGreen">I Am</span>
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
                            className="text-white text-3xl text-center font-medium md:text-left lg:text-4xl xl:text-5xl">Informatics <span className="text-primaryGreen">Student</span></motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                            className="text-white text-center font-light md:text-left lg:text-md">I am Informatics student from Digital Technology University Bandung</motion.p>
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
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                            src="/blob1.svg" alt="" className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 -z-10  md:-top-14 md:w-[25rem]" />
                        <div className="relative">
                            <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                                src="/naufal-image.png" alt="" className="w-[20rem] md:w-[25rem] lg:w-[28rem]" />
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-b from-transparent to-background"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
