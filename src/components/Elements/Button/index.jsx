export default function Button(props) {
    const { type = "button", id, children, variantButton, onClick = () => { } } = props
    return (
        <button type={type} id={id} onClick={onClick} className={variantButton}>
            {children}
        </button >
    )
}