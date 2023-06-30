import React from 'react';
import Label from '../atoms/Label';
import SelectBox from '../atoms/SelectBox';

type Props<T> = {
    select: {
        options: T[]
        selected: T
        onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
        id: string
    }
    label: {
        text: string
        for: string
    }
}

type SelectOption = {
    id: string
    name: string
    value: string
}

// const options = [
//     {id:"1", name:'味噌', value: "1"},
//     {id:"2", name:'豆腐', value: "2"},
//     {id:"3", name:'わかめ', value: "3"},
//     {id:"4", name:'にぼし', value: "4"},
// ] satisfies SelectOption[];

// const [selected, setSelected] = useState<SelectOption>(options[0])

// const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedOption = options.find((value: SelectOption) => value.value === e.target.value)

//     if (selectedOption !== undefined) {
//         setSelected(selectedOption);
//     }
// }

// const select = {
//     options,
//     selected,
//     onChange: handleChange,
//     id: "select-one"
// }
// const label = {
//     text: "好きな具材",
//     for: "select-one"
// }

// return (
// <div className="App">
//     <SelectBoxField select={select} label={label} />
// </div>
// );

const SelectBoxField = <T extends SelectOption,>(props: Props<T>) => {
  const { options, selected, onChange, id } = props.select;
  const { text, for: labelFor } = props.label;

  return (
    <>
        <Label>
            <SelectBox
                options={options}
                selected={selected}
                onChange={onChange}
                id={id} testId={''}
            />
        </Label>
    </>
  );
}

export default SelectBoxField;