import React from 'react';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';

import EmployeeList from './components/EmployeeList';

function App(){
  return (
    <EmployeeList />
  )
}

Meteor.startup(() => {
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);

});
