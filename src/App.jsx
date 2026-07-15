import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './sections/Home';
import Timeline from './sections/Timeline';
import Library from './sections/Library';
import Blog from './sections/Blog';
import Music from './sections/Music';
import Photography from './sections/Photography';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './app.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="library" element={<Library />} />
          <Route path="music" element={<Music />} />
          <Route path="photography" element={<Photography />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;