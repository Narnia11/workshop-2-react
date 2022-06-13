import React, { useState,useEffect } from 'react';
import axios  from 'axios';
import TableHeader from './TeableHeader';
import TableRow from './TeableRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation} from 'react-router-dom';

function PersonDetails() {
  const location = useLocation();
  // Empty array in useState!
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:60359/api/person/GetPerson/'+location.state.id).then((res)=>{
    
     const ResponseData=res.data;
     console.log('person detial ResponseData:',ResponseData);
    
     setData(ResponseData);
    
    })
      },[])

  return (
<div>
  <h3>perosn Detail</h3>
  <table>
  <TableHeader></TableHeader>
  <tbody>
  <TableRow key={data.id} obj={data}></TableRow>

  </tbody>
  </table>


</div>
  );
}
export default PersonDetails;