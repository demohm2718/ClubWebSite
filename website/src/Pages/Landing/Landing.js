import React from 'react'; 
import SlideShow from './Components/Slideshow';
import Banner from './Components/Banner';
import Schedule from './Components/Schedule';
import Fountains from './Components/Accordians'; 
<<<<<<< HEAD
//import FresnoStateLogo from './Util/fslogo.png'; //Changed to CsciLogo
import CSciLogo from '../../Util/logo.png'; 
=======
import CSciClubLogo from '../../Util/logo.png'; 
>>>>>>> c6251beb5004c842bc9a1200d6386784bb27e006
import TechLogo from './Util/techs.png';
import Data from './Util/text_landing.json'; 

const Landing = (props) => {


    return (
        <div> 
            <SlideShow />
            <Banner 
                mainText={Data.mission.mainText} 
<<<<<<< HEAD
                img={CSciLogo} 
=======
                img={CSciClubLogo} 
>>>>>>> c6251beb5004c842bc9a1200d6386784bb27e006
                header={Data.mission.header} 
                direction={Data.mission.direction} 
                spinType={Data.mission.spinType}
                height={Data.mission.height}
                style={Data.mission.style}
            /> 
            <Banner 
                mainText={Data.events.mainText} 
                img={TechLogo} 
                header={Data.events.header} 
                direction={Data.events.direction} 
                spinType={Data.events.spinType}
                height={Data.events.height}
                style={Data.events.style}
            /> 

            <Schedule />

            <Fountains />
            
        </div>
    )
}

export default Landing; 

