'use client';
import Image from 'next/image';
import Link from 'next/link';
import API from '@/lib/axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Icons } from '@/icons';

export default function Signup() {
  const router = useRouter();
  const [step, setStep] = useState(2);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');
  const [interest, setInterest] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //회원가입 로직
  };

  function Form1() {
    return (
      <>
        <div className="w-full h-auto mt-10">
          <p className="text-[12px] text-[#333333] font-medium">이메일</p>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="w-full h-10 outline-none border-b border-[#d2d2d2] px-1 duration-200 focus:border-[#800020] text-sm" />
        </div>

        <div className="w-full h-auto mt-10">
          <p className="text-[12px] text-[#333333] font-medium">비밀번호</p>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="w-full h-10 outline-none border-b border-[#d2d2d2] px-1 duration-200 focus:border-[#800020] text-sm" />
        </div>

        <div className="w-full h-auto mt-10">
          <p className="text-[12px] text-[#333333] font-medium">비밀번호 확인</p>
          <input value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} type="password" className="w-full h-10 outline-none border-b border-[#d2d2d2] px-1 duration-200 focus:border-[#800020] text-sm" />
        </div>
      </>
    );
  }

  function Form2() {
    return (
      <>
        <div className="w-full h-auto mt-10">
          <p className="text-[12px] text-[#333333] font-medium">닉네임</p>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="w-full h-10 outline-none border-b border-[#d2d2d2] px-1 duration-200 focus:border-[#800020] text-sm" />
        </div>

        <div className="w-full h-auto mt-10">
          <p className="text-[12px] text-[#333333] font-medium">관심 분야</p>
          <select className='w-full h-10 outline-none border border-[#d2d2d2] px-1 duration-200 focus:border-[#800020] text-sm rounded-lg'>
            <option selected value={''}></option>
          </select>
        </div>
      </>
    )
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <form onSubmit={step === 1 ? handleNext : handleSubmit} className="w-105 h-auto px-10 py-12.5 flex flex-col items-center shadow-md rounded-[20px]">
        <Image src={Icons.Logo2} alt="logo" width={170} />

        {step === 1 ? <Form1/> : <Form2/>}

        <button type="submit" className="w-full h-10 bg-[#800020] rounded-lg flex justify-center items-center text-[12px] text-white font-bold duration-200 hover:bg-[#600018] cursor-pointer mt-10">
          {step === 1 ? "다음" : "가입하기"}
        </button>

        <div className="w-full flex flex-col items-center mt-5">
          <p className="text-[12px] text-[#ababab] font-bold">계정이 없으신가요?</p>
          <Link href={'/signup'} replace className="underline text-[#0088ff] hover:text-[#005BAB] text-[12px] font-bold duration-200">
            New Cracker 가입하기
          </Link>
        </div>
      </form>
    </div>
  );
}
