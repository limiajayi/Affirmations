const Button = ({onClick, text}) => {
  //i just felt like having this one
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default Button