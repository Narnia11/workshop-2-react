import React from 'react';
import TableAction from './TeableAction';

function TableRow(props) {
  console.log('props:',props)
  console.log('props obj :',props.obj)
  console.log('props obj id :',props.obj.id)
  console.log('props obj personName :',props.obj.personName)
  console.log('props obj city :',props.obj.city)
  console.log('props obj personPhoneNumber :',props.obj.personPhoneNumber)
  return (
    <tr >
    <th>{props.obj.id}</th>
    <th>{props.obj.personName}</th>
    <th>
    { //Check if message failed
        (props.obj.city!=null&&props.obj.city.name.length >0)
          ? <div> {props.obj.city.name}  </div> 
          : <div> </div> 
      }
</th>
    <th>{props.obj.personPhoneNumber}</th>
    <th>
      <TableAction id={props.obj.id}></TableAction>
    </th>
        </tr>

  );
}

export default TableRow