import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Register from '../components/register/register'
import Project1 from '../components/project/project1-recommend'
import Project1Router from '../components/project/project1/index'
import Hexaco from '../components/project/project1/hexaco'
import Project1Step1 from '../components/project/project1/step1'
import Project1Step2 from '../components/project/project1/step2'
import Project1Step3 from '../components/project/project1/step3'
import Project1Step4 from '../components/project/project1/step4'
import Project1Step5 from '../components/project/project1/step5'
import Project1Step6 from '../components/project/project1/step6'
import Project1Step7 from '../components/project/project1/step7'
import Project1Step8 from '../components/project/project1/step8'
import Project1Step9 from '../components/project/project1/step9'
import Project1Step10 from '../components/project/project1/step10'
import Project1Step11 from '../components/project/project1/step11'
import Project1Step12 from '../components/project/project1/step12'
import TestingCompleted from '../components/project/testing-completed'
import NotCompleted from '../components/project/not-completed'
import Basbis from '../components/project/project2/basbis'
import Project2Step1 from '../components/project/project2/step1'
import Project2Step2 from '../components/project/project2/step2'
import Project2Step3 from '../components/project/project2/step3'
import Project2Step4 from '../components/project/project2/step4'
import DarkTriad from '../components/project/project3/darkTriad'
import Project3Step1 from '../components/project/project3/step1'
import Project3Step2 from '../components/project/project3/step2'
import Project3Step3 from '../components/project/project3/step3'
import Project3Step4 from '../components/project/project3/step4'
import Project3Step5 from '../components/project/project3/step5'
import Project3Step6 from '../components/project/project3/step6'
import Agency from '../components/project/project4/agency'
import Project4Step1 from '../components/project/project4/step1'
import Project4Step2 from '../components/project/project4/step2'
import Project4Step3 from '../components/project/project4/step3'
import EQ from '../components/project/project5/eq'
import Project5Step1 from '../components/project/project5/step1'
import Project5Step2 from '../components/project/project5/step2'
import Project5Step3 from '../components/project/project5/step3'
import Project5Step4 from '../components/project/project5/step4'
import Project5Step5 from '../components/project/project5/step5'

Vue.use(Router)

const router=new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/testing-completed',
      component: TestingCompleted,
      beforeEnter:(to,from,next)=>{
        if(from.path.indexOf('/project1-testing')!==-1){
            sessionStorage.setItem('testName_num',0)
        }else if(from.path.indexOf('/project2-testing')!==-1){
          sessionStorage.setItem('testName_num',1)
        }else if(from.path.indexOf('/project3-testing')!==-1){
          sessionStorage.setItem('testName_num',2)
        }else if(from.path.indexOf('/project4-testing')!==-1){
          sessionStorage.setItem('testName_num',3)
        }else if(from.path.indexOf('/project5-testing')!==-1){
          sessionStorage.setItem('testName_num',4)
        }
        next()
      }
    },
    {
      path: '/not-completed',
      component: NotCompleted
    },
    {
      path: '/project1-recommend',
      component: Project1
    },
    {
      path:'/project1-testing/hexaco',
      component:Hexaco
    },
    {
      path: '/project1-testing',
      component: Project1Router,
      children:[
        {
          path:'/project1-testing/test-1',
          component:Project1Step1
        },
        {
          path:'/project1-testing/test-2',
          component:Project1Step2
        },
        {
          path:'/project1-testing/test-3',
          component:Project1Step3
        },
        {
          path:'/project1-testing/test-4',
          component:Project1Step4
        },
        {
          path:'/project1-testing/test-5',
          component:Project1Step5
        },
        {
          path:'/project1-testing/test-6',
          component:Project1Step6
        },
        {
          path:'/project1-testing/test-7',
          component:Project1Step7
        },
        {
          path:'/project1-testing/test-8',
          component:Project1Step8
        },
        {
          path:'/project1-testing/test-9',
          component:Project1Step9
        },
        {
          path:'/project1-testing/test-10',
          component:Project1Step10
        },
        {
          path:'/project1-testing/test-11',
          component:Project1Step11
        },
        {
          path:'/project1-testing/test-12',
          component:Project1Step12
        },

      ]
    },
    {
      path:'/project2-testing/basbis',
      component:Basbis
    },
    {
      path: '/project2-testing',
      component: Project1Router,
      children:[
        {
          path:'/project2-testing/test-1',
          component:Project2Step1
        },
        {
          path:'/project2-testing/test-2',
          component:Project2Step2
        },
        {
          path:'/project2-testing/test-3',
          component:Project2Step3
        },
        {
          path:'/project2-testing/test-4',
          component:Project2Step4
        }

      ]
    },
    {
      path:'/project3-testing/dark-triad',
      component:DarkTriad
    },
    {
      path: '/project4-testing',
      component: Project1Router,
      children:[
        {
          path:'/project3-testing/test-1',
          component:Project3Step1
        },
        {
          path:'/project3-testing/test-2',
          component:Project3Step2
        },
        {
          path:'/project3-testing/test-3',
          component:Project3Step3
        },
        {
          path:'/project3-testing/test-4',
          component:Project3Step4
        },
        {
          path:'/project3-testing/test-5',
          component:Project3Step5
        },
        {
          path:'/project3-testing/test-6',
          component:Project3Step6
        }

      ]
    },
    {
      path:'/project4-testing/agency',
      component:Agency
    },
    {
      path: '/project4-testing',
      component: Project1Router,
      children:[
        {
          path:'/project4-testing/test-1',
          component:Project4Step1
        },
        {
          path:'/project4-testing/test-2',
          component:Project4Step2
        },
        {
          path:'/project4-testing/test-3',
          component:Project4Step3
        }

      ]
    },
    {
      path:'/project5-testing/eq',
      component:EQ
    },
    {
      path: '/project5-testing',
      component: Project1Router,
      children:[
        {
          path:'/project5-testing/test-1',
          component:Project5Step1
        },
        {
          path:'/project5-testing/test-2',
          component:Project5Step2
        },
        {
          path:'/project5-testing/test-3',
          component:Project5Step3
        },
        {
          path:'/project5-testing/test-4',
          component:Project5Step4
        },
        {
          path:'/project5-testing/test-5',
          component:Project5Step5
        }
      ]
    }
  ]
});

router.beforeEach((to,from,next)=>{   // 进入页面路由前
  window.scrollTo(0,0);    // 每次进入页面前强制页面回到顶部
  next()
});

router.afterEach((to,from)=>{
  if(to.path.indexOf('/project1-testing')!==-1){
    if(!sessionStorage.hasOwnProperty('project_num_1')){
      sessionStorage.setItem('project_num_1','60');
    }
  }else if(to.path.indexOf('/project2-testing')!==-1){
    if(!sessionStorage.hasOwnProperty('project_num_2')){
      sessionStorage.setItem('project_num_2','20');
    }
  }else if(to.path.indexOf('/project3-testing')!==-1){
    if(!sessionStorage.hasOwnProperty('project_num_3')){
      sessionStorage.setItem('project_num_3','27');
    }
  }else if(to.path.indexOf('/project4-testing')!==-1){
    if(!sessionStorage.hasOwnProperty('project_num_4')){
      sessionStorage.setItem('project_num_4','12');
    }
  }else if(to.path.indexOf('/project5-testing')!==-1){
    if(!sessionStorage.hasOwnProperty('project_num_5')){
      sessionStorage.setItem('project_num_5','25');
    }
  }

});

export default router
