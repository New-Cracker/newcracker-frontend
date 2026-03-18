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
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [username, setUsername] = useState('');
  const [category, setCategory] = useState('');

  function validate1() {
    if (password !== passwordConfirm) {
      toast.error('비밀번호가 일치하지 않습니다.');
      return false;
    } else if (password.length < 6) {
      toast.error('비밀번호는 최소 6자 이상입니다.');
      return false;
    }
    return true;
  }

  function validate2() {

    return true;
  }

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate1()) setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if(!validate2()) return;

    try {
      const response = await API.post('/auth/signup', {
        email,
        password,
        username,
        category
      });
      toast.success('회원가입이 완료되었습니다.');

      const accessToken = response.data.accessToken;
      const refreshToken = response.data.refreshToken;
      const uname = response.data.username;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('username', uname);

      router.push('/');
    } catch (err:any) {
      toast.error("회원가입에 실패했습니다.");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <form onSubmit={step === 1 ? handleNext : handleSubmit} className="w-105 h-auto px-10 py-12.5 flex flex-col items-center shadow-md rounded-[20px]">
        <Image src={Icons.Logo2} alt="logo" width={170} />

        {step === 1 ? (
          <>
            <div className="w-full h-auto mt-10">
              <p className="text-[12px] text-[#333333] font-medium">이메일</p>
              <input required value={email} onChange={e => setEmail(e.target.value)} type="email" className="w-full h-10 outline-none border-b border-[#d2d2d2] px-1 duration-200 focus:border-[#800020] text-sm" />
            </div>

            <div className="w-full h-auto mt-10">
              <p className="text-[12px] text-[#333333] font-medium">비밀번호</p>
              <input required value={password} onChange={e => setPassword(e.target.value)} type="password" className="w-full h-10 outline-none border-b border-[#d2d2d2] px-1 duration-200 focus:border-[#800020] text-sm" />
            </div>

            <div className="w-full h-auto mt-10">
              <p className="text-[12px] text-[#333333] font-medium">비밀번호 확인</p>
              <input required value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} type="password" className="w-full h-10 outline-none border-b border-[#d2d2d2] px-1 duration-200 focus:border-[#800020] text-sm" />
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-auto mt-10">
              <p className="text-[12px] text-[#333333] font-medium">닉네임</p>
              <input required value={username} onChange={e => setUsername(e.target.value)} type="text" className="w-full h-10 outline-none border-b border-[#d2d2d2] px-1 duration-200 focus:border-[#800020] text-sm" />
            </div>

            <div className="w-full h-auto mt-10">
              <p className="text-[12px] text-[#333333] font-medium">관심 분야</p>
              <div className="relative">
                <select required value={category} onChange={e => setCategory(e.target.value)} className="w-full h-10 outline-none border border-[#d2d2d2] px-3 duration-200 focus:border-[#800020] text-sm rounded-lg appearance-none bg-white cursor-pointer">
                  <option value="">선택</option>
                  <option value="POLITICS">정치</option>
                  <option value="ECONOMY">경제</option>
                  <option value="SOCIETY">사회</option>
                  <option value="LIFE">생활/문화</option>
                  <option value="IT_SCIENCE">IT/과학</option>
                  <option value="WORLD">세계</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="#666" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </>
        )}

        <button type="submit" className="w-full h-10 bg-[#800020] rounded-lg flex justify-center items-center text-[12px] text-white font-bold duration-200 hover:bg-[#600018] cursor-pointer mt-10">
          {step === 1 ? '다음' : '가입하기'}
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
