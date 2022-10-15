import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

export default function Image() {
    const { id, name } = useParams()
    const { base_url, images } = useOutletContext();

    const foundImage = images.find(image => image.id === id && image.name === name);

    return (
        <div className='image_container'>
            {foundImage ?
                <img src={`${base_url}/${id}/${name}.jpg`} alt={name} /> :
                <div className='invalid_image'>Invalid Image URL</div>
            }
        </div>
    )
}