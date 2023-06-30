import React from "react";

type Props = React.ComponentProps<"span">

const Badge = React.memo((props: Props) => {
  return (
    <span
        {...props}
    > 
    </span>
  );
})

export default Badge;