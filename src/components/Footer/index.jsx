import './styles.css'

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <footer>
            <div className='footer-content'>
                <div>
                    <span>Telefone</span>
                    <p>(85) 9 8959-7168</p>
                </div>

                <div className='footer-midia'>
                    <a href='https://github.com/CaioMiranda12'>
                        <FaGithubSquare size={40} color='red' />
                    </a>

                    <a href='https://www.linkedin.com/in/caio-miranda-ofc/'>
                        <FaLinkedin size={40} color='red' />
                    </a>
                </div>
            </div>
        </footer>
    )
}