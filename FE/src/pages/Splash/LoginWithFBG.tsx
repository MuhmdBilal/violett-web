import React, { FC, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { GoogleLogin } from 'react-google-login';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
// import FacebookLogin from 'react-facebook-login';
type Props = {};
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string
// const appId = process.env.REACT_APP_FACEBOOK_ID as string
const LoginWithFBG: FC<Props> = () => {

  const navigate = useNavigate();
  // login with Facebook
  // const responseFacebook = (response: any) => {
  //   console.log(response);
  // }


  // Login with Google
  const onLoginSuccess = (res: any) => {
    console.log("res", res);
    
    // if (res) {
    //   navigate('/home')
    // }
  };

  const onLoginFailure = (res: any) => {
    toast.error('Login Failed')
  };
  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load('client:auth2', start)
  })
  return (
    <div>
      
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={false}
        render={(renderProps: any) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="login-button-google text-sm font-medium flex justify-start items-center text-start w-80 h-11 mt-3 rounded-md" >
            <span className="pl-6">
              <FcGoogle size={22} />
            </span>
            <span className="pl-10">Login with Google</span>
          </button>
        )}
      />
      {/* <FacebookLogin
        appId={appId}
        autoLoad={false}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
        // render={(renderProps: any) => (
        //   <button onClick={renderProps.onClick} className="login-button-facebook text-sm font-medium flex justify-start items-center text-start w-80 h-11 mt-3">
        //     <span className="pl-0">
        //       <FaFacebookSquare size={22} color="#4E7CD0" />
        //     </span>
        //     <span className="pl-10">Login with Facebook</span>

        //   </button>
        // )}

      /> */}
     
      <Button className="login-button-facebook text-sm font-medium flex justify-start items-center text-start w-80 h-11 mt-3">
        <span className="pl-0">
          <FaFacebookSquare size={22} color="#4E7CD0" />
        </span>
        <span className="pl-10">Login with Facebook</span>
      </Button>


      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
};

export default LoginWithFBG;
