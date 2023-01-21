import EachDayMenuCard from '../molecules/EachDayMenuCard';

type Product = {
    id: string
    name: string
    value: string
}

type Props = {
    className: string
    testId: string
    items: Product[]
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

const EachDayMenuCardList = <T,>(props: Props) => {
  const {className, items} = props;

  return (
    <div>
        {items.map((item) => {
            return (
                <div key={`ch-${item.id}`}>
                    <p>1day</p>
                    <EachDayMenuCard className={''} testId={''} />
                </div>
                );
        })}
    </div>
  );
}

export default EachDayMenuCardList;