function Header(props) {
    return (
        <header className="section-header">

<section className="header-main border-bottom">
	<div className="container">
<div className="row align-items-center">
	<div className="col-lg-2 col-4">
		<a href="http://bootstrap-ecommerce.com/" className="brand-wrap">
			<img className="logo" src="static/images/main-page/logo.png" alt=""/>
		</a> 
	</div>
	<div className="col-lg-6 col-sm-12">
		<form action="https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-listing-grid.html#" className="search">
			<div className="input-group w-100">
			    <input type="text" className="form-control" placeholder="Search" />
			    <div className="input-group-append">
			      <button className="btn btn-primary" type="submit">
			        <i className="fa fa-search"></i>
			      </button>
			    </div>
		    </div>
		</form> 
	</div> 
	<div className="col-lg-4 col-sm-6 col-12">
		<div className="widgets-wrap float-md-right">
			<div className="widget-header  mr-3" >
				<a href="#" className="icon icon-sm rounded-circle border" 
				onClick={ (e) => { 
					e.preventDefault();
					props.goToCart(true); } 
					}><i className="fa fa-shopping-cart"></i></a>
				<span className="badge badge-pill badge-danger notify">{props.numCartItems}</span>
			</div>
			<div className="widget-header icontext">
				<a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-user"></i></a>
				<div className="text">
					<span className="text-muted">Welcome!</span>
					<div> 
						<a href="#">Sign in</a> |  
						<a href="#"> Register</a>
					</div>
				</div>
			</div>

		</div> 
	</div> 
</div> 
	</div>
</section>
</header> 


    );
}

export default Header;