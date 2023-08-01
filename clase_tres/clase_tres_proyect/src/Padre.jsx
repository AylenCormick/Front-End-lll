import './App.css';
import Hijo from './Hijo';

function Padre() {
    return (
        <div className='Padre'>
            <Hijo producto="Cd Evermore" precio="19.89"/>
            <Hijo producto="Cd Evermore firmado" precio="20.20"/>
            <Hijo producto="Vinil Evermore" precio="19.89"/>
        </div>
    )
}

export default Padre;