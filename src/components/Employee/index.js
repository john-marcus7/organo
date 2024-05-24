import './Employee.css'

const Employee = ({name, img, role, bgColor}) => {
    return (
        <div className='employee'>
            <div className='header' style={{backgroundColor: bgColor}}>
                <img src={img} alt={name} />
            </div>
            <div className='footnote'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Employee