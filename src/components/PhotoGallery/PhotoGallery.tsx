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
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <>
            <div className='container-photo'>
                <SectionPhotos
                    heading='Volná&nbsp;tvorba'
                    photos={creation}
                    width={220}
                    height={150}
                    width_spwp={300}
                    height_spwp={200}
                />
                <SectionPhotos
                    heading='Móda'
                    photos={fashion}
                    width={150}
                    height={225}
                    width_spwp={300}
                    height_spwp={450}
                />
                <SectionPhotos
                    heading='Portréty'
                    photos={portraits}
                    width={220}
                    height={150}
                    width_spwp={300}
                    height_spwp={200}
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