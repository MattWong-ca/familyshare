import './App.global.css'
import styles from './App.module.css'

import { Navigation } from './components/Navigation'
import { Display } from './components/Display'
import { NewDisplay } from './components/NewDisplay'
import { Testing } from './components/Testing'
import { MetaMaskError } from './components/MetaMaskError'
import { MetaMaskContextProvider } from './hooks/useMetaMask'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => {

  return (
    // <div className={styles.appContainer}>
    //   <NewDisplay />
    // </div>
    <Router>
      <div className={styles.appContainer}>
        <Routes>
          <Route path="/" element={<NewDisplay />} />
          <Route path="/test" element={<Testing />} />
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