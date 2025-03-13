import React from 'react'
import Page1 from '../../../widgets/page1'
import NumberSpeak from '../Default Pages/numberSpeak'
import Faces from '../Default Pages/faces'
import Families from '../Default Pages/families'
import QuestionAnswer from '../Default Pages/QuestionAnswer/questionAnswer'
import Talk from '../Default Pages/talk'
import Footer from '../Default Pages/footer'
import ClientSay from '../Default Pages/clientSay'
import Succeed from '../Default Pages/succeed'
import ClientSuccess from '../Default Pages/clientSuccess'

const MainPage = () => {
  return (
    <div>
    <NumberSpeak/>
    <Faces/>
    <Families/>
    <ClientSay />
    <Succeed/>
    <ClientSuccess/>
    <QuestionAnswer/>
    <Talk/>
    <Footer/>
    </div>
  )
}

export default MainPage