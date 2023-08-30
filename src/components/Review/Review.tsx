import './Review.css'

const Review: React.FC = () => {
    return (
        <div className="review">
            <figcaption>
                <div id="circle"></div>
            </figcaption>
            <div className="user">
                <h3>Jana Nováková</h3>
                <span>jana.novakova@gmail.com</span>
            </div>
            <div className="icon">

            </div>
            <div className="text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum esse voluptas dolorem consequatur
                    veniam fuga illo voluptatem quibusdam, quidem veritatis obcaecati! Repudiandae nisi at blanditiis fugiat
                    perferendis quas tenetur rerum?
                </p>
            </div>
        </div>
    )
}

export default Review