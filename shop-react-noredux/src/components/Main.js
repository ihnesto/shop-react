import Products from './Products';

function Main(props) {
	return(
		<main className="col-md-9">

<header className="border-bottom mb-4 pb-3">
		<div className="form-inline">
			<span className="mr-md-auto">32 Items found </span>
			<select className="mr-2 form-control">
				<option>Latest items</option>
				<option>Trending</option>
				<option>Most Popular</option>
				<option>Cheapest</option>
			</select>
			<div className="btn-group">
				<a href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-listing-grid.html#" className="btn btn-outline-secondary" data-toggle="tooltip" title="" data-original-title="List view"> 
					<i className="fa fa-bars"></i></a>
				<a href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-listing-grid.html#" className="btn  btn-outline-secondary active" data-toggle="tooltip" title="" data-original-title="Grid view"> 
					<i className="fa fa-th"></i></a>
			</div>
		</div>
</header>

	<Products products={ props.products }
	 addToCart= {props.addToCart} />


	</main> 

	);
}


export default Main;
