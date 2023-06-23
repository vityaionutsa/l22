import React, { useState } from "react";

function Work2(props) {
    const [employees, setEmployee] = useState([
        { id: 1, name: "Овсієнко", surname: "Юхим", salary: 1540, sex: "чоловік" },
        { id: 2, name: "Кучма", surname: "Фрол", salary: 1950, sex: "чоловік" },
        { id: 3, name: "Тітаренко", surname: "Христя", salary: 1130, sex: "жінка" },
        { id: 4, name: "Деменко", surname: "Чесмил", salary: 2700, sex: "чоловік" },
        { id: 5, name: "Лагута", surname: "Гелена", salary: 1760, sex: "жінка" },
    ]);


    const addNewEmployee = () => {
        setEmployee([...employees, {
            id: employees[employees.length - 1].id + 1,
            name: document.getElementById("inputNameId").value,
            surname: document.getElementById("inputSurnameId").value,
            salary: document.getElementById("inputSalaryId").value,
            sex: document.getElementById("selectSexId").value,
        }]);
    }


    const table = employees.map(employee =>
            <tr>
                <td>{ employee.name }</td>
                <td>{ employee.surname }</td>
                <td>{ employee.salary }</td>
                <td>{ employee.sex }</td>
            </tr>
        );

    return(
        <div>
            <table border="1" >
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Salary</th>
                    <th>Sex</th>
                </tr>
                { table }
            </table>
            <div style={{
                width: "300px",
                display: "flex",
                flexDirection: "column",
                border: "1px solid black",
                padding: "15px 10px",
                margin: "10px 0px"
            }}>
                <h2>Форма для прийому нового співробітника</h2>
                <input id="inputNameId" type="text" placeholder="Name" /><br />
                <input id="inputSurnameId" type="text" placeholder="Surname" /><br />
                <input id="inputSalaryId" type="number" placeholder="Salary" /><br />
                <select id="selectSexId">
                    <option selected disabled>Sex</option>
                    <option value="male" >Male</option>
                    <option value="female" >Female</option>
                </select><br />
                <button onClick={ () => addNewEmployee() }>додати нового співробітника</button>
            </div>
        </div>
    );
}

export default Work2;