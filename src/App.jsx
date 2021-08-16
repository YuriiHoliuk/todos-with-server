import React, { useEffect, useState } from 'react';
import './App.scss';
import './styles/general.scss';
import { TodoList } from './components/TodoList';
import { CurrentUser } from './components/CurrentUser';
import { request } from './utils';

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadTodos = async() => {
      try {
        setIsLoading(true);

        const todosFromServer = await request('/todos');

        setTodos(todosFromServer);
      } catch (serverError) {
        setError(serverError.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadTodos();
  }, []);

  if (isLoading) {
    return (
      <h1>Loading...(TODO: add fancy spinner here)</h1>
    );
  }

  return (
    <div className="App">
      <div className="App__sidebar">
        {
        error
          ? (
            <p>
              {error}
            </p>
          )
          : (
            <TodoList selectedUserId={selectedUserId} onSelectUser={setSelectedUserId} todos={todos} />
          )
      }
      </div>

      <div className="App__content">
        <div className="App__content-container">
          {selectedUserId ? (
            <CurrentUser userId={selectedUserId} />
          ) : (
            'No user selected'
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
