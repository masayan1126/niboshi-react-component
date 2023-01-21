import React from 'react';
import BadgeRequire from '../atoms/badge/BadgeRequire';
import Label from '../atoms/Label';
import TextInput from '../atoms/input/TextInput';

type Props<T> = {
    input: {
        className: string
        maxLength: number
        name: string
        required: boolean
        value: T
        id: string
        type: string
        placeholder?: string
        tabindex?: string
        readonly?: boolean
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    }

    withLabel: boolean

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

const CartInputField = <T extends string | number,>(props: Props<T>) => {
  const { required } = props.input
  const {withLabel} = props
  const { text, for: labelFor } = props.label;

  return (
    <div>
        <div>
            {
                withLabel && 
                    <Label testId='gege'>
                        <TextInput
                        {...props.input}
                            testId=""
                        />
                    </Label>
            }
            {
                required && 
                    <BadgeRequire />
            }
        </div>
        
    </div>
  );
}

export default CartInputField;