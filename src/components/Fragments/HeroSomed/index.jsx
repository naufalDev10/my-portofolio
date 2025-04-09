import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    BsInstagram,
    BsGithub,
    BsEnvelopeAt,
    BsLinkedin,
    BsLink,
} from "react-icons/bs";

const MotionLink = motion.create(Link);

const HeroSosmed = () => {
    return (
        <div className="flex justify-center items-center gap-5 mt-6 md:justify-start">
            <MotionLink
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                to="" className="text-white text-2xl hover:text-primaryGreen">
                <BsInstagram />
            </MotionLink>
            <MotionLink
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3 }}
                to="" className="text-white text-2xl hover:text-primaryGreen">
                <BsGithub />
            </MotionLink>
            <MotionLink
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3.5 }}
                to="" className="text-white text-2xl hover:text-primaryGreen">
                <BsEnvelopeAt />
            </MotionLink>
            <MotionLink
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 4 }}
                to="" className="text-white text-2xl hover:text-primaryGreen">
                <BsLinkedin />
            </MotionLink>
        </div>
    );
}

export default HeroSosmed;