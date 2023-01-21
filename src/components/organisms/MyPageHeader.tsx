import PageBackButton from "../atoms/PageBackButton";
import Header from "./Header";

function MyPageHeader() {
  return (
    <Header style={{ "display": "flex", justifyContent: "space-between" }} className={""}>
        <div className="left">
            <PageBackButton 
                className={""} 
                onClick={() => console.log("click!!")} 
                testId={""} 
                disabled={false}>
            ＜
            </PageBackButton>
        </div>
        <div className="center">サービス名</div>
        <div className="right">🍔</div>
    </Header>
  );
}

export default MyPageHeader;