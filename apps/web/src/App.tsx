import './App.global.css'
import styles from './App.module.css'

import { Navigation } from './components/Navigation'
import { Display } from './components/Display'
import { NewDisplay } from './components/NewDisplay'
import { MetaMaskError } from './components/MetaMaskError'
import { MetaMaskContextProvider } from './hooks/useMetaMask'

export const App = () => {

  return (
    <MetaMaskContextProvider>
      <div className={styles.appContainer}>
        <Navigation />
        <NewDisplay />
        {/* <Display />
        <MetaMaskError /> */}
      </div>
    </MetaMaskContextProvider>
  )
}