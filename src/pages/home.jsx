import { Link } from "react-router-dom";
import Button from "../components/Elements/Button";
import {
    BsInstagram,
    BsGithub,
    BsEnvelopeAt,
    BsLinkedin,
} from "react-icons/bs";

export default function Home() {
    return (
        <div className="flex flex-col gap-10 px-[9%] w-full max-w-[1440px] h-screen md:items-center md:gap-8 lg:flex-row lg:h-auto lg:pt-24 xl:h-screen xl:pt-0">
            <div className="w-full mt-24 md:w-full md:mt-28">
                <h2 className="font-semibold text-center text-2xl text-white md:text-center md:text-4xl lg:text-left">
                    Naufal Ahmad Junaedi
                </h2>
                <h1 className="inline-block w-full text-center text-4xl my-2 font-semibold text-white md:text-center md:text-6xl md:my-4 lg:text-left">
                    Web <span className="text-primaryGreen">Developer</span>
                </h1>
                <p className="text-white text-center md:text-center md:text-xl lg:text-left">
                    I am student from Digital Technology University Bandung.
                </p>
                <Button variantButton="block mx-auto my-5 font-semibold bg-primaryGreen h-9 rounded-md w-[150px] cursor-pointer md:mx-auto lg:mx-0">
                    Download CV
                </Button>
                <div className="flex justify-center items-center gap-6 mt-8 md:justify-center lg:justify-start">
                    <Link
                        to=""
                        className="text-white text-2xl hover:text-primaryGreen duration-500"
                    >
                        <BsInstagram />
                    </Link>
                    <Link
                        to=""
                        className="text-white text-2xl hover:text-primaryGreen duration-500"
                    >
                        <BsGithub />
                    </Link>
                    <Link
                        to=""
                        className="text-white text-2xl hover:text-primaryGreen duration-500"
                    >
                        <BsEnvelopeAt />
                    </Link>
                    <Link
                        to=""
                        className="text-white text-2xl hover:text-primaryGreen duration-500"
                    >
                        <BsLinkedin />
                    </Link>
                </div>
            </div>
            <div className="relative flex justify-center lg:h-full lg:items-end">
                <img
                    src="/blob1.svg"
                    alt="blob"
                    className="absolute -top-16 left-[5%] translate-1.5 -z-10 md:-top-16 xl:top-8"
                />
                <img src="/naufal-image.png" alt="image" className="md:w-[29.5rem] lg:w-[40rem] xl:w-[50rem]" />
            </div>
        </div>
    );
}
