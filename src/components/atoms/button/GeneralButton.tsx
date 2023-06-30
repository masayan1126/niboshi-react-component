import React, { ReactNode } from 'react';
import BasicButton from './BasicButton';
import generalButtonStyle from "./GeneralButton.module.css"

type Props = {
    testId: string;
    children: ReactNode
} 

const GeneralButton = React.memo(({testId, children}: Props) => {

  return (
    <BasicButton testId={testId} className={generalButtonStyle.btn}>
        {children}
    </BasicButton>
  );
})

export default GeneralButton;