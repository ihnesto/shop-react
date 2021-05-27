import { useSelector } from 'react-redux';
import BrandItem from './BrandItem';



function Brands() {

	const brands = useSelector(state => state.brands);
	let elems;
	if (brands.length != 0) {
		elems = brands.map((e) => {
			return <BrandItem name={e.name} />
		});
	}
	return(
		<article className="filter-group">
		<header className="card-header">
			<a href="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-listing-grid.html#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" className="">
				<i className="icon-control fa fa-chevron-down"></i>
				<h6 className="title">Brands </h6>
			</a>
		</header>
		<div className="filter-content collapse show" id="collapse_2" >
			<div className="card-body">
				{ elems }
				
			</div> 
		</div>
	</article>
	);
}

export default Brands;
