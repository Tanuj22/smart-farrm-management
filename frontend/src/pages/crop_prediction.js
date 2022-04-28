import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import GaugeChart from 'react-gauge-chart';
import Thermometer from 'react-thermometer-component';
import NavBar from '../components/NavBar';

class Prediction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            humidity: '',
            ph: '',
            rainfall: '',
            soil: {
                n: '',
                p: '',
                k: ''
            },
            dataFile: null,
            crop: ''
        }
    }

    onFetchData = () => {
        
    }

    onFileChange = event => {
        this.setState({dataFile: event.target.files[0]});
    }

    onPredictData = () => {
        const data = {
            temperature: this.state.temperature,
            humidity: this.state.humidity,
            ph: this.state.ph,
            rainfall: this.state.rainfall,
            n: this.state.soil.n,
            p: this.state.soil.p,
            k: this.state.soil.k
        };
        console.log(data);
    }

    render() {
        return (
            <div>
                <NavBar />
                <Container align="center">
                    <h1 align="center">Crop Prediction</h1>
                    <Button onClick={this.onFetchData}>Real-Time Data</Button>
                    <div>
                        <p>or Upload from Computer:
                            <input type="file" onChange={this.onFileChange} />
                        </p>
                        <Button onClick={this.onPredictData}>

                        </Button>
                    </div>
                    <Row>
                        <Col>
                            <p>Temperature</p>
                            <Thermometer
                            theme="dark"
                            value="18"
                            max="100"
                            steps="4"
                            format="°C"
                            />
                        </Col>
                        <Col>
                            <p>Humidity</p>
                            <GaugeChart id="gauge-chart1" />
                        </Col>
                        <Col>
                            <p>Soil pH</p>
                            <GaugeChart id="gauge-chart1" />
                        </Col>
                        <Col>
                            <p>Rainfall</p>
                            <GaugeChart id="gauge-chart1" />
                        </Col>
                    </Row> 
                    <Row>
                        <p>Soil Demographics</p>
                        <Col>
                            <p>n-value</p>
                            <GaugeChart id="gauge-chart1" />
                        </Col>
                        <Col>
                            <p>p-value</p>
                            <GaugeChart id="gauge-chart1" />
                        </Col>
                        <Col>
                            <p>k-value</p>
                            <GaugeChart id="gauge-chart1" />
                        </Col>
                    </Row> 
                    <Card>
                        <p>The predicted crop for maximum yield is Rice as per the above demographic conditions.</p>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default Prediction;