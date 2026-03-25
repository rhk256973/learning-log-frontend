import TopicCard from "./TopicCard";
import './TopicList.css';

function TopicList(props) {
    return (
        <section className="topics-section">
            <h2>My Topics</h2>

            {props.topics.map((topic) => (
                <TopicCard
                    key={topic.id}
                    id={topic.id}
                    title={topic.title}
                    category={topic.category}
                    description={topic.description}
                    onDeleteTopic={props.onDeleteTopic}
                />
            ))}
        </section>
    );
}

export default TopicList;