import { useState } from 'react'

import './App.css';
import Navbar from './components/Navbar';
import TopicCard from './components/TopicCard';
import TopicList from './components/TopicList';
import TopicForm from './components/TopicForm';

function App() {
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: 'French',
      category: 'Language',
      description: 'Learning French phrases and grammar',
    },
    {
      id: 2,
      title: 'Spanish',
      category: 'Language',
      description: 'Learning Spanish phrases and grammar',
    },
  ]);

  // Function to add a new topic to the list
  const addTopic = (newTopic) => {
    const topicToAdd = {
      id: Date.now(),
      ...newTopic,
    };
    setTopics([...topics, topicToAdd]);
  }

  // Function to delete a topic from the list
  const deleteTopic = (id) => {
    const updatedTopics = topics.filter((topic) => topic.id !== id);
    setTopics(updatedTopics);
  }

  return (
    <>
      <Navbar />

      <main className="main-content">
        <section className="intro">
        <h1>Learn Log</h1>
        <p>Track Your Learning Journey</p>
        </section>

        <section className="dashboard">
          <TopicForm onAddTopic={addTopic} />
          <TopicList topics={topics} onDeleteTopic={deleteTopic} />
        </section>

      </main> 
    </>
  );
}

export default App
