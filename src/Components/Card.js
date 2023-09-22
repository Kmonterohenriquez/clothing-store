import React from 'react'

const Card = () => {

  const data =  {
    imgSrc: 'https://htmldemo.net/reid/reid/assets/img/product/product23.jpg',
    altText: 'alt text test',
    isNew: true,
    discount: 7,
    productName: 'Nike Shoes 8',
    productPrice: 9000
  };

  let currentPrice = data.productPrice;
  if(data.discount > 0 && data.discount < 10){
    // currentPrice = currentPrice-(currentPrice*({data.discount})) 
  }
	return (
		<div>
			<img src={data.imgSrc} alt={data.altText}/>
      <p>{data.productName}</p>
      <p>{currentPrice}</p><p></p>
		</div>
	)
}

export default Card
