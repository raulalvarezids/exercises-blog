import Exer from "../interfaces/exe";
import '../assets/css/cardejer.css'
import ardw from '../assets/images/icons/arrowwhite.svg'
import {  useState } from "react";



function CardEjer({bodyPart,equipment,gifUrl,id,instructions,name,secondaryMuscles,target} : Exer) {
    
    const [show,setShow] = useState<boolean>(false)
    
    const handlShow = () => {
        setShow(!show)
    }      


    


    
    return (
        
        <div className="card__ejer__main">     

            <div className="name__container">
                <h2 className="name" onClick={()=> handlShow()}> {name}</h2>
                <img src={ardw} alt=""  className={!show ? "arrowdown" : "arrowdown changer"} onClick={()=> handlShow()}/>
            </div>
            

            <div className={show ? 'content__data  showcard' : 'content__data'}>

                <img src={gifUrl} alt=""  className="img__exersi"/>                

                <span className="body"><b className="bds">BodyPart:</b> {bodyPart}</span>
                <span className="equipamiento"><b className="bds">Equipment:</b> {equipment}</span>


                
                <div className="container__instruc">
                    <b className="ins__tittle">Instructions:</b>
                    <ul className="instruc">
                        {instructions.map((e) => <li className="item__ul" key={e}>{e}</li>)}
                    </ul>            
                </div> 
            </div>
                                                                        

        </div>
      );
}

export default CardEjer;