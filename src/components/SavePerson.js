import React from 'react';
import { useForm } from 'react-hook-form';
import axios  from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function SavePerson() {
  
  const {register,handleSubmit,errors}=useForm();

  const onSubmit=(data)=>{


    axios.post('http://localhost:60359/api/person/AddPerson', {
      PersonName: data.PersonName,
      PersonPhoneNumber: data.PersonPhoneNumber
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

}
  return (
<form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
  {errors}
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label"> Name</label>
    <input type="text" className="form-control" name='PersonName' id="inputEmail4" {...register("PersonName", {required: "Required", })}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">PhoneNumber</label>
    <input type="text" className="form-control" name='PersonPhoneNumber' id="inputAddress" {...register("PersonPhoneNumber", { required: "Required", })} />
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">ADD </button>  <button type="reset" className="btn btn-defult">Reset </button>
  </div>
</form>
  );
}
export default SavePerson;