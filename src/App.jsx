import { useState, useTransition } from 'react';

import { changeColor } from './color';

import Nodes from './Nodes';

const tabs = {
  about: 'about',
  posts: <Nodes />,
  contact: 'contact',
};

function App() {
  const [tab, setTab] = useState('about');

  const [, startTransition] = useTransition();

  const handleClickTab = (tab) => () => {
    startTransition(() => {
      setTab(tab);
    });
  }

  const handleClickChangeColor = () => {
    // changeColor();
    if (window.localStorage.getItem('color') === 'blue') {
      window.localStorage.setItem('color', 'orange');
    } else {
      window.localStorage.setItem('color', 'blue');
    }
  }

  return (
    <>
      <div>
        <button onClick={handleClickTab('about')} type="button">
          About
        </button>
        <button onClick={handleClickTab('posts')} type="button">
          Posts
        </button>
        <button onClick={handleClickTab('contact')} type="button">
          Contact
        </button>

        <button onClick={handleClickChangeColor} type="button">색깔 변경하기</button>
      </div>

      {tabs[tab]}
    </>
  )
}

export default App
