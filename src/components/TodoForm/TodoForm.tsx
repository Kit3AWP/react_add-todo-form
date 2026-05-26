import { useState } from 'react';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface TodoFormProps {
  users: User[];
}

export const TodoForm: React.FC<TodoFormProps> = ({ users }) => {
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState('');
  const [titleError, setTitleError] = useState('');
  const [userError, setUserError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let hasErrors = false;

    if (title.trim() === '') {
      setTitleError('Please enter a title');
      hasErrors = true;
    }

    if (userId === '0') {
      setUserError('Please choose a user');
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <input
          type="text"
          data-cy="titleInput"
          value={title}
          onChange={event => {
            setTitle(event.target.value);
            setTitleError('');
          }}
        />
        {titleError && <span className="error">{titleError}</span>}
      </div>

      <div className="field">
        <select
          data-cy="userSelect"
          value={userId}
          onChange={event => {
            setUserId(event.target.value);
            setUserError('');
          }}
        >
          <option value="0" disabled>
            Choose a user
          </option>

          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        {titleError && <span className="error">{userError}</span>}
      </div>

      <button type="submit" data-cy="submitButton">
        Add
      </button>
    </form>
  );
};
