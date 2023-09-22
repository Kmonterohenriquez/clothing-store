import React from 'react'


const InlineBanner = ({data}) => {

  const { 
    title, ctaText, image, altText
  } = data;
  return (
    <div className='my-5 position-relative'>
      <img  className='w-100' src={image} alt={altText} />
      <div className='position-absolute top-35 ps-5 ms-3 col-4'>
        <h2 className='h1 mb-4'>{title}</h2>
        <button className='btn btn-outline-secondary'>{ctaText}</button>
      </div>
    </div>
  )
}

export default InlineBanner