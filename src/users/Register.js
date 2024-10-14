
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import baseAxios, { METHOD_HTTP } from "../configs/baseAxios";

export function Register() {
    const navigate = useNavigate();
    const register = async (values) => {

        try {
            console.log("Data register", values);
            let data = await baseAxios(METHOD_HTTP.POST, "/register", values);
            console.log("Data", data);
            navigate("/login")
            alert(data.message)
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://img.freepik.com/premium-vector/online-shop-logo-design-concept-online-shopping-center-logo-vector-online-store-gifts-symbol_145155-658.jpg?w=740"
                        className="mx-auto h-40 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Register to your account
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Formik
                        initialValues={
                            {
                                username: "",
                                password: ""
                            }
                        }
                        onSubmit={register}
                    >
                        <Form className="space-y-6">
                                <>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Username
                                    </label>
                                    <div className="mt-2">
                                        <Field
                                            placeholder="Username"
                                            name="username"
                                            type="username"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </>
                                <>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <Field
                                            placeholder="password"
                                            name="password"
                                            type="password"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm">
                                            <Link to={"/login"} className="font-semibold text-indigo-600 hover:text-indigo-500">I already have an account</Link> <br />
                                        </div>
                                    </div>
                                </>
                                <button
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Register
                                </button>
                        </Form>
                    </Formik>
                </div>
            </div >
        </>
    )
}