function CartItemPrice(props) {
    
    return (
    
        <td>
          <div className="price-wrap">
            <var className="price">{props.price * props.qnty}</var>
            <small className="text-muted"> {props.price} each </small>
          </div>
          
        </td>
    );
}

export default CartItemPrice;
