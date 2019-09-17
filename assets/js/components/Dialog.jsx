import React from 'react';
import MessageInput from './MessageInput';
import socket from '../socket';

const Dialog = () => {
  const [message, setMessage] = React.useState('');
  const channel = React.useRef(socket.channel("room:lobby", {}))

  React.useEffect(() => {
    channel.current.join()
      .receive('ok', (response) =>  console.log("Joined successfully", response))
      .receive("error", (response) => console.log("Unable to join", response));
  }, []);

  return (
    <div>

      <MessageInput value={message} onChange={setMessage} />
    </div>
  )
};

export default Dialog;
