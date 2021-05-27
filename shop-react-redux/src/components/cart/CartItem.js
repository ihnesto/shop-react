import CartItemName from './CartItemName';
import CartItemPrice from './CartItemPrice';
import CartItemButton from './CartItemButton';

 
 function CartItem(props) {
     return (
        <tr>
            <CartItemName image={props.image} name={props.name}/>
            <CartItemPrice price={props.price} qnty={props.qnty}/>
            <CartItemButton cId={ props.cId}  />
        </tr>
      
     );
 }

 export default CartItem;               