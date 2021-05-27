import { useDispatch } from "react-redux";


function CartButton(props) {

  let dispatch = useDispatch();
	
	// Переход в корзину
    const goToCart = () => {
        dispatch({ type: 'GO_TO_CART', payload: false });
    };

    return ( 
            <div className="card-body border-top">
                <a
                  href="o#"
                  className="btn btn-primary float-md-right"
                >
                  Make Purchase <i className="fa fa-chevron-right"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-light"
                  onClick={ (e) => { 
                    e.preventDefault();
                    goToCart(); } 
                    }>
                
                  <i className="fa fa-chevron-left"></i> Continue shopping
                </a>
              </div>


    );
}

export default CartButton;
