import React from 'react'

const FollowUs = ({data}) => {
  const {
    sectionTitle,
    description,
    images,
  } = data;
  return (
    <div className='text-center my-5 py-3'>
      <h2>{sectionTitle}</h2>
      <p className='text-body-secondary'>{description}</p>
    </div>
  )
}

export default FollowUs