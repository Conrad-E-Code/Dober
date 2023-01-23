

function CategoryPage(props) {

    function renderCategories() {
        fetch("/categories")
    }


    return(
        <div className="avail-cats">
            Hello From CategoryPage
        </div>
    )
}

export default CategoryPage