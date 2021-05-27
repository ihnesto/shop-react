function CartItemName(props) {
    return (
        <td>
          <figure className="itemside">
            <div className="aside">
              <img src={props.image} className="img-sm" />
            </div>
            <figcaption className="info">
              <a
                href="#"
                className="title text-dark">
                {props.name}
                </a>
              <p className="text-muted small">
                Size: XL, Color: blue, <br />
                Brand: Gucci
              </p>
            </figcaption>
          </figure>
        </td>
    );
}

export default CartItemName;