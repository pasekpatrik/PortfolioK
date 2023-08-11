import image from '../images/img3.webp'

const About: React.FC = () => {
    return <>
        <article>
            <h2>Kateřina Kortanová</h2>
            <p>Mám svůj specifický cit pro umění, z mých fotek jde nevšední dojem. <br />Nejvíc mě zajímají fotografie lidí, které zachycují atmosféru (rodinné, párové, těhotenské,reportáž, stylizovaná móda). <br /> Ve své volné tvorbě se zaměřuji na estetickou souhru člověka s barvami.</p>
        </article>
        <figure>
            <img src={image} alt="About photo" width={500} height={333} />
        </figure>
    </>
}

export default About