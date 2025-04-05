import { Link } from "react-router-dom"
import Button from "../components/Elements/Button"
import { BsInstagram, BsGithub, BsEnvelopeAt, BsLinkedin } from "react-icons/bs";

export default function Home() {
    return (
        <div className="flex flex-col gap-4 px-[9%] w-full h-screen md:flex-row md:justify-between md:items-center">
            <div className="w-full mt-24 md:max-w-1/2">
                <h2 className="font-semibold text-center text-2xl text-white md:text-left md:text-4xl">Naufal Ahmad Junaedi</h2>
                <h1 className="inline-block w-full text-center text-4xl my-2 font-semibold text-white md:text-left md:text-6xl md:my-3">Web <span className="text-primaryGreen">Developer</span></h1>
                <p className="text-white text-center md:text-left md:text-xl">I am student from Digital Technology University Bandung.</p>
                <Button variantButton="block mx-auto my-5 font-semibold bg-primaryGreen h-9 rounded-md w-[150px] cursor-pointer md:mx-0">
                    Download CV
                </Button>
                <div className="flex justify-center items-center gap-6 mt-8 md:justify-start">
                    <Link to="" className="text-white text-2xl hover:text-primaryGreen duration-500"><BsInstagram /></Link>
                    <Link to="" className="text-white text-2xl hover:text-primaryGreen duration-500"><BsGithub /></Link>
                    <Link to="" className="text-white text-2xl hover:text-primaryGreen duration-500"><BsEnvelopeAt /></Link>
                    <Link to="" className="text-white text-2xl hover:text-primaryGreen duration-500"><BsLinkedin /></Link>
                </div>
            </div>
            <div className="relative flex justify-center md:h-full  md:items-end">
                <img src="/blob1.svg" alt="blob" className="absolute top-[6%] left-[5%] translate-1.5 -z-10" />
                <img src="/naufal-image.png" alt="image" className="w-[29.5rem]" />
            </div>
        </div >
    )
}
