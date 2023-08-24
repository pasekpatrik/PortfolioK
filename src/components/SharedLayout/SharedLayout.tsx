import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPenFancy, faBook } from '@fortawesome/free-solid-svg-icons'
import { BounceLoader } from 'react-spinners'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'
import Footer from '../Footer/Footer'


const SharedLayout: React.FC = () => {
    const [fade, setFade] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(true)

    useEffect(() => {
        const menu = document.querySelector('.nav-menu') as HTMLDivElement

        const timeout1 = setTimeout((): void => {
            setLoader(false)
            setFade(true)
        }, 3000)

        const timeout2 = setTimeout((): void => {
            menu.addEventListener('click', handlerClick)
        }, 1000)

        return () => {
            menu.removeEventListener('click', handlerClick)
            clearTimeout(timeout1)
            clearTimeout(timeout2)
        }
    }, [])

    const handlerClick = () => {
        setFade(true)
    }

    setTimeout(() => {
        setFade(false)
    }, 1000)

    return (
        <>
            <header >
                <NavBar />
            </header>
            <main className={fade ? 'fade' : ''} >
                <Outlet />
                <SideBar />
                <FontAwesomeIcon icon={faCamera} className='cameras' id='camera1' />
                <FontAwesomeIcon icon={faCamera} className='cameras' id='camera2' />
                <FontAwesomeIcon icon={faPenFancy} id='pencil' />
                <FontAwesomeIcon icon={faBook} id='book' />
            </main>
            <footer>
                <Footer />
            </footer>
            <div className={loader ? 'container-loader' : ''}>
                <BounceLoader color="#3f3542" size={150} loading={loader} />
            </div>
        </>
    )
}

export default SharedLayout