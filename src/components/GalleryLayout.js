import React from 'react'
import { Outlet } from 'react-router-dom'

export default function GalleryLayout() {
    const image_links = [
        'https://i.postimg.cc/4N4z5Bcc/bubble.jpg',
        'https://i.postimg.cc/sgv5FxwD/fendai.jpg',
        'https://i.postimg.cc/26pQ7Ydj/honey-milk.jpg',
        'https://i.postimg.cc/rw3xqTPG/iceberg.jpg',
        'https://i.postimg.cc/VNtM6hxx/macaroon.jpg',
        'https://i.postimg.cc/8cNLxbnq/matcha.jpg',
        'https://i.postimg.cc/JnbbTFKN/planet.jpg',
        'https://i.postimg.cc/fTHYgm7r/retro.jpg',
        'https://i.postimg.cc/ZYx8p1WZ/shiba-inu.jpg',
        'https://i.postimg.cc/W3PZJnjh/shimmer.jpg',
        'https://i.postimg.cc/qRX3c3MQ/virtual-war.jpg',
        'https://i.postimg.cc/hGKgzz6K/colored-pen.jpg',
        'https://i.postimg.cc/XYf4Yc22/plastic.jpg',
        'https://i.postimg.cc/GmwbRSj8/revelation.jpg',
    ]

    const images = image_links.map(link => ({id: link.slice(21, 29), name: link.slice(30, -4)}))

    return (
        <>
            <div className='gallery_layout'>
                <a href='https://postimg.cc/gallery/Pq94TxT'>Image Source</a>
            </div>
            <Outlet context={{ base_url: 'https://i.postimg.cc/', images: images }} />
        </>
    )
}
