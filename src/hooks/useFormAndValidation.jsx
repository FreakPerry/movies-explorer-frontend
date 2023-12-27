import { useState, useCallback } from 'react';

function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [messages, setMessage] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setMessage({ ...messages, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newMessage = {}, newIsValid = false) => {
      setValues(newValues);
      setMessage(newMessage);
      setIsValid(newIsValid);
    },
    [setValues, setMessage, setIsValid]
  );

  return { values, handleChange, messages, isValid, resetForm, setValues, setIsValid };
}

export default useFormAndValidation;
