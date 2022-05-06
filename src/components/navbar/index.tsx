import * as C from './style'
import logo from '../../images/logo.png'

export const NavBar = () => {

    const list = document.querySelectorAll('.list');
    function activeLink(this: HTMLElement) {
        list.forEach((item) =>
            item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) =>
        item.addEventListener('click', activeLink));

    return (
        <C.Container>
            <div className="navigation">
                <li className="logo">
                    <a href="#logo">
                        <span className="icons"><img src={logo} width={40} alt="" /></span>
                        <span className="title">BRUNO.</span>
                    </a>
                </li>
                <ul>
                    <li className="list active">
                        <a href="#home">
                            <span className="icons"><i className="icon ion-md-home"></i></span>
                            <span className="title">Home</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#projects">
                            <span className="icons"><i className="icon ion-md-code"></i></span>
                            <span className="title">Projetos</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#about">
                            <span className="icons"><i className="icon ion-md-folder"></i></span>
                            <span className="title">Sobre</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#contact">
                            <span className="icons"><i className="icon ion-md-contact"></i></span>
                            <span className="title">Contato</span>
                        </a>
                    </li>

                </ul>
            </div>
        </C.Container>
    )
}