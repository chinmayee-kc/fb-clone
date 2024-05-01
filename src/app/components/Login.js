'use client';
import Image from "next/image";
import { FcGoogle } from 'react-icons/fc';
import { signIn } from "next-auth/react";

const Login = () => {

  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />
      <div onClick={signIn} className='grid place-items-center border-black border-2 rounded-s'>
        <div className='flex gap-4 bg-[#fff] p-4 px-6 items-center rounded-[6px] cursor-pointer'>
          <FcGoogle className='text-[30px]'/>
          SignIn with Google
        </div>
      </div>
    </div>
  );
};

export default Login;






