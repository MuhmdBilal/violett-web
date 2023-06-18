import React, { FC, useState } from "react";
import { images } from "../../Services/Constants/images";
import "../../assets/Styles/Login.css";
import { HiOutlineArrowLeft } from "react-icons/hi"
import { useDispatch, useSelector } from "react-redux";
// import {
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
// } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { Switch } from "@material-tailwind/react";
import SignUp from "./SignUp";
import LoginWithFBG from "../Splash/LoginWithFBG";
import { Link, LinkProps } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { login } from "../../Store/Slices/authSlice"
import toast, { Toaster } from 'react-hot-toast';
import { Spinner } from "@material-tailwind/react";
type Props = {};

const Index: FC<Props> = () => {
  const [activeTab, setActiveTab] = useState(false);
  const dispatch = useDispatch<any>();
  const auth = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const linkProps: LinkProps = {
    to: '/' // Replace with the actual path
  };
  const { register, formState: { errors }, handleSubmit} = useForm();

  const onSubmit = async (data: any) => {
    try{
      // navigate('/home')
       let result = await dispatch(login(data))
       if(result.payload.response.result === "Invalid credentials"){
        toast.error("Invalid credentials")
       }else if(result.payload.response.success === true){
        toast.success("Logged in successfully. ")
        setTimeout(() => {
          navigate('/home')
        }, 1000);
       }
    }catch(e){
      console.log(e);
      
    }
  };

  return (
    <div className="bg-color">
      <div className="flex justify-around items-center pt-5">
        <div className="w-1/12 pl-8  pr-2.5">
          <Link {...linkProps}>
            <HiOutlineArrowLeft color="#fff" size={20} />
          </Link>
        </div>
        <div className="w-11/12  flex justify-center pr-16">
          <img src={images.box} alt="box" className="w-12" />
        </div>
      </div>
      <div className=" justify-center items-center mt-10">
        <div className="flex justify-center items-center flex-col ">
          <div className="tabs-width flex">
            <div className={activeTab === false ? "w-1/2 tabs-login_active text-white" : "w-1/2 tabs-login"} onClick={() => setActiveTab(false)}>
             
                Login
              
            </div>
            <div className={activeTab === true ? "w-1/2 tabs-login_active" : "w-1/2 tabs-login"} onClick={() => setActiveTab(true)}>
                SignUp
            </div>


          </div>
          <div>
            {
              activeTab === true ? (
                <>
                  <div className="flex justify-center mt-5">
                    <span className="join-text not-italic font-normal text-center">
                      Join us
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <SignUp setActiveTab={setActiveTab} />
                  </div>
                  <div className="flex flex-col items-center mt-8">
                    <div className="border-style-user pt-4">
                      Already did this?
                      <span style={{ cursor: "pointer" }} className="text-white border-b-2" onClick={() => setActiveTab(false)}>
                        login
                      </span>
                    </div>
                  </div>
                </>

              ) : (
                <>
                  <div className="flex justify-center mt-2">
                    <span className="join-text">Join us</span>
                  </div>
                  <form className="mt-5 mb-2 flex items-center justify-center flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="email"
                      className={errors.email?.type === 'required' ? "input-bg-error" : "input-bg"}
                      {...register("email", { required: true })}
                      aria-invalid={errors.email ? "true" : "false"}
                      type="email"
                    />
                    <input
                      type="password"
                      placeholder="password"
                      className={errors.password?.type === 'required' ? "input-bg-error" : "input-bg"}
                      {...register("password", { required: "Password is required" })}
                      aria-invalid={errors.password ? "true" : "false"}
                    />
                    <div className="flex justify-around  items-center w-8/12">
                      <div className="flex justify-center  items-center">
                        <Switch id="auto-update" className="switch-text" />
                        <label
                          htmlFor="auto-update"
                          className="switch-text pl-2 text-xs font-bold text-center uppercase not-italic"
                        >
                          Automatic Update
                        </label>
                      </div>
                      <button className="button-logins" type="submit" disabled={auth.isLogging}>
                      {auth.isLogging ? <Spinner color="pink" /> : <img src={images.tick} alt="button" />}
                      </button>
                    </div>
                  </form>
                  <div className="flex flex-col items-center ">
                    <LoginWithFBG />
                  </div>
                  <div className="flex flex-col items-center mt-8">
                    <div className="border-style-user pt-4">
                      new user?{" "}
                      <span style={{ cursor: "pointer" }} className="text-white border-b-2" onClick={() => setActiveTab(true)}>
                        sign up
                      </span>
                    </div>
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
};

export default Index;

