import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name: 'Programação', 
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
      employees: []
    },
    {
      name: 'Front-end', 
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
      employees: []
    },
    {
      name: 'Data Science', 
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
      employees: []
    },
    {
      name: 'Devops', 
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
      employees: []
    },
    {
      name: 'UX e Design', 
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5',
      employees: []
    },
    {
      name: 'Mobile', 
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
      employees: []
    },
    {
      name: 'Inovação e Gestão', 
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
      employees: []
    }
  ]

  const [employees, setEmployees] = useState([])

  const toNewEmployeeAdded = (employee) => {
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      < Banner />
      < Form teams={teams.map(team => team.name)} toRegisteredEmployee={employee => toNewEmployeeAdded(employee)}/>
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        employees={employees.filter(employee => employee.team === team.name)} />)}
      
    </div>
  );
}

export default App;