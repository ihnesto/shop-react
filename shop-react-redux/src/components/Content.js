import Aside from './Aside';
import Main from './Main';
import CartMain from './cart/CartMain';
import { useSelector } from 'react-redux';

function Content() {

    let isCart = useSelector(state => state.isCart);
    let cart = useSelector(state => state.cart);            
               
    return (
        
        <section className="section-content padding-y">
            <div className="container">
                
                { isCart ?
                        <CartMain  />
                :
                        <div className="row">
                            <Aside />
                            <Main />
                        </div>
                      
                }
              
            </div>
        </section>
    );
}

export default Content;
