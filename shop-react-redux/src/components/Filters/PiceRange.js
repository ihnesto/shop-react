function PriceRange() {
    return(
        <article className="filter-group">
		<header className="card-header">
			<a href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-listing-grid.html#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" className="">
				<i className="icon-control fa fa-chevron-down"></i>
				<h6 className="title">Price range </h6>
			</a>
		</header>
		<div className="filter-content collapse show" id="collapse_3">
			<div className="card-body">
				<input type="range" className="custom-range" min="0" max="100" name="" />
				<div className="form-row">
				<div className="form-group col-md-6">
				  <label>Min</label>
				  <input className="form-control" placeholder="$0" type="number" />
				</div>
				<div className="form-group text-right col-md-6">
				  <label>Max</label>
				  <input className="form-control" placeholder="$1,0000" type="number" />
				</div>
				</div>
				<button className="btn btn-block btn-primary">Apply</button>
			</div>
		</div>
	</article> 
    );
}

export default PriceRange;
