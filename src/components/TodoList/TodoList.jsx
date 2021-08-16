import React from 'react';
import cn from 'classnames';
import './TodoList.scss';

export const TodoList = ({ todos, selectedUserId, onSelectUser }) => (
  <div className="TodoList">
    <h2>Todos:</h2>

    <div className="TodoList__list-container">
      <ul className="TodoList__list">
        {todos.map((todo) => {
          const itemClass = cn('TodoList__item', {
            'TodoList__item--checked': todo.completed,
            'TodoList__item--unchecked': !todo.completed,
          });

          const buttonClassName = cn({
            'TodoList__user-button': true,
            button: true,
            'TodoList__user-button--selected': (
              selectedUserId === todo.userId
            ),
          });

          return (
            <li className={itemClass} key={todo.id}>
              <label>
                <input type="checkbox" defaultChecked={todo.completed} />
                <p>{todo.title}</p>
              </label>

              <button
                className={buttonClassName}
                type="button"
                onClick={() => onSelectUser(todo.userId)}
              >
                User&nbsp;#
                {todo.userId}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);
