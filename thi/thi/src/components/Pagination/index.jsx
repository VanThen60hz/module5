import PropTypes from "prop-types";

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
};

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { _page, _limit } = pagination;

    const totalPages = Math.ceil(10 / _limit);

    const handlePageChange = (newPage) => {
        if (onPageChange) onPageChange(newPage);
    };

    return (
        <div className="d-flex justify-content-center">
            <button
                className="btn btn-outline-primary me-2"
                disabled={_page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                Prev
            </button>

            <button
                className="btn btn-outline-primary"
                disabled={_page >= totalPages}
                onClick={() => handlePageChange(_page + 1)}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
