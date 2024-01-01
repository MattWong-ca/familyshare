import styles from './MainDashboard.module.css'

export const MainDashboard = () => {
    const imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png?f=webp"
    return (
        <div style={{ display: 'inline-flex', position: 'relative', width: '100%', height: '100vh' }}>
            <div style={{ backgroundColor: 'blue', width: '80%', overflow: 'auto' }}>
                {/* Account Info at Top */}
                <div style={{ padding: '50px 0 0 50px', backgroundColor: 'red' }}>
                    <div style={{ display: 'inline-flex' }}>
                        <img src={imgUrl} style={{ backgroundColor: 'lightblue', width: '100px', borderRadius: '20px', display: 'block' }} />
                        <div>
                            <p style={{ padding: '16px 0 0 16px', margin: '0px', fontSize: '30px' }}>Joe Smith</p>
                            <p style={{ paddingLeft: '16px', margin: '0px', fontSize: '15px' }}>Parent</p>
                        </div>
                    </div>
                </div>
                {/* Balance / New Message / 3 Buttons */}
                <div style={{ padding: '25px 50px 0 50px', backgroundColor: 'orange' }}>
                    <div style={{ display: 'inline-flex', height: '200px', justifyContent: 'space-between' }}>
                        <div style={{ backgroundColor: 'lightblue', borderRadius: '20px', width: '270px', marginRight: '20px' }}>Your Balance</div>
                        <div style={{ backgroundColor: 'lightblue', borderRadius: '20px', width: '200px', margin: '0 20px' }}>New Message!</div>
                        <div style={{ backgroundColor: 'lightblue', borderRadius: '20px', width: '200px', margin: '0 20px', flexDirection: 'column' }}>
                            <button className={styles.button79} role="button" style={{ marginBottom: '15px', width: '100%', borderRadius: '20px' }}>Send</button>
                            <button className={styles.button79} role="button" style={{ marginBottom: '15px', width: '100%', borderRadius: '20px' }}>Receive</button>
                            <button className={styles.button79} role="button" style={{ width: '100%', borderRadius: '20px' }}>Buy</button>
                        </div>
                    </div>
                </div>
                {/* Total Family Assets */}
                <div style={{ padding: '25px 50px 0 50px', backgroundColor: 'pink' }}>
                    <div style={{ display: 'inline-flex', height: '200px' }}>
                        <div style={{ backgroundColor: 'lightblue', borderRadius: '20px', width: '650px', marginRight: '20px' }}>Total Family Assets</div>
                    </div>
                </div>
                {/* Crypto Prices */}
                <div style={{ padding: '25px 50px 0 50px', backgroundColor: 'purple' }}>
                    <div style={{ display: 'inline-flex', height: '200px' }}>
                        <div style={{ backgroundColor: 'lightblue', borderRadius: '20px', width: '650px', marginRight: '20px' }}>Cryptocurrency Prices</div>
                    </div>
                </div>
            </div>
            <div style={{ height: '100vh', flex: 1 }}>
                Transaction Queue
            </div>
        </div>
    )
}