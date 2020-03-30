import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios'
import Card from '../Card/Card'
import './Users.css'

export default class Users extends Component {
    constructor(props){
        super(props)
        let loggedIn = true

        this.state = {
            users: [],
            loggedIn
        }
        
    }

    componentDidMount () {
        const token = localStorage.getItem("token")
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get('https://apertum-interview.herokuapp.com/api/users', config)
            .then((response) => {
                const user =response.data
                this.setState({users: user})
                console.log( response );
            } )
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        if(this.state.loggedIn === false){
            return <Redirect to="/" />
        }

        const users = this.state.users.map((user,i) =>{
            return <Card key={i} accountId={user.accountId} firstName={user.firstName} age={user.age}  lastName={user.lastName} />
            })

        const filterBtn = () =>this.state.users.filter(user => user.age >=20 )
                                .map((user,i) =>{
                                     return <Card key={i} accountId={user.accountId} firstName={user.firstName} age={user.age}  lastName={user.lastName} />
                                    })
                                    console.log("Clicked")
                
         

        
        return (
            <div >
                <h1>Welcome to all Users</h1>
                <button onClick={filterBtn} >Filter</button>
                <div className="Users" >
                    {users}
                </div>
                <Link to="/"><button className="Users" type="submit">Login Again</button></Link>
            </div>
        )
    }
}
