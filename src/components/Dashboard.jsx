import { useState } from 'react';
import TopicForm from './TopicForm';
import TopicList from './TopicList';

function Dashboard() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Function to add a new topic to the list
  const addTopic = (newTopic) => {
    const topicToAdd = {
      id: Date.now(),
      ...newTopic,
    };
    setTopics([...topics, topicToAdd]);
  };

  // Function to delete a topic from the list
  const deleteTopic = (id) => {
    const updatedTopics = topics.filter((topic) => topic.id !== id);
    setTopics(updatedTopics);
  };

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch('https://learn-log-api.onrender.com/topics');

        if (!response.ok) {
          throw new Error('Failed to load topics');
        }

        const data = await response.json();
        setTopics(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  if (loading) {
    return <p>Loading topics...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }


  return (
    <>
      <section className="intro">
        <h1>Learn Log</h1>
        <p>Track your learning topics and entries</p>
      </section>

      <section className="dashboard">
        <TopicForm onAddTopic={addTopic} />
        <TopicList topics={topics} onDeleteTopic={deleteTopic} />
      </section>
    </>
  );
}

export default Dashboard;