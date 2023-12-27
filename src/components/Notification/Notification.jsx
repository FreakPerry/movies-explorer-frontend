import './Notification.css';

function Notification({ message, isSuccess }) {
  const messageType = isSuccess ? 'success' : 'error';

  return <span className={`notification notification_${messageType}`}>{message}</span>;
}

export default Notification;
