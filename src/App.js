import React, { Component } from 'react';
import Card from './components/Card/employee';
import FilterEmployee from './components/Buttons/buttons';
import Title from './components/Title/title';
import Wrapper from './components/Wrapper/wrapper';
import employees from './employee.json';


class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
   
    this.setState({ employees });
  };

  FilterEmployee = occupations => {
    const employees = this.state.employees.filter(employee => employee.occupation >= 50)
    console.log(employees)
    this.setState({ employees })
  }

  sortEmployees = occupation => {
    const employees = this.state.employees.sort((x, y) => y.occupation - x.occupation)

    this.setState({ employees})
  }

  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Greys Anatomy Employees<FilterEmployee 
        FilterEmployee={this.FilterEmployee}
        sortEmployee={this.sortEmployees} /></Title>
        
        {this.state.employees.map(employee => (
          <Card
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;


