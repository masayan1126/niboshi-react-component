import React from 'react';

type Props = React.ComponentProps<"button"> & 
{
    testId: string;
} 

const Button = ({testId, ...nativeProp}: Props) => {

  return (
    <button
        {...nativeProp}
        data-test-id={testId}
    >
    </button>
  );
}

export default Button;