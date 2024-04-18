import '../assets/css/card.css'
import { useNavigate } from 'react-router-dom';


type Props = {
    name : string,
    imge : string
}

function Card({name,imge} : Props) {

    const navigate = useNavigate()


    const handleMuscle = () => {    

        navigate( `/muscle/${name}` )

    }


    return (  
        <div className="card__data" onClick={() => handleMuscle()}>
            <img src={imge} alt="" className='card__img' />
            <h1 className='card__tittle' >{name}</h1>          
        </div>

    );
}


export default Card;