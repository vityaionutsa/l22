import React, { useState } from "react";

function Work4(props) {

    const [cities, setCity] = useState(props?.city ?? "");
    const [select, setSelect] = useState(props?.select ?? "");

    const addNewCity = () => {

        let input = document.getElementById("inputId");
        
        if (input.value !== undefined || input.value.length > 0) {
            
            const newCity = <option value={ input.value }>{ input.value }</option>
            setCity([...cities, newCity]);
            input.value = "";
        }
    }
    const changeSelect = (target) => {

        setSelect(target.value);
    }

    return(
        <div>
            <div>
                <input id="inputId" type="text" placeholder="Input name city" />
                <button onClick={ () => addNewCity() }>Додайте це місто</button>
            </div>
            <select
                style={{ margin: "10px 0px", minWidth: "175px" }}
                onChange={ (event) => changeSelect(event.target) }
            >
                <option selected disabled >Виберіть місто</option>
                { cities }
            </select>
            <p>Виберіть місто: { select }</p>
        </div>
    );
}

export default Work4;