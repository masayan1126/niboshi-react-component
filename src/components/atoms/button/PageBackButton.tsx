import { ReactNode } from 'react';

type Props = {
    className: string
    onClick: () => void
    children: ReactNode
    testId: string
    disabled: boolean
}

const PageBackButton = (props: Props) => {
  const {className, onClick, children, disabled, testId } = props;

  return (
    <button className={className} onClick={onClick} disabled={disabled} data-test-id={testId}>
      {children}
    </button>
  );
}

export default PageBackButton;