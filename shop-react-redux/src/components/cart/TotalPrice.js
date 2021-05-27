function TotalPrice({ totalSum}) {

  totalSum = totalSum.toFixed(2);
  
  return (
    <div className="card">
      <div className="card-body">
        <dl className="dlist-align">
          <dt>Total price:</dt>
          <dd className="text-right">USD {totalSum }</dd>
        </dl>
        <dl className="dlist-align">
          <dt>Discount:</dt>
          <dd className="text-right">USD 0</dd>
        </dl>
        <dl className="dlist-align">
          <dt>Total:</dt>
          <dd className="text-right h5"><strong>USD {totalSum }</strong></dd>
        </dl>
        <hr />
        <p className="text-center mb-3">
          <img src="static/images/cart/payments.png" height="26" />
        </p>
      </div>
    </div>
  );
}

export default TotalPrice;

