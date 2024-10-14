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
                <Form>
                    <Field name="name" type="text" placeholder="Name product" />
                    <Field name="description" type="text" placeholder="Description" />
                    <Field name="img" type="text" placeholder="Link image" />
                    <Field name="price" type="number" placeholder="Price" />
                    <Field name="stock" type="number" placeholder="Stock" />
                    <button>Add</button>
                    {/* <button>Reset</button> */}
                </Form>
            </Formik>
        </>
    )
}