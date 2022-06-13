// import React, { useState,useEffect } from 'react';
// import axios  from 'axios';
// import TableHeader from './TeableHeader';
// import TableRow from './TeableRow';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Switch, Route, useLocation} from 'react-router-dom';



// function PersonDetails(props) {
//   const location = useLocation();
// //it runs for firsttime ,due to having second parameter as empthy array
//   useEffect(()=>{
//     debugger;
//     console.log('person detian props:',props);


//     console.log(' id:',location.state.id );
//     axios.get('http://localhost:60359/api/person/'+location.state.id).then((res)=>{
//   console.log('res:',res);

//  const ResponseData=res.data;
//  console.log('ResponseData:',ResponseData);

//  setPersonDetial(ResponseData);
//  console.log('PersonDetial.id',PersonDetial);


// })
//   },[])

//   useEffect(() => {
//     axios.get('http://localhost:60359/api/person/'+location.state.id)
//       .then((res) => res.json())
//       .then((data) => {
//         setPersonDetial(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);


//   const [PersonDetial, setPersonDetial] =  useState([]);;

//   return (
//     <div className="app">
//       <h2> students 📫</h2>

//       {PersonDetial.map((item) => (
//         <TableRow key={item.id} obj={item}></TableRow>
//       ))}
//     </div>
//   );
//     }
// export default PersonDetails;