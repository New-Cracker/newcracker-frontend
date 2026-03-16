'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import NewsItem from './components/NewsItem';
import { News1, News2 } from '@/data/mockData';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="w-full min-h-screen py-35 flex flex-col items-center px-25">
      <div className="w-full rounded-[15px]">
        <Slider {...settings}>
          <div className="h-61 bg-black mb-5 rounded-[15px]">
            <h3>1</h3>
          </div>
          <div className="h-61 bg-pink-50 mb-5 rounded-[15px]">
            <h3>1</h3>
          </div>
          <div className="h-61 bg-black mb-5 rounded-[15px]">
            <h3>1</h3>
          </div>
          <div className="h-61 bg-pink-50 mb-5 rounded-[15px]">
            <h3>1</h3>
          </div>
          <div className="h-61 bg-black mb-5 rounded-[15px]">
            <h3>1</h3>
          </div>
        </Slider>

        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 lg:gap-9 mt-8 md:mt-22">
          <div className="w-full flex flex-col gap-4 lg:gap-8">
            <h2 className="text-red-800 font-bold text-lg md:text-xl">이슈 트렌딩 요약</h2>
            <div className="w-full h-48 md:h-70 bg-white border border-gray-300 rounded-2xl"></div>
          </div>
          <div className="w-full flex flex-col gap-4 lg:gap-8">
            <h2 className="text-red-800 font-bold text-lg md:text-xl">맞춤 트렌딩 요약</h2>
            <div className="w-full h-48 md:h-70 bg-white border border-gray-300 ro]unded-2xl"></div>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col justify-between align-center mt-22 gap-13">
          <p className="text-[20px] text-[#1c1c1c] font-bold">username님을 위한 최신 뉴스</p>

          <div className="w-full h-auto flex flex-col justify-center gap-10">
            {News1.map((news, index) => (
              <NewsItem key={index} source={news.source} title={news.title} content={news.content} imageUrl={news.imageUrl} />
            ))}
          </div>
        </div>

        <div className="w-full h-auto flex flex-col justify-between align-center mt-22 gap-13">
          <p className="text-[20px] text-[#1c1c1c] font-bold">따끈따끈한 이슈</p>

          <div className="w-full h-auto flex flex-col justify-center gap-10">
            {News2.map((news, index) => (
              <NewsItem key={index} source={news.source} title={news.title} content={news.content} imageUrl={news.imageUrl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
