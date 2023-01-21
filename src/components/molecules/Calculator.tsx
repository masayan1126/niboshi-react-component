import React from 'react';
import BasicButton from '../atoms/BasicButton';

type Props <T> = {
    currentValue: T
    unit: string
    className: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    onDelete: () => void
    testId: string
}

// const [ageStack, setAgeStack] = useState<number[]>([])

//     const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//         const stack = new StackConcreate([...ageStack])
//         stack.push(Number(e.currentTarget.textContent))
//         setAgeStack(stack.all())
//     }

//     const handleClear = () => {
//         const stack = new StackConcreate([...ageStack])
//         stack.pop()
//         setAgeStack(stack.all())
//     }

//     return (
//     <div className="App">
//         <Calculator className={''} onClick={handleClick} testId={''} onDelete={handleClear} currentValue={ageStack.join("")} unit={'歳'} />
//     </div>
//     );

const Calculator = <T,>(props: Props<T>) => {
  const {currentValue, unit, className, onClick, testId, onDelete } = props;

  return (
    <div>
        <p>{`${currentValue}${unit}`}</p>
        <BasicButton className={className} onClick={onClick} testId={testId} disabled={false} >
        1
        </BasicButton>
        <BasicButton className={className} onClick={onClick} testId={testId} disabled={false} >
        2
        </BasicButton>
        <BasicButton className={className} onClick={onClick} testId={testId} disabled={false} >
        3
        </BasicButton>
        <BasicButton className={className} onClick={onDelete} testId={testId} disabled={false} >
        ×
        </BasicButton>
        <BasicButton className={className} onClick={onClick} testId={testId} disabled={false} >
        4
        </BasicButton>
        <BasicButton className={className} onClick={onClick} testId={testId} disabled={false} >
        5
        </BasicButton>
        <BasicButton className={className} onClick={onClick} testId={testId} disabled={false} >
        6
        </BasicButton>
        <BasicButton className={className} onClick={onClick} testId={testId} disabled={false} >
        7
        </BasicButton>
        <BasicButton className={className} onClick={onClick} testId={testId} disabled={false} >
        8
        </BasicButton>
        <BasicButton className={className} onClick={onClick} testId={testId} disabled={false} >
        9
        </BasicButton>
        <BasicButton className={className} onClick={onClick} testId={testId} disabled={false} >
        0
        </BasicButton>
    </div>
  );
}

export default Calculator;