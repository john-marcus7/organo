import './Form.css'
import { useState } from 'react'
import TextField from '../TextField'
import DropdownList from '../DropdownList'
import Button from '../Button'

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.toRegisteredEmployee({name, role, image, team})
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form">
            
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                < TextField 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    value={name}
                    onChange={value => setName(value)}
                />
                < TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={role}
                    onChange={value => setRole(value)} 
                />
                < TextField 
                    required={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    value={image}
                    onChange={value => setImage(value)}
                />
                < DropdownList
                    required={true} 
                    label="Times" 
                    itens={props.teams}
                    value={team}
                    onChange={value => setTeam(value)}
                />
                < Button >
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form