import React, { useState, useEffect } from 'react';
//start of my imports\\
import {Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import * as yup from 'yup';
import axios from 'axios';
import formValidate from './formValidate'





function App() {

 //start of consts\\ 
 const initialError = {
  name: '',
  size: '',
  sauce: '',
  toppings: '',
  instructions: '',
  }
 const initialOrder = []
 const initialFormState = {
     name: '',
     size: '',
     sauce: '',
     toppings: {},
     instructions: '',
 }
 const initialDisabled = true
//~~~~~~~~~~~~~~~~~~STATES~~~~~~~~~~~~~~~~~~\\
const [order, setOrder] = useState(initialOrder)
const [disabled, setDisabled] = useState(initialDisabled)
const [formState, setFormState] = useState(initialFormState);

const [errors, setErrors] = useState(initialError);

//~~~~~~~~~~~~~~~~~~start of post~~~~~~~~~~~~~~~~~~\\

const postNewOrder = newOrder => {

axios.post('https://reqres.in/api/users', newOrder)
.then(res => {
setOrder([res.data, ...order])

})
.catch(err => {
debugger
})
.finally(() => {
setFormState(initialFormState)
})
}


//event handlers\\
//import validatechange to app js to apply to form component
//basically my onInput hanlder

const validateChange = evt => {
  const name = evt.target.name
  const value = evt.target.value
yup.reach(formValidate, name)
.validate(value)
.then(valid => {
setErrors({ ...errors, [name]: '' })
})
.catch((err) =>{
setErrors({ 
  ...errors, [name]: err.errors[0]
 })
})

setFormState({
  ...formState,
  [name]: value
})

}

const onCheckboxChange = evt =>{
const {name} = evt.target
const {checked} = evt.target
setFormState({
...formState,
//added for toppings - HARDEST PART BECAUSE I FORGOT TO USE A SPREAD METHOD TOPPINGS. 1 HOUR WASTED DEBUGGING >:( !!!
toppings: { 
  ...formState.toppings,
[name]: checked,
}

})

}
const onSubmit = evt => {
// debugger
evt.preventDefault() //prevents from refreshing
const newOrder = {
name: formState.name.trim(),
size: formState.size,
sauce: formState.sauce.trim(),
toppings: Object.keys(formState.toppings).filter(topping => {
  return formState.toppings[topping] === true
}),
instructions: formState.instructions,
}
postNewOrder(newOrder)



}  


                  
useEffect(() => {

  formValidate.isValid(formState)
    .then(valid => {
      setDisabled(!valid)
    })
}, [formState])              
                  







  
  return (
    <>
  
      <nav> 

      <h1>Lambda Eats</h1>
      <li> 

      <Link to='/'>Home</Link>
      <Link to='/pizza'>Order</Link>
      </li>
      </nav>
   
        
      <Switch>
        
        
          <Route exact path='/' >
          <Home/>
          </Route>
          
          

        
          
         <Route exact path='/pizza'>
           <Form
           validateChange={validateChange}
           onCheckboxChange={onCheckboxChange}
           onSubmit={onSubmit}
           disabled={disabled}
           errors={errors}
           values={formState}
           
           />
           
           
           </Route>

      </Switch>


      { order.map(order => {
          return ( 
            <div key = {order.id}> 
            <h2> {order.name} </h2>
            <h4> {order.size} </h4>
            <h4> {order.sauce} </h4>
            
            {/* <h3> {order.toppings} </h3> */}

            {
        !!order.toppings && !!order.toppings.length &&
        <div>
          <h4> toppings:</h4>
          <ul>
            {order.toppings.map((like, idx) => 
            <li key={idx}>
              {like}</li>)}
          </ul>
        </div>
        
      }
      <div> Special instruction </div>
      <h4>  {order.instructions} </h4>

            </div> 
          )


        }
          )}

    </>
  );
};
export default App;
