import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import baseAxios, { METHOD_HTTP } from "../configs/baseAxios";
import { useContext } from "react";
import { UserContext } from "../useContext/useContext";

export function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext)
    const getUser = async () => {
        let data = await baseAxios(METHOD_HTTP.GET, "get-info")
        setUser(data)
    }
    const login = async (values) => {

        try {
            let data = await baseAxios(METHOD_HTTP.POST, "/login", values);
            localStorage.setItem("token", data.token)
            await getUser();
            navigate("/home")
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
                        Sign in to your account
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
                        onSubmit={login}
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
                                        <Link to={"/register"} className="font-semibold text-indigo-600 hover:text-indigo-500">Register now?</Link> <br />
                                    </div>
                                </div>
                            </>
                            <button
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div >
        </>
    )
}