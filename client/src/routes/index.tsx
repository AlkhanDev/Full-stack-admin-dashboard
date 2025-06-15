import React from 'react'
import type {RouteObject} from 'react-router'
import {AuthLayout,DashboardLayout} from '@/shared/layout'
import {authLoader,dashboardLoader} from './authLoader'
import { Urls } from '@/shared/constants/urls'

const Users = React.lazy(()=>import('@/pages/Users'))
const Login = React.lazy(()=>import('@/pages/Login'))

export const router : Partial<RouteObject>[] = [
 {
  path:Urls.DASHBOARD,
  element:<DashboardLayout/>,
  loader:dashboardLoader,
  children:[
    {
      index:true,
      element:<Users/>
    }
  ]
 },
 {
  path:Urls.AUTH,
  element:<AuthLayout/>,
  loader:authLoader,
  children:[
    {
      index:true,
      element:<Login/>
    }
  ]
 }
]