import ProductType from './Filters/ProductType';
import Brands from './Filters/Brands';
import Size from './Filters/Size';
import PriceRange from './Filters/PiceRange';
import Any from './Filters/Any';

function Aside() {
	return (
	<aside className="col-md-3">
		<div className="card">
			<ProductType />
			<Brands />
			<PriceRange />
			<Size />
			<Any />
			
		</div>
	</aside>
	);
}

export default Aside;
