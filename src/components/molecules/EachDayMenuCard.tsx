type Props = {
    className: string
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

const EachDayMenuCard = <T,>(props: Props) => {
  const {className} = props;

  const style = {
    display: 'flex',
  };

  return (
    // slider
    <div>
        <p>title</p>
        <div style={style}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JyPy0qpsVpLqBL6uhs-fcr8h2KGn9OQRxWBAck4bGw&s" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JyPy0qpsVpLqBL6uhs-fcr8h2KGn9OQRxWBAck4bGw&s" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JyPy0qpsVpLqBL6uhs-fcr8h2KGn9OQRxWBAck4bGw&s" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JyPy0qpsVpLqBL6uhs-fcr8h2KGn9OQRxWBAck4bGw&s" alt="" />
        </div>
        <ul>
            <li>説明1</li>
            <li>説明2</li>
            <li>説明3</li>
            <li>説明4</li>
        </ul>
    </div>
  );
}

export default EachDayMenuCard;