import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import './App.css';
import imgSample2 from "./1.jpg";
import BasicButton from './components/atoms/button/BasicButton';
import { Accordion } from './components/molecules/Accordion';
import Calculator from './components/molecules/Calculator';
import Carousel from './components/molecules/Carousel';
import StackConcreate from './StackConcreate copy';
import TextInputWithLabel from './components/molecules/TextInputWithLabel';
import ProgressBar from './components/atoms/ProgressBar';
import ProgressBarWithTitle from './components/organisms/RecommendableProductRatioBar';
import RecommendableProductRatioBar from './components/organisms/RecommendableProductRatioBar';
import MyPageLinkMenuItems, { LinkMenuItem } from './components/organisms/MyPageLinkMenuItems';
import ActionButton from './components/atoms/button/ActionButton';
import GeneralButton from './components/atoms/button/GeneralButton';
import PageBackButton from './components/atoms/button/PageBackButton';


function App() {

    const [ageStack, setAgeStack] = useState<string[]>([])
    const [inputValue, setInputValue] = useState<string>("")
    const [marged, setMerged] = useState<string>("")

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const stack = new StackConcreate([...ageStack])

        if (e.currentTarget.textContent !== null) {
            stack.push(e.currentTarget.textContent)
            setAgeStack(stack.all())
        
        }

    }

    const handleClear = () => {
        const stack = new StackConcreate([...ageStack])
        stack.pop()
        setAgeStack(stack.all())
        // setMerged(prev => ageStack.join("") + prev)
    }

    const deleteA = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);

        if (e.target.value !== null) {
            setInputValue(prev => {
                const merged = prev + e.target.value
                setMerged(prev => ageStack.join("") + merged)
                return merged
            })
        }
    }

    const list: LinkMenuItem[] = [
        {text: "ホーム", to: "/"},
        {text: "ログアウト", to: "/logout"},
        {text: "注文履歴", to: "/orders"},
    ]
    
    
    return (
    <div className="App">
        <div style={{ paddingTop:"100px" }}>

        </div>
        <div style={{ maxWidth: "300px" }}>
            <ActionButton testId={'e2e-action-btn'}>登録する</ActionButton>
            <br/>
            <GeneralButton testId={'e2e-action-btn'}>確認する</GeneralButton>
            <br/>
            <PageBackButton testId={'e2e-action-btn'}>戻る</PageBackButton>
        </div>

        <MyPageLinkMenuItems testId={''} listItems={list} ulClass={''} liClass={''} aClass={''}/>

        {/* <RecommendableProductRatioBar value={"60"} title={'コメンド可能な商品バリエーション'} ratio={'60'}/> */}
        
        {/* <p>merged:{marged}</p>
        <input type="text" value={inputValue} onChange={deleteA} />
        <Calculator className={''} onClick={handleClick} testId={''} onDelete={handleClear} currentValue={ageStack.join("")} unit={'歳'} /> */}
        {/* <Accordion title="親メニュー">
            <Accordion title="子メニュー"/>
            <Accordion title="子メニュー"/>
        </Accordion> */}
        {/* <Carousel carouselImageItems={[{src: imgSample2, alt: ""}, {src: imgSample2, alt: ""}, {src: imgSample2, alt: ""}]}/> */}
        {/* <TextInputWithLabel<string>
            input={{
                className: '',
                maxLength: 0,
                name: '',
                value: '',
                id: 'input-1',
                type: '',
                required: true,
                placeholder: "",
                onChange: function (event: ChangeEvent<HTMLInputElement>): void {
                    throw new Error('Function not implemented.');
                }
            }} 
            label={{
                className: "",
                text: 'お名前',
                labelFor: 'input-1'
            }}
        /> */}
    </div>
    );
}

export default App;
