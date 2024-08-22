import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ComponentLifeCycleExampleFunctional } from './basics/component_lifecycle';
import { PerformanceSection } from './performance';
import { UseMemoExample } from './performance/useMemo';
import { MemoExample } from './performance/memo';
import { UseCallbackExample } from './performance/useCallback';

function App() {
  return (

    <BrowserRouter >
      <Routes>
        <Route path='/' element={<TopicsList></TopicsList>} />
        <Route path='/lifecycle_functional' element={<ComponentLifeCycleExampleFunctional></ComponentLifeCycleExampleFunctional>} />
        <Route path='/performance' element={<PerformanceSection />}>
          <Route path='usememo' element={<UseMemoExample />} />
          <Route path='memo' element={<MemoExample />} />
          <Route path='usecallback' element={<UseCallbackExample />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function TopicsList() {
  return <>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/lifecycle_functional">Component lifecycle functional</a></li>
      <li><a href="/performance">Performance</a></li>
    </ul>
  </>
}

export default App;
