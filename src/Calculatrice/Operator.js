import React from 'react'


const Operator = (props) => {
    return (
        <button className="number-button"
            onClick = {()=>props.onClick(props.oper)}
        > {props.oper} </button>
    )
}

export default Operator