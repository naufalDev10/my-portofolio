import { Link } from "react-router-dom";
import Button from "../components/Elements/Button";
import {
    BsInstagram,
    BsGithub,
    BsEnvelopeAt,
    BsLinkedin,
} from "react-icons/bs";
import { motion } from "framer-motion"

const MotionButton = motion.create(Button)
const MotionLink = motion.create(Link)

export default function Home() {
    return (
        <div className="flex flex-col gap-10 px-[9%] w-full max-w-[1440px] h-screen md:items-center md:gap-8 lg:flex-row lg:h-auto lg:pt-24 xl:h-screen xl:pt-0">
            <div className="w-full mt-24 md:w-full md:mt-28">
                <motion.h2
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-semibold text-center text-2xl text-white md:text-center md:text-4xl lg:text-left">
                    Naufal Ahmad Junaedi
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="inline-block w-full text-center text-4xl my-2 font-semibold text-white md:text-center md:text-6xl md:my-4 lg:text-left">
                    Web <span className="text-primaryGreen">Developer</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                    className="text-white text-center md:text-center md:text-xl lg:text-left">
                    I am Informatics student from Digital Technology University Bandung.
                </motion.p>
                <MotionButton
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                    className="block mx-auto my-5 font-semibold bg-primaryGreen h-9 rounded-md w-[150px] cursor-pointer md:mx-auto lg:mx-0"
                >
                    Download CV
                </MotionButton>
                <div className="flex justify-center items-center gap-6 mt-8 md:justify-center lg:justify-start">
                    <MotionLink
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2, ease: "easeOut" }}
                        to=""
                        className="text-white text-2xl hover:text-primaryGreen duration-500"
                    >
                        <BsInstagram />
                    </MotionLink>
                    <MotionLink
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
                        to=""
                        className="text-white text-2xl hover:text-primaryGreen duration-500"
                    >
                        <BsGithub />
                    </MotionLink>
                    <MotionLink
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2.4, ease: "easeOut" }}
                        to=""
                        className="text-white text-2xl hover:text-primaryGreen duration-500"
                    >
                        <BsEnvelopeAt />
                    </MotionLink>
                    <MotionLink
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2.6, ease: "easeOut" }}
                        to=""
                        className="text-white text-2xl hover:text-primaryGreen duration-500"
                    >
                        <BsLinkedin />
                    </MotionLink>
                </div>
            </div>
            <div className="relative flex justify-center items-center lg:h-full xl:h-full">
                <motion.img
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                    src="/blob1.svg"
                    alt="blob"
                    className="absolute -top-16 left-[5%] translate-1.5 -z-10 md:-top-16 xl:top-8"
                />
                <div className=" flex justify-center xl:h-full xl:items-end">
                    <motion.img
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
                        src="/naufal-image.png" alt="image" className="md:w-[29.5rem] lg:w-[43rem] xl:w-[50rem]" />
                </div>
            </div>
        </div >
    );
}
