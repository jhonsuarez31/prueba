import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ Form, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        console.log(value)
        setFormState({
            ...Form,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }
    const onSubmit= (event)=>{
        event.preventDefault()
        console.log(Form)
    }

    return {
        ...Form,    
        Form,
        onInputChange,
        onResetForm,
        onSubmit
    }
}