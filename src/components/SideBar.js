import React from 'react'
import picture from '../assests/images/boy.jpg'


class SideBar extends React.Component {
    render() {
        return(
            <div className= "box">
                <h2 className="text">INSTRUCTOR PROFILE</h2>
                <img src= {picture} alt= "profile_picture" className= "picture" />
                <h2 className="text">Welcome Jyothi Prakash Kumar</h2>
                <hr className= "horizontal" />
                 <span className= "content1">Courses Offered</span> <span className= "content2">15</span>
                 <hr className= "horizontal" />
                 <span className= "content1">Student Enrolled</span> <span className= "content2">5,44,953</span>
                 <hr className= "horizontal" /> 
                 <span className= "content1">Language</span> <span className= "language">English</span>
                 <hr className= "horizontal" /> 
                 <span className= "content1">Join Date</span> <span className= "language">12-02-2021</span>
                 
            </div>
        )
    }
}

export default SideBar