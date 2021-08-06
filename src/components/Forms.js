import React, {useState} from 'react'


export default function Forms() {

    const[input, setInput]  = useState({
        firstName: '',
        email: '',
    });
    const   handleChange = (e)=>{
        setInput({...input, [e.target.name]: e.target.value})
        console.log(input); 
    };

    const handleSubmit = (e)=> {
      e.preventDefault();
      if (input.firstName && input.email){
          alert(`Thank you ${input.firstName}`);
      }   else{
          alert('all input must be filled');
      }   
    };

    return (
        <div>
            <form>
            <input type="text" onChange={(e)=>handleChange(e)} name="firstName"/>
            <input type="text" onChange={(e)=>handleChange(e)} name="email"/>
            <button onClick={handleSubmit}> Submit</button>
            </form>
        </div>
    )
}
