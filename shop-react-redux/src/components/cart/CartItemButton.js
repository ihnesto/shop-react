import { useDispatch } from 'react-redux';

function CartItemButton(props) {
    
    const dispatch = useDispatch();
    // Удаление из корзины
    let removeFromCart = (cId) => {
        dispatch({
            type: 'REMOVE_PRODUCT_FROM_CART',
            payload: cId
        });
       
    };

    return (
        <td className="text-right">
           
            <a
                href="#"
                className="btn btn-light"
                onClick={ (ev) => {
                    ev.preventDefault();
                    removeFromCart(props.cId); }
                }
            >
                Remove
            </a>
    </td>
    );
}

export default CartItemButton;
