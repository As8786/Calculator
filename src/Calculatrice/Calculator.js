import React from 'react'
import Number from './Number'
import Operator from './Operator'
import "./calculator.css"

let operators = ['+', '-', 'x', '/']
let numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '<-', "="]

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            firstNumber : "",
            secondNumber : "",
            operator: "",
            sum: 0,
            screen: "",
            screen2: "",
            insertedNumber : "",
            screenDisplayed : true,
        }
    }

    initializeScreenValue = (value) => {
        this.setState(previous => ({
            screen : previous.screen.slice(0,0)  
        })
        )
    }

    setScreenValue = (value) => {
        this.setState(previous => ({
            screen : previous.screen + value,     
        })
        )
    }

    setScreen2Value = (value) => {
        this.setState(previous => ({
            screen2 : previous.screen2 + value,     
        })
        )
    }

    deleteNumber = () => {
        this.state.secondNumber ?
        this.setState(previous => ({
            secondNumber : previous.secondNumber.slice(0,this.state.secondNumber.length-1),
            screen2 : previous.screen2.slice(0,this.state.screen2.length-1),  
        })
        )
        :
        this.setState(previous => ({
            screen : previous.screen.slice(0,this.state.screen.length-1),
            operator : previous.operator.slice(0,0)     
        })
        )
        this.state.operator || 
        this.setState(previous => ({
            firstNumber : previous.firstNumber.slice(0,this.state.screen.length-1),  
            screen : previous.screen.slice(0,this.state.screen.length-1)
        }))
    }
    
    setOperatorValue = (value) => {
        this.setState(previous => ({
            operator : previous.operator + value,
            }
        ))
    }

    setFirstNumberValue = (value) => {
        this.setState(previous => ({
            firstNumber : previous.firstNumber + value,
           
        })
        )
    }
    
    setSecondNumberValue = (value) => {
        this.setState(previous => ({
            secondNumber : previous.secondNumber + value,
        })
        )
    }

    toggleDisplayedScreen = () => {
        this.state.screenDisplayed && this.setState(previous => ({
            screenDisplayed : !previous.screenDisplayed
        }))

    }

    calculateSum= () => {
        let amount = 0
        switch(this.state.operator) {
            case "+" :
               amount = parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber)
               break
            case "-" :
                  amount = parseInt(this.state.firstNumber) - parseInt(this.state.secondNumber)
                break   
            case "/" :
                  amount = parseInt(this.state.firstNumber) / parseInt(this.state.secondNumber) 
                  break  
            case "x" :
                  amount = parseInt(this.state.firstNumber) * parseInt(this.state.secondNumber) 
                  break   
            default :
                  amount = 0                 
        }
        this.setState ({
            sum : amount,
            screen2 : amount
        })
    }

    render(){
        return(
            <div className="calculator-container">
              <div className="screen" >
                    {this.state.screenDisplayed ?  this.state.screen : this.state.screen2  }
              </div>  
              <div className="calculator-button" >
                <div className="calculator-operator" >
                    {operators.map((el, i) => <Operator oper= {el} 
                        onClick={(value)=>{this.state.operator || this.setOperatorValue(value)
                                           this.initializeScreenValue()
                                           this.setScreenValue(value) } } />)}
                </div>
                <div className="calculator-number" >
                    {numbers.map((el, i) => <Number number= {el}  
                    onClick= {(this.state.firstNumber && this.state.operator )? 
                        (value)=>{ this.setSecondNumberValue(value)
                                         this.setScreen2Value(value)
                                         this.toggleDisplayedScreen()
                                               } 
                        : 
                        (value)=>{ this.setFirstNumberValue(value)
                                    this.setScreenValue(value)}
                        } 
                    deleteNumber={this.deleteNumber} key= {i} index ={i} 
                    calculateSum = {this.calculateSum}/>)}
                </div>
                        
              </div>  
            </div>
        )
    }
}

export default Calculator