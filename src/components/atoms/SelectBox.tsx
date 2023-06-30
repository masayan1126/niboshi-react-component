import React from "react"

type Props<T> = React.ComponentProps<"select"> & 
{
    testId: string;
    options: T[];
    selected: T;

} 

export type SelectOption = {
    id: string
    name: string
    value: string
}

// const options = [
//     {id:"1", name:'味噌', value: "1"},
//     {id:"2", name:'豆腐', value: "2"},
//     {id:"3", name:'わかめ', value: "3"},
//     {id:"4", name:'にぼし', value: "4"},
//     ] satisfies SelectOption[];

// const [selected, setSelected] = useState<SelectOption>(options[0])

// const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedOption = options.find((value: SelectOption) => value.value === e.target.value)

//     if (selectedOption !== undefined) {
//         setSelected(selectedOption);
//     }
// }, [options])

const SelectBox = React.memo(<T extends SelectOption,>({ options, selected, testId, ...nativeProp }: Props<T>) => {
    return (
        <select {...nativeProp} data-test-id={testId}>
        {options.map(option => (
            <option key={option.id} value={option.value}>
            {option.name}
            </option>
        ))}
        </select>
    );
})

export default SelectBox;