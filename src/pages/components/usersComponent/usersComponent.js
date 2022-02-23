import { useNavigate } from "react-router-dom"
import "./usersComponent.css"
const UsersComponent = (props)=>{
    const {id,name,username,email,setDeleteUser} = props
    const navigate = useNavigate()
    const getProfile = ()=>{
        navigate(`/users/${id}`)
    }
    return(
        <div className="user-item">
         <p>User Name : <span className="bold"> {username}</span></p>
            <p>User Email : <span className="bold"> {email}</span></p>
            <button onClick={()=>setDeleteUser(id)} className="btn">Delete</button>
            <button onClick={getProfile} className="btn">Get Profile</button>
        </div>
    )
}

export default UsersComponent