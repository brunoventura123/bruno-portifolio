import * as C from './style'
import { ProjectItem } from './projectItem'
import { List } from './projectItem/list'

export const Projects = () => {
    return (
        <C.Container>
            <h2 id='projects'>PROJETOS</h2>
            <div className="container">
                {List.map((i, k) =>
                    <ProjectItem key={k} img={i.img} title={i.title} link={i.link} />
                )}
            </div>

        </C.Container>
    )
}