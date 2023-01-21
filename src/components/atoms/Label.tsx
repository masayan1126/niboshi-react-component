type Props = {
    htmlFor: string
    text: string
}

function Label(props: Props) {
  const { htmlFor, text } = props

  return (
    <label htmlFor={htmlFor}>
      {text}
    </label>
  );
}

export default Label;