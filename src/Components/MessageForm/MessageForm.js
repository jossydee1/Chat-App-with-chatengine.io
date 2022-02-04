import { PictureOutlined, SendOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { isTyping, sendMessage } from "react-chat-engine";

function MessageForm(props) {
	const [input, setInput] = useState("");
	const { chatId, creds } = props;

	const handleSubmit = (e) => {
		e.preventDefault();
		const text = input.trim();
		if (text.length > 0) sendMessage(creds, chatId, { text });
		setInput("");
	};

	const handleChange = (e) => {
		setInput(e.target.value);

		isTyping(props, chatId);
	};

	const handleUpload = (e) => {
		sendMessage(creds, chatId, { files: e.target.value, text: "" });
	};
	return (
		<form className="message-form" onSubmit={handleSubmit}>
			<input
				className="message-input"
				placeholder="Type your message"
				value={input}
				onChange={handleChange}
				onSubmit={handleSubmit}
			/>
			<label htmlFor="upload-button">
				<span className="image-button">
					<PictureOutlined className="picture-icon" />
				</span>
			</label>
			<input
				type="file"
				multiple={false}
				id="upload-button"
				style={{ display: "none" }}
				onChange={handleUpload}
			/>
			<button type="submit" className="send-button">
				<SendOutlined className="send-icon" />
			</button>
		</form>
	);
}

export default MessageForm;
