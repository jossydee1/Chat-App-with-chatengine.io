import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./Components/ChatFeed/ChatFeed";
import LoginForm from "./Components/LoginForm/LoginForm";

function App() {
	//BEM
	if (!localStorage.getItem("username")) return <LoginForm />;

	return (
		<ChatEngine
			height="100vh"
			projectID="a1a86840-ee56-4a87-a0d2-82fd3df5a3c0"
			userName={localStorage.getItem("username")}
			userSecret={localStorage.getItem("password")}
			renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps} />}
		/>
	);
}

export default App;
