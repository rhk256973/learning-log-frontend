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
      <div className="form-header">
        <h2>Set a New Goal</h2>
        <p>What are we working on today?</p>
      </div>

      <form onSubmit={handleSubmit} className="playful-form">
        <div className="form-group">
          <label>Topic Title</label>
          <input
            type="text"
            placeholder="e.g. English Grammar"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Learning Goal</label>
          <input
            type="text"
            placeholder="e.g. The past perfect tense"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Current Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={status ? 'has-value' : ''}
          >
            <option value="">Select status</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Add Topic
        </button>
      </form>
    </section>
  );
}

export default TopicForm;