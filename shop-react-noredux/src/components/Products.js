import ProductItem from './ProductItem';

function Products(props) {

    let elems = props.products.map((e) => {
        return <ProductItem 
                    name={e.name} 
                    price= {e.price} 
                    desc={e.desc} 
                    image={e.image}
                    addToCart={(ev) => {
                        ev.preventDefault();
                        props.addToCart(e.id);
                    }}
                />
    });
    
    return (
        
        <div className="row">	
           {elems }
        </div> 

    );
}


export default Products;
