function CartButton(props) {
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
                    props.goToCart(false); } 
                    }>
                
                  <i className="fa fa-chevron-left"></i> Continue shopping
                </a>
              </div>


    );
}

export default CartButton;
