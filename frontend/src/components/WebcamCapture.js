import React from 'react';
import Webcam from "react-webcam";
import { Container, Button } from "react-bootstrap";
import { BsCameraFill } from "react-icons/bs";

const videoConstraints = {
	width: 640,
	height: 480,
	facingMode: "user"
};

const WebcamCapture = ({ imgSrc, setImgSrc }) => {
	const webcamRef = React.useRef(null);

	const capture = React.useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		setImgSrc(imageSrc);
	}, [webcamRef, setImgSrc]);

	return (
		<div align="center">
			<Container align="center">
				<Webcam
					audio={false}
					ref={webcamRef}
					videoConstraints={videoConstraints}
					screenshotFormat="image/jpeg"
				/>
			</Container>
			<Button onClick={capture} variant="outline-primary"><BsCameraFill /></Button>
			{/* {imgSrc && (
		  <img
			src={imgSrc}
		  />
		)} */}
		</div>
	);
};

export default WebcamCapture;