import * as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function CardComponent({cart, title, price, description, img, addToCart, item }) {
  function itemExistsOnCart(){
    return cart.find(item1 => item1.id === item.id)
}

  function addItemToCart(item1) {
    addToCart(item1)
  }

  return (
    <Card style={{ width: '0 rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title} - ${price}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        {
          itemExistsOnCart() ?
            (<Link to="/ShoppingCart"><button className="btn__checkout">Checkout</button></Link>) :
            <center><Button variant="primary" onClick={() => addItemToCart(item)} >Add to Cart</Button></center>
        }
      </Card.Body>
    </Card>
  );
}

export default CardComponent;