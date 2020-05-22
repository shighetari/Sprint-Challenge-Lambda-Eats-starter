import React, { useState, useEffect } from 'react';


export default function Form(props) {

    //props\\
    const {
        values,
        validateChange,
        onSubmit,
        errors,
        onCheckboxChange,
        disabled

    } = props
   
    // const what = values.name
    // debugger
    
    //~~~~~~~~~~~~~~~~~~toppings~~~~~~~~~~~~~~~~~\\
    const toppings = [
        'Pepperoni',
        'Sausage',
        'Canadian Bacon',
        'Spicy Italian Sausage',
        'Grilled Chicken',
        'Onions',
        'Green Pepper',
        'Diced Tomatos',
        'Black Olives',
        'Roasted Garlic',
        'Artichoke Hearts',
        'Three Cheese',
        'Pineapple',
        'Extra Cheese',
    ];

    const sauces = [
        'Original Red',
        'Garlic Ranch',
        'BBQ Sauce',
        'Spinach Alfredo',
    ];







// start of pizza creation\\
    return (

        
<form className = 'form container' onSubmit={onSubmit}>
    <div>
        <h2>Add a User </h2>
       {/* rendering validation errors here */}
       <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
       
        </div>
     
      {/* end of validation */}
        
        <div className='orderForm'>
            <h2>Create Your Own Pizza</h2>
            <label>
                        Name:&nbsp;
                        <input
                            name='name'
                            type='text'
                            value={values.name}
                            onChange={validateChange}
                            placeholder='Your name'
                        />
                        </label>

                        {/* start of pizza size  */}

                        <h3>Choice of Size</h3>
                        <p>
                        <em>Required</em>
                        </p>
                            {/* start of select options */}
                        <div className='size'>
                        <select 
                        name='size'
                        value={values.size}
                            onChange={validateChange} >
                            
                        <option > --Select your size--</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        </select>
                        </div>
                        {/* end of pizza size */}


                        {/* start of Sauces */}

                        <h3>Choice of Sauce</h3>
                        
                        {/* mapping over the sauces */}
                        {sauces.map((sauce) => (
                        
                            <div>
                                <label>
                                    
                                    <input
                                    value={sauce}
                                    onChange={validateChange}
                                        type='radio'
                                        name='sauce'
                                       
                                        
                                        
                                    />
                                    {sauce}
                                </label>
                            </div>
                        
                    ))}

                    {/* start of toppings */}

                <h3>Add Toppings</h3> 
                <p>
                <em>Choose up to 10</em>
                </p>
{/* prob the hardest part */}

                <div className='toppings'> 
                    {toppings.map((topping) => 
                    (
                        <>
                            <div>
                                <label>
                                    <input
                                        checked={values.toppings[topping]}
                                        type='checkbox'
                                        name={topping}
                                        onChange={onCheckboxChange}
                                    />
                                    {topping}
                                </label>
                            </div>
                        </>
                    ))}
                </div>

                {/* instructions */}

                <h3>Special Instructions</h3>
                <div >
                    
                    <textarea
                    type= 'text'
                    name='instructions'
                    value={values.instructions}
                    onChange={validateChange}
                     placeholder='special instructions go here'
                   /> 
                </div>
                
                {/* submit button */}
                <div> 
                <button>Submit Order</button>
                </div>




           
        </div>  
        </div>
</form>

        // end of form 
    );
}