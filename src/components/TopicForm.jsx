import { useState } from 'react';
import './TopicForm.css';

function TopicForm(props) {
  const [title, setTitle] = useState('');
  const [goal, setGoal] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !goal.trim() || !status.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const newTopic = {
      title,
      goal,
      status,
    };

    props.onAddTopic(newTopic);

    setTitle('');
    setGoal('');
    setStatus('');
  };

  return (
    <section className="form-section">
      <h2>Add New Topic</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Goal:</label>
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </div>

        <div>
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select status</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button type="submit">Add Topic</button>
      </form>
    </section>
  );
}

export default TopicForm;