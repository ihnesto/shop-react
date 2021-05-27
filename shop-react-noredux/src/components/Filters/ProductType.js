function ProductType() {
    return (
        <article className="filter-group">
            <header className="card-header">
                <a href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-listing-grid.html#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" className="">
                    <i className="icon-control fa fa-chevron-down"></i>
                    <h6 className="title">Product type</h6>
                </a>
            </header>
            <div className="filter-content collapse show" id="collapse_1">
                <div className="card-body">
                    <form className="pb-3">
                        <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-light" type="button"><i className="fa fa-search"></i></button>
                        </div>
                        </div>
                    </form>
                    
                    <ul className="list-menu">
                    <li><a href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-listing-grid.html#">People  </a></li>
                    <li><a href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-listing-grid.html#">Watches </a></li>
                    <li><a href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-listing-grid.html#">Cinema  </a></li>
                    <li><a href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-listing-grid.html#">Clothes  </a></li>
                    <li><a href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-listing-grid.html#">Home items </a></li>
                    <li><a href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-listing-grid.html#">Animals</a></li>
                    <li><a href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-listing-grid.html#">People </a></li>
                    </ul>

                </div>
            </div>
	    </article> 
    );
}

export default ProductType;
