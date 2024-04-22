import { useParams } from "react-router-dom"
import "./AdminReview.css"
import { useEffect, useState } from "react"
import axios from "axios"
function AdminReview()
{
    const params=useParams()
    const [data,setData]=useState()

    useEffect(()=>{
    fetchdata()
    },[])

    const fetchdata=()=>{
     axios.post("http://localhost:3001/fetchreview",{data:params.id}).then((responce)=>{
        if(responce.data.success)
        setData(responce.data.data)
     })
    }

    return(
        <div className="adminreviewwrap">
            {data && data.map((item)=>{
                return(
                    <div className="divdiv">
                    <div className="adminname">
                        <p>{item.userid.username}</p>
                        <p>{item.createdAt}</p>
                    </div>
                    <p>{item.bookreview}</p>
                   </div>
                )
            })}
          
        </div>
    )
}

export default AdminReview