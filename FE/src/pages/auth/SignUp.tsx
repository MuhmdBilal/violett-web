import React, { FC, Dispatch, SetStateAction } from 'react';
import { Checkbox } from "@material-tailwind/react";
import { images } from "../../Services/Constants/images";
import { useForm, Controller} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../Store/Slices/authSlice"
import toast, { Toaster } from 'react-hot-toast';
import { Spinner } from "@material-tailwind/react";
type Props = {
  setActiveTab: Dispatch<SetStateAction<boolean>>;
};
// type Props = {};

const SignUp: FC<Props> = ({ setActiveTab }) => {
  const { register, formState: { errors }, handleSubmit, control,  } = useForm();
  const dispatch = useDispatch<any>();
  const auth = useSelector((state: any) => state.auth);
  console.log("auth", auth.isRegistering);

  const onSubmit = async (data: any) => {
    try {
      if (data.password !== data.Repassword) {
        toast.error("password and Repeat password does not matched!")
      } else {
        let result = await dispatch(registration(data))
        console.log(result);

        if (result.payload.error === "Duplicate field value entered") {
          toast.error("Email Already used! Please Use another email")
        }
        else {

          toast.success("User register successfully")
          setTimeout(() => {
            setActiveTab(false)
          }, 1000);
        }


      }
    } catch (e) {
      console.log(e);

    }
  }
  return (
    <div>
      <form className="mt-3 flex items-center justify-center flex-col gap-4 text-start" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Edmur"
          className={errors.Fullname?.type === 'required' ? "input-bg-error" : "input-bg"}
          {...register("Fullname", { required: true })}
          aria-invalid={errors.Fullname ? "true" : "false"}
        />
        <input
          type="password"
          placeholder="Password"
          className={errors.password?.type === 'required' ? "input-bg-error" : "input-bg"}
          {...register("password", { required: "Password is required" })}
          aria-invalid={errors.password ? "true" : "false"}
        />
        <input
          type="password"
          placeholder="Repeat Password"

          className={errors.Repassword?.type === 'required' ? "input-bg-error" : "input-bg"}
          {...register("Repassword", { required: "Repeat password is required" })}
          aria-invalid={errors.Repassword ? "true" : "false"}
        />
        <input type="email" placeholder="Email Address"
          className={errors.email?.type === 'required' ? "input-bg-error" : "input-bg"}
          {...register("email", { required: "Email Address is required" })}
          aria-invalid={errors.email ? "true" : "false"}
        />

        <div className="flex justify-between  items-center w-full">
          <div className="flex justify-center  items-center">
            <Controller
              name="checkbox"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field }) => (<div>
                <Checkbox {...field} name="checkbox" className={errors.checkbox ? "checkbox-error" : ""} />
              </div>)}
            />
            <label
              htmlFor="auto-update"
              className="switch-text text-xs font-semibold text-center uppercase not-italic"
            >
              AGREED to TERMS?
            </label>
          </div>
          <button className="button-logins" type="submit" disabled={auth?.isLogging}>
            {auth?.isLogging ? <Spinner color="pink" /> : <img src={images.tick} alt="button" />}
          </button>
        </div>
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
};

export default SignUp;