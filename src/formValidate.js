import * as yup from 'yup';



//~~~~~~~~~~~~~~~~~~Validation~~~~~~~~~~~~~~~~~~\\

//start of schema\\
const formValidate = yup.object().shape({
name: yup.string()
.trim()
.min(3, 'Name must be at least three characters long')
.required('Your name is required'),
size: yup.string(),
// sauce: yup.string().required('Sauce type required'),
sauce: yup.boolean().oneOf([true]),
toppings: yup.boolean(),
instructions: yup.string(),
});
//end of schema\\

export default formValidate