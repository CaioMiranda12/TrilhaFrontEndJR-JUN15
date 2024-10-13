import './styles.css'

export default function Footer() {
    return (
        <footer>
            <div className='footer-content'>
                <div>
                    <span>Telefone</span>
                    <p>(85) 9 8959-7168</p>
                </div>

                <div>
                    <span>GitHub:</span>
                    <a target="_blank" href="https://github.com/CaioMiranda12">https://github.com/CaioMiranda12</a>
                </div>

                <div>
                    <span>LinkedIn</span>
                    <a href="https://www.linkedin.com/in/caio-miranda-ofc" target="_blank">https://www.linkedin.com/in/caio-miranda-ofc</a>
                </div>
            </div>
        </footer>
    )
}