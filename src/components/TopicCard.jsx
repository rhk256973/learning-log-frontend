import './TopicCard.css';

function TopicCard(props) {
  const statusClass = props.status ? props.status.toLowerCase().replace(' ', '-') : 'default';

  return (
    <div className={`topic-card ${statusClass}`}>
      <div className="card-header">
        <h3>{props.title}</h3>
        <span className={`status-badge ${statusClass}`}>
          {props.status}
        </span>
      </div>
      
      <div className="card-body">
        <p><strong>Goal:</strong> {props.goal}</p>
      </div>

      <div className="card-footer">
        <button className="delete-btn" onClick={() => props.onDeleteTopic(props.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default TopicCard;