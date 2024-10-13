import CaioImg from '../../assets/me.jpg'
import './styles.css'

import codeBurgerImg from '../../assets/codeburger.png'
import devBillsImg from '../../assets/devb.png'
import kingsBarberImg from '../../assets/KingsBarber.png'
import travelBuddyImg from '../../assets/travelbuddy.png'
import diarioDeTreinosImg from '../../assets/diario-treinos.png'
import developerImg from '../../assets/developer-motivation.webp'

import Carousel from 'react-elastic-carousel'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa"
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithubSquare } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Home() {
    const projectsImg = [
        { 
            image: codeBurgerImg, altImg: 'Code Burger', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7174057842935513091/',
            description:'Site de hamburgueria completo, com sistema de cadastro/login, produtos, ofertas e carrinho, além de uma página de administrador para controlar os pedidos e seus status. Entre as tecnologias utilizadas foram principalmente React, Styled-components, Material UI, Node.js, API REST, PostgreSQL, MongoDB, Docker, Express.js e foi utilizado o modelo MVC'
        },
        { 
            image: diarioDeTreinosImg, altImg: 'Diario de Treinos', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7244446075942522881/',
            description:'Essa aplicação se trata de um sistema de anotações de treinos, tanto particulares quanto públicos, ou seja, você consegue deixar o treino público e até mesmo compartilhá-lo por link. Foi utilizado as tecnologias React, TypeScript, Next.js, Tailwind CSS e Firebase'
        },
        { 
            image: devBillsImg, altImg: 'Dev Bills', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7176993607889862656/',
            description: 'Site de organização dos seus gastos, saldos e finanças, o qual mostra as informações em gráficos e o usuário consegue criar categorias e filtrar pela data. Entre as tecnologias utilizadas foram principalmente React, Styled-components, Typescript, Node JS, Express.js, MongoDB e Docker'
        },
        { 
            image: travelBuddyImg, altImg: 'Travel Buddy', link: 'https://travel-buddy-beige.vercel.app/', 
            description: 'Projeto de um Sistema de Reservas de Hoteis e Resorts. Essa aplicação conta com avaliações dos clientes, recomendações de viagens e foto das principais atrações turísticas da Indonesia. Foi utilizado React, Typescript, Next.js e Tailwind CSS'
        },
        { 
            image: kingsBarberImg, altImg: 'Kings Barber', link: 'https://kings-barber.vercel.app/',
            description: 'Site de uma barbearia, com seções de cortes de cabelo, localização e agendamento, sendo o usuário capaz de escolher o tipo de corte e adicionar o seu nome. Foi utilizado as tecnologias React, Vite, Typescript, Styled-components e Radix-UI'
        },
    ]

    return (
        <main>
            <section className="profile">
                <div className="title-container">
                    <img className="caio-image" src={CaioImg} alt="imagem-do-caio" />
                    <h2>Caio César Lima Miranda <br />
                        <span>Desenvolvedor Full-Stack</span>
                    </h2>
                </div>
            </section>

            <section className="about-me">
                <h2>Sobre Mim</h2>
                <p>Desenvolvedor Full Stack focado em React, com experiência desde 2022 em projetos como e-commerces, gestores financeiros e blogs, utilizando
                     no front end principalmente tecnologias como <span> React, JavaScript, HTML, CSS, Git e conhecimentos de UI/UX. </span> <br /> <br />
                    No Back End, possuo conhecimento em <span>Node.js e REST APIs</span>, com o uso de <span>TypeScript e JavaScript</span>, utilizando bancos relacionais e não-relacionais e ferramentas como <span>Express.js, Sequelize, Mongoose</span>.
                </p>

                {/* <p>
                    Desde novo, sempre gostei de jogar <span>xadrez</span>, inclusive participei de diversos torneios inclusive um nacional. 
                    Essa paixão por pensar e agir de forma estratégica me fez fortalecer minha base de estudos na programação, e assim, 
                    realizar cada vez mais projetos complexos na área de Desenvolvimento Web.
                </p>
    
                <p>
                    Sei o quanto ainda tenho pra crescer e contribuir pra sociedade com o desenvolvimento de sites. 
                    O <span>CodigoCerto</span> me chamou atenção, pois como <span>voluntariado</span> posso realizar mais projetos e <span>trabalhar em equipe</span>, o que torna a programação mais produtiva.
                </p>  */}
            </section>

            <section className='technologies'>
                <div className='technologies-container'>
                    <div className='technologies-item'>
                        <FaReact size={80} color='red'/>
                        <p>React</p>
                    </div>

                    <div className='technologies-item'>
                        <FaNodeJs size={80} color='red'/>
                        <p>Node.js</p>
                    </div>

                    <div className='technologies-item'>
                        <RiJavascriptFill size={80} color='red'/>
                        <p>JavaScript</p>
                    </div>

                    <div className='technologies-item'>
                        <BiLogoTypescript size={80} color='red'/>
                        <p>TypeScript</p>
                    </div>

                    <div className='technologies-item'>
                        <SiNextdotjs size={80} color='red'/>
                        <p>Next.js</p>
                    </div>

                    <div className='technologies-item'>
                        <FaHtml5 size={80} color='red'/>
                        <p>HTML</p>
                    </div>

                    <div className='technologies-item'>
                        <FaCss3Alt size={80} color='red'/>
                        <p>CSS</p>
                    </div>

                    <div className='technologies-item'>
                        <FaGithubSquare size={80} color='red'/>
                        <p>Git</p>
                    </div>

                    <div className='technologies-item'>
                        <RiTailwindCssFill size={80} color='red'/>
                        <p>Tailwind CSS</p>
                    </div>

                    <div className='technologies-item'>
                        <DiMongodb size={80} color='red'/>
                        <p>MongoDB</p>
                    </div>

                    <div className='technologies-item'>
                        <BiLogoPostgresql size={80} color='red'/>
                        <p>PostgreSQL</p>
                    </div>
                </div>
            </section>

            <section className='projects'>
                <h2>Principais Projetos</h2>

                <Carousel itemsToShow={3}>
                    {
                        projectsImg.map(item => (
                            <div className='project-item' key={item.link}>
                                <a target='_blank' href={item.link} rel="noreferrer">
                                    <img className='img-project' src={item.image} alt={item.altImg} />
                                </a>
                                <div className='project-content'>
                                    <p className='project-name'>{item.altImg}</p>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </section>

            <section className='personal-tastes'>
                <h2>Gostos Pessoais / Motivações</h2>

                <div className='personal-tastes-content'>
                    <img src={developerImg} alt='imagem de um programador'/>

                    <p>
                        Desde novo, sempre gostei de jogar <span>xadrez</span>, inclusive participei de diversos torneios inclusive um nacional. 
                        Essa paixão por pensar e agir de forma estratégica me fez fortalecer minha base de estudos na programação. <br /> <br />

                        Além disso, antes de programar, passei por períodos de profunda desmotivação, mas um dia disse pra mim mesmo que queria lutar contra isso,
                        então comecei a estudar Desenvolvimento Web no curso DevClub, fazer atividades físicas e me envolver em comunidades de desenvolvedores, que tem contribuído
                        bastante para a minha comunicação. <br/> <br />

                        Com todos esses acontecimentos, tenho realizado cada vez mais projetos complexos na área de Desenvolvimento Web, tanto Front-End quanto Back-End. <br/> <br />

                        O <span>CodigoCerto</span> me chamou atenção, pois como <span>voluntariado</span> posso realizar mais projetos e <span>trabalhar em equipe</span>, o que torna a programação mais produtiva.
                    </p>
                </div>
            </section>
        </main>
    )
}