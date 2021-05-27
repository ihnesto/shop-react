function ProductItem(props) {
	
	return (
		<div className="col-md-4">
		<figure className="card card-product-grid">
			<div className="img-wrap"> 
				<span className="badge badge-danger"> NEW </span>
				<img src={ props.image } alt="" />
				<a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
			</div> 
			<figcaption className="info-wrap">
				<div className="fix-height">
	<a href="#" className="title">{props.name}</a>
					<div className="price-wrap mt-2">
						<span className="price">{props.price}</span>
						<del className="price-old">$1980</del>
					</div>
				</div>
				<a href="#" 
					className="btn btn-block btn-primary"
					onClick={props.addToCart}>Add to cart </a>
			</figcaption>
		</figure>
	</div>
	);
}

export default ProductItem;

