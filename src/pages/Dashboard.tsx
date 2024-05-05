import { useState, useEffect } from "react";
import { useServiceStore } from "../app/service/useServiceStore";

const Dashboard = () => {
    const { getServices, deleteService, updateService, addService } = useServiceStore();
    const services = useServiceStore(state => state.services);
    const [service, setEditService] = useState({ id: "", name: "", price: 0 });

    const handleDelete = (id) => {
        deleteService(id);
        getServices();
    };

    const handleEdit = (service) => {
        setEditService(service);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (service.id !== "") {
            updateService({ ...service, price: Number(service.price) });
            setEditService({ id: "", name: "", price: 0 })
            getServices();
        } else {
            const { id, ...serviceData } = service;
            addService({ ...serviceData, price: Number(serviceData.price) })
            setEditService({ id: "", name: "", price: 0 })
            getServices();
        }
    }

    useEffect(() => {
        getServices();
    }, []);

    return (
        <div className="mt-10">
            <div className="flex gap-4">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input className="p-2 border" value={service.name} type="text" placeholder="name" name="name" onChange={(e) => setEditService({ ...service, name: e.target.value })} />
                    <input className="p-2 border" value={service.price} type="number" placeholder="price" name="price" onChange={(e) => setEditService({ ...service, price: e.target.value })} />
                    <button type="submit">Submit</button>
                </form>
            </div>
            {services?.map((service) => (
                <div key={service.id} className="flex gap-4 items-center mt-4">
                    <p>{service.name}</p>
                    <p>{service.price}</p>
                    <div className="flex gap-2 items-center">
                        <button className="p-2 bg-red-500" onClick={() => handleDelete(service.id)}>Delete</button>
                        <button className="p-2 bg-green-500" onClick={() => handleEdit({ id: service.id, name: service.name, price: service.price })}>Edit</button>
                        <button className="p-2 bg-blue-500">View</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Dashboard;
