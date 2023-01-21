import React from 'react';

type Props = React.ComponentProps<"input"> & 
{
    testId: string;
}

{/* <TextInput 
    className='' maxLength={50} name="a" testId={'ddd'} required={true} 
    value="3" id="3" type="text" placeholder="" tabIndex={1} readOnly={false} onChange={() => console.log("A")}
/> */}

const TextInput = (props: Props) => {
    const {testId, ...nativeProp} = props

    return (
        <input 
            {...nativeProp}
            data-test-id={testId}
        />
    );
}

export default TextInput;