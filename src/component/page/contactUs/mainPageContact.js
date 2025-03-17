import React from 'react'
import Connected from './connected'
import Faces from '../Default Pages/faces'
import Families from '../Default Pages/families'
import ClientSay from '../Default Pages/clientSay'
import QuestionAnswer from '../Default Pages/QuestionAnswer/questionAnswer'
import Footer from '../Default Pages/footer'

const MainPageContact = () => {
  return (
    <div><Connected/>
    <Faces/>
    <Families/>
    <ClientSay/>
    <QuestionAnswer/>
    <Footer/></div>
  )
}

export default MainPageContact