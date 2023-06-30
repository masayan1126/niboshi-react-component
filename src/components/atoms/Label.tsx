import React from "react";

{/* <Label testId='' htmlFor='ge'>
    <TextInput 
        className='' maxLength={50} name="a" testId={'ddd'} required={true} 
        value="3" id="3" type="text" placeholder="" tabIndex={1} readOnly={false} onChange={() => console.log("A")}
    />
</Label> */}

type Props = React.ComponentProps<"label">

const Label = React.memo(({...nativeProp}: Props) => {
  

  return (
    <label 
        {...nativeProp}
    >
    </label>
  );
})

export default Label;