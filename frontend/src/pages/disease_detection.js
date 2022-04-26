import React from "react";
import WebcamCapture from "../components/WebcamCapture";

class Disease extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			imgId: '',
			imgSrc: [],
			imgFile: null
		};
		this.handleChange=this.handleChange.bind(this);
		this.handleImgCapture=this.handleImgCapture.bind(this);
	}

	handleChange(event) {
		const {id, value} = event.target;
		let imgId = {...imgId};
		imgId = event.value;
	}

	handleImgCapture(img) {
		this.setState({
			imgSrc: img
		});
		console.log(img);
	}

	onImgChange = event => {
		this.setState({ imgFile: event.target.files[0] });
	};

	onImgUpload = () => {
		const formData = new FormData();
		formData.append(
		  "myFile",
		  this.state.imgFile
		);
		console.log(this.state.imgFile);
	  };

	

  render() {
    return (
			<div>
				<h1>Disease Detection</h1>
				<WebcamCapture imgSrc={this.state.imgSrc} setImgSrc={this.handleImgCapture} />
				<div>
					<input type="file" onChange={this.onImgChange} />
					<button onClick={this.onImgUpload}>
						Upload!
					</button>
				</div>
			</div>
		);
  }
}

export default Disease;
