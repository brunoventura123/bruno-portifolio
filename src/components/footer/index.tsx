import * as C from './style'

export const Footer = () => {
    return (
        <C.Container>
            <section>
                <ul>
                    <li><a href="https://www.facebook.com/caturafacil"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="https://github.com/brunoventura123" target="_blank"><i className="icon ion-logo-github"></i></a></li>
                    <li><a href="https://www.instagram.com/bv_dev/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/brunoventura6/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=55339999943444&text=Olá, tudo bem. Em que posso ajudar?" target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                </ul>
            </section>

            <div className='credit'>&copy; Produzido por <a id="footer-link" href="mailto:brunoventura70@gmail.com">Bruno Ventura</a></div>
        </C.Container>
    )
}