import styles from './Sidebar.module.css'

export const Sidebar = ({ setActiveTab, activeTab }) => {
    const tabs = ['Dashboard', 'Accounts', 'Messaging', 'Transactions', 'Settings'];
    return (
        <div className={styles.sidebar}>
            {tabs.map(tab => (
                <div
                    key={tab}
                    className={`${styles.sidebarItem} ${activeTab === tab ? styles.active : ''}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </div>
            ))}
        </div>
    )
}