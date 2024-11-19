import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import About from './pages/About';
import Home from './pages/Home';
import Sample from './pages/Sample';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/about" element={<About />} />
          <Route path="/sample" element={<Sample />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
