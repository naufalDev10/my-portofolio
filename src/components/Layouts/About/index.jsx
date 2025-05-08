import { motion } from "framer-motion"

const About = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="relative flex justify-between items-center w-full pt-32 px-[7%]  max-w-[1440px] xl:h-screen  xl:pt-0">
                <About.Image />
                <div className="absolute md:relative md:max-w-1/2">
                    <About.Text />
                </div>
            </div>
        </div >
    );
}

const Image = () => {
    return (
        <div className="opacity-20 w-full flex justify-center items-center md:opacity-100 md:relative md:block md:max-w-1/2">
            <motion.img
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: false }}
                src="/naufal-foto2.png" alt="image" className="w-52 bg-darkGray md:w-52 xl:w-72" />
            <motion.div
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: false }}
                className="absolute top-[35%] left-[40%] w-48 h-72 border-4 border-primaryGreen -z-10 md:top-[7%] md:left-[10%]  md:w-52 md:h-72 xl:w-[16.5rem] xl:h-[24rem]"></motion.div>
        </div>
    )
}

const Text = () => {
    return (
        <div className="pe-4">
            <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: false }}
                className="inline-block mb-3 text-white font-semibold text-xl xl:text-2xl">Tentang <span className="text-primaryGreen">Saya</span></motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                viewport={{ once: false }}
                className="inline-block mb-2 text-white xl:text-md">Saya seorang mahasiswa jurusan Informatika yang
                memiliki ketertarikan di bidang full-stack web development. Saya senang mempelajari hal - hal baru, terutama yang berkaitan dengan dunia teknologi dan pemrograman, Terus - menerus belajar untuk meningkatkan keterampilan untuk mempersiakan diri menjadi seorang full-stack web development.</motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
                viewport={{ once: false }}
                className="text-white">Saat ini saya sedang fokus
                mengembangkan kemampuan front-end
                development dan mempertajam logika
                pemrograman untuk membangun modern website yang interaktif, resposif dan user-friendly.</motion.p>
        </div>
    )
}

About.Image = Image;
About.Text = Text;

export default About;