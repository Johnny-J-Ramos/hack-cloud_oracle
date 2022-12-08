import Menu from './menu.js';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/cpedido.css';
import '../css/index.css';
import React,{Component} from 'react';

export default class Restaurant extends Component {
    
    constructor(props){
        super(props);
            this.state ={
                pedido: [{nomePedido:'Bife acebolado',descricaoPedido:'Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!!',nomeRestaurante:'Restaurante 1',tempoMedioPreparo:'33min',preco:'R$: 35,00',img:'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/Ceqy-Ye8N3S-QGyR5flge0w8r62TBYVFwpkDTpsgi4S15AlWiBuSRb3ZCqQqmHN1/n/oraclemetodista/b/bucket-teste/o/bife-acebolado1.jpg'},
                {nomePedido:'Bife acebolado',descricaoPedido:'Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!!',nomeRestaurante:'Restaurante 2',tempoMedioPreparo:'33min',preco:'R$: 40,00',img:'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/du6byfRVaVdKyLlbCZMJmEXqNSKIAkZPlhmKPLVaf_uh4gen_n-lDDx1C8cXnnXW/n/oraclemetodista/b/bucket-teste/o/bife-acebolado2.jpg'},
                {nomePedido:'Bife acebolado',descricaoPedido:'Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!! Belo bife acebolado!!',nomeRestaurante:'Restaurante 3',tempoMedioPreparo:'33min',preco:'R$: 80,00',img:'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/yT0Fsm8BsJllaXoUUD-qVlwxOq9OrqvCCU0p0eWZ90zaSM3YIB-5L3cSIimwKy2Q/n/oraclemetodista/b/bucket-teste/o/bife-acebolado3.jpg'}]
            }
        }

        submitPedido(e){
            e.preventDefault();
                alert(JSON.stringify(this.state.pedido[e.target.value]));
        }

    render(){
  return (
<div className="center">
        <Menu/>
        <Container>
            <Row>
                <Col md={{ span: 12, offset: 0 }}>
                    {this.state.pedido.map((pedido,index) =>{
                        if(index <= 0){
                            return (
                            
                                <Col md={{ span: 3, offset: 0 }}>
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={pedido.img} />
                        <Card.Body>
                            <Card.Title className="tile-card">{pedido.nomePedido}</Card.Title>
                            <Card.Text className="card-text">
                            {pedido.descricaoPedido}
                            </Card.Text>
                            <Row className="details-card-restaurant">
                                <Col md={{ span: 6, offset: 0 }}>
                                    <Card.Text as={Col}className="card-text details-card">
                            <strong>{pedido.nomeRestaurante}</strong>
                                    </Card.Text>
                                </Col>
                                <Col md={{ span: 6, offset: 0 }}>
                                    <Card.Text as={Col}className="card-text">
                            <strong>{pedido.tempoMedioPreparo}</strong>
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Card.Text as={Col}className="price">
                                      {pedido.preco}
                            </Card.Text>
                            <Button variant="danger" className="btn-danger-pedido" value={index} onClick={this.submitPedido.bind(this)}>Fazer Pedido</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                            )
                        } else {
                            return(
                            <Col md={{ span: 3, offset: 1 }}>
                   <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top"  className="card-image" src={pedido.img} />
                        <Card.Body>
                            <Card.Title className="tile-card">{pedido.nomePedido}</Card.Title>
                            <Card.Text className="card-text">
                            {pedido.descricaoPedido}
                            </Card.Text>
                            <Row className="details-card-restaurant">
                                <Col md={{ span: 6, offset: 0 }}>
                                    <Card.Text as={Col}className="card-text details-card">
                            <strong>{pedido.nomeRestaurante}</strong>
                                    </Card.Text>
                                </Col>
                                <Col md={{ span: 6, offset: 0 }}>
                                    <Card.Text as={Col}className="card-text">
                            <strong>{pedido.tempoMedioPreparo}</strong>
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Card.Text as={Col}className="price">
                                      {pedido.preco}
                            </Card.Text>
                            <Button variant="danger" className="btn-danger-pedido" value={index} onClick={this.submitPedido.bind(this)}>Fazer Pedido</Button>
                        </Card.Body>
                    </Card>
                    </Col>)
                        }
                    })}
                </Col>
            </Row>
        </Container>
</div>
  );
}
}
