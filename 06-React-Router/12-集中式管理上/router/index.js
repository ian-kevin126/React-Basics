import Home from '../components/Home'
import About from '../components/About'
import Other from '../components/Other'
import User from '../components/User'
import Login from '../components/Login'
import Discover from '../components/Discover'

const routers = [
    {
        path:'/home',
        exact:true,
        component: Home
    },
    {
        path:'/about/:name/:age',
        exact:true,
        component: About
    },
    {
        path:'/user',
        exact:true,
        component: User
    },
    {
        path:'/login',
        exact:true,
        component: Login
    },
    {
        path:'/discover',
        exact:true,
        component: Discover
    },
    {
        component: Other
    },
];
export default routers;
