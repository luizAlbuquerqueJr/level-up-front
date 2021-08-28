import Home from '../views/Home.vue'
import HomeBusiness from '../views/HomeBusiness.vue'
import Login from '../views/Login.vue'
import CourseDetails from '../views/CourseDetails'
import CompanySkills from '../views/CompanySkills'
import Colarators from '../views/Colaborators'
import CollaboratorSkillsList from '../views/CollaboratorSkillsList'
import CollaboratorFirstAccess from '../views/CollaboratorFirstAccess'

export default [
  { path: "*", redirect: "/login" },
  {
    meta: {
    public: true // you're saying if this page is public or not (in this case it is :))
    },
    path: '/home', // the path of this new page
    component: Home, // the one you imported
    name: 'home'
  },
  {
   meta: {
    public: true // you're saying if this page is public or not (in this case it is :))
   },
   path: '/home-business', // the path of this new page
   component: HomeBusiness, // the one you imported
   name: 'home'
  },
  {
    meta: {
     public: true // you're saying if this page is public or not (in this case it is :))
    },
    path: '/login', // the path of this new page
    component: Login, // the one you imported
    name: 'about'
 },
 {
   meta: {
    public: true // you're saying if this page is public or not (in this case it is :))
   },
   path: '/coursedetails', // the path of this new page
   component: CourseDetails, // the one you imported
   name: 'course'
   },
   {
     meta: {
      public: true // you're saying if this page is public or not (in this case it is :))
     },
      path: '/company-skills', // the path of this new page
      component: CompanySkills, // the one you imported
      name: 'company-skills'
   },
   {
      meta: {
      public: true // you're saying if this page is public or not (in this case it is :))
      },
      path: '/colaborators', // the path of this new page
      component: Colarators, // the one you imported
      name: 'colaborators'
      }
},
{
   meta: {
    public: true // you're saying if this page is public or not (in this case it is :))
   },
   path: '/collaborator-skills', // the path of this new page
   component: CollaboratorSkillsList, // the one you imported
   name: 'collaborator-skills'
},
{
   meta: {
    public: true // you're saying if this page is public or not (in this case it is :))
   },
   path: '/collaborator-first-access', // the path of this new page
   component: CollaboratorFirstAccess, // the one you imported
   name: 'collaborator-first-access'
}
]