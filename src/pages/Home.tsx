/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef } from 'react'
// @ts-ignore
import Typed from 'typed.js'
import image from '../images/img1.webp'
import Background from '../components/Background/Background'

const Home: React.FC = () => {
    const heading = useRef<HTMLSpanElement | null>(null)

    useEffect(() => {
        const typed = new Typed(heading.current, {
            strings: ['Kateřina', 'Fotografka', 'Umělkyně'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        })

        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <>
            <Background>
                <article id='home-article'>
                    <h1 className='main-heading'>Zdravím,&nbsp;jsem<br /><span className='main-heading' ref={heading}></span></h1>
                </article>
                <figure>
                    <img src={image} alt="Main photo" width={500} height={333} />
                </figure>
            </Background>
        </>
    )
}

export default Home