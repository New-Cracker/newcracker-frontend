'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';
import API from '@/lib/axios';
import Slider from 'react-slick';
import NewsItem from './components/NewsItem';
import Image from 'next/image';
import { News1, News2 } from '@/data/mockData';

interface News {
  category: string;
  companyName: string;
  link: string;
  publicationDate: string;
  summary: string;
  title: string;
  content: string;
  thumbnailUrl?: string;
}

function SliderBox(imageUrl:string) {
  return (
    <div className='h-61 mb-5 rounded-[15px]'>
      <Image src={imageUrl} alt="image" className="w-full"/>
    </div>
  )
}

export default function Home() {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [username, setUsername] = useState('');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    API.get('/news/latest').then(res => {
      setNewsList(res.data)
      console.log(res.data)
    });
  }, []);

  useEffect(() => {
    setUsername(localStorage.getItem('username') || '');
  }, []);

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
            <div className="w-full h-48 md:h-70 bg-white border border-gray-300 rounded-2xl"></div>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col justify-between align-center mt-22 gap-13">
          <p className="text-[20px] text-[#1c1c1c] font-bold">{username}님을 위한 최신 뉴스</p>

          <div className="w-full h-auto flex flex-col justify-center gap-10">
            {newsList.map((news, index) => (
              <NewsItem key={index} source={news.companyName} title={news.title} content={news.summary} imageUrl={news.thumbnailUrl} />
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
