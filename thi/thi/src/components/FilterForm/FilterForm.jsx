import { useFormik } from "formik";
import PropTypes from "prop-types";
import * as categoryService from "../../services/CategoryService";
import { useEffect, useState } from "react";

FilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

FilterForm.defaultProps = {
    onSubmit: null,
};

function FilterForm(props) {
    const { onSubmit } = props;
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await categoryService.findAll();
                setCategories(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategories();
    }, []);

    const formik = useFormik({
        initialValues: {
            searchTerm: "",
            categoryId: "",
        },
        onSubmit: (values) => {
            if (onSubmit) {
                onSubmit(values);
            }
        },
    });

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            formik.handleSubmit();
        }
    };

    return (
        <form
            className="d-flex justify-content-around my-4 w-75"
            onSubmit={formik.handleSubmit}
        >
            <input
                type="text"
                name="searchTerm"
                placeholder="Search term"
                value={formik.values.searchTerm}
                className="form-control w-25"
                onChange={formik.handleChange}
                onKeyDown={handleKeyPress}
            />
            <select
                name="categoryId"
                className="form-control w-25"
                value={formik.values.categoryId}
                onChange={formik.handleChange}
            >
                <option value="">All</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
            <button className="btn btn-secondary" type="submit">
                Search
            </button>
        </form>
    );
}

export default FilterForm;
