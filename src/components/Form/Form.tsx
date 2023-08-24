import { useState } from 'react'
import { BiMessageCheck, BiMessageError } from "react-icons/bi";
import emailjs from '@emailjs/browser'

import './Form.css'

const Form: React.FC = () => {
    const [fullName, setFullName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const [modal, setModal] = useState<boolean>(false)
    const [all, setAll] = useState<boolean>(false)

    const sendEmail = (e: React.SyntheticEvent) => {
        e.preventDefault()

        if (fullName && email) {
            const paramsUser = {
                from_name: fullName,
                from_email: email,
                message: message
            }

            emailjs.send('service_4nma87d', 'template_lf5z50k', paramsUser, 'YQas67PsLX9amK9G6')
            setAll(true)
        }

        setTimeout(() => {
            setModal(false)
            setAll(false)
        }, 4000)

        setFullName('')
        setEmail('')
        setMessage('')
        setModal(true)
    }

    return (
        <>
            <form onSubmit={sendEmail} >
                <div className="container-input">
                    <label>Jméno a přijmení *</label>

                    <input
                        type="text"
                        className={fullName ? "input-text" : 'input-text error'}
                        id="input-name"
                        onChange={(e) => setFullName(e.target.value)}
                        value={fullName}
                    />

                </div>
                <div className="container-input">
                    <label>E-mail *</label>

                    <input
                        type="email"
                        className={email ? "input-text" : 'input-text error'}
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
                <input type="submit" id="submit" value="odeslat" />
            </form>
            <div id='error' className={modal ? 'show' : ''}>
                {
                    all ?
                        <div>
                            <span>Formulář byl odeslán</span>
                            <BiMessageCheck />
                        </div> :
                        <div>
                            <span>Vyplňte povinná pole *</span>
                            <BiMessageError />
                        </div>
                }
            </div>
        </>
    )
}

export default Form