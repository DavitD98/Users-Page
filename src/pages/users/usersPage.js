import "./usersPage.css"
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {setDeleteUser} from "../../redux/users/actions";
import UsersComponent from "../components/usersComponent/usersComponent";
import ReturnedUsersComponent from "../components/returnedUsersComponent/returnedUsersComponent";



const UsersPage = (props)=>{
    //          Props and States
   const {usersArray,setDeleteUser}=props

    const [show,setShow]=useState(false)
    const [returnedUsers,setReturnedUsers] = useState([])

   //       UseEffect(puts usersArray items into returnedUsers array depended on usesArray)

    useEffect(()=>{
       setReturnedUsers(usersArray)
    },[usersArray])

 //             Functions
 const searchUser = (e)=>{
     setReturnedUsers(usersArray.filter(item => item.username.toLowerCase().includes(e.target.value.toLowerCase()) ))
 }

 const showHide = ()=>{
       setShow(prevState => {
           return !show
       })
 }

 console.log(usersArray)
    return(
        <div className="main">
        <div className="header">
            <h1 style={{textAlign:"center"}} className="orange">Users Page</h1>
            <div className="search">
            <h3 className="orange">Search Users</h3>
            <input  onChange={searchUser} placeholder="search ..."/>

                {
                show ? <button onClick={showHide} className="btn">Hide Searches</button>
                 : <button onClick={showHide} className="btn">Show Searches</button>
                }

            </div>
        </div>
            {
                 show? <div className="search-result">
                   {
                      returnedUsers.map(item => <ReturnedUsersComponent key={item.id} {...item}/>)
                   }
                       </div>
                     : ""
            }

             <h2 className="orange">Users</h2>
            <div className="users-container">
                {
                    usersArray.map(item => <UsersComponent {...item} key={item.id} setDeleteUser={setDeleteUser}/>)
                }
            </div>

        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        usersArray:state.usersState.usersArray
    }
}

export default connect(mapStateToProps,{setDeleteUser})(UsersPage)