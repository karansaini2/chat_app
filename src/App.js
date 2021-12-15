import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm'

const App = () => {

  if (!localStorage.getItem('username')) return <LoginForm/>  
  
    return ( 
        //ALL the props are mentioned on the site chatengine.io which we can use for different purpose
        <ChatEngine
          // mentioned below all are PROPS
            height = '100vh'
            projectID = "9e9c4040-e9a2-4212-bc1a-fc3a4bfdcebe" // STRING YOU WILL GET AFTER CREATE THE CHAT APP
            userName = {localStorage.getItem('username')}
            userSecret ={localStorage.getItem('password')} //basically the password
            renderChatFeed ={(chatAppProps) => <ChatFeed{...chatAppProps}/>} //through this prop we can manually customize the chat feed 
        />
     );
}
 
export default App;




