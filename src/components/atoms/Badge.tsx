type Props = {
    className: string
    text: string
}

const Badge = (props: Props) => {
  const { className, text } = props

  return (
    <span className={className}>
      {text}
    </span>
  );
}

export default Badge;