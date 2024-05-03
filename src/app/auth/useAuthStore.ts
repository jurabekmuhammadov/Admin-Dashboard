/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { produce } from "immer";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
interface AuthType {
    email: string;
    full_name: string;
    phone_number: string;
    password: string;
    signUp: (user: {
        email: string;
        full_name: string;
        password: string;
        phone_number: string;
    }) => Promise<void>;
    signIn: (user: { email: string; password: string }) => Promise<void>;
    verify: (verifyValue: { code: string; email: string }) => Promise<void>;
    delete: (id: string) => Promise<void>;
}

const handleError = (error: any) => {
    console.error('An error occurred:', error.message);
};

const successSignUp = (message: string) => toast.success(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
})
const errorSignUp = (message: string) => toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
})
const successSignIn = (message: string) => toast.success(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
})
const errorSignIn = (message: string) => toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
})
const successSentVerify = (message: string) => toast.success(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
})

const AuthStore = create<AuthType>((set) => (
    {
        email: "",
        full_name: "",
        phone_number: "",
        password: "",

        signUp: async (user: {
            email: string;
            full_name: string;
            password: string;
            phone_number: string;
        }) => {
            try {
                const res: AxiosResponse = await axios.post(
                    "https://app.olimjanov.uz/v1/auth/register",
                    user
                );
                const data: any = await res.data;
                set(
                    produce((state: AuthType) => {
                        state.email = data.email;
                        state.full_name = data.full_name;
                        state.password = data.password;
                        state.phone_number = data.phone_number;
                    })
                );
                localStorage.setItem("email", user.email);
                successSentVerify("Verification code sent!");
                location.assign("/verify");
            }
            catch (error) {
                errorSignUp((error as any).response?.data?.error.toUpperCase());
            }
        },
        signIn: async (user: { email: string; password: string }) => {
            try {
                const res: AxiosResponse = await axios.post(
                    "https://app.olimjanov.uz/v1/auth/login",
                    user
                );
                const data: any = await res.data;
                console.log(data)
                set(
                    produce((state: AuthType) => {
                        state.email = data.email;
                        state.password = data.password;
                    })
                );

                localStorage.setItem("email", data.email);
                localStorage.setItem("access_token", data.access_token);
                location.assign("/dashboard");
                successSignIn("Successfully signed in");
            } catch (error) {
                console.log(error);
                errorSignIn((error as any).response?.data?.message.toUpperCase());
            }
        },
        verify: async (verifyValue: { code: string; email: string }) => {
            try {
                const res: AxiosResponse = await axios.post(
                    "https://app.olimjanov.uz/v1/auth/verify",
                    verifyValue
                );
                const data: any = await res.data;
                console.log(data);
                successSignUp("Successfully signed up");
                location.assign("/sign-in")
            } catch (error) {
                errorSignUp((error as any).response?.data?.error.toUpperCase());
            }
        },
        delete: async (id: string) => {
            try {
                const res: AxiosResponse = await axios.delete(
                    `https://app.olimjanov.uz/v1/auth/delete/${id}`
                );
                const data: any = await res.data;
                console.log(data);
            } catch (error) {
                handleError(error as any);
            }
        },
    }));

export const useAuthStore = AuthStore;
