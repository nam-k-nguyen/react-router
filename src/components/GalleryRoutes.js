import React from 'react'
import { Routes, Route } from "react-router-dom";
import Gallery from './Gallery';
import Image from './Image'
import NotFound from "./NotFound";
import GalleryLayout from "./GalleryLayout";

export default function GalleryRoutes() {
    return (
        <Routes>
            <Route element={<GalleryLayout />}>
                <Route index element={<Gallery />} />
                <Route path=':id/:name' element={<Image />} />
                <Route path='*' element={<NotFound />}></Route>
            </Route>
        </Routes>
    )
}
