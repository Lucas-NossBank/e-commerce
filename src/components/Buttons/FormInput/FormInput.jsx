import { useState } from 'react';
import { useController } from 'react-hook-form';
import { InputContainer } from './styles';


function InputWithLabel({ label, type, name, control }) {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const {
        field: { ref, value, onChange },
        fieldState: { invalid, isTouched, isDirty, error },
      } = useController({ name, control });

    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
    };
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
      onChange(event.target.value);
    };
  
    const shouldLabelFloat = inputValue.length > 0 || isFocused;

  return (
    <InputContainer>
      <label className={shouldLabelFloat ? 'label-up' : ''}>{label}</label>
      <input
        type={type}
        name={name}
        value={value || ''}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        ref={ref}
      />
      {isTouched && isDirty && invalid && (
        <span className="error">{error?.message}</span>
      )}
    </InputContainer>
  );
}

export default InputWithLabel;