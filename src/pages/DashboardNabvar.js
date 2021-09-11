import React, { useContext, useState } from 'react';
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import { UserContext } from '../App';


const DashboardNabvar = () => {
    // const [show,setShow] = useState(false)
    const [show,setShow] = useContext(UserContext)

    return (
        <div className="container shadow bg-white my-2 position-relative">
        
   {
       show? 
       < AiOutlineArrowLeft onClick={()=>setShow(!show)}/>
       :
       < AiOutlineArrowRight onClick={()=>setShow(!show)}/>
    
               
           
   }
            
        </div>
    );
};

export default DashboardNabvar;