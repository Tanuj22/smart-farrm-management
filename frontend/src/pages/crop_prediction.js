import React from 'react';
import { Container, Button } from 'react-bootstrap';
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
                </Container>
            </div>
        );
    }
}

export default Prediction;