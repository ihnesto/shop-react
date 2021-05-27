import Aside from './Aside';
import Main from './Main';
import CartMain from './cart/CartMain';

function Content(props) {

   
    return (
        
        <section className="section-content padding-y">
            <div className="container">
                
            { props.isCart ?
                    
                    <CartMain 
                        goToCart={ props.goToCart }
                        products={ props.products }
                        cart={ props.cart }
                        removeFromCart={props.removeFromCart} />
            :
                    <div className="row">
                        <Aside brands={ props.brands }/>
                        <Main 
                            products={ props.products }  
                            addToCart= {props.addToCart}/>
                    </div>
                   
                    }
            </div>
        </section>
    );
}



export default Content;
