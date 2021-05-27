import { useSelector, useDispatch } from 'react-redux';
import ProductItem from './ProductItem';

function Products() {

    const products = useSelector(state => state.products);

    const dispatch = useDispatch();

     // Добавление в корзину
     const addToCart = (prodId) => {
            dispatch({ 
                type: 'ADD_PRODUCT_TO_CART', 
                payload: prodId
            });
    }

    let elems;
    if (products.length != 0) {
        elems = products.map((e) => {
            return <ProductItem 
                        name={e.name} 
                        price= {e.price} 
                        desc={e.desc} 
                        image={e.image}
                        addToCart={(ev) => {
                            ev.preventDefault();
                            addToCart(e.id);
                        }}
                    />
        });
    }
    return (
        
        <div className="row">	
           {elems }
        </div> 

    );
}


export default Products;
