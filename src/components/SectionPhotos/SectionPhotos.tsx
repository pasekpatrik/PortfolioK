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

const SectionPhotos: React.FC<Props> = ({ ...props }) => {
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
            <h4>{props.heading}</h4>
            <div className='photos'>
                {
                    props.photos.map((photo: string, index: number) => {
                        return (
                            <a
                                href={photo}
                                target="_blank"
                                data-pswp-width={props.width}
                                data-pswp-height={props.height}
                                key={index}
                            >
                                <img src={photo} alt='fotogalerie' />
                            </a>
                        )
                    })
                }
            </div>
            {props.arrow && <VscChevronDown onClick={() => handlerScroll(props.heading)} />}
        </section>
    )
}

export default SectionPhotos