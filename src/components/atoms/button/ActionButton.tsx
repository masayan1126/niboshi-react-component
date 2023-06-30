import React, { ReactNode } from 'react';
import BasicButton from './BasicButton';
import actionButtonStyle from "./ActionButton.module.css"

type Props = React.ComponentProps<"button"> & 
{
    testId: string;
    children: ReactNode
}

const ActionButton = React.memo(({testId, children}: Props) => {

  return (
    <BasicButton testId={testId} className={actionButtonStyle.btn}>
        {children}
    </BasicButton>
  );
})

export default ActionButton;