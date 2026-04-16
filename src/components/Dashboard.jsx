import { useEffect, useState } from 'react';
import TopicForm from './TopicForm';
import TopicList from './TopicList';

function Dashboard() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Function to "add" a new topic with API call
  const addTopic = async (newTopic) => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('https://learn-log-api.onrender.com/topics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: newTopic.title,
          goal: newTopic.goal,
          status: newTopic.status,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Failed to add topic');
      }

      const newTopicWithId = {
        id: data.id,
        title: newTopic.title,
        goal: newTopic.goal,
        status: newTopic.status,
      };

      setTopics([...topics, newTopicWithId]);
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  // Function to "delete" a topic with API call
  const deleteTopic = async (id) => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`https://learn-log-api.onrender.com/topics/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Failed to delete topic');
      }

      const updatedTopics = topics.filter((topic) => topic.id !== id);
      setTopics(updatedTopics);
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
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