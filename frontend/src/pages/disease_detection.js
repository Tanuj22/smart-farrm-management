import React from "react";
import NavBar from "../components/NavBar";
import { Container, Button, Card } from "react-bootstrap";
import { AiOutlineScan } from 'react-icons/ai';
import WebcamCapture from "../components/WebcamCapture";

class Disease extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgId: '',
			imgSrc: [],
			imgFile: null
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleImgCapture = this.handleImgCapture.bind(this);
	}

	handleChange(event) {
		const { id, value } = event.target;
		let imgId = { ...imgId };
		imgId = event.value;
	}

	handleImgCapture(img) {
		this.setState({
			imgSrc: img
		});
		console.log(img);
	}

	onImgChange = event => {
		this.setState({ imgSrc: event.target.files[0] });
	};

	onImgUpload = () => {
		const formData = new FormData();
		formData.append(
			"myFile",
			this.state.imgSrc
		);
		console.log(this.state.imgSrc);
	};

	render() {
		return (
			<div>
				<NavBar />
				<Container align="center">
					<h1 align="center">Disease Detection</h1>
					<WebcamCapture imgSrc={this.state.imgSrc} setImgSrc={this.handleImgCapture} />
					<div>
						<p>or Upload from Computer:
							<input type="file" onChange={this.onImgChange} />
						</p>
						<Button size="lg" onClick={this.onImgUpload}>
							<AiOutlineScan />
						</Button>
					</div>
					<Card>
						<p>Disease</p>
						<p>Accuracy: 95%</p>
						<p>The state of local or systemic abnormal physiological functioning of a plant, resulting from the continuous, prolonged 'irritation' caused by phytopathogenic organisms.</p>
					</Card>
				</Container>
			</div>
		);
	}
}

export default Disease;
