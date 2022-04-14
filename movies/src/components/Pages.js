const pages = ({ handleClickPrev, handleClickNext, page, totalPages, handleClickFirstPage, handleClickLastPage }) => {
    return (
        <div>
            <button
                onClick={handleClickFirstPage}
                disabled={page === 1}>
                Page 1
            </button>
            <button
                onClick={handleClickPrev}
                disabled={page === 1}>
                Prev
            </button>
            Page{page}
            <button
                onClick={handleClickNext}
                disabled={totalPages > 500 ? page === 500 : page == totalPages} >
                Next
            </button>
            <button
                onClick={() => handleClickLastPage(totalPages > 500 ? 500 : totalPages)}
                disabled={totalPages > 500 ? page === 500 : page == totalPages}>
                Last Page
            </button>
        </div>
    )
}
export default pages