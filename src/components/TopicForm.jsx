import { useState } from 'react';
import './TopicForm.css';

function TopicForm(props) {
    const[title, setTitle] = useState('');
    const[category, setCategory] = useState('');
    const[description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !category.trim() || !description.trim()) {
            alert('Please fill in all fields');
            return;
        }

        const newTopic = {
            title,
            category,
            description,
        };

        props.onAddTopic(newTopic);

        setTitle('');
        setCategory('');
        setDescription('');
    };

    return (
        <section className="form-section">
            <h2>Add New Topic

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input type="text" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Category:</label>
                        <input type="text" 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Description:</label>
                        <textarea 
                            row="4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit">Add Topic</button>
                </form>
            </h2>
        </section>
    );
}

export default TopicForm;