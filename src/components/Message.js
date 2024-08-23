import React from 'react';
import './Message.css'; // Optional: if you have additional styling

const Message = (props) => {
  const bulmaClasses = {
    isInfo: 'is-info',
    isPrimary: 'is-primary',
    isSuccess: 'is-success',
    isWarning: 'is-warning',
    isDanger: 'is-danger',
    // Add more classes as needed
  };

  // Determine the message class based on the props
  const messageClass = ['message'];
  Object.keys(props).forEach((prop) => {
    if (bulmaClasses[prop]) {
      messageClass.push(bulmaClasses[prop]);
    }
  });

  return (
    <article className={messageClass.join(' ')}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.children}
      </div>
    </article>
  );
};

export default Message;