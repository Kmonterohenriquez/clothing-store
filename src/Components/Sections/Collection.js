import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';


const Collection = ({data}) => {
	const [activeCategorie, setActiveCategorie] = useState('clothing')
	const {title, description, featuredImage, collectionDirecction} = data;
	const activeCategorieData = data.categories.filter(curr => curr.categorieName === activeCategorie);
	const rightheroimage = collectionDirecction === 'righthero' ? 'd-flex flex-row-reverse' : '';

	return (
		<div className={
			`row mt-5 py-5 ${rightheroimage}`
		}>
			<Image className="left-side col-md-6 col-sm-12 mt-2"
				src={featuredImage}
				rounded/>
			<div className="right-side col-md-6 col-sm-12 text-center">
				<h1>{title}</h1>
				<p className='text-body-secondary'>
					{description}</p>
				<div className="categories">
					<ul className='d-flex flex-row justify-content-between'>
						<li>Clothing</li>
						<li>Handbag</li>
						<li>Shoes</li>
						<li>Accesories</li>
					</ul>
				</div>
				{
				activeCategorieData && (
					<Row xs={1}
						md={3}
						className="g-4">
						{
						activeCategorieData[0].products.map((item) => (
							<Col key={
								item.id
							}>
								<Card>
									<Card.Img variant="top"
										src={
											item.image
										}/>
									<Card.Body className='d-flex flex-row justify-content-between'>
										<Card.Title>{
											item.name
										}</Card.Title>
										<Card.Text>
											${
											item.price
										} </Card.Text>
									</Card.Body>
								</Card>
							</Col>
						))
					} </Row>
				)
			} </div>
		</div>
	)
}

export default Collection
