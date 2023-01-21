import React from 'react';
import Label from '../atoms/Label';
import TextInput from '../atoms/TextInput';

type Props<T> = {
    input: {
        className: string
        maxLength: number
        name: string
        value: T
        id: string
        type: string
        required: boolean
        placeholder?: string
        tabindex?: string
        readonly?: boolean
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    }

    label: {
        text: string,
        for: string
    }
}

// const [value, setValue] = useState("");

// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(event.target.value);
// }

// const input = {
//     className: "",
//     maxLength: 3,
//     name: "",
//     value,
//     id: "id",
//     type: "text",
//     onChange: handleChange,
// }
// const label = {
//     text: "好きな具材",
//     for: "select-one"
// }

const TextInputField = <T extends string | number,>(props: Props<T>) => {
  const { type, id, placeholder, onChange, value, className, maxLength, name, required } = props.input
  const { text, for: labelFor } = props.label;

  return (
    <>
        <Label htmlFor={labelFor} text={text} />
        <TextInput
            className={className}
            maxLength={maxLength}
            name={name}
            required={required}
            value={value}
            id={id}
            onChange={onChange} 
            type={type}
            placeholder={placeholder}
        />
    </>
  );
}

export default TextInputField;