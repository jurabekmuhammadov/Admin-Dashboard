// import { create } from "zustand";
// import { produce } from "immer";
// import axios from "axios";

// const AuthStore = (set: (produce: () => void) => void) => ({
//     email: "",
//     full_name: "",
//     phone_number: "",
//     password: "",
//     signUp: async (user: { email: string, full_name: string, password: string, phone_number: string }) => {
//         const parsed = JSON.parse(user);

//         try {
//             const res = await axios.post(
//                 "https://app.olimjanov.uz/v1/auth/register",
//                 user
//             );
//             const data = await res.data;
//             // console.log(data);
//             set(
//                 produce((state) => {
//                     state.email = data.email;
//                     state.full_name = data.full_name;
//                     state.password = data.password;
//                     state.phone_number = data.phone_number;
//                 })
//             );

//             localStorage.setItem("email", parsed.email);
//         } catch (error) {
//             console.log(error.message);
//         }
//     },
//     signIn: async (user: { email: string, password: string, }) => {
//         const parsed = JSON.parse(user);

//         try {
//             const res = await axios.post(
//                 "https://app.olimjanov.uz/v1/auth/login",
//                 user
//             );
//             const data = await res.data;
//             // console.log(data);
//             set(
//                 produce((state) => {
//                     state.email = data.email;
//                     state.password = data.password;
//                 })
//             );

//             localStorage.setItem("email", parsed.email);
//             localStorage.setItem("access_token", data.access_token);
//         } catch (error) {
//             console.log(error.message);
//         }
//     },
//     verify: async (verifyValue: { code: string, email: string }) => {
//         // console.log(verifyValue);

//         try {
//             const res = await axios.post(
//                 "https://app.olimjanov.uz/v1/auth/verify",
//                 verifyValue
//             );
//             const data = await res.data;
//             console.log(data);

//         } catch (error) {
//             console.log(error.message);
//         }
//     },
//     delete: async (id: string) => {
//         try {
//             const res = await axios.delete(
//                 `https://app.olimjanov.uz/v1/auth/delete/${id}`
//             );
//             const data = await res.data;
//             console.log(data);

//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// });

// export const useAuthStore = create(AuthStore);

import { create } from "zustand";
import { produce } from "immer";
import axios from "axios";

interface AuthState {
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

const AuthStore = create<AuthState>((set) => ({
    email: "",
    full_name: "",
    phone_number: "",
    password: "",
    signUp: async (user) => {
        try {
            const res = await axios.post(
                "https://app.olimjanov.uz/v1/auth/register",
                user
            );
            const data = await res.data;
            set(
                produce((state) => {
                    state.email = data.email;
                    state.full_name = data.full_name;
                    state.password = data.password;
                    state.phone_number = data.phone_number;
                })
            );

            localStorage.setItem("email", data.email);
        } catch (error) {
            console.log(error.message);
        }
    },
    signIn: async (user) => {
        try {
            const res = await axios.post(
                "https://app.olimjanov.uz/v1/auth/login",
                user
            );
            const data = await res.data;
            set(
                produce((state) => {
                    state.email = data.email;
                    state.password = data.password;
                })
            );

            localStorage.setItem("email", data.email);
            localStorage.setItem("access_token", data.access_token);
        } catch (error) {
            console.log(error.message);
        }
    },
    verify: async (verifyValue) => {
        try {
            const res = await axios.post(
                "https://app.olimjanov.uz/v1/auth/verify",
                verifyValue
            );
            const data = await res.data;
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    },
    delete: async (id) => {
        try {
            const res = await axios.delete(
                `https://app.olimjanov.uz/v1/auth/delete/${id}`
            );
            const data = await res.data;
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    },
}));

export const useAuthStore = AuthStore;
