import React, { useState } from "react";


function Work6_Work7(props) {

    const [test] = useState([  
        {    
            id: 1,    
            question: "Що таке HTML?",    
            answers: [
            "Мова програмування",      
            "Текстовий редактор",      
            "Мова розмітки документів",      
            "Графічний редактор",      
            "Операційна система"    
            ],
        correctAnswer: 2
        },
        {
            id: 2,
            question: "Що таке CSS?",
            answers: [
            "Мова програмування",
            "Текстовий редактор",
            "Мова розмітки документів",
            "Графічний редактор",
            "Мова стилів"
            ],
            correctAnswer: 4
        },
        {
            id: 3,
            question: "Що таке JavaScript?",
            answers: [
            "Мова програмування",
            "Текстовий редактор",
            "Мова розмітки документів",
            "Графічний редактор",
            "Операційна система"
            ],
            correctAnswer: 0
        },
        {
            id: 4,
            question: "Що таке React?",
            answers: [
            "Мова програмування",
            "Бібліотека JavaScript",
            "Мова розмітки документів",
            "Графічний редактор",
            "Операційна система"
            ],
            correctAnswer: 1
        },
        {
            id: 5,
            question: "Що таке Node.js?",
            answers: [
            "Мова програмування",
            "Текстовий редактор",
            "Серверна платформа",
            "Графічний редактор",
            "Операційна система"
            ],
            correctAnswer: 2
        }
    ]);

    const checkAnswer = (target, correctAnswer, idQuestion, answerId) => {
        let obj = document.getElementById(idQuestion);

        if (answerId === correctAnswer)
            obj.style.background = "green";
        else
            obj.style.background = "red";
    }

    const temp = test.map(task =>
            <div style={{ border: "2px solid gray", margin: "10px", padding: "10px" }} >
                <h2 id={ task.id }>{ task.question }</h2>
                <ul style={{ listStyle: "none" }}>
                    {
                        task.answers.map(answers =>
                            <li key={ task.id + answers }>
                                <label style={{ cursor: "pointer" }}>
                                    <input type="radio" name={task.question} value={ answers }
                                        onClick={ (event) => checkAnswer(
                                                event.target,
                                                task.correctAnswer,
                                                task.id,
                                                task.answers.indexOf(answers)
                                            ) }
                                    />
                                    <span>{ answers }</span>
                                </label>
                            </li>
                        )
                    }
                </ul>
            </div>
        );

    return (
        <div>
            { temp }
        </div>
    );
}


export default Work6_Work7;