import React from "react";
import ProgressBar from "../atoms/ProgressBar";

type Props = React.ComponentProps<"progress"> & 
{
    title: string;
    ratio: string;
}

const RecommendableProductRatioBar = React.memo(({title, ratio, ...nativeProp}: Props) => {
  return (
    <>
        <p>
            <span>{title}</span>
            <span>{ratio}%</span>
        </p>
        <ProgressBar value={nativeProp.value}/>
        {/* タグの間のテキストは、ブラウザが非対応の場合に表示される
        <progress value={nativeProp.value} max={nativeProp.max || "100"}>{`${nativeProp.value}%`}</progress> */}
    </>
  );
})

export default RecommendableProductRatioBar;