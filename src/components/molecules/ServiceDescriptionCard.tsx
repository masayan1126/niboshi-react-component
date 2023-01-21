type Props = {
    title: string
    src: string
    alt: string
    className: string
    description: string
    testId: string
}

export const ServiceDescriptionCard = (props: Props) => {
  const { title, src, alt, className, description, testId } = props

  return (
    <div>
        <p>{title}</p>
        <div>
            <img src={src} alt={alt} />
        </div>
        <p>{description}</p>
    </div>
  )
}
