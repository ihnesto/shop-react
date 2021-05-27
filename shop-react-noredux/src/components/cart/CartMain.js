import CartItem from './CartItem';
import CartButton from './CartButton';
import CartAside from './CartAside';

function CartMain(props) {
  let prods = props.products;
  let totalSum = 0;
  let elems = props.cart.map((p, i) => {  
      let prod = prods.filter(e => e.id === p.productId);
      
      totalSum = totalSum + prod[0].price * p.qnty;
      return <CartItem 
                image={ prod[0].image } 
                name={ prod[0].name } 
                price={ prod[0].price }
                qnty= {p.qnty }
                cId= {i } 
                removeFromCart={props.removeFromCart}/>
  });
	

  
    return (
      <div className="row">
        <main className="col-md-9">
            <div className="card">
              <table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                  <tr className="small text-uppercase">
                    <th scope="col">Product</th>
                    <th scope="col" width="120">Quantity</th>
                    <th scope="col" width="120">Price</th>
                    <th scope="col" className="text-right" width="200"></th>
                  </tr>
                </thead>
                <tbody>

                   { elems }
                 
                </tbody>
              </table>

              <CartButton goToCart= { props.goToCart }/>
            </div>
            

            <div className="alert alert-success mt-3">
              <p className="icontext">
                <i className="icon text-success fa fa-truck"></i> Free Delivery
                within 1-2 weeks
              </p>
            </div>
          </main>
         
          <CartAside totalSum= {totalSum }/>
          </div>
    );
}

        
export default CartMain;
