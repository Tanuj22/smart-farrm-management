import React from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { Container, Button, Card } from "react-bootstrap";
import { AiOutlineScan } from 'react-icons/ai';
import {FaUpload} from 'react-icons/fa';
import WebcamCapture from "../components/WebcamCapture";

class Disease extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgSrc: null
		};
		this.handleImgCapture = this.handleImgCapture.bind(this);
	}

	handleImgCapture(img) {
		this.setState({
			imgSrc: img,
			diseaseInfo: ''
		});
		console.log(img);
	}

	onImgChange = event => {
		this.setState({ imgSrc: event.target.files[0] });
	};

	onImgUpload = () => {
		const formData = new FormData();
		formData.append('image', this.state.imgSrc);
		// formData.append("hello", "hell");
		console.log(this.state.imgSrc);
		console.log(formData.entries());
		// for (var pair of formData.entries()) {
		// 	console.log(pair[0]+ ', ' + pair[1]); 
		// }
		axios
            .post('http://localhost:5000/disease', formData,{
				headers:{
					'Content-Type':'multipart/form-data'
				}
			})
            .then((res)=>{
                console.log(res.data);
				this.setState({
					diseaseInfo: res.data
				})
            });
	};

	render() {
		return (
			<div>
				<NavBar />
				<Container align="center">
					<h1 align="center">Disease Detection</h1>
					<WebcamCapture imgSrc={this.state.imgSrc} setImgSrc={this.handleImgCapture} />
					<div>
                        <input type="file" onChange={this.onImgChange} name="image"/>
                        <label htmlFor='choose-file'>
                            <Button><FaUpload /></Button>
                        </label>&nbsp;
                        <Button onClick={this.onImgUpload}><AiOutlineScan /></Button>
                    </div>
					<Card>
						<p>{this.state.diseaseInfo}</p>
					</Card>
				</Container>
			</div>
		);
	}
}

export default Disease;
