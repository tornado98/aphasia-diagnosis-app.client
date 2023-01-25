import { Footer } from '../../../components';
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css';
import './scss/User_dashbord.scss';
import MainLayout from './Layout/MainLayout';



const User_dashbord = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat('fa-IR' , { dateStyle: 'full', timeStyle: 'long' }).format(date);
  return (
    <>

      
      <MainLayout/>
      
      
      <Footer/>
    </>
  )
}

export default User_dashbord