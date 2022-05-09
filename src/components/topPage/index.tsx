import * as C from './style'
import face from '../../assets/imgs/homeImg/facebook.png'
import linkedin from '../../assets/imgs/homeImg/linkedin.png'
import github from '../../assets/imgs/homeImg/github.png'

export const TopPage = () => {
    /*
    let skewedOne = document.querySelector('.skewedOne') as HTMLElement
    let skewedTwo = document.querySelector('.skewedTwo') as HTMLElement
    window.addEventListener('scroll', function () {
        let value1: number = -15 + window.scrollY / 45;
        let value2: number = 15 + window.scrollY / -45;
        skewedOne.style.transform = "skewY(" + value1 + "deg)";
        skewedTwo.style.transform = "skewY(" + value2 + "deg)";
    });
    */
    const toggle = () => {
        var sec = document.getElementById('sec') as HTMLDivElement
        var nav = document.getElementById('navigation') as HTMLDivElement
        sec.classList.toggle('active')
        nav.classList.toggle('active')
    }
    const navActive = () => {
        toggle()
    }
    return (
        <C.Container id='home'>
            <section className="banner" id="sec">.
                <div className='info'>
                    <header>
                        <a href="#home" className="logo">Bruno.</a>
                        <div id='toggle' onClick={toggle}></div>
                    </header>

                    <div className="content">
                        <h3>Olá, eu sou</h3>

                        <div className="loader">
                            <div>Bruno Ventura </div>
                            <div>
                                <span> Desenvolvedor Web</span>
                            </div>
                        </div>

                        <p>Sou desenvolvedor web focado em solucionar suas necessidades relacionadas a expor sua marca, produtos ou mostrar ao mundo quem você é e o que faz.
                            Com design moderno e atraente ao seu público específico.</p>
                        <a href="mailto:brunoventura70@gmail.com">Fale comigo</a>
                    </div>
                </div>
                <ul className="sci">
                    <li><a href="https://www.facebook.com/caturafacil"><img src={face} alt='' /></a></li>
                    <li><a href="https://github.com/brunoventura123"><img src={github} alt="" /></a></li>
                    <li><a href="https://www.linkedin.com/in/brunoventura6/"><img src={linkedin} alt='' /></a></li>
                </ul>
            </section>
            <div id="navigation" onClick={navActive}>
                <span>BRUNO.</span>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>
        </C.Container >
    )
}