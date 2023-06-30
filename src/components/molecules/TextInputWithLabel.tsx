import React from 'react';
import Label from '../atoms/Label';
import TextInput from '../atoms/input/TextInput';
import Badge from '../atoms/badge/Badge';

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
        readOnly?: boolean
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    }

    label: {
        className: string
        text: string,
        labelFor: string
    }
}

// const [value, setValue] = useState("");

// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(event.target.value);
// }

{/* <TextInputWithLabel<string>
    input={{
        className: '',
        maxLength: 0,
        name: '',
        value: '',
        id: 'input-1',
        type: '',
        required: true,
        placeholder: "",
        onChange: function (event: ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.');
        }
    }} 
    label={{
        className: "",
        text: 'お名前',
        labelFor: 'input-1'
    }}
/> */}

const TextInputWithLabel = <T extends string | number,>(props: Props<T>) => {
  const { text, labelFor } = props.label;

  return (
    <>
        <Label htmlFor={labelFor}>
            {text}
            {props.input.required && <Badge className='' style={{ background: "red" }}>必須</Badge>}
            <TextInput
                {...props.input}
                testId=""
            />
        </Label>
    </>
  );
}

export default TextInputWithLabel;