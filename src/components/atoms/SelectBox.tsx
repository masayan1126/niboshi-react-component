
type Props<T> = {
    options: T[]
    id: string
    selected: T
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

type SelectOption = {
    id: string
    name: string
    value: string
}

const SelectBox = <T extends SelectOption,>(props: Props<T>) => {
  const { options, selected, onChange, id } = props;

  return (
    <select value={selected.value} onChange={onChange} id={id}>
      {options.map(option => (
        <option key={option.id} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default SelectBox;