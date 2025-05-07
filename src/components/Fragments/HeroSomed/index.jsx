import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    BsInstagram,
    BsGithub,
    BsEnvelopeAt,
    BsLinkedin,
} from "react-icons/bs";

const MotionLink = motion.create(Link);

const HeroSosmed = () => {
    return (
        <div className="flex justify-center items-center gap-5 mt-6 md:justify-start">
            <MotionLink
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                to="https://www.instagram.com/nflahmddd" className="text-white text-2xl hover:text-primaryGreen">
                <BsInstagram />
            </MotionLink>
            <MotionLink
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3 }}
                to="https://github.com/naufalDev10" className="text-white text-2xl hover:text-primaryGreen">
                <BsGithub />
            </MotionLink>
            <motion.a
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3.5 }}
                href="mailto:naufalahmadjunaedi10@gmail.com" className="text-white text-2xl hover:text-primaryGreen">
                <BsEnvelopeAt />
            </motion.a>
            <MotionLink
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 4 }}
                to="https://www.linkedin.com/in/naufal-ahmad-junaedi-056271343" className="text-white text-2xl hover:text-primaryGreen">
                <BsLinkedin />
            </MotionLink>
        </div>
    );
}

export default HeroSosmed;