import React from 'react';
import { Accordion, Card, Table, Col, Button, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { removeFromCart } from '../redux/actions/productAction';

const CartProduct = () => {
    const cartProduct = useSelector(state => state.cart.cartProduct)
    const dispatch = useDispatch()

    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="text-center">You have {cartProduct?.length} products in your busket</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            cartProduct.map((product) =>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey='0'>
                                            <font color="orange"><FaShoppingCart /></font>  {product.title}
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey='0'>
                                            <Card.Body className="row">
                                                <Col md={4}>
                                                    <img src={product.image} className="img-fluid" style={{ height: '200px' }} alt="" />
                                                </Col>
                                                <Col>
                                                    <InputGroup>
                                                        <InputGroup.Text style={{ width: '100%' }}>
                                                            <b>{product.category}</b>
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                    <p>{product.description}</p>
                                                    <InputGroup className="mb-1">
                                                        <InputGroup.Text style={{ background: 'orange', color: 'black' }}>
                                                            <b>$ {product.price}</b>
                                                        </InputGroup.Text>
                                                    </InputGroup><br />
                                                    <Button variant="danger"
                                                        onClick={() => dispatch(removeFromCart(product.id))}>Remove from Cart</Button>
                                                </Col>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>)
                        }
                    </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default CartProduct;