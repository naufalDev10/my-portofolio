import HeroImage from "../../Fragments/HeroImage";
import HeroSosmed from "../../Fragments/HeroSomed";
import HeroText from "../../Fragments/HeroText";


const Hero = () => {
    return (
        <div className="flex justify-center items-center w-full pt-24 md:pt-20 lg:pt-20 lg:h-auto xl:h-screen">
            <div className="flex flex-col justify-between items-center gap-20 w-full max-w-[1440px] px-[7%] md:flex-row md:gap-0">
                <HeroText>
                    <HeroSosmed />
                </HeroText>
                <HeroImage />
            </div>
        </div>
    );
};

export default Hero;
