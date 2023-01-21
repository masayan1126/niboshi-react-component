import React from 'react';

type Props<T> = {
    id: string
    className: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: T
    selectedValue: T
    disabled: boolean
    testId: string
}


// 使う側
// const items = [
//     {id:"1", name:'味噌'},
//     {id:"2", name:'豆腐'},
//     {id:"3", name:'わかめ'},
//     {id:"4", name:'にぼし'},
// ];

// // 選択した値を管理（初期値：ラジオ１）
// const [selectedValue, setSelectedValue] = useState("1");

// // ラジオボタンの値がチェンジされた時
// const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setSelectedValue(e.target.value);
// };

// {items.map((item) => {
//     return (
//       <div key={`rd-${item.id}`}>
//         <InputRadio<string> id={`rd-${item.id}`} className={''} onChange={handleChange} value={item.id} selectedValue={selectedValue} disabled={false} testId={''}/>
//         <label htmlFor={`rd-${item.id}`}>{item.name}</label>
//       </div>
//     );
//   })}

const InputRadio = <T extends string,>(props: Props<T>) => {
    const {className, onChange, value, selectedValue, disabled, testId} = props;
  
    return (
        <input
            className={className}
            type="radio"
            value={value}
            onChange={onChange}
            checked={value === selectedValue}
        />

    );
}

export default InputRadio;