import React, { ReactNode } from 'react';

type Props = {
    className: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    children: ReactNode
    testId: string
    disabled: boolean
}

const Button = (props: Props) => {
  const {className, onClick, children, disabled, testId } = props;

  return (
    <button className={className} onClick={onClick} disabled={disabled} data-test-id={testId}>
      {children}
    </button>
  );
}

export default Button;