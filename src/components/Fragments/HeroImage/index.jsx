import { motion } from "framer-motion"

const HeroImage = () => {
    return (
        <div className="relative flex justify-center items-center w-full md:max-w-1/2">
            <motion.img
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                src="/blob1.svg" alt="" className="absolute -top-14 left-[55%] -translate-x-1/2 w-80 -z-10 lg:w-[24rem]" />
            <div className="">
                <motion.img
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    src="/naufal-image.png" alt="" className="w-80 lg:w-[25rem] xl:w-[27.5rem]" />
                <div
                    className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-b from-transparent to-background">
                </div>
            </div>
        </div>
    );
}

export default HeroImage;