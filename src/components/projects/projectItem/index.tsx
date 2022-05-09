import * as C from './style'

type Props = {
    img: string;
    title: string;
    link: string
}

export const ProjectItem = ({ img, title, link }: Props) => {

    return (
        <C.Container>
            <div className="container">
                <div className="box">
                    <div className="imgBx">
                        <img src={img} alt='' />
                    </div>
                    <div className="content">
                        <h2>{title}</h2>
                        <a href={link} target="_blank" rel='noreferrer'>Ver mais</a>

                    </div>

                </div>

            </div>
        </C.Container>
    )
}