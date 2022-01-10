
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
const Banner = () => {
    return ( 
        <div className="flex align-center justify-center lg:rounded-3xl h-[300px]  my-5 overflow-hidden lg:mx-10 sm:mt-0">
            <Carousel interval={3} showIndicators={true} infiniteLoop={true} >
                <div className="flex-1 w-96 h-[300px]">
                    <Image src="/images/banner/image3.jpg" objectFit="inherit" layout="fill"/>
                </div>
                <div className="flex-1 w-96 h-[300px]">
                    <Image src="/images/banner/image2.jpg" objectFit="inherit" layout="fill"/>
                </div>
                <div className="flex-1 w-96 h-[300px]">
                    <Image src="/images/banner/img1.jfif" objectFit="inherit" layout="fill"/>
                </div>
            </Carousel>
        </div>
     );
}
 
export default Banner;