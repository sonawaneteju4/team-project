import React from 'react'
import './font.css'
import DonorForm from './donnar/DonorForm'
import BankReportForm from './bank/BankReportForm'
import HospitalSearch from './hospital/HospitalSearch'

const Index = () => {
  return (
   <div>
    {/* <DonorForm/>
     */}
     <HospitalSearch/>
    <BankReportForm/>
   </div>
  )
}

export default Index