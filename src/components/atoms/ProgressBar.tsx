import React from "react";

type Props = React.ComponentProps<"progress">

const ProgressBar = React.memo(({...nativeProp}: Props) => {
  return (
    <>
        {/* タグの間のテキストは、ブラウザが非対応の場合に表示される */}
        <progress value={nativeProp.value} max={nativeProp.max || "100"}>{`${nativeProp.value}%`}</progress>
    </>
  );
})

export default ProgressBar;