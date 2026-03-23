'use client';
import { useState, useEffect } from 'react';
import { Icons } from '@/icons';
import Image from 'next/image';

type UserForm = {
  name: string;
  email: string;
  category: string;
  password: '';
};

export default function Mypage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <form className="w-105 h-auto flex flex-col p-12.5 bg-white rounded-[20px] shadow-md items-center gap-12.5">
        <div>
          <div className="w-full h-auto flex flex-row justify-center">
            <div className="relative flex items-center">
              <p className="text-lg text-[#3c3c3c] font-bold">username</p>
              <Image src={Icons.Pen} alt="edit" width={18} className="absolute -right-6 cursor-pointer" />
            </div>
          </div>
          <div className="w-full h-auto flex justify-center">
            <p className="text-sm text-[#333333] font-light">category</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="w-full grid grid-cols-[80px_1fr_20px] items-center">
            <p className="text-sm text-[#747474] font-medium">이메일</p>
            <p className="text-sm text-[#333333] font-medium">testemail@gmail.com</p>
            <Image src={Icons.Pen} alt="edit" width={15} className="cursor-pointer" />
          </div>

          <div className="w-full grid grid-cols-[80px_1fr_20px] items-center">
            <p className="text-sm text-[#747474] font-medium">비밀번호</p>
            <p className="text-sm text-[#333333] font-medium">******</p>
            <Image src={Icons.Pen} alt="edit" width={15} className="cursor-pointer" />
          </div>

          <div className="w-full grid grid-cols-[80px_1fr_20px] items-center">
            <p className="text-sm text-[#747474] font-medium">가입 일자</p>
            <p className="text-sm text-[#333333] font-medium">2026.03.18</p>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col gap-6">
          <div className="w-full h-11 bg-white flex justify-center items-center border border-[#d2d2d2] rounded-lg text-sm text-[#747474] font-medium cursor-pointer duration-300 hover:bg-[#f1f1f1]">로그아웃</div>
          <div className="w-full h-11 bg-white flex justify-center items-center border border-[#800020] rounded-lg text-sm text-[#800020] font-medium cursor-pointer duration-300 hover:bg-[#800020] hover:text-white">회원 탈퇴</div>
        </div>
      </form>
    </div>
  );
}
