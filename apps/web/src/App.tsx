import './App.global.css'
import styles from './App.module.css'

import { Navigation } from './components/Navigation'
import { Display } from './components/Display'
import { LandingPage } from './components/LandingPage'
import { SignUp } from './components/SignUp'
import { Home } from './components/Home'
import { MetaMaskError } from './components/MetaMaskError'
import { MetaMaskContextProvider } from './hooks/useMetaMask'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => {

  return (
    <Router>
      <div className={styles.appContainer}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
    
  )
}
// <MetaMaskContextProvider>
      /*<div className={styles.appContainer}>*/
        {/* <Navigation /> */}
        
        {/* <Display />
        <MetaMaskError /> */}
      /*</div>*/
    // </MetaMaskContextProvider>