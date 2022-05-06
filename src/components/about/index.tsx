import * as C from './style'
import I from '../../assets/imgs/aboutImg/I.png'

export const About = () => {
    return (
        <C.Container id='about'>
            <h2 className='subtitle'>SOBRE</h2>
            <div className='area-card'>
                <div className="card">
                    <div className="imgBox">
                        <img src={I} alt='' />
                        <img src={I} alt='' />
                    </div>
                    <div className="details">
                        <div className="content">
                            <h2>Sou Bruno Ventura<br /><span>Desenvolvedor Web</span></h2>
                            <p>Tenho 38 anos, casado, resido em Capelinha-MG e atuo no desenvolvimento web, dando soluções para seus problemas ao divulgar sua marca, produto ou mostrar ao mundo seu trabalho.</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/caturafacil" target="_blank" rel='noreferrer'><i className="fa fa-facebook" aria-hidden="true" ></i></a>
                                <a href="https://github.com/brunoventura123" target="_blank" rel='noreferrer'><i className="icon ion-logo-github"></i></a>
                                <a href="https://www.linkedin.com/in/brunoventura6/" target="_blank" rel='noreferrer'><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                <a href="https://api.whatsapp.com/send?phone=55339999943444&text=Olá, tudo bem. Em que posso ajudar?" target="_blank" rel='noreferrer'><i className="icon ion-logo-whatsapp"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBox">
                        <img src={I} alt='' />
                        <img src={I} alt='' />
                    </div>
                    <div className="details">
                        <div className="content">
                            <h2>Minhas habilidades<br /><span>Nas tecnologias de desenvolvimento</span></h2>
                            <p>Desenvolvo usando HTML, CSS, SASS, webpack, Bootstrap, React, Typescript, Tailwindcss, Next e outras bibliotecas.</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/caturafacil" target="_blank" rel='noreferrer'><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="https://github.com/brunoventura123" target="_blank" rel='noreferrer'><i className="icon ion-logo-github"></i></a>
                                <a href="https://www.linkedin.com/in/brunoventura6/" target="_blank" rel='noreferrer'><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                <a href="https://api.whatsapp.com/send?phone=55339999943444&text=Olá, tudo bem. Em que posso ajudar?" target="_blank" rel='noreferrer'><i className="icon ion-logo-whatsapp"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </C.Container>
    )
}