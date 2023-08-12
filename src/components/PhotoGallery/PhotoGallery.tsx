import { useState, useEffect } from 'react'
import { BounceLoader } from 'react-spinners'
import { creation } from '../../data/creation'
import { fashion } from '../../data/fashion'
import { portraits } from '../../data/portraits'

import SectionPhotos from '../SectionPhotos/SectionPhotos'

import './PhotoGallery.css'

const PhotoGallery: React.FC = () => {
    const [hide, setHide] = useState<boolean>(false)

    useEffect(() => {


        const timeout = setTimeout(() => {
            setHide(true)
        }, 2500)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <>
            <div className='container-photo'>
                <SectionPhotos
                    heading='Volná tvorba'
                    photos={creation}
                    width={300}
                    height={200}
                    arrow
                />
                <SectionPhotos
                    heading='Móda'
                    photos={fashion}
                    width={300}
                    height={450}
                    arrow
                />
                <SectionPhotos
                    heading='Portréty'
                    photos={portraits}
                    width={300}
                    height={200}
                />
            </div>
            <div
                className={hide ? 'hide' : ''}
                id='container-loader-photo'
            >
                <BounceLoader
                    color="#3f3542"
                    size={150}
                />
            </div>
        </>
    )
}

export default PhotoGallery