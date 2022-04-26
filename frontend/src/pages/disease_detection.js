import React from "react";

class Disease extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			imgId: '',
			imgFile: ''
		};
		this.handleChange=this.handleChange.bind(this);
	}

	handleChange(event) {
		const {id, value} = event.target;
		let imgId = {...imgId};
		imgId = event.value;
	}

  render() {
    return (
			<div>
				<h1>Disease Detection</h1>
			</div>
		);
  }
}

export default Disease;
