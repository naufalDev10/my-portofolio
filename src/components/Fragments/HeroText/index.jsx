import Button from "../../Elements/Button";
import { motion } from "framer-motion";

const MotionButton = motion.create(Button);

const HeroText = ({ children }) => {
    return (
        <div className="w-full md:max-w-1/2 md:px-[7%]">
            <motion.h3
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-white text-center text-lg font-medium md:text-left lg:text-2xl">Hello, <span className="text-primaryGreen">Saya</span></motion.h3>
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-white text-center text-xl font-medium md:text-left md:inline-block md:my-1 lg:text-3xl">Naufal Ahmad Junaedi</motion.h2>
            <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-white text-center text-2xl font-medium md:text-left lg:text-4xl">
                Mahasiswa <span className="text-primaryGreen">Informatika</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="text-white text-center md:text-left md:my-1 lg:text-md">Saya adalah seorang mahasiswa yang memiliki ketertarikan di bidang web dan mobile development.</motion.p>
            <MotionButton
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className="block font-semibold mt-4 mx-auto h-9 bg-primaryGreen px-3 rounded-sm cursor-pointer md:mx-0">
                Download CV
            </MotionButton>
            {children}
        </div>
    );
}

export default HeroText;