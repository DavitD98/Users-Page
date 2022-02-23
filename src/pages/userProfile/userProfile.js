import "./userProfile.css"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"


const UserProfile = (props)=>{
    const {usersArray} = props
    const params = useParams()
    const [user,setUser] = useState({})


    useEffect(()=>{
        usersArray.filter(item => {
            if(item.id === params.id){
                setUser(item)
            }else{
                return item
            }
        })
    },[params.id])

    const navigate = useNavigate()
    const getBack = ()=>{
        navigate("/")
    }

    return(
        <div className="user-profile">
           <h1 style={{alignSelf:"center"}}>User Profile</h1>
          <p>User Name :<span className="bold">{user.username}</span></p>
          <p>user Email :<span className="bold">{user.email}</span></p>
          <button onClick={getBack} className="btn">Back</button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        usersArray:state.usersState.usersArray
    }
}
export default connect(mapStateToProps)(UserProfile)