import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ComponentLifeCycleExampleFunctional } from './basics/component_lifecycle';
import { PerformanceSection } from './performance';
import { UseMemoExample } from './performance/useMemo';
import { MemoExample } from './performance/memo';
import { UseCallbackExample } from './performance/useCallback';
import { LazyLoadingExample } from './performance/lazy_loading';
import { AdvanceReactPatterns } from './advance_react_patterns';
import { HOCExample } from './advance_react_patterns/HOC';
import { CustomHookExample } from './advance_react_patterns/custom_hooks';
import { RouterDomSection } from './react_dom';
import { PortalsExample } from './react_dom/portals';

function App() {
  return (

    <BrowserRouter >
      <Routes>
        <Route path='/' element={<TopicsList></TopicsList>} />
        <Route path='/lifecycle_functional' element={<ComponentLifeCycleExampleFunctional></ComponentLifeCycleExampleFunctional>} />
        <Route path='/patterns' element={<AdvanceReactPatterns/>}>
          <Route path='hocs' element={<HOCExample/>}/>
          <Route path='custom_hooks' element={<CustomHookExample/>}/>
        </Route>
        <Route path='/performance' element={<PerformanceSection />}>
          <Route path='usememo' element={<UseMemoExample />} />
          <Route path='memo' element={<MemoExample />} />
          <Route path='usecallback' element={<UseCallbackExample />} />
          <Route path='lazy' element={<LazyLoadingExample />} />
        </Route>
        <Route path='/router-dom' element={<RouterDomSection/>}>
          <Route path='portals' element={<PortalsExample/>}></Route>
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
      <li><a href="/patterns">Advance react patterns</a></li>
      <li><a href="/router-dom">Router DOM</a></li>
    </ul>
  </>
}

export default App;
