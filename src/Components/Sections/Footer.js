import React from 'react'

const Footer = () => {
	return (
		<div className='d-flex flex px-5 pt-5'>
			<div className="left-side d-flex flex ">
				<div className="section me-5">
					<h5>Information</h5>
					<ul className='text-secondary list-unstyled'>
						<li>About Us</li>
						<li>Delivery Information</li>
						<li>Privacy Policy</li>
						<li>Terms & Conditions</li>
						<li>Contact Us</li>
						<li>Returns</li>
					</ul>
				</div>
				<div className="section me-5">
					<h5>Extras</h5>
					<ul className='text-secondary list-unstyled'>
						<li>Brands</li>
						<li>Site Map</li>
						<li>My Account</li>
					</ul>
				</div>
				<div className="section me-5">
					<h5>Contact Us</h5>
					<ul className='text-secondary list-unstyled'>
						<li>Address: 123 street Ave. Orlando, FL</li>
						<li>Phone: +1(123)456-7890</li>
						<li>Email: companyname@example.com</li>
					</ul>
				</div>
			</div>
      <div className="right-side">
        <h5>Join Our Newsletter Now</h5>
        <p>Exceptional quality. Ethical factories. Sign up to enjoy free U.S. shipping and returns on your first order.</p>
        <input type="text" />
        <button type="button" class="btn btn-dark btn-lg">Subscribe!</button>
      </div>
		</div>
	)
}

export default Footer
