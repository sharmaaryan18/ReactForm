import React, { useState } from "react";


function App() {
  

  const[formData, setFormData] = useState( {firstName: "", lastName: "", email: "", comments:"", mode:"", isVisible:true,favCar:""});

  console.log(formData)


  function ChangeHandler(event) {
    const{name,value,checked,type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value
        [name]:type ==="checkbox" ? checked : value
      }
    }
    );
    
  }

  function submitHandler(event) {
    event.preventDefault();
    //print
    console.log("Entire Form Data:=>");
    console.log(formData);
  }

  return (
  <div className="text-center">
    <form onSubmit={submitHandler}>
      <input
      type="text"
      placeholder="first name"
      onChange={ChangeHandler}
      name="firstName"
      value ={formData.firstName}
      />
<br/>
<br/>
<input
      type="text"
      placeholder="last name"
      onChange={ChangeHandler}
      name="lastName"
      value ={formData.lastName}
      />

<br/>
<br/>
<input
      type="email"
      placeholder="Enter your email here"
      onChange={ChangeHandler}
      name="email"
      value={formData.email}
      />

<br/>
<br/>
    <textarea 
    placeholder="Enter your comments here: "
    onChange={ChangeHandler}
    name="comments"
    value={formData.comments}
    />
    <br/>
<br/>
   <input
   type="checkbox"
   onChange={ChangeHandler}
   name="isVisible"
   id="isVisible"
   checked={formData.isVisible}
   />
   <label htmlFor="isVisible"> Am I VISIBLE ?</label>

<br/>
<br/>

  <fieldset>
    <legend>Mode:</legend>
    <input
  type="radio"
  onChange={ChangeHandler}
  name="mode"
  value="Online-Mode"
  id="Online-Mode"
  checked={formData.mode==="Online-Mode"}
  />
  <label htmlFor="Online-Mode">Online Mode</label>

  <br/>
<br/>

  <input
  type="radio"
  onChange={ChangeHandler}
  name="mode"
  value="Offline-Mode"
  id="Offline-Mode"
  checked={formData.mode==="Offline-Mode"}
  />
  <label htmlFor="Offline-Mode">Offline Mode</label>
  </fieldset>


  <label htmlFor="favCar">Tell me your favourite Car  </label>
  <select onChange={ChangeHandler}
    name="favCar" 
    value={formData.favCar}
    id="favCar">
      
      <option value="scorpio">Scorpio</option>
      <option value="fortuner">fortuner</option>
      <option value="Thar">Thar</option>
      <option value="BMW">BMW</option>
      <option value="Ferrari">Ferrari</option>
      <option value="Lexus">Lexus</option>
  </select>

  <br/>
<br/>
  <button>Submit</button>

  {/* <input type="submit" value="submit"/> */}
    </form>
 </div>
  );
};

export default App;





