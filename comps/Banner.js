
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
const Banner = () => {
    return ( 
        <div className="overflow-hidden max-w-xl ">
            <Carousel interval={10000} showIndicators={true} infiniteLoop={true} autoPlay >
                <div className="flex-1 w-96 h-[300px]">
                    <Image src="/images/banner/image4.webp" objectFit="cover" layout="fill"/>
                </div>
                <div className="flex-1 w-96 h-[300px]">
                    <Image src="/images/banner/image7.jpg" objectFit="cover" layout="fill"/>
                </div>
                <div className="flex-1 w-96 h-[300px]">
                    <Image src="/images/banner/image5.webp" objectFit="cover" layout="fill"/>
                </div>
                <div className="flex-1 w-96 h-[300px]">
                    <Image src="/images/banner/image6.webp" objectFit="cover" layout="fill"/>
                </div>
                <div className="flex-1 w-96 h-[300px]">
                    <Image src="/images/banner/image3.jpg" objectFit="cover" layout="fill"/>
                </div>
                <div className="flex-1 w-96 h-[300px]">
                    <Image src="/images/banner/image1.jpg" objectFit="cover" layout="fill"/>
                </div>
            </Carousel>
        </div>
     );
}
 
export default Banner;