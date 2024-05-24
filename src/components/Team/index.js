import './Team.css'
import Employee from '../Employee'

const Team = (props) => {
    return (
        props.employees.length > 0 ? <section className="team" style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map(employee => <Employee key={employee.name} name={employee.name} role={employee.role} img={employee.img} bgColor={props.primaryColor}/>)}
            </div>
        </section>
        : ''
    )
}

export default Team