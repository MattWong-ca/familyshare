import styles from './Home.module.css'
import { Sidebar } from '../Sidebar/Sidebar';
import { useState } from 'react';

export const Home = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');

    return (
        <div className={styles.dashboard}>
            <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
            <div className={styles.mainContent}>
                {/* Render content based on the activeTab */}
                {activeTab === 'Dashboard' && <h2>Dashboard Content</h2>}
                {activeTab === 'Accounts' && <h2>Accounts Content</h2>}
                {activeTab === 'Transactions' && <h2>Transactions Content</h2>}
                {activeTab === 'Settings' && <h2>Settings Content</h2>}
            </div>
        </div>
    )
}