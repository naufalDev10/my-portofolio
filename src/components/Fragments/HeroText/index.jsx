import Button from "../../Elements/Button";
import { motion } from "framer-motion";


const HeroText = ({ children }) => {
    return (
        <div className="w-full md:max-w-1/2">
            <motion.h3
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-white text-center text-lg font-medium md:text-left lg:text-3xl">Hello, <span className="text-primaryGreen">Saya</span></motion.h3>
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-white text-center text-xl font-medium md:text-left md:inline-block md:my-1 lg:text-4xl">Naufal Ahmad Junaedi</motion.h2>
            <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-white text-center text-2xl font-medium md:text-left lg:text-5xl">
                Mahasiswa <span className="text-primaryGreen">Informatika</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="text-white text-center md:text-left md:my-1 lg:text-md">Saya adalah seorang mahasiswa jurusan S1 Informatika yang memiliki ketertarikan dibidang full-stack developer dan teknologi.</motion.p>
            <a
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                href="/Naufal_CV.pdf"
                download="Naufal_CV.pdf"
                className="flex justify-center items-center font-semibold mt-4 mx-auto w-36 h-9 bg-primaryGreen px-3 rounded-sm cursor-pointer md:mx-0">
                Download CV
            </a>
            {children}
        </div>
    );
}

export default HeroText;