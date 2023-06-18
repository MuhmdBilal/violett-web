import React, { FC } from 'react';
import "../../assets/Styles/Splash.css";
import { images } from "../../Services/Constants/images";
import { Button } from "@material-tailwind/react";
import {Link} from "react-router-dom"
import LoginWithFBG from './LoginWithFBG';
type Props = {};

const Index: FC<Props> = () => {
  return (
    <div className="bg-color flex justify-center items-center">
      <div className='container'>
        <div className='flex justify-center my-10'>
          <img src={images.logo} alt="violett" className='w-30' />
        </div>
        <div className="flex flex-col items-center ">
          <Link to="/login"><Button className="login-button font-medium text-sm flex justify-center items-center text-center  w-80 h-11 mt-4">Login</Button></Link>
          <LoginWithFBG/>
        </div>
        <div className='flex justify-center items-center  mt-3'>
          <img src={images.line} alt='line' className='' />&#160; <span className='text-style text-xs leading-9 text-center font-bold text-white'>OR</span> &#160;<img src={images.line} alt='line' />
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Button variant="outlined" className="sign-button font-medium text-sm flex justify-center items-center text-center leading-7 w-80 h-11">Sign up</Button>
        </div>

        <div className='flex flex-col items-center mt-5'>
          <div className='border-style pt-4 font-bold text-xs leading-3 text-center text-white'>
            MADE BY ROYALZ, V 1.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
