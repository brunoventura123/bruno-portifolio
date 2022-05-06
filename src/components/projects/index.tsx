import * as C from './style'
import { CardItem } from '../card'
import { List } from '../card/list'

export const Projects = () => {
    return (
        <C.Container>
            <h2 id='projects'>PROJETOS</h2>
            <div className="container">
                {List.map((i, k) =>
                    <CardItem key={k} img={i.img} title={i.title} link={i.link} />
                )}
            </div>

        </C.Container>
    )
}