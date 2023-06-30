import React from 'react';
import basicButtonStyle from "./BasicButton.module.css"

type Props = React.ComponentProps<"button"> & 
{
    testId: string;
} 

const BasicButton = React.memo(({testId, className: moreClass, ...nativeProp}: Props) => {

  return (
    <button
        {...nativeProp}
        className={`${basicButtonStyle.base} ${moreClass}`}
        data-test-id={testId}
    >
    </button>
  );
})

export default BasicButton;