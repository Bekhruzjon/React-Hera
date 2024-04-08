import React, { useState,useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Hero() {

  useEffect(()=> {
    AOS.init();
  }, [])

  const slides = [
    {
      url: 'https://cdnn21.img.ria.ru/images/07e7/02/11/1852676397_0:188:3072:1916_1920x0_80_0_0_0bfa2e336e50bd1e8575a844dd55557c.jpg',
    },
    {
      url: 'https://cdnn21.img.ria.ru/images/07e4/02/0a/1564516593_0:279:3072:2007_1920x0_80_0_0_49f4f1088a92caa2eaabd53b1d08963e.jpg',
    },
    {
      url: 'https://cdnn21.img.ria.ru/images/07e7/09/08/1894892954_0:192:1024:768_1920x0_80_0_0_700ddd0f95f9f1786e694b63c579eecc.jpg',
    },

    {
      url: 'https://onlineteachersuk.com/ru/wp-content/uploads/2015/04/national-cancer-institute-N_aihp118p8-unsplash-1024x683.jpeg',
    },
    {
      url: 'https://cdn1.img.sputniknews.uz/img/1296/19/12961958_0:137:1024:547_1920x0_80_0_0_cfbbacb937698c0875121e8300a411f0.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div  data-aos="zoom-in-up" className=' w-[100%] h-[500px] py-2  m-auto px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  rounded-md bg-center bg-cover duration-500'
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;