import React from 'react';

type Props = React.ComponentProps<"input"> & 
{
    testId: string;
} 

// 使う側
// const [checkedValues, setCheckedValues] = useState<number[]>([])

//     const items = [
//         {id:"1", name:'味噌'},
//         {id:"2", name:'豆腐'},
//         {id:"3", name:'わかめ'},
//         {id:"4", name:'にぼし'},
//     ];

//     const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const i = checkedValues.findIndex((val) => val === Number(e.target.value))
//         const isAlreadyChecked = (i: number) => i !== -1
//         const temp = [...checkedValues]

//         if (isAlreadyChecked(i)) {
//             temp.splice(i, 1)
//             setCheckedValues(temp)
//             // setCheckedValues(checkedValues.filter(val => val !== Number(e.target.value)))
//         } else {
//             setCheckedValues([...checkedValues, Number(e.target.value)])
//         }
//     }

//     return (
//     <div className="App">
//         {items.map((item) => {
//             return (
//                 <div key={`ch-${item.id}`}>
//                     <InputCheck className={''} testId={''} id={''} onChange={handleCheck} value={item.id} checked={checkedValues.includes(Number(item.id))} disabled={false} />
//                     <label htmlFor={`ch-${item.id}`}>{item.name}</label>
//                 </div>
//                 );
//         })}
        
//     </div>
//     );

const InputCheck = React.memo(({testId, ...nativeProp}: Props) => {

    return (
        <input
            {...nativeProp}
            type="checkbox"
            data-test-id={testId}
        />

    );
})

export default InputCheck;