import "./returnedUsersComponent.css"
import { useNavigate } from "react-router-dom"

const ReturnedUsersComponent = (props)=>{

    const {id,name,username,email}= props
     const navigate = useNavigate()
     const getProfile = ()=>{
         navigate(`users/${id}`)
     }
    return(
        <div className="result">
            <p style={{color:"#fff"}}>{username}</p>
            <button onClick={getProfile} className="btn">Watch</button>
        </div>
    )
}

export default ReturnedUsersComponent