import { useState } from 'react'
import emailjs from '@emailjs/browser'

import './Form.css'

const Form: React.FC = () => {
    const [fullName, setFullName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const sendEmail = (e: any): void => {
        e.preventDefault()

        if (fullName && email) {
            const paramsUser = {
                from_name: fullName,
                from_email: email,
                message: message
            }

            emailjs.send('service_4nma87d', 'template_lf5z50k', paramsUser, 'YQas67PsLX9amK9G6')
        }

        setFullName('')
        setEmail('')
        setMessage('')
    }

    return (
        <form onSubmit={sendEmail} >
            <div className="container-input">
                <label>Jméno a přijmení *</label>

                <input
                    type="text"
                    className="input-text"
                    id="input-name"
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                />

            </div>
            <div className="container-input">
                <label>E-mail *</label>

                <input
                    type="email"
                    className="input-text"
                    id="input-email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

            </div>
            <div className="container-input">
                <label>Zpráva</label>

                <textarea
                    name="textarea"
                    cols={8}
                    rows={5}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />

            </div>
            <input type="submit" id="submit" value="Odeslat" />
            <div id="container-error">

            </div>
        </form>
    )
}

export default Form