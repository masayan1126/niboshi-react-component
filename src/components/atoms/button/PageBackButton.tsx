import React, { ReactNode } from 'react';
import BasicButton from './BasicButton';
import pageBackButton from "./PageBackButton.module.css"

type Props = {
    testId: string;
    children: ReactNode
} 

const PageBackButton = React.memo(({testId, children}: Props) => {

  return (
    <BasicButton testId={testId} className={pageBackButton.btn}>
        {children}
    </BasicButton>
  );
})

export default PageBackButton;