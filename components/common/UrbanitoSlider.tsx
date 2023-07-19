"use client";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Slider from "react-slick";
import UrabanitoProductCard from "./UrabanitoProductCard";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const UrbanitoSlider = () => {
    const a = [1, 2, 3, 4, 5];
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className='flex items-center'
                onClick={onClick}
            ><AiFillCaretLeft />
            </div>
        );
    }

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className='flex items-center'
                onClick={onClick}
            ><AiFillCaretRight />
            </div>
        );
    }
    var settings = {
        customPaging: () => {
            return (
                <div>.</div>
            )
        },
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        autoplay: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider className='flex flex-row'  {...settings}>
            {
                a.map((i) => (
                    <div>
                        <UrabanitoProductCard />
                    </div>
                ))
            }
        </Slider>
    )
}

export default UrbanitoSlider;