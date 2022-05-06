import * as C from './style'

export const Contact = () => {
    return (
        <C.Container id='contact'>
            <h2 className='subtitle'>CONTATO</h2>
            <div className="container">
                <div className="contactForm">
                    <h2>Enviar Mensagem</h2>
                    <form action="https://formsubmit.co/brunoventura70@gmail.com" method='post' className="formBox">{/*action='../../php/contact.php'*/}
                        <div className="inputBox w50">
                            <input type="text" name="nome" required />
                            <span>Nome</span>
                        </div>

                        <div className="inputBox w50">
                            <input type="text" name="email" required />
                            <span>E-mail</span>
                        </div>
                        <div className="inputBox w100">
                            <textarea name="mensagem" required></textarea>
                            <span>Escreva sua mensagem...</span>
                        </div>
                        <div className="button">
                            <button><span>Enviar</span></button>
                        </div>
                    </form>
                </div>
            </div>

        </C.Container >
    )
}