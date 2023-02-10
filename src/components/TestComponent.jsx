import React , {Component} from 'react';
import PRODUCT from '../products.json';



class TestComponent extends Component {
    constructor() {
        super();
        this.state = { counter:0};
    }
    
    handleClick(){
        this.setState((prevState)=>(
            {
            ...prevState,
            counter: prevState.counter+1
            }
        ))
    }

    render() {
        PRODUCT.map(prod=> {
            prod.name;
        }) 
        console.log("Hello")
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={()=>{
                    {this.handleClick()}
                }}>+</button>
            </div>
        );
    }
}
 
export default TestComponent;