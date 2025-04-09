import Hero from "../components/Layouts/Hero";
import { motion } from "framer-motion"


const Home = () => {
    return (
        <>
            <Hero />
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex justify-between items-center w-full pt-32 px-[7%] max-w-[1440px] xl:h-screen  xl:pt-0">
                    <div className="hidden md:relative md:block md:max-w-1/2">
                        <motion.img
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{ once: false }}
                            src="/naufal-foto2.png" alt="image" className="md:w-52 md:bg-darkGray xl:w-72" />
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            viewport={{ once: false }}
                            className="md:absolute md:top-[7%] md:left-[10%] md:w-52 md:h-[17rem] md:border-4 md:border-primaryGreen md:-z-10 xl:w-[19rem] xl:h-[23rem]"></motion.div>
                    </div>
                    <div className="md:max-w-1/2">
                        <div className="">
                            <motion.h2
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
                                viewport={{ once: false }}
                                className="inline-block mb-3 text-white font-semibold text-xl xl:text-2xl">Tentang <span className="text-primaryGreen">Saya</span></motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
                                viewport={{ once: false }}
                                className="inline-block mb-2 text-white xl:text-md">Saya seorang mahasiswa jurusan Informatika yang
                                memiliki ketertarikan di bidang web development. Saya senang mempelajari hal - hal baru, terutama yang berkaitan dengan dunia teknologi dan pemrograman.</motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
                                viewport={{ once: false }}
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
