import { useEffect, useState } from "react";
import baseAxios, { METHOD_HTTP } from "../configs/baseAxios";
// import axios from "axios";

export function ListProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const List = async () => {
            try {
                const response = await baseAxios(METHOD_HTTP.GET, "/products");
                setProducts(response);
            } catch (error) {
                console.error(error);
            }
        };
        List();
    }, []);

    const handleDelete = async (id) => {       
            try {               
                await baseAxios(METHOD_HTTP.DELETE, `/products/${id}`);           
                setProducts(products.filter(product => product.id !== id));
            } catch (error) {
                console.error("Error deleting product:", error);
                alert("Failed to delete product. Please try again.");
            }
    };

    return (
        <>
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-4 ">List Products</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table className="w-3/4 mx-auto rounded-lg overflow-hidden shadow-md text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <td className="px-6 py-3">ID</td>
                            <td className="px-6 py-3">Name</td>
                            <td className="px-6 py-3">Description</td>
                            <td className="px-6 py-3">Image</td>
                            <td className="px-6 py-3">Price</td>
                            <td className="px-6 py-3">Stock</td>
                            <td className="px-6 py-3" colSpan={2}>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item) => (
                                <tr key={item.id} className="odd:bg-white odd:light:bg-gray-900 even:bg-white even:light:bg-gray-800 border-b light:border-gray-700">
                                    <td className="px-6 py-4">{item.id}</td>
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">{item.description}</td>
                                    <td className="px-6 py-4">
                                        <img src={item.img} style={{ width: '100px', height: '100px' }} alt={item.name} />
                                    </td>
                                    <td className="px-6 py-4">{item.price}</td>
                                    <td className="px-6 py-4">{item.stock}</td>
                                    <td className="px-6 py-4">
                                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            onClick={() => handleDelete(item.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}