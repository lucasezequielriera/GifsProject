import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './index';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category)

    console.log(isLoading, images)

    return (
        !isLoading ? <>
        <h1> {category} </h1>

        <div className='card-grid'>
            {images.map((image) =>
                <GifItem key={image.id} image={image} {...image} />
            )}
        </div>
    </> : <h2>Cargando...</h2>
    )
}
