import { useEffect } from "react"
import * as C from './styles'

export const Up = () => {
    useEffect(() => {
        let scrolls = document.querySelector('.scroll') as HTMLHtmlElement
        scrolls.style.display = 'none'
    }, [])
    function decidir() {
        let scrolls = document.querySelector('.scroll') as HTMLHtmlElement
        if (window.scrollY > 500) {
            scrolls.style.display = 'block'
        } else {
            scrolls.style.display = 'none'
        }
    }
    window.addEventListener('scroll', decidir)

    function screenUp() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <C.Container onClick={screenUp} className="scroll">
            <i className="icon ion-md-arrow-up"></i>
        </C.Container>
    )
}