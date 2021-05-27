
function BrandItem(props) {

    return (
        <label className="custom-control custom-checkbox">
				  <input type="checkbox" className="custom-control-input" />
				  <div className="custom-control-label">{ props.name }  
				  	<b className="badge badge-pill badge-light float-right">120</b>  </div>
		</label>
    );
}

export default BrandItem;
