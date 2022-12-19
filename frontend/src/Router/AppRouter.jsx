import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminPage } from '../Employee/pages/AdminPage'
import { ClientPage } from '../Employee/pages/ClientPage'
import {EmployeePage} from '../Employee/pages/EmployeePage'
import { LoginPage } from '../auth/pages/LoginPage'
export const AppRouter = () => {
  return (
    <>
    
        <Routes>
            <Route path='cliente' element={<ClientPage/>}/>
            <Route path='empleado' element={<EmployeePage/> }/>
            <Route path='admin' element={<AdminPage/>}/>

            <Route path='login' element = {<LoginPage/>}/>
        </Routes>
    </>
  )
}
