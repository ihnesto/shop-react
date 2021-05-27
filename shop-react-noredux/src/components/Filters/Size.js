function Size() {
	return(
		<article className="filter-group">
		<header className="card-header">
			<a href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-listing-grid.html#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" className="">
				<i className="icon-control fa fa-chevron-down"></i>
				<h6 className="title">Sizes </h6>
			</a>
		</header>
		<div className="filter-content collapse show" id="collapse_4" >
			<div className="card-body">
			  <label className="checkbox-btn">
			    <input type="checkbox" />
			    <span className="btn btn-light"> XS </span>
			  </label>

			  <label className="checkbox-btn">
			    <input type="checkbox" />
			    <span className="btn btn-light"> SM </span>
			  </label>

			  <label className="checkbox-btn">
			    <input type="checkbox" />
			    <span className="btn btn-light"> LG </span>
			  </label>

			  <label className="checkbox-btn">
			    <input type="checkbox" />
			    <span className="btn btn-light"> XXL </span>
			  </label>
		</div>
		</div>
	</article> 
	);
}

export default Size;
