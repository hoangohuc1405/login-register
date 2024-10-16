import React from 'react';
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import baseAxios, { METHOD_HTTP } from "../configs/baseAxios";
import { useContext } from "react";
import { UserContext } from "../useContext/useContext";

export function CreateProduct() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext)
    const getUser = async () => {
        let data = await baseAxios(METHOD_HTTP.GET, "get-info")
        setUser(data)
    }
    const createProduct = async (values) => {

        try {
            let data = await baseAxios(METHOD_HTTP.POST, "/create-product", values);
            await getUser();
            navigate("/products")
            alert(data.message)
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <h2 className="text-2xl font-bold mb-6">Create New Product</h2>
            <Formik
                initialValues={{
                    name: "",
                    description: "",
                    imageUrl: "",
                    price: "",
                    stock: ""
                }}
                onSubmit={createProduct}
            >
                {({ isSubmitting }) => (
                    <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Product Name
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Enter product name"
                                name="name"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description"
                                type="textarea"
                                placeholder="Enter product description"
                                name="description"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="price"
                                type="number"
                                placeholder="Enter product price"
                                name="price"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                                Image URL
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="imageUrl"
                                type="text"
                                placeholder="Enter image URL"
                                name="imageUrl"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                                Stock
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="stock"
                                type="number"
                                placeholder="Enter stock quantity"
                                name="stock"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                disabled={isSubmitting}
                            >
                                Create Product
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}