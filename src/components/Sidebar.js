import React, { useContext, useState } from 'react'; import { CgProfile } from "react-icons/cg";
import { GoListUnordered } from "react-icons/go";
import { AiFillFolderAdd,AiOutlineArrowLeft } from "react-icons/ai";
import { IoMdPersonAdd } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../App';



const Sidebar = () => {
 

 
 



  return (
    <>

     

  <div className="border col-md-4 col-sm-4 col-6">
    

  <ul class="nav flex-column">
    <li className="mt-4">
      <CgProfile fontSize="2em" /> <Link className="text-decoration-none text-dark m-2" to="/dashboard/report"><b>Profile</b></Link>
    </li>
    <li className="mt-4">
      <GoListUnordered fontSize="2em" /> <Link className="text-decoration-none text-dark m-2" to="/dashboard/products"><b> OrderList</b></Link>
    </li>
    <li className="mt-4">
      <AiFillFolderAdd fontSize="2em" /> <a className="text-decoration-none text-dark m-2" href="#"><b>Add Service</b></a>
    </li>
    <li className="mt-4">
      <IoMdPersonAdd fontSize="2em" /> <a className="text-decoration-none text-dark m-2" href="#"><b>MakeAdmin</b></a>
    </li>
  </ul>

  


</div>


      
     




    </>

  );
};

export default Sidebar;