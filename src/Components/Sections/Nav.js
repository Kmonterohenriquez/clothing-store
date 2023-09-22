import React from 'react'

const Nav = () => {

	const cartItems = 2;
	return (
		<div className=''>
			<div className="bg-dark pt-3">
				<div className="d-flex flex container-lg">
					<p className='text-secondary me-3'>
						<span className='dt text-light me-1'>Free Delivery:</span>
						Take advantage of our time to save event</p>
					<p className='text-secondary'><span className='text-light dt'>Free Returns *</span> Satisfaction guaranteed</p>
					
				</div>
			</div>
			<div className='container-lg mt-5 mb-4'>
				<div className='nav-top d-flex flex-row align-items-center justify-content-between'>
					<img src="https://htmldemo.net/reid/reid/assets/img/logo/logo.png" alt="logo"/> {/* <input className='px-3 py-2 rounded-4' type="text" placeholder='Search entire store here...'/> */}
					<div class="input-group mb-3 w-50">
						<button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All Categories</button>
						<ul class="dropdown-menu">
							<li>
								<a class="dropdown-item" href="#">Action</a>
							</li>
							<li>
								<a class="dropdown-item" href="#">Another action</a>
							</li>
							<li>
								<a class="dropdown-item" href="#">Something else here</a>
							</li>
							<li>
								<hr class="dropdown-divider"/></li>
							<li>
								<a class="dropdown-item" href="#">Separated link</a>
							</li>
						</ul>
						<input type="text" class="form-control align-self-center" aria-label="Text input with dropdown button" placeholder='Search entire store here...'/></div>
					<div className="nav-right-top d-flex flex-row">
						<>
							<a className="me-2" href="/">Login</a>
							/
							<a className="ms-2" href="/">Register</a>
						</>
						<p className="cart ms-3">
							{cartItems}
							item(s)</p>
					</div>
				</div>
				<div className="nav-bottom mt-3">
					<ul className='navbar-nav d-flex flex-row'>
						<li className='nav-item'>
							<a className='nav-link py-2 pe-4' href='/'>Home</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link py-2 pe-4' href='/shop'>Shop</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link p-2 pe-4' href='/blog'>Blog</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link p-2 pe-4' href='/pages'>Pages</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link p-2 pe-4' href='/about-us'>About Us</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link p-2 pe-4' href='/contact-us'>Contact US</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Nav
