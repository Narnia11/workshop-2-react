import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';

function TableAction(props) {
const navigate=useNavigate();


const handleClick = (e) => {
  axios.get('http://localhost:60359/api/person/DeletePerson/'+props.id).then((res)=>{
    
    const ResponseData=res.data;
    console.log('person deleted message :',ResponseData);
    navigate('/CrudDemo/');

   
   })
};



  return (
    <div>
<button type="button" className="btn btn-info"onClick={() => navigate('/PersonDetail/'+props.id,{state:{id:props.id}})}>Details</button> 
<button type="button" className="btn btn-danger"onClick={handleClick}>Delete</button> 
    </div>



  );
}

export default TableAction