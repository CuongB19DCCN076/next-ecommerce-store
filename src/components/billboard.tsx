/* eslint-disable @next/next/no-img-element */
"use client"
import { Billboard as BillboardType } from "@/types"
import Slider from "react-slick";
import { TypeAnimation } from 'react-type-animation';
interface BillboardProps {
    data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div className="p-4 rounded-xl overflow-hidden sm:p-6 lg:p-8">
            {/* <Slider {...settings}> */}
            <div className="rounded-xl relative aspect-square overflow-hidden bg-cover md:aspect-[2.4/1]">
                {// eslint-disable-next-line @next/next/no-img-element
                }
                <img src={data?.imageUrl} alt={data?.label} className="w-full h-full object-cover rounded-xl" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-red-500">
                        <TypeAnimation
                            sequence={[
                                'Chào tháng mới khuyến mãi cực lớn',
                                1000,
                                'Giảm tới 30% cho các sản phẩm giày',
                                1000,
                                'Và 40% cho các sản phẩm quần áo',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                        {/* {data?.label} */}
                    </div>
                </div>
            </div>
            {/* <div className="rounded-xl relative aspect-square overflow-hidden bg-cover md:aspect-[2.4/1]">
                    {// eslint-disable-next-line @next/next/no-img-element
                    }
                    <img src={data?.imageUrl} alt={data?.label} className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-y-8">
                        <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-red-500">
                            {data?.label}
                        </div>
                    </div>
                </div> */}
            {/* </Slider> */}
        </div>
    )
}

export default Billboard
