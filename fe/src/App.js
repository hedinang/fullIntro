import React from 'react';
import { Layout } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import './scss/index.scss'
import Navbar from './component/nav/NavBar';
import { Footer } from './component/Footer';
import About from './page/About';
import Project from './page/project/Project';
import ProjectDetail from './page/project/ProjectDetail';
import ThreeD from './page/threeD/ThreeD';


function App() {
  const pageList = [
    {
      path: '/*',
      component: <Navigate to="/home" replace />
    },
    {
      path: '/home',
      component: <Home />

    },
    {
      path: '/project',
      component: <Project />

    },
    {
      path: '/about',
      component: <About />

    },
    {
      path: '/project-detail',
      component: <ProjectDetail />

    },
    {
      path: '/three',
      component: <ThreeD />

    }
  ]

  return (
    <Layout>
      <Navbar />
      <Layout>
        <Routes>
          {pageList.map(e => {
            return <Route path={e.path} element={
              e.component
            } />
          })}
        </Routes>
      </Layout>
      <Footer />
    </Layout>
  )
}

export default App;
