import './TopicCard.css';

function TopicCard(props) {
  return (
    <div className="topic-card">
      <h3>{props.title}</h3>
      <p><strong>Goal:</strong> {props.goal}</p>
      <p><strong>Status:</strong> {props.status}</p>

      <button onClick={() => props.onDeleteTopic(props.id)}>
        Delete
      </button>
    </div>
  );
}

export default TopicCard;