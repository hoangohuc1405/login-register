import { Field, Form, Formik } from "formik"
import baseAxios, { METHOD_HTTP } from "../configs/baseAxios"

export function CreateProduct() {
    const submit = async (values) => {
        console.log(values)
        let data = await baseAxios(METHOD_HTTP.POST, "/products", values)
        console.log(data);

    }

    return (
        <>
            <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
                <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-4 "> CreateProduct </h1>
                <Formik
                    initialValues={
                        {
                            name: '',
                            description: '',
                            img: '',
                            price: '',
                            stock: ''

                        }
                    }
                    onSubmit={submit}
                >
                    <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Product Name
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Product name"
                                name="name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="textarea"
                                placeholder="Enter product description"
                                name="description"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="number"
                                placeholder="Product price"
                                name="price"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                                Image URL
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Image URL"
                                name="img"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                                Stock
                            </label>
                            <Field
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="number"
                                placeholder="Stock quantity"
                                name="stock"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >Add
                            </button>
                        </div>
                        {/* <button>Reset</button> */}
                    </Form>
                </Formik>
            </div>
        </>
    )
}