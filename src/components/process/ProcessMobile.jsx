import React from 'react';
import CenterImg from '../../images/process/center_img.png';
import ProcessContent from './ProcessContent';
import ProcessData from './ProcessData';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import { useState } from 'react';



const ProcessMobile = () => {

    const [riconColor, setRIconColor] = useState("text-white");
    const [riconBg, setRIconBg] = useState("rightBtnBg");
    const [liconColor, setLIconColor] = useState("text-black");
    const [liconBg, setLIconBg] = useState("leftBtnBg");

    const sliderRef = useRef(null);

    const isClickedNext = () =>{
        sliderRef.current.slickNext();
        setLIconColor("text-white");
        setLIconBg("rightBtnBg");
        setRIconColor("text-black");
        setRIconBg("leftBtnBg");

    }
    const isClickedPrev = () =>{
        sliderRef.current.slickPrev();
        setRIconColor("text-white");
        setRIconBg("rightBtnBg");
        setLIconColor("text-black");
        setLIconBg("leftBtnBg");
    }

    return (
    <div className='w-full flex flex-col justify-center items-center select-none'>
        <div 
        data-aos="fade-right"
        data-aos-duration="1500"
        className='w-[210px] xsm:w-[300px] sm:w-[400px] flex justify-center py-[30px] xsm:py-0 xsm:pt-[40px] md:pt-[60px] xsm:pb-[30px] md:pb-[40px] relative'>
            <img className='sm:w-[400px]' src={CenterImg} alt="img" />
            <div
            className='flex items-center
            absolute left-[-15px] top-[22px]
            xsm:left-[-13px] xsm:top-[33px]
            sm:left-[-10px] sm:top-[36px]
            md:left-[-13px] md:top-[55px]
            '>
                <ProcessContent id={ProcessData[0].id} tittle={ProcessData[0].tittle} text={ProcessData[0].text} color={ProcessData[0].color}/>
            </div>
            <div
            className='flex items-center
            absolute left-[86px] top-[4px]
            xsm:left-[130px] xsm:top-[13px]
            sm:left-[180px] sm:top-[13px]
            md:left-[175px] md:top-[25px]
            '>
                <ProcessContent id={ProcessData[1].id} tittle={ProcessData[1].tittle} text={ProcessData[1].text} color={ProcessData[1].color}/>
            </div>
            <div
            className='flex items-center
            absolute right-[-30px] top-[55px]
            xsm:right-[-37px] xsm:top-[76px]
            sm:right-[-40px] sm:top-[92px]
            md:right-[-45px] md:top-[110px]
            '>
                <ProcessContent id={ProcessData[2].id} tittle={ProcessData[2].tittle} text={ProcessData[2].text} color={ProcessData[2].color}/>
            </div>
            <div
            className='flex items-center
            absolute right-[10px] bottom-[21px]
            xsm:right-[21px] xsm:bottom-[21px]
            sm:right-[40px] sm:bottom-[25px]
            md:right-[34px] md:bottom-[32px]
            '>
                <ProcessContent id={ProcessData[3].id} tittle={ProcessData[3].tittle} text={ProcessData[3].text} color={ProcessData[3].color}/>
            </div>
            <div
            className='flex items-center
            absolute left-[-30px] bottom-[63px]
            xsm:left-[-35px] xsm:bottom-[80px]
            sm:left-[-40px] sm:bottom-[100px]
            md:left-[-50px] md:bottom-[105px]'>
                <ProcessContent id={ProcessData[4].id} tittle={ProcessData[4].tittle} text={ProcessData[4].text} color={ProcessData[4].color}/>
            </div>
        </div>
            {/* slider */}
        <div 
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        className='w-full pb-12'>
        <Slider
        ref={sliderRef}
        className='w-full flex justify-center items-center'
        slidesToShow={1}
        slidesToScroll={1}
        arrows = {false}
        dots={false}
        autoplay={true}
        autoplaySpeed={5000}
        speed={1000}
        infinite={true}
        rtl={true}
        cssEase='ease-out'
        >
        {
                ProcessData.map( (elem)=> {
                    const { id, tittle, color, text } = elem
                    return (
                    <div key={id} className='w-full flex justify-center items-center cursor-grab'>
                        <div className='w-[217px] xsm:w-[250px] mx-auto flex flex-col items-center justify-center'>
                            <p className={`text-left text-[18px] xsm:text-[22px] font-bold fontBold ${color}`}>{id}</p>
                            <p className='text-left text-[18px] xsm:text-[22px] font-bold fontBold leading-[22px] pb-[8px]'>{tittle}</p>
                            <p className='text-center text-[12px] xsm:text-[14px] font-normal fontRegular xsm:leading-[18px] leading-[14px]'>{text}</p>
                        </div>
                    </div>
                    )
                })
            }
        </Slider>
        <div className='w-[250px] xsm:w-[283px] mx-auto h-4 select-none relative'>
            <div 
            onClick={()=>isClickedNext()}
            className={`nextSlideItems 
            h-[30px] w-[30px] ${liconBg}
            xsm:w-[40px] xsm:h-[40px]
            flex justify-center items-center rounded-[50%]
            absolute bottom-[55px] left-[-10px]
            xxsm:bottom-[50px] xxsm:left-[-25px]
            ism:left-[-35px] xsm:left-[-40px]
            `}>
                <BiChevronLeft className={`text-[30px] ${liconColor}`}/>
            </div>
            <div 
            onClick={()=>isClickedPrev()}
            className={`prevSlideItems
            h-[30px] w-[30px] ${riconBg}
            xsm:w-[40px] xsm:h-[40px]
            flex justify-center items-center rounded-[50%]
            cursor-pointer outline-transparent
            absolute bottom-[55px] right-[-10px]
            xxsm:bottom-[50px] xxsm:right-[-25px]
            xsm:right-[-25px]`}>
                <BiChevronRight className={`text-[30px] ${riconColor}`}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProcessMobile