import React, { useState } from "react";


function Work3(props) {

    const arrayEmployees = [
        { id: 1, firstName: 'Іван', lastName: 'Петров', salary: 25000 },
        { id: 2, firstName: 'Марія', lastName: 'Коваль', salary: 30000 },
        { id: 3, firstName: 'Олег', lastName: 'Лисенко', salary: 28000 },
        { id: 4, firstName: 'Юлія', lastName: 'Сидоренко', salary: 35000 },
        { id: 5, firstName: 'Андрій', lastName: 'Кузьменко', salary: 32000 },
        { id: 6, firstName: 'Наталя', lastName: 'Грищенко', salary: 29000 },
        { id: 7, firstName: 'Вікторія', lastName: 'Гончаренко', salary: 27000 },
        { id: 8, firstName: 'Василь', lastName: 'Савченко', salary: 26000 },
        { id: 9, firstName: 'Денис', lastName: 'Колесник', salary: 24000 },
        { id: 10, firstName: 'Олександр', lastName: 'Білоус', salary: 29000 },
        { id: 11, firstName: 'Оксана', lastName: 'Шевченко', salary: 31000 },
        { id: 12, firstName: 'Ірина', lastName: 'Бондаренко', salary: 33000 },
        { id: 13, firstName: 'Антон', lastName: 'Козак', salary: 28000 },
        { id: 14, firstName: 'Євген', lastName: 'Даниленко', salary: 32000 },
        { id: 15, firstName: 'Олена', lastName: 'Левченко', salary: 27000 },
        { id: 16, firstName: 'Максим', lastName: 'Гавриленко', salary: 30000 },
        { id: 17, firstName: 'Тетяна', lastName: 'Григоренко', salary: 34000 },
        { id: 18, firstName: 'Михайло', lastName: 'Мельник', salary: 29000 },
        { id: 19, firstName: 'Світлана', lastName: 'Ткаченко', salary: 28000 },
        { id: 20, firstName: 'Валерій', lastName: 'Кривенко', salary: 25000 },
        { id: 21, firstName: 'Юрій', lastName: 'Ковальчук', salary: 27000 },
        { id: 22, firstName: 'Ніна', lastName: 'Соловйова', salary: 26000 },
        { id: 23, firstName: 'Роман', lastName: 'Середа', salary: 31000 },
        { id: 24, firstName: 'Ірина', lastName: 'Петренко', salary: 50000 },
        { id: 25, firstName: 'Микола', lastName: 'Коваль', salary: 60000 },
    ]


    const nextPaige = () => {
        if (paige < maxPaige) {
            setPaige(1 + paige);

            setEmployee(arrayEmployees.filter(employee =>
                employee.id <= (paige + 1) * 10 && employee.id > paige * 10));
            }
    }
    const prevPaige = () => {
        if (paige > 1) {
            setPaige(paige - 1);

            setEmployee(arrayEmployees.filter(employee =>
                employee.id <= (paige - 1) * 10 && employee.id > (paige - 2) * 10 ));
        }
    }


    const maxPaige = Math.ceil(arrayEmployees.length / 10);
    const [paige, setPaige] = useState(1);

    const [employees, setEmployee] = useState(arrayEmployees.filter(employee =>
        employee.id <= paige * 10 && employee.id >= paige));

    const table = employees.map(employee => {
            return (
                <tr>
                    <td>{ employee.name }</td>
                    <td>{ employee.surname }</td>
                    <td>{ employee.salary }</td>
                </tr>
            );
    });

    return(
        <div style={{ width: "350px" }} >
            <div align="center" style={{ margin: "10px 0px" }} >
                <button onClick={ () => prevPaige() } >
                    Попередня
                </button>

                <span style={{ margin: "0px 10px" }} >
                    { paige }
                </span>

                <button onClick={ () => nextPaige() } >
                    Далі
                </button>
            </div>

            <table border="1" style={{ width: "100%" }} >
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Salary</th>
                </tr>
                { table }
            </table>
        </div>
    );
}


export default Work3;