import Image from 'next/image';
const Carousel = () => {
    const images = [
        '/one.jpg',
        '/two.jpg',
        '/three.jpg',
    ];
    const Images = [
        '/card.jpg'
        ,
        '/ram.jpg',
        '/chutkale.jpg']

    return (
        <div className=" flex w-screen max-h-[150px] min-h-[150px]  sm:max-h-fit sm:min-h-[300px]  relative mt-2  justify-center rounded-xl">
            {/* Gradient Overlay */}

            {/* Image Carousel */}
            <div className="hidden sm:absolute pointer-events-none top-0 left-0 w-1/3 opacity-50 min-h-full  z-10 bg-gradient-to-r from-stone-800 via-transparent to-transparent"></div>
            <div className=" hidden sm:absolute pointer-events-none top-0 right-0 w-1/3 opacity-50 h-full z-10 bg-gradient-to-r from-transparent to-stone-700"></div>
            <div
                className={`w-full hidden   remove-scrollbar snap-x h-[330px] relative overflow-auto  px-1 sm:flex gap-2 scroll-smooth`}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-[400px] snap-center min-w-[400px] md:w-[800px] md:min-w-[800px] lg:w-[1100px] lg:min-w-[1100px] h-[250px] md:h-[300px] relative"
                    >
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            fill

                            className="rounded-lg   "

                        />
                    </div>
                ))}
            </div>
            <div
                className={`w-full sm:hidden  remove-scrollbar snap-x h-[250px] min-h-[250px]  max-h-[251px]  bg-red-500relative overflow-auto  px-1 flex gap-2 scroll-smooth`}
            >
                {Images.map((image, index) => (
                    <div
                        key={index}
                        className="w-[250px] min-w-[250px] h-[150px] max-h-[150px ] snap-center relative"
                    >
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            fill

                            className="rounded-lg   "

                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
