import './TopicCard.css';

function TopicCard(props) {
    return (
        <div className="topic-card">
            <h3>{props.title}</h3>
            <p>{props.category}</p>
            <p>{props.description}</p>

            <button onClick={() => props.onDeleteTopic(props.id)}>Delete</button>
        </div>
    );
}

export default TopicCard;