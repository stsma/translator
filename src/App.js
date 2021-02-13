import logo from './logo.svg';
import './App.css';
import Field from './components/field';
import Languages from './components/languages';
import Translate from './components/translate';
import React, { useState } from 'react';

function App() {
  const[language, setLanguage] = useState('ru');
  const[text, setText] = useState('');

  return (
    <div>
      <Field label="English" onChange={setText} value={text}/>
      <Languages language={language} onLanguageChange={setLanguage}/>
      <hr />
      <Translate text={text} language={language}/>
    </div>
  );
}

export default App;
