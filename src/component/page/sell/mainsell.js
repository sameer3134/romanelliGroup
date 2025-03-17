import React from 'react'
import Simplified from './simplified'
import ClientSay from '../Default Pages/clientSay'
import ClientSuccess from '../Default Pages/clientSuccess'
import QuestionAnswer from '../Default Pages/QuestionAnswer/questionAnswer'
import Footer from '../Default Pages/footer'
import SellSmarter from './sellSmarter'

const Mainsell = () => {
  return (
    <div><Simplified/>
    <ClientSay/>
    <ClientSuccess/>
    <SellSmarter/>
    <QuestionAnswer/>
    <Footer/></div>
  )
}

export default Mainsell