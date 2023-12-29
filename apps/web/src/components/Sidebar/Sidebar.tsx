import styles from './Home.module.css'
import { Link } from 'react-router-dom';

export const Sidebar = ({ setActiveTab, activeTab }) => {
    const tabs = ['Dashboard', 'Accounts', 'Transactions', 'Settings'];
    return (
        <div className="sidebar">
            {tabs.map(tab => (
                <div
                    key={tab}
                    className={`sidebar-item ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </div>
            ))}
        </div>
    )
}