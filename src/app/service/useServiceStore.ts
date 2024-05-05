import axios from "axios";
import { produce } from "immer";
import { create } from "zustand";

const access_token = localStorage.getItem("access_token");
const email = localStorage.getItem("email");

const ServiceStore = create((set) => (
    {
        services: [],
        addService: async (newService) => {
            console.log(newService);

            try {
                const headers = {
                    "Authorization": `${access_token}`,
                    "Content-Type": "application/json"
                }
                const res = await axios.post(
                    `https://app.olimjanov.uz/v1/service/create`,
                    { owner_email: email, ...newService },
                    {
                        headers: headers
                    });
                const data = await res.data;
                console.log(data);
            }
            catch (error) {
                console.log(error.message);
            }
        },
        getServices: async () => {
            try {
                const headers = {
                    "Authorization": `${access_token}`,
                    "Content-Type": "application/json"
                }
                const res = await axios.get(
                    `https://app.olimjanov.uz/v1/service/get-all?page=1&limit=10&owner_email=${email}`, {
                    headers: headers
                });
                const data = await res.data;

                set(
                    produce((state) => {
                        state.services = data.services
                    })
                );
            }
            catch (error) {
                console.log(error.message);
            }
        },
        deleteService: async (id: { id: string }) => {
            try {
                const headers = {
                    "Authorization": `${access_token}`,
                    "Content-Type": "application/json"
                }
                const res = await axios.delete(
                    `https://app.olimjanov.uz/v1/service?id=${id}`, {
                    headers: headers
                });
                // const data = await res.data;
                // console.log(data);
            }
            catch (error) {
                console.log(error.message);
            }
        },
        updateService: async (service) => {
            try {
                const headers = {
                    "Authorization": `${access_token}`,
                    "Content-Type": "application/json"
                }
                const res = await axios.put(
                    `https://app.olimjanov.uz/v1/service/update`,
                    { owner_email: email, ...service },
                    {
                        headers: headers
                    });
                const data = await res.data;
                console.log(data);
            }
            catch (error) {
                console.log(error.message);
            }

        }
    }
))

export const useServiceStore = ServiceStore;