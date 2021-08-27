import React, { useState } from 'react';
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";


const DashboardNabvar = () => {
    const [show,setShow] = useState(false)

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