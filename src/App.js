import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
            height="100vh"
            projectID="f2081df7-12cc-46d0-a224-25d7c0ec2e0e"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;