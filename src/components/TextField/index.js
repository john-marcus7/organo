import './TextField.css'

const TextField = (props) => {

  const onTyping = (event) => {
    props.onChange(event.target.value)
  }

  return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={onTyping} required={props.required} type="text" placeholder={props.placeholder}/>
        </div>
  )
}

export default TextField