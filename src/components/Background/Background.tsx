import './Background.css'

interface Props {
    children: React.ReactNode
}

const Background: React.FC<Props> = ({ children }) => {
    return (
        <div className='background'>
            {children}
        </div>
    )
}

export default Background