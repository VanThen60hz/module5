import { useEffect, useState } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import * as ProductService from "../services/ProductService";
import * as CategoryService from "../services/CategoryService";
import { toast } from "react-toastify";
// import Pagination from "../components/Pagination";
import FilterForm from "../components/FilterForm/FilterForm";
import { format } from "date-fns";

function Product() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [deletingProduct, setDeletingProduct] = useState(null);

    // const [pagination, setPagination] = useState({
    //     _page: 1,
    //     // _limit: 4,
    // });

    const [filters, setFilters] = useState({
        // _page: 1,
        // _limit: 4,
        _sort: "quantity",
        _order: "desc",
        name_like: "",
        categoryId_like: "",
    });

    useEffect(() => {
        const fetchData = () => {
            getProducts();
            getCategories();
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deletingProduct, filters]);

    const getProducts = async () => {
        try {
            const paramsString = queryString.stringify(filters);
            const requestUrl = `${paramsString}`;
            const data = await ProductService.findAll(requestUrl);
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    };

    // const handlePageChange = (newPage) => {
    //     console.log(newPage);
    //     setFilters({
    //         ...filters,
    //         _page: newPage,
    //     });

    //     setPagination({
    //         ...pagination,
    //         _page: newPage,
    //     });
    // };

    const handleFilterChange = (newFilter) => {
        setFilters({
            ...filters,
            _page: 1,
            name_like: newFilter.searchTerm,
            categoryId_like: newFilter.categoryId,
        });
    };

    const getCategories = async () => {
        try {
            const categories = await CategoryService.findAll();
            setCategories(categories);
        } catch (error) {
            console.error(error);
        }
    };

    const handleOpenDeleteModal = (product) => {
        setDeletingProduct(product);
    };

    const deleteProduct = async (id) => {
        try {
            await ProductService.remove(id);
            toast.success("Delete successfully!");
        } catch (error) {
            console.error(error);
        }
    };

    const DeleteModal = () => {
        return (
            <div
                className="modal fade show"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-modal="true"
                role="dialog"
                style={{ display: "block" }}
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-body">
                            Do you sure delete product with name:{" "}
                            {deletingProduct.name}?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setDeletingProduct(null)}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => {
                                    deleteProduct(deletingProduct.id);
                                    setDeletingProduct(null);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {deletingProduct && DeleteModal()}
            <div className="d-flex justify-content-between">
                <h1>Products</h1>
                <Link to={`add`} className="btn btn-success h-50">
                    Add Product
                </Link>
            </div>
            <FilterForm onSubmit={handleFilterChange} />

            <table className="table">
                <thead>
                    <tr>
                        <th>MaSP</th>
                        <th>name</th>
                        <th>Category</th>
                        {/* <th>Price</th> */}
                        <th>Quantity</th>
                        <th>Date</th>
                        {/* <th>Description</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 && (
                        <h2 className="text-center my-5">
                            Không tìm thấy sản phẩm
                        </h2>
                    )}
                    {products?.map((product) => (
                        <tr key={product.id}>
                            <td>{product.maSP}</td>
                            <td>{product.name}</td>
                            <td>
                                {
                                    categories.find(
                                        (category) =>
                                            String(category.id) ===
                                            String(product.categoryId),
                                    )?.name
                                }
                            </td>

                            {/* <td>{product.price}</td> */}
                            <td>{product.quantity}</td>
                            <td>{format(product.date, "dd/MM/yyyy")}</td>
                            {/* <td>{product.description}</td> */}
                            <td>
                                <Link
                                    to={`edit/${product.id}`}
                                    state={{ product }}
                                    className="btn btn-primary me-5"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() =>
                                        handleOpenDeleteModal(product)
                                    }
                                    className="btn btn-danger mx-2"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            /> */}
        </>
    );
}

export default Product;
