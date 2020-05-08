
// write your custom hook here to control your checkout form
import {useState} from 'react';
import {initialValue} from '../components/CheckoutForm';

export const useForm = () => {    
    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
   
      const [showSuccessMessage, setShowSuccessMessage] = useState(false);  

    return [values, handleChanges, showSuccessMessage, setShowSuccessMessage]
};


