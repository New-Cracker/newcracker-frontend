'use client';

import { Icons } from '@/icons';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

function LoginHeader() {
  const router = useRouter();

  return (
    <div className="flex flex-row gap-7.5">
      <div className="relative w-106 h-8.75">
        <input type="text" placeholder="세계 뉴스 검색하기..." className="w-full h-full rounded-full border border-[#d2d2d2] px-4 outline-[#800020]" />
        <Image src={Icons.Search} alt="search" width={20} height={20} className="absolute right-3 top-1/2 -translate-y-1/2" />
      </div>

      <div className="flex flex-row gap-6.25">
        <div className="w-8.75 h-8.75 flex justify-center items-center rounded-full bg-[#800020] cursor-pointer" onClick={() => router.replace('/my')}><Image src={Icons.User} alt='profile' width={16}/></div>
      </div>
    </div>
  );
}

function NotLoginHeader() {
  const router = useRouter();

  return (
    <div className="flex flex-row gap-7.5">
      <div className="relative w-86.5 h-8.75">
        <input type="text" placeholder="세계 뉴스 검색하기..." className="w-full h-full rounded-full border border-[#d2d2d2] px-4 outline-[#800020]" />
        <Image src={Icons.Search} alt="search" width={20} height={20} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" />
      </div>

      <div className="flex flex-row gap-6.25">
        <div className="w-8.75 h-8.75 flex justify-center items-center rounded-full bg-white border border-[#d2d2d2] cursor-pointer" onClick={() => router.replace('/login')}>
          <Image src={Icons.Login} alt="login" width={16} height={16} />
        </div>
        <div className="w-8.75 h-8.75 flex justify-center items-center rounded-full bg-[#800020] cursor-pointer" onClick={() => router.replace('/signup')}>
          <Image src={Icons.Signup} alt="login" width={16} height={16} />
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const router = useRouter();
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedin(!!token);
  }, []);

  return (
    <div className="w-full h-17.5 px-25 flex flex-row justify-between items-center border-b border-[#d2d2d2] fixed bg-white z-100">
      <Image src={Icons.Logo} alt="logo" className="w-auto h-10 cursor-pointer" onClick={() => router.replace('/')}/>

      <div className="gap-17.5 flex flex-row ">
        <Link href={'/'} replace className="text-[16px] text-[#1C1C1C] font-medium">
          오늘의 뉴스
        </Link>
        <Link href={'/'} replace className="text-[16px] text-[#1C1C1C] font-medium">
          뉴스 트렌드
        </Link>
        <Link href={'/'} replace className="text-[16px] text-[#1C1C1C] font-medium">
          마이 뉴스
        </Link>
      </div>

      {isLoggedin ? <LoginHeader /> : <NotLoginHeader />}
    </div>
  );
}
