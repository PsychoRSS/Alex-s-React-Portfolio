import {Link} from 'react-router-dom'

export default function Project () {

    return (
        <div class="wrap">
            
        <Link  to="https://psychorss.github.io/UMN-Module-1/"  id="hiker" class="projects" >
            
            <p>Refratored Project</p>
        </Link>
        
        <Link to="https://starbys-cup-corner-96ccb198e09a.herokuapp.com/" id="refratored" class="projects">
            
            <p>starbys-cup-corner-96ccb198e09a 2</p>
        </Link>

        <Link to="https://jpbigley.github.io/parks-weather-app/" id="project-3" class="projects" >
            <p>Hiking api</p>
          
        </Link>
        
        <Link to="https://psychorss.github.io/Cat-Picker/" id="project-4" class="projects" >
            <p>Pet Picker</p>
           
        </Link>
        </div>
    )
}