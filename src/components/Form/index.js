import './Form.css'
import TextField from '../TextField'
import DropdownList from '../DropdownList'

const Form = (props) => {

    const teams = ['Frontend', 'Backend', 'Mobile', 'UX', 'UI', 'QA', 'PO', 'RH', 'Financeiro', 'Marketing', 'Vendas', 'Diretoria']

    return (
        <section className="form">
            
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                < TextField label="Nome" placeholder="Digite seu nome" />
                < TextField label="Cargo" placeholder="Digite seu cargo" />
                < TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                < DropdownList label="Times" itens={teams} />
            </form>
        </section>
    )
}

export default Form