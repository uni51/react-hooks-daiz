import React, { createContext, useState } from 'react';
import './App.css';
import ComponentC from './component/ComponentC';

export const UserContext = createContext()
export const LanguaeContext = createContext()

function App() {
  const [user, setUser] = useState({name: 'yamada', age: '32'})
  const [language, setLanguage] = useState('日本語')

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <LanguaeContext.Provider value={language}>
          <ComponentC />
        </LanguaeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
