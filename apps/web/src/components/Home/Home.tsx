import styles from './Home.module.css'
import { Link } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';

export const Home = () => {
  return (
    <div>
        <Sidebar/>
        <p>This will be the dashboard!</p>
    </div>
  )
}