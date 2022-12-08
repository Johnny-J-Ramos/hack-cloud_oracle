import Menu from './menu.js';
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/index.css';
import '../css/login.css';
import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

    constructor(props){
        super(props);
            this.state ={
                email: '',
                password: '',
                redirect: false
            }
        }

        changeField(field,event){
            let _filed = event.target.value;
            this.setState(prevState => {
                let nextState = Object.assign({},prevState);
                nextState[field] = _filed;
                return nextState;
            })
        }

        submitForm(){
            if(this.state.password == '12345'){
                this.setState(prevState => {
                    let nextState = Object.assign({},prevState);
                    nextState.redirect = true;
                    return nextState;
                })
            }
        }
    
render(){
    if(this.state.redirect){
        return <Redirect to="/home"/>
    } else{
            return(
                <div className="center">
                <Container>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>
                        <Image className="image-details" src="https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/GTS7vp0dHcafTrseQSbRohqhBsOpSQ0VW9hnsCkEPWC3K4S0LcmqLBJqtrnz9Xg1/n/oraclemetodista/b/bucket-teste/o/logoLogoComida.jpeg" rounded />
                        <Form onSubmit={this.submitForm.bind(this)}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="details-form" >Email</Form.Label>
                                    <Form.Control type="email" className="font-forms" placeholder="Informe o email" value={this.state.email} onChange={this.changeField.bind(this,'email')}/>
                                        <Form.Text className="text-muted">
                                            Informe seu e-mail pessoal
                                        </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className="details-form">Password</Form.Label>
                                    <Form.Control type="password" className="font-forms" placeholder="Password"  value={this.state.password} onChange={this.changeField.bind(this,'password')}/>
                                </Form.Group>
                                <Button variant="danger" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            )  
        }

        }
}
