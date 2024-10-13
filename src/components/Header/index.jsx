import './styles.css'

export default function Header() {
    function goToAbout(){
        window.scrollTo(0, 200)
    }

    function goToTechnologies(){
        window.scrollTo(0, 400)
    }

    function goToProjects(){
        window.scrollTo(0, 800)
    }

    function goToTastes(){
        window.scrollTo(0, 1500)
    }

    function goToContact(){
        window.scrollTo(0, 1500)
    }

    return (
        <header>
            <div class="content">
                <h1>CodigoCerto</h1>
                <div class="header-links">
                    <button>Inicio</button>
                    <button onClick={goToAbout}>Sobre</button>
                    <button onClick={goToTechnologies}>Tecnologias</button>
                    <button onClick={goToProjects}>Projetos</button>
                    <button onClick={goToTastes}>Motivações</button>
                    <button onClick={goToContact}>Contato</button>
                </div>
            </div>
        </header>
    )
}