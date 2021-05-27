function HaveCoupon() {
    return (
            <div className="card mb-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Have coupon?</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="Coupon code"
                      />
                      <span className="input-group-append">
                        <button className="btn btn-primary">Apply</button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
    );
}

export default HaveCoupon;
