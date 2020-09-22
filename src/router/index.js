import Auth from '../view/auth/Auth'
import View from '../view/View'

const routeList = [
  {
    path: '/',
    component: Auth,
    exact: true,
  },
  {
    path: '/view',
    component: View,
  },
]

export default routeList;