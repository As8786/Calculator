import React from 'react'


const Number = (props) => {
    return (
        <button className="number-button"
            onClick = { (props.number === '<-' || props.number === '=')? 
            (props.number === '<-' ? ()=>props.deleteNumber() : ()=>props.calculateSum() )
            : ()=>props.onClick(props.number)}
                        
        > {props.number} </button>
    )
}

export default Number   