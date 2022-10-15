import React from 'react'
import { Link, useOutletContext } from 'react-router-dom';

export default function Gallery() {
  const { base_url, images } = useOutletContext();

  return (
    <div className='gallery_container'>
      {images.map(image => {
        return (
          <div className='gallery_image' key={image.id}>
            <Link to={`/gallery/${image.id}/${image.name}`}>
              <img src={`${base_url}/${image.id}/${image.name}.jpg`} alt={image.name} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}
