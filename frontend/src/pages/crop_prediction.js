import React from 'react';
import axios from 'axios';
import { Container, Button, Row, Col, Card, Tooltip } from 'react-bootstrap';
import GaugeChart from 'react-gauge-chart';
import Thermometer from 'react-thermometer-component';
import { FaDownload, FaUpload } from 'react-icons/fa';
import { RiPlantFill } from 'react-icons/ri';
import NavBar from '../components/NavBar';

class Prediction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '0',
            humidity: '0',
            ph: '0',
            rainfall: '0',
            soil: {
                N: '0',
                P: '0',
                K: '0'
            },
            dataFile: null,
            crop: ''
        }
    }

    onFetchData = () => {
        this.setState({
            temperature: '28',
            humidity: '70.3',
            ph: '7.0',
            rainfall: '150.9',
            soil: {
                N: '83',
                P: '45',
                K: '60'
            },
        })
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
            N: this.state.soil.N,
            P: this.state.soil.P,
            K: this.state.soil.K
        };
        console.log(data);
        axios
            .post('http://localhost:5000/predict', data)
            .then((res)=>{
                this.setState({
                    crop: res.data
                })
            });
    }

    render() {
        return (
            <div>
                <NavBar />
                <Container align="center">
                    <h1 align="center">Crop Prediction</h1>
                    <hr />
                    <div>
                        <Button onClick={this.onFetchData}><FaDownload /></Button>&nbsp;
                        <input style={{display: 'none'}} type="file" onChange={this.onFileChange} />
                        <label htmlFor='choose-file'>
                            <Button><FaUpload /></Button>
                        </label>&nbsp;
                        <Button onClick={this.onPredictData}><RiPlantFill /></Button>
                    </div>
                    <Row style={{margin: "10px 0"}}>
                        <Col>
                            <p><u>Temperature</u></p>
                            <Thermometer
                                theme="dark"
                                value={this.state.temperature}
                                max="100"
                                steps="4"
                                format="°C" />
                        </Col>
                        <Col>
                            <p><u>Humidity</u></p>
                            <GaugeChart 
                                id="gauge-chart1" 
                                nrOfLevels={30} 
                                colors={["#FF5F6D", "#FFC371"]} 
                                arcWidth={0.3} 
                                percent={this.state.humidity/100} />
                        </Col>
                        <Col>
                            <p><u>Soil pH</u></p>
                            <GaugeChart 
                                id="gauge-chart2" 
                                nrOfLevels={12} 
                                colors={["#FF5F6D", "#FFC371"]} 
                                arcWidth={0.3} 
                                percent={this.state.ph} 
                                // hideText={true} 
                                formatTextValue={val=>val/100} />
                        </Col>
                        <Col>
                            <p><u>Rainfall</u></p>
                            <Thermometer
                                theme="light"
                                value={this.state.rainfall}
                                max="300"
                                steps="3"
                                size="large"
                                format="mm" />
                        </Col>
                    </Row> 
                    <Row style={{margin: "10px 0"}}>
                        <p>Soil Demographics</p>
                        <hr style={{margin: "auto" , width: "80%" }} />
                        <Col>
                            <p><u>N-value</u></p>
                            <GaugeChart 
                                id="gauge-chart5"
                                percent={this.state.soil.N/100} />
                        </Col>
                        <Col>
                            <p><u>P-value</u></p>
                            <GaugeChart 
                                id="gauge-chart6" 
                                percent={this.state.soil.P/100} />
                        </Col>
                        <Col>
                            <p><u>K-value</u></p>
                            <GaugeChart 
                                id="gauge-chart7" 
                                percent={this.state.soil.K/100} />
                        </Col>
                    </Row> 
                    {this.state.crop && <Card className="p-3">
                        <h1>{this.state.crop}</h1>
                        <p>The predicted crop for maximum yield is {this.state.crop} as per the above demographic conditions.</p>
                    </Card> }
                </Container>
            </div>
        );
    }
}

export default Prediction;