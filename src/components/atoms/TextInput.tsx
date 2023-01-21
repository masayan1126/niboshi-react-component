import React from 'react';

type Props<T> = {
    className: string
    maxLength: number
    name: string
    required: boolean
    value: T
    id: string
    type: string
    placeholder?: string
    tabindex?: string
    readonly?: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = <T extends string | number,> (props: Props<T>) => {
  const {type, id, placeholder, onChange, value, className, maxLength, name, required} = props

  return (
    <input id={id} type={type} required={required} value={value} placeholder={placeholder} onChange={onChange} className={className} maxLength={maxLength} name={name} />
  );
}

export default TextInput;