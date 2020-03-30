import React,{Component} from 'react';
import './Login.css'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)
        let loggedIn = false

        this.state = {
            Username:'',
            password:'',
            loggedIn
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)


    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()

        const {Username, password} =this.state

        axios({
            method: 'post',
            url: 'https://apertum-interview.herokuapp.com/api/user/login',
            data: {
                "accountId": Username,
                "pswd": password
            }
          })
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                console.log(response.data.token)
                this.setState({
                    Username: Username,
                    password: password,
                    loggedIn: true
                })
                console.log(this.state)
        })
    }
    
    
        

    render(){
        if(this.state.loggedIn){
            return <Redirect to="/users" />
        }
        return(
            
            <div className="box-container">
                <form className="box" onSubmit={this.onSubmit} >
                    <h2 className="">Hi User</h2>
                    <input type="text" placeholder="Username" name="Username" value={this.state.Username} onChange={this.onChange}/>
                    <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                    <button type="submit">Login</button>
                </form>

            </div>
        )
        }
    }


export default Login