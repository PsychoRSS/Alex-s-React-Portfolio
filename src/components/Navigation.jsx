import {Link} from 'react-router-dom'


export default function Nav () {

    return (
        <div>
        <nav>
            <ul>
                <Link to="#hiker">refratored </Link>
                <Link to="#refratored">Hiking website</Link>
                <Link to="#project-3">Porject 3</Link>
                <Link to="#project-4">Project 4</Link>
            </ul>
        </nav>
        </div>
    )
}