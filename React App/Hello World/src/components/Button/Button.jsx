const Button = ({buttonText,variant}) => {
    const styles={
        primary:{background:"blue"},
        secondary:{background:"gray"},
        success:{background:"green"},
        danger:{background:"red"}
    }
  return (
    <div>
      <button style={styles[variant]}>{buttonText}</button>
    </div>
  )
}

export default Button
