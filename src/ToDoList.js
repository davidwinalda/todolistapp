import React from 'react'; // Library React

import './App.css';

// Create class/component
function ToDoList () {
  let data = [
    'Belajar Intro React JS',
    'Belajar Component React JS',
    'Belajar Routing React JS'
  ];

  let result = data.map((element) => {
    return (
      <li>{element}</li>
    )
  })

  return (
    <div>
      <ul>
        {result}
      </ul>
    </div>
  );
};

export default ToDoList;