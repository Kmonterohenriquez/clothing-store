import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../../Styles/Showcase.sass'

const Showcase = ({data}) => {

	return (
		<div>
			<Carousel className='mb-3'> {
				data.map(slide => (
					<Carousel.Item className='customMaxHeight' key={slide.id}>
						<img className="d-block w-100" src={slide.imageSrc} alt={slide.imageAltText}/>
						<Carousel.Caption className='w-25 mb-5'>
							<img className="slideLogo" src="https://htmldemo.net/reid/reid/assets/img/slider/content1.png" alt="" />
							<p>{slide.slideDescription}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))
			} </Carousel>
		</div>
	)
}

export default Showcase
