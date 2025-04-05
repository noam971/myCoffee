import { useState } from "react"
import Authentication from "./Authentication"
import Modal from "./Modal"
import { useAuth } from "../context/AuthContext"

export default function Layout(props) {
    const { children } = props

    const [showModal, setShowModal] = useState(false)

    const { globalUser, logout } = useAuth()

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">Coffee Tracker</h1>
                <p>For coffee insatiates</p>
            </div>
            {globalUser ? (
                <button onClick={ logout }>
                    <p>Logout</p>
                </button>
            ) : (
                <button onClick={() => {setShowModal(true)}}>
                    <p>Sign up free</p>
                    <i className="fa-solid fa-mug-saucer"></i>
                </button>
            )}
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">My Coffee</span> was made by Noam971 <br /> using the
             <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a> design library.
             <br />Check out the project on <a target="_blank" href="!#">Github</a>!</p>
        </footer>
    )
    

    return (
        <>  
            {showModal && (<Modal handleCloseModal={() => { setShowModal(false) }}>
                <Authentication handleCloseModal={() => { setShowModal(false) }}/>
            </Modal>
            )}
            {header}
            <main>
                {children}
            </main>
            {footer}
            
        </>
    )
}
