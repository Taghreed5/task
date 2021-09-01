import React , {Component} from 'react';
import axios from 'axios'
class Task extends Component
{
    state = {
        users : []
    }
    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res =>{
           console.log(res.data)
           this.setState({
               users: res.data
           })
        })
    }
    render()
    {
        return(
           <table className="table">
               <tr className="head"><div className="pa">ID</div>{this.state.users.map(user => <td>{user.id}</td>)}</tr>
             <tr className="top">{this.state.users.map(user => <td>{user.title}</td>)}</tr>
              <tr className="bottom">{this.state.users.map(user => <td>{user.body}</td>)}</tr>
           </table>
        )
    }
}
export default Task