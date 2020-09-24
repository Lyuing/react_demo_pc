import Auth from '../view/auth/Auth'
import View from '../view'

const routeList = [
  {
    path: '/',
    component: Auth,
    exact: true,
  },
  {
    path: '/view',
    component: View,
    children: [],
  },
]

export default routeList;