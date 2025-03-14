import { userSchema } from "../../utils/schema";
// import { useLoginMutation } from "../../Slices/api/apiSlice";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";
import { CustomeInput } from "../../component/Input";
import { Dispatch } from "redux";
import { setToken, setUser } from "../../store/auth/authSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

type FormInput = z.infer<typeof userSchema>;

export const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  // const [loginUser] = useLoginMutation();
  const handleLogin = (dispatch: Dispatch, userData: string, token: string) => {
    dispatch(setUser(userData));
    dispatch(setToken(token));
  };

  // const handleAddSubmit = async (values: {
  //   userName: string;
  //   password: string;
  // }) => {
  //   try {
  //     const response = await loginUser(values).unwrap();
  //     console.log(response);
  //     handleLogin(dispatch, JSON.stringify(response), "yes");
  //   } catch (error: unknown) {
  //     let errorMessage = "Something went wrong";

  //     if (typeof error === "object" && error !== null) {
  //       if (
  //         "data" in error &&
  //         typeof error.data === "object" &&
  //         error.data !== null
  //       ) {
  //         errorMessage =
  //           (error.data as { message?: string })?.message || errorMessage;
  //       } else if ("error" in error) {
  //         errorMessage = String(error.error);
  //       }
  //     }

  //     // openModal(errorMessage, "#450a0a");
  //   }
  // };
  const handleAddSubmit = async (values: {
    userName: string;
    password: string;
  }) => {
    handleLogin(dispatch, JSON.stringify(values), "yes");
  };

  return (
    <>
      <div className="w-full py-4 flex justify-center items-center flex-col">
        <div className="w-full flex flex-col items-center mb-6">
          <h1 className="text-textColor font-medium text-lg">
            {/* <img src={Logo2} alt="Logo" className="w-12" /> */}
          </h1>
          <h1 className="text-textColor font-medium text-lg">Login</h1>
          <p>Welcome to Safaricom</p>
        </div>

        <div className="  pl-[2%] flex flex-col gap-[10px]">
          <form
            onSubmit={handleSubmit((d) => handleAddSubmit(d))}
            className="px-[2%]"
          >
            <div className="flex flex-col w-[100%] max-md:w-[100%] max-md:px-[2%]  rounded-[8px] ">
              <div className=" ">
                <div className="flex flex-col gap-2  ">
                  <div className="w-[100%]">
                    <CustomeInput
                      error={errors.userName?.message}
                      register={register("userName")}
                      label={"UserName"}
                      name={"name"}
                    />
                  </div>
                  <div className="w-[100%]">
                    <CustomeInput
                      error={errors.password?.message}
                      register={register("password")}
                      label={"password"}
                      name={"password"}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-end mt-2">
                  <p className="text-sm">
                    <Link to="/signup" className="text-brandColor">
                      Forget PIN?
                    </Link>
                  </p>
                </div>
                <div className="flex pt-[2%] justify-end  w-[100%] gap-4 pb-[2%] bg-white mt-[2%]">
                  <button
                    className="w-[100%] max-md:w-[24%] h-[40px] rounded-[8px] bg-[green] text-white"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
