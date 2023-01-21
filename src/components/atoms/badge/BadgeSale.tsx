type Props = {
    text: string
}

const BadgeSale = (props: Props) => {
    const { text } = props

    return (
    <span style={{"background": "red", "color": "white" }}>
        {text}
    </span>
    );
}

export default BadgeSale;