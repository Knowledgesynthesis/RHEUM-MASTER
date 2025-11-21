import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Layout } from '@/components/Layout'
import Home from '@/pages/Home'
import RA from '@/pages/RA'
import SLE from '@/pages/SLE'
import Vasculitis from '@/pages/Vasculitis'
import Gout from '@/pages/Gout'
import Pseudogout from '@/pages/Pseudogout'
import AS from '@/pages/AS'
import Assessment from '@/pages/Assessment'
import Glossary from '@/pages/Glossary'
import Settings from '@/pages/Settings'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ra" element={<RA />} />
            <Route path="/sle" element={<SLE />} />
            <Route path="/vasculitis" element={<Vasculitis />} />
            <Route path="/gout" element={<Gout />} />
            <Route path="/pseudogout" element={<Pseudogout />} />
            <Route path="/as" element={<AS />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
