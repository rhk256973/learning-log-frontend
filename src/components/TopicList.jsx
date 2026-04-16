import './TopicList.css';
import TopicCard from "./TopicCard";

function TopicList(props) {
  return (
    <section className="topics-section">
      <h2>My Topics ({props.topics.length})</h2>

      {props.topics.length === 0 ? (
        <p>No topics yet. Add your first topic above.</p>
      ) : (
        props.topics.map((topic) => (
          <TopicCard
            key={topic.id}
            id={topic.id}
            title={topic.title}
            goal={topic.goal}
            status={topic.status}
            onDeleteTopic={props.onDeleteTopic}
          />
        ))
      )}
    </section>
  );
}

export default TopicList;