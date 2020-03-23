import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home'
import NamedViews from '../components/NamedViews'
import SubViewNamed from '../components/SubViewNamed'
import ChildComponentExample from '../components/ChildComponentExample'
import ChildComponentExampleNamed from '../components/ChildComponentExampleNamed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home/:msg?',
      component: Home
    },
    {
        path: '/NamedViews',
        component: NamedViews,
        children: [{
            path: 'childComponentExample',
            component: ChildComponentExample
        },
        {
            path: 'namedSubView',
            components: {
                default: SubViewNamed,
                named: ChildComponentExampleNamed,
            }
        },
        ]
    },
  ]
})
