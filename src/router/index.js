import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/databinding/html',
    name: 'DataBindinghtmlView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue')
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingInputView.vue')
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingSelectView.vue')
  },
  {
    path: '/databinding/check',
    name: 'DataBindingCheckboxView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingCheckboxView.vue')
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingRadioView.vue')
  },
  {
    path: '/databinding/attr',
    name: 'DataBindingAttributeView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingAttributeView.vue')
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingListView.vue')
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingClassView.vue')
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStyleView.vue')
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventClickView.vue')
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventChangeView.vue')
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventKeyView.vue')
  },
  {
    path: '/3_tutorial/2',
    name: 'step2View',
    component: () => import(/* webpackChunkName: "tutorial", webpackPrefetch:true */ '../views/3_tutorial/Step2View.vue')
  },
  {
    path: '/3_tutorial/3',
    name: 'step3View',
    component: () => import(/* webpackChunkName: "tutorial", webpackPrefetch:true */ '../views/3_tutorial/Step3View.vue')
  },
  {
    path: '/3_tutorial/4',
    name: 'step4View',
    component: () => import(/* webpackChunkName: "tutorial", webpackPrefetch:true */ '../views/3_tutorial/Step4View.vue')
  },
  {
    path: '/3_tutorial/5',
    name: 'step5View',
    component: () => import(/* webpackChunkName: "tutorial", webpackPrefetch:true */ '../views/3_tutorial/Step5View.vue')
  },
  {
    path: '/3_tutorial/6',
    name: 'step6View',
    component: () => import(/* webpackChunkName: "tutorial", webpackPrefetch:true */ '../views/3_tutorial/Step6View.vue')
  },
  {
    path: '/3_tutorial/7',
    name: 'step7View',
    component: () => import(/* webpackChunkName: "tutorial", webpackPrefetch:true */ '../views/3_tutorial/Step7View.vue')
  },
  {
    path: '/3_tutorial/8',
    name: 'step8View',
    component: () => import(/* webpackChunkName: "tutorial", webpackPrefetch:true */ '../views/3_tutorial/Step8View.vue')
  },
  {
    path: '/3_tutorial/9',
    name: 'step9View',
    component: () => import(/* webpackChunkName: "tutorial", webpackPrefetch:true */ '../views/3_tutorial/Step9View.vue')
  },
  {
    path: '/3_tutorial/10',
    name: 'step10View',
    component: () => import(/* webpackChunkName: "tutorial", webpackPrefetch:true */ '../views/3_tutorial/Step10View.vue')
  },
  {
    path: '/3_tutorial/11',
    name: 'step11View',
    component: () => import(/* webpackChunkName: "tutorial", webpackPrefetch:true */ '../views/3_tutorial/Step11View.vue')
  },
  {
    path: '/3_tutorial/13',
    name: 'step13View',
    component: () => import(/* webpackChunkName: "tutorial", webpackPrefetch:true */ '../views/3_tutorial/Step13View.vue')
  },
  {
    path: '/3_tutorial/14',
    name: 'step14View',
    component: () => import(/* webpackChunkName: "tutorial", webpackPrefetch:true */ '../views/3_tutorial/Step14View.vue')
  },
  {
    path: '/4_examples/HandingInput',
    name: 'HandingInput',
    component: () => import(/* webpackChunkName: "examples", webpackPrefetch:true */ '../views/4_examples/HandingInput.vue')
  },
  {
    path: '/4_examples/AttributeBindings',
    name: 'AttributeBindings',
    component: () => import(/* webpackChunkName: "examples", webpackPrefetch:true */ '../views/4_examples/AttributeBindings.vue')
  },
  {
    path: '/4_examples/ConditionalsAndLoops',
    name: 'ConditionalsAndLoops',
    component: () => import(/* webpackChunkName: "examples", webpackPrefetch:true */ '../views/4_examples/ConditionalsAndLoops.vue')
  },
  {
    path: '/4_examples/FormBindings',
    name: 'FormBindings',
    component: () => import(/* webpackChunkName: "examples", webpackPrefetch:true */ '../views/4_examples/FormBindings.vue')
  },
  {
    path: '/4_examples/SimpleComponent',
    name: 'SimpleComponent',
    component: () => import(/* webpackChunkName: "examples", webpackPrefetch:true */ '../views/4_examples/SimpleComponent.vue')
  },
  {
    path: '/4_examples/FetchingData',
    name: 'FetchingData',
    component: () => import(/* webpackChunkName: "examples", webpackPrefetch:true */ '../views/4_examples/FetchingData.vue')
  },
  {
    path: '/4_examples/TodoMVC',
    name: 'TodoMVC',
    component: () => import(/* webpackChunkName: "examples", webpackPrefetch:true */ '../views/4_examples/TodoMVC.vue')
  },
  {
    path: '/5_playground/EventModel',
    name: 'EventModel',
    component: () => import(/* webpackChunkName: "5_playground", webpackPrefetch:true */ '../views/5_playground/EventModel.vue')
  },
  {
    path: '/5_playground/ClassAndStyle',
    name: 'ClassAndStyle',
    component: () => import(/* webpackChunkName: "5_playground", webpackPrefetch:true */ '../views/5_playground/ClassAndStyle.vue')
  },
  {
    path: '/6_composition/RefsStudy',
    name: 'RefsStudy',
    component: () => import(/* webpackChunkName: "5_playground", webpackPrefetch:true */ '../views/6_composition/RefsStudy.vue')
  },
  {
    path: '/6_composition/RefOrReactive',
    name: 'RefOrReactive',
    component: () => import(/* webpackChunkName: "5_playground", webpackPrefetch:true */ '../views/6_composition/RefOrReactive.vue')
  },
  {
    path: '/6_composition/ComputedStudy',
    name: 'ComputedStudy',
    component: () => import(/* webpackChunkName: "5_playground", webpackPrefetch:true */ '../views/6_composition/ComputedStudy.vue')
  },
  {
    path: '/6_composition/WatchEffect',
    name: 'WatchEffect',
    component: () => import(/* webpackChunkName: "5_playground", webpackPrefetch:true */ '../views/6_composition/WatchEffect.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
