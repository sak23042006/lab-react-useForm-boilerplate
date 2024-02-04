import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useForm} from "react-hook-form"

const FormUse = () => {
    
    const { register,handleSubmit,watch,reset,formState: { errors,isSubmitSuccessful }} = useForm()
    
    const formSubmitHandler = (data) =>{
        console.log("data :",data);
        toast("Form Submitted Successfully",{
            theme:'dark'
        })

    }
    
    // {!isSubmitSuccessful && }



return (

    
    <div style={{marginTop:"0px"}} className='form-container'>
    <fieldset id='legend'>
        <legend>Fill this form</legend>
        <form  onSubmit={handleSubmit(formSubmitHandler)} style={{padding:"50px"}} >
            <div className='success'>
                {isSubmitSuccessful && <p id="successMsg">Registration Successful</p>}
            </div>

        <ToastContainer />

        <label> First Name:</label>
        <input type="text" name='firstName' placeholder='First Name' {...register("firstName",{
                required:"Fill First Name",
                minLength :{
                value:4,
                message:"Minimum 4 charecters Required"
            }
        })}  />

        {errors.firstName && toast("Enter your First Name") && <p className='err' >{errors.firstName.message}</p> }



        <label> Last Name:</label>
        <input type="text" name='lastName' placeholder='last Name' {...register("lastName",{
                required:"Fill Last Name",
                minLength :{
                value:4,
                message:"minimum 4 charecters Required"
            }
        })}  />

        {errors.lastName && toast("Enter your Last Name") && <p className='err' >{errors.lastName.message}</p> }


        <label> Email:</label>
        <input type="email" name='email' placeholder='email'  {...register("email",{
            required:"Enter a Valid Email",pattern:{
                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            }
        })} />

        {errors.email && toast("Enter a Valid Email") && <p className='err' >{errors.email.message}</p> }


        <label> Password</label>
        <input type="text" name='Password' placeholder='Password number' {...register("Password",{
                required:"PassWord Required",
                minLength :{
                value:8,
                message:"Minimum 8 charecters Required"
            },pattern :{
                value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/
            }
        })}   />

        {errors.Password && toast("Enter a Valid Password") && <p className='err' >{errors.Password.message}</p> }


        <input style={{marginTop:"50px"}}  type="submit" value={"Register"}   />

        <button onClick={()=>{
            reset()
        }} >
            Reset
        </button>


        </form>
    </fieldset>
    
    </div>
);
};

export default FormUse;