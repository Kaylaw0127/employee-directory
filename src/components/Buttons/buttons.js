import React from "react"

function filterEmployees(props) {
    return (
        <div>
        <div className="buttons">
            <button onClick={() => props.filterEmployee()} className="remove">Sort by Occupations</button>
        </div>
        </div>
    )
}

export default filterEmployees