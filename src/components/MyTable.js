import React, { useState } from 'react';
import TableHeader from './TeableHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableRow from './TeableRow';


function MyTable() {
  // Declare a new state variable, which we'll call "studentList"
  const [studentList, setstudentList] = useState([
    {
      id:1,
      firstname: "Amir ",
      lastname:"kian",
        age: 29,
    },
    {
      id:2,
      firstname: "Narges ",
      lastname:"Hekmatnia",
        age: 38,
    },
    {
      id:3,
      firstname: "Ali ",
      lastname:"Baradran",
        age: 30,
    }
]);

  return (
    <table className='table '>
<TableHeader></TableHeader>
<tbody>
{studentList.map((student)=>
        <TableRow obj={student}></TableRow>
  
    )}
</tbody>
    </table>
  );
}

export default MyTable;


