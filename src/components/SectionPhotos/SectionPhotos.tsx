import { useEffect } from 'react'
import { VscChevronDown } from 'react-icons/vsc'
import PhotoSwipeLightbox from 'photoswipe/lightbox'

import 'photoswipe/style.css'
import './SectionPhotos.css'

interface Props {
    heading: string,
    photos: string[],
    width: number,
    height: number,
    arrow?: boolean
}

const SectionPhotos: React.FC<Props> = ({ photos, heading, width, height, arrow }) => {
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '.photos',
            children: 'a',
            pswpModule: () => import('photoswipe')
        })

        lightbox.init()
    })

    const handlerScroll = (headingPar: string) => {
        if (headingPar === 'Móda') {
            window.scrollTo({
                top: window.innerHeight + window.innerHeight,
                behavior: 'smooth',
            })
        } else {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
            })
        }
    }

    return (
        <section className='section-photos'>
            <h4>{heading}</h4>
            <div className='photos'>
                {
                    photos.map((photo: string, index: number) => {
                        return (
                            <a
                                href={photo}
                                target="_blank"
                                data-pswp-width={width}
                                data-pswp-height={height}
                                key={index}
                            >
                                <img src={photo} alt='fotogalerie' />
                            </a>
                        )
                    })
                }
            </div>
            {arrow && <VscChevronDown onClick={() => handlerScroll(heading)} />}
        </section>
    )
}

export default SectionPhotos