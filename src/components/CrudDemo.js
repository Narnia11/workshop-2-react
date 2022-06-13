import React, { useState,useEffect } from 'react';
import axios  from 'axios';
import TableHeader from './TeableHeader';
import TableRow from './TeableRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function CrudDemo(props) {
  const navigate=useNavigate();
//it runs for firsttime ,due to having second parameter as empthy array
  useEffect(()=>{
    debugger;
axios.get('http://localhost:60359/api/person/getpersons').then((res)=>{

 const ResponseData=res.data;

  setPersonList(ResponseData);

})
  },[])
  const [PersonList, setPersonList] = useState();

  return (
    <div className="app">
      <h2>All students <span role="img" aria-labelledby="love">📫</span>
</h2>
      <button type="button" className="btn btn-info"onClick={() => navigate('/SavePerson/')}>Add Person</button> 


      <table className="table" >
              <TableHeader></TableHeader>
              <tbody>
              {PersonList&&PersonList.map((student,i) => {
         return (
           
          <TableRow key={student.id} obj={student}></TableRow>
                

         );
      })}

</tbody>

            </table>

    </div>
  );
    }
export default CrudDemo;