import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";

const ChatFeed = (props) => {
  
    const{chats,activeChat,userName,messages} =props; // destructured the props we want

    const chat = chats && chats[activeChat];  // use to find if their is chat then it is finding that chat
    const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
        <div
          key={`read_${index}`}
          className="read-receipt"
          style={{
            float: isMyMessage ? 'right' : 'left',
            backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
          }}
        />
      ));
    const renderMessages =()=>{ //function for generarting messsages

          const keys= Object.keys(messages); // basically the id of the messages
  
          return keys.map((key,index)=>{
          const message = messages[key];
          //about the last messsage in the chat
          const lastMessageKey = index ===0? null : keys[index-1]; // if their are messages please find it
          const isMyMessage = userName === message.sender.username; // if that last message is mine

         return ( 
              <div key = {`msg_${index}`} style ={{width:'100%'}}>
                    <div className="message-block">

                     {
                           isMyMessage ?
                           <MyMessage message={message}/>
                           : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                     }
                    </div>

                <div className = "read-receipts" style={{marginRight: isMyMessage ? '18px' :'0px', marginLeft: isMyMessage ? '0px' :'68px'}}>
                
                {renderReadReceipts(message,isMyMessage)}

                </div>
                 
              </div>
               
              
          );
        })
    
    }

    if(!chat) return 'Loading...';

    return (
<div className="chat-feed">
      <div className="chat-title-container">
          <div className="chat-title">
              {chat?.title}
          </div>
          <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style ={{height: '100px'}}>
          <div className="message-form-container">
              <MessageForm {...props} chatId ={activeChat}/> 
              
          </div>
      </div>
</div>
    );
      
    
}
 

export default ChatFeed;