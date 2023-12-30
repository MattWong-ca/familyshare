import styles from './MainDashboard.module.css'
import { Link } from 'react-router-dom';

export const MainDashboard = () => {
    const imgUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png?f=webp"
    return (
        <div style={{ display: 'inline-flex', position: 'relative', width: '100%', height: '100vh' }}>
            <div style={{ backgroundColor: 'blue', width: '80%', overflow: 'auto' }}>
                <div style={{ padding: '50px 0 0 50px', backgroundColor: 'red' }}>
                    {/* Account Info at Top */}
                    <div style={{ display: 'inline-flex' }}>
                        <img src={imgUrl} style={{ backgroundColor: 'lightblue', width: '100px', borderRadius: '20px', display: 'block' }} />
                        <div>
                            <p style={{ padding: '16px 0 0 16px', margin: '0px', fontSize: '30px' }}>Joe Smith</p>
                            <p style={{ paddingLeft: '16px', margin: '0px', fontSize: '15px' }}>Parent</p>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div style={{ padding: '25px 50px 0 50px', backgroundColor: 'orange' }}>
                    <div style={{ display: 'inline-flex', height: '200px', justifyContent: 'space-between' }}>
                        <div style={{ backgroundColor: 'lightblue', borderRadius: '20px', width: '270px', marginRight: '20px' }}>Your Balance</div>
                        <div style={{ backgroundColor: 'lightblue', borderRadius: '20px', width: '200px', margin: '0 20px' }}>New Message!</div>
                        <div style={{ backgroundColor: 'lightblue', borderRadius: '20px', width: '200px', margin: '0 20px' }}>3 buttons</div>
                    </div>
                </div>
            </div>
            <div style={{ height: '100vh', flex: 1 }}>
                Transaction Queue
            </div>
        </div>
    )
}