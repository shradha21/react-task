import React from 'react'
import { FaSearch } from "react-icons/fa";

class Header extends React.Component {
    constructor() {
        super()
        this.state= {
            search: '',
            selectname: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div>
                <div className= "header">
                    <span className= "logo">Logo</span><span className= "inskillz">inskillz</span>
                    <span className= "search"><FaSearch /></span>   
                    <input 
                        type= "search" 
                        className= "search-box" 
                        onChange= {this.handleChange} 
                        placeholder= "Search" 
                        name= "search"
                        value= {this.state.search}
                    />
                    
                    <span className= "align1">Courses</span>
                    <span className= "align2">Teach With Us</span>
                    <span className= "align3">Contact</span>

                    <select value= {this.state.selectname} onChange= {this.handleChange} className= "dropdown">
                        <option value= "Joe Doe">Joe Doe</option>
                    </select>

                </div>
               
            </div>
        )
    }
}

export default Header