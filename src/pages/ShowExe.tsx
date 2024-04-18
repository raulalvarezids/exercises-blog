import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Exer from "../interfaces/exe";
import CardEjer from "../components/CardEjer";
import '../assets/css/show.css'
import back from '../assets/images/icons/back.svg'
import { useNavigate } from "react-router-dom";

function ShowExe() {
    let { muscle } = useParams();
    const navigate = useNavigate() 
    const [ejer,setEjer] = useState<Exer[]>([])


    const handleGet = async () => {
        

        const options = {
        method: 'GET',
        url:  `https://exercisedb.p.rapidapi.com/exercises/target/${muscle}`,
        params: {limit: '10'},
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_HOST
        }
        };

        try {
            const response = await axios.request<Exer[]>(options);            
            setEjer(response.data)
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
            }


            
    useEffect(()=> { 
        handleGet()    
    },[])


    const handleNavigate = () => {        
        navigate('/')
    }

    return (  
        <div>   

            <div className="show__ejer__title">
                
                <img src={back} alt=""  className="back__img" onClick={() => handleNavigate()}/>                                        
                                
                <h1 className="back__tittle"> <span className="muclse__name">Muscle:</span> {muscle}</h1>
            </div>
            
            <div className="all__ejer__container">
            
            {
               ejer.length > 0 ? ejer.map(e => <CardEjer key={e.name} name={e.name} secondaryMuscles={e.secondaryMuscles} bodyPart={e.bodyPart} equipment={e.equipment} id={e.id} gifUrl={e.gifUrl} target={e.target} instructions={e.instructions} ></CardEjer>) : null
            }
            </div>
        </div>

    );
}

export default ShowExe;