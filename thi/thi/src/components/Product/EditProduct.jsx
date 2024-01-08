import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

import * as ProductService from "../../services/ProductService";
import * as CategoryService from "../../services/CategoryService";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
// import { format } from "date-fns";

function EditProduct() {
    const [categories, setCategories] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        findAll();
    }, []);

    const findAll = async () => {
        const res = await CategoryService.findAll();
        setCategories(res);
    };

    const initialValues = {
        id: location?.state.product.id,
        maSP: location?.state.product.maSP,
        name: location?.state.product.name,
        categoryId: location?.state.product.categoryId,
        // price: location?.state.product.price,
        quantity: location?.state.product.quantity,
        // date: format(location?.state.product.date, "yyyy-MM-dd"),
        date: location?.state.product.date,
        // description: location?.state.product.description,
    };

    const validationSchema = {
        maSP: Yup.string()
            .required("Mã sản phẩm bắt buộc phải nhập")
            .matches(
                "^PROD-\\d{4}$",
                "Tên SP phải có dịnh dạng PROD-xxxx (x là số)",
            ),
        name: Yup.string()
            .required("Tên sản phẩm bắt buộc phải nhập")
            .max(100, "tên sản phẩm ko được dài quá 100 ký tự"),
        categoryId: Yup.string().required("Loại sản phẩm bắt buộc phải nhập"),
        // price: Yup.number().required("Giá  bắt buộc phải nhập"),

        quantity: Yup.number()
            .typeError("Số lượng phải là số nguyên")
            .required("Số lượng bắt buộc phải nhập")
            .integer("Số lượng phải là số nguyên")
            .min(1, "Số lượng phải lớn hơn 0"),
        date: Yup.string()
            .required("bắt buộc nhập")
            .test(
                "is-future",
                "Ngày không được lớn hơn ngày hiện tại",
                function (value) {
                    let inputDate = new Date(value);
                    let today = new Date();

                    return inputDate <= today;
                },
            ),
        // description: Yup.string().required("Mô tả sản phảm bắt buộc phải nhập"),
    };

    const updateProduct = async (product) => {
        try {
            console.log(product);
            await ProductService.update(product.id, product);
            navigate("/products");
            toast.success("Update product successfully!");
        } catch (error) {
            if (error.response) {
                const responseData = error.response.data;
                toast.error(`Error: ${responseData.message}`);
            } else if (error.request) {
                toast.error("Error: No response received from the server");
            } else {
                toast.error(`Error: ${error.message}`);
            }
            console.error(error);
        }
    };

    return (
        <div className="container my-5">
            <h1>Edit Product</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, { setSubmitting }) => {
                    updateProduct(values);
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
                            <label htmlFor="categoryId" className="form-label">
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
                        {/* 
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
                        </div> */}
                        <div className="mb-3">
                            <label htmlFor="quantity" className="form-label">
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
                                format="dd/MM/yyyy"
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
                        {/* <div className="mb-3">
                            <label htmlFor="description" className="form-label">
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
                        </div> */}
                        {isSubmitting ? (
                            <></>
                        ) : (
                            <button
                                type="submit"
                                className="btn btn-success w-50"
                                style={{ display: "block", margin: "auto" }}
                            >
                                Edit product
                            </button>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default EditProduct;
