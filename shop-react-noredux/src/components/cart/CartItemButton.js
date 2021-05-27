function CartItemButton(props) {
    return (
        <td className="text-right">
           
            <a
                href="#"
                className="btn btn-light"
                onClick={ (ev) => {
                    ev.preventDefault();
                    props.removeFromCart(props.cId); }
                }
            >
                Remove
            </a>
    </td>
    );
}

export default CartItemButton;
