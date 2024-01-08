import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import * as ProductService from "../../services/ProductService";
import * as CategoryService from "../../services/CategoryService";
// import { format } from "date-fns";

function CreateProduct() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        findAll();
    }, []);

    const findAll = async () => {
        const res = await CategoryService.findAll();
        setCategories(res);
    };

    const addProduct = async (product) => {
        try {
            await ProductService.create(product);
            toast.success("Add successfully!");
            navigate("/products");
        } catch (error) {
            console.error(error);
        }
    };

    // let today = new Date();
    // let formatToday = format(today, "dd/mm/yyyy");

    const initialValues = {
        maSP: "",
        name: "",
        categoryId: "",
        price: "",
        quantity: "",
        date: "",
        description: "",
    };

    const validationSchema = {
        maSP: Yup.string()
            .required("Mã sản phẩm bắt buộc phải nhập")
            .matches(
                "^PROD-\\d{4}$",
                "Tên SP phải có dịnh dạng PROD-xxxx (x là số)",
            ),
        name: Yup.string().required("Tên sản phẩm bắt buộc phải nhập"),
        categoryId: Yup.string().required("Loại sản phẩm bắt buộc phải nhập"),
        price: Yup.number().required("Giá  bắt buộc phải nhập"),

        quantity: Yup.number()
            .typeError("Số lượng phải là số nguyên")
            .required("Số lượng bắt buộc phải nhập")
            .integer("Số lượng phải là số nguyên")
            .min(1, "Số lượng phải lớn hơn 0"),
        // date: Yup.string()
        //                 .required('bắt buộc nhập')
        //                 .matches(
        //                     /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/,
        //                     'Vui lòng nhập ngày theo định dạng dd/mm/yyyy'
        //                 )
        //                 .test('is-future', 'Ngày không được lớn hơn ngày hiện tại', function (value) {
        //                     let inputDate = new Date(value.split('/')[2], value.split('/')[1] - 1, value.split('/')[0]);
        //                     return inputDate <= today;
        //                 }),
        date: Yup.string()
            .required("bắt buộc nhập")
            // .matches(
            //     /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/,
            //     "Vui lòng nhập ngày theo định dạng dd/mm/yyyy",
            // )
            .test(
                "is-future",
                "Ngày không được lớn hơn ngày hiện tại",
                function (value) {
                    let inputDate = new Date(value); // Convert the string to a Date object
                    let today = new Date(); // Ensure 'today' is a valid Date object

                    return inputDate <= today;
                },
            ),
        description: Yup.string().required("Mô tả sản phảm bắt buộc phải nhập"),
    };

    return (
        <>
            <h1 className="my-5 text-center">Create a product</h1>
            <div className="container d-flex justify-content-center my-5 mx-auto">
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, { setSubmitting }) => {
                        addProduct(values);
                        console.log("submit");
                        console.log(values);
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 3000);
                    }}
                    validationSchema={Yup.object(validationSchema)}
                >
                    {({ isSubmitting }) => (
                        <Form className="w-75">
                            <div className="mb-3">
                                <label htmlFor="maSP" className="form-label">
                                    MaSP:
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="maSP"
                                    name="maSP"
                                />
                                <ErrorMessage
                                    name="maSP"
                                    component="span"
                                    style={{ color: "red" }}
                                ></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name:
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="span"
                                    style={{ color: "red" }}
                                ></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="categoryId"
                                    className="form-label"
                                >
                                    Category:
                                </label>
                                <Field
                                    name="categoryId"
                                    as="select"
                                    className="form-select form-select-sm"
                                    aria-label="Small select example"
                                >
                                    {categories.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage
                                    name="categoryId"
                                    component="span"
                                    style={{ color: "red" }}
                                ></ErrorMessage>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">
                                    Price:
                                </label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    name="price"
                                />
                                <ErrorMessage
                                    name="price"
                                    component="span"
                                    style={{ color: "red" }}
                                ></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="quantity"
                                    className="form-label"
                                >
                                    Quantity:
                                </label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    id="quantity"
                                    name="quantity"
                                />
                                <ErrorMessage
                                    name="quantity"
                                    component="span"
                                    style={{ color: "red" }}
                                ></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">
                                    Date:
                                </label>
                                <Field
                                    type="date"
                                    className="form-control"
                                    id="date"
                                    name="date"
                                />
                                <ErrorMessage
                                    name="date"
                                    component="span"
                                    style={{ color: "red" }}
                                ></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="description"
                                    className="form-label"
                                >
                                    Description:
                                </label>
                                <Field
                                    type="text"
                                    as="textarea"
                                    className="form-control"
                                    id="description"
                                    name="description"
                                />
                                <ErrorMessage
                                    name="description"
                                    component="span"
                                    style={{ color: "red" }}
                                ></ErrorMessage>
                            </div>
                            {isSubmitting ? (
                                <></>
                            ) : (
                                <button
                                    type="submit"
                                    className="btn btn-success w-50"
                                    style={{ display: "block", margin: "auto" }}
                                >
                                    Add product
                                </button>
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}

export default CreateProduct;
