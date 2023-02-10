import React , {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nb_likes:0,
            nb_quantity:10,
            disabled:false 
        };
    }
    addLikes() {
        this.setState((prevState)=>(
            {
                ...prevState,
                nb_likes:prevState.nb_likes+1
            }
        ))
    }
    achat() {
        this.setState((prevState)=>(
            {
                ...prevState,
                nb_quantity:prevState.nb_quantity-1
            }
        ))
        
    }
    pasDachat(){
        this.setState(()=>(
            {
               if (nb_quantity=0) {
                disabled:true
               }
            }
        ))
        return disabled
    }
    //disabled={()=>{this.pasDachat()}}


    render() {
       
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>Price: {this.props.price}</Card.Text>
                    <Card.Text>Quantity:{this.state.nb_quantity}</Card.Text>
                    <Card.Text>Likes : {this.state.nb_likes}</Card.Text>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{this.addLikes()}}>Like</Button>
                    <Button variant="primary" onClick={()=>{this.achat()}} >Buy</Button>
                </Card.Body>
          </Card>
        );
    }
}
 
export default Product;