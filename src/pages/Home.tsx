import axios from "axios";
import { useEffect, useState } from "react";
import toast, {Toaster} from 'react-hot-toast'
import Card from "../components/Card";
import { images } from "../interfaces/images";

import '../assets/css/home.css'
import Nav from "../components/Nav";


function Home() {


    const [data,setData] = useState<string[]>([])        
    const [sdata,SetSdata] = useState<string[]>([])    


    const getData = async ()  => {                
        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_KEY,
                'X-RapidAPI-Host': import.meta.env.VITE_HOST
            }
        };

        try {
            const response = await axios.request<string[]>(options);
            setData(response.data)                      
            SetSdata(response.data)                              

        } catch (error) {
            console.error(error);
            toast.error('Sorry, try later', { duration: 1500 });
        }                
    }
    
    useEffect(()=> {        
        getData()               
    },[])
    
        

    const handleSearch = (e : React.ChangeEvent<HTMLInputElement> ) => {
             if(e.target.value !== ''){
                SetSdata(data.filter(s => s.toLowerCase().startsWith(e.target.value.toLowerCase())))
            }else{
                SetSdata(data)
            }                                      
    }

    return (  
        <div> 
                       
            <Nav onsearch={handleSearch}></Nav>
            <Toaster
                    position="top-center"
                    reverseOrder={false}            
            />            
                        
            
            <div className="allconatiner">
        

            {
             sdata && sdata.map((e, index) => (<Card name={e} key={index} imge={images[index]}></Card>) ) 

            }                                                       


            </div>
        </div>

    );
}

export default Home;