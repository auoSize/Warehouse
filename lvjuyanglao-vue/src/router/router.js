import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home/home.vue'
import dynamicIndex from '../page/dynamic/index.vue'
import dynamic from '../page/dynamic/dynamic.vue'
import dynamicDetails from '../page/dynamic/details.vue'
import experienceIndex from '../page/experience/index.vue'
import experience from '../page/experience/experience.vue'
import experienceDetails from '../page/experience/details.vue'
import provide from '../page/provide/provide.vue'
import provideDetails from '../page/provide/details.vue'
import wisdomIndex from '../page/wisdom/index.vue'
import wisdom from '../page/wisdom/wisdom.vue'
import elderAssessment from '../page/wisdom/elderAssessment.vue'
import mechanism from '../page/wisdom/mechanism.vue'
import numberRead from '../page/wisdom/numberRead.vue'
import service from '../page/provide/service.vue'
import serviceIndex from '../page/provide/index.vue'
import understand from '../page/understand/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name:'home',
      component: home
    },
    {
      path: '/dynamic',
      component: dynamicIndex,
      children:[
        {
          path: '/',
          name: 'dynamic',
          component: dynamic
        },
        {
          path: '/dynamic/details',
          name:'dynamicDetails',
          component: dynamicDetails
        },
      ]
    },
    {
      path: '/experience',
      component: experienceIndex,
      children:[
        {
          path:'/',
          name:'experience',
          component:experience
        } ,
        {
          path:'/experience/details',
          name:'experienceDetails',
          component:experienceDetails
        }
      ]
    },{
      path: '/wisdom',
      component: wisdomIndex,
      children:[
        {
          path: '/',
          name:'wisdom',
          component: wisdom
        }, {
          path: '/wisdom/mechanism',
          name:'mechanism',
          component: mechanism
        },
        {
          path: '/wisdom/elderAssessment',
          name:'elderAssessment',
          component: elderAssessment
        },
        {
          path: '/wisdom/numberRead',
          name:'numberRead',
          component: numberRead
        }
      ]
    },
    {
      path: '/provide',
      component: serviceIndex,
      children: [
        {
          path: '/',
          name: 'provide',
          component: provide
        },
        {
          path: '/provide/server',
          component: service
        },
        {
          path: '/provide/details',
          name:'provideDetails',
          component: provideDetails
        }
      ]
    },{
      path: '/understand',
      name: 'understand',
      component: understand
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
