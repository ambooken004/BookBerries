import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./ReportPage.css"
import axios from 'axios'
import BookCard from '../bookcard/BookCard'

function ReportPage() {
  const docterData=[
    {
        name:"Isac Sebastine",
        specilization:"Mentalist",
        hospitalAddress:"Co-operative Irinjalkuda, Thrissur Pin :680567",
        contactNo:"8976453245"
    },
    {
        name:"Praveen P J",
        specilization:"Mentalist",
        hospitalAddress:"Modern Hospital Kodungallur, Thrissur Pin:680686",
        contactNo:"7025059878"  
    }
  ]
  const [books,setBooks]=useState([]);
  const {confidence , emotion}=useParams() 

  useEffect(()=>{
  fetchBook()
  },[])

  const fetchBook=async()=>{
    const response = await axios.get('http://localhost:3001/viewallbook')
    if(response)
    setBooks(response.data.data)
  }
  return (
    <div>
        <h1 className='reporth1'>Mental Stability Report</h1>
        <p className={`reporttext ${emotion=='ANGRY' || emotion =='SADNESS' || emotion=="FEAR" || emotion=='DISGUST' ? 'red': emotion=="HAPPY"? 'green' : "blue"}`}>According to report it finds that you are a {emotion} person</p>
        <p className={`reporttext ${emotion=='ANGRY' || emotion =='SADNESS' || emotion=="FEAR" || emotion=='DISGUST' ? 'red': emotion=="HAPPY"? 'green' : "blue"}`}>Your Confidence level is {confidence} out of 1</p>
        <p className='doctorp'>Doctor Suggesion</p>
        {(emotion!="HAPPY" && emotion!= "NEUTRAL") ? <div className='doctorwrapdiv'>
            {docterData.map((item)=>{
                return(
                    <div className='doctorwrap'>
                      <img className='doctorimg' src="https://cdn-icons-png.flaticon.com/128/2785/2785482.png" alt='docterlogo' />
                      <div className='innerwrap'>
                        <p className='doctordet'>Name : {item.name}</p>
                        <p className='doctordet'>Specilization : {item.specilization}</p>
                        <p className='doctordet'>Hospital Address : {item.hospitalAddress}</p>
                        <p className='doctordet'>contactNo : {item.contactNo}</p>
                      </div>
                    </div>
                )
            })} 
        </div>: <p style={{textAlign:'center',color:'blue'}}>Currently not have any Doctor Suggestion</p>}

        <h3 className='reportbookh3'>Book Suggesion</h3>
        {books && books.length > 0 && <div className='doctorwrapdiv'>
         {books.map((item)=>{
          if(item.category===emotion)
           return <BookCard book={item} />}
          )}
        </div>}
    </div>
  )
}

export default ReportPage