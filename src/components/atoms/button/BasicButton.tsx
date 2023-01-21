import React from 'react';

type Props = React.ComponentProps<"button"> & 
{
    testId: string;
} 

const Button = (props: Props) => {
  const {testId, ...nativeProp} = props

  return (
    <button
        {...nativeProp}
        data-test-id={testId}
    >
    </button>
  );
}

export default Button;