import {ReactNode } from "react";

type Props = {
    children: ReactNode
    className: string
    style: object
}

function Header(props: Props) {
  const {children, className, style} = props;
  return (
    <header>
      <div style={style}>
        {children}
      </div>
    </header>
  );
}

export default Header;