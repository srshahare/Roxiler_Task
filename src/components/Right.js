import React from 'react'
import '../containers/Home.css'
import { RightFun } from '../custom/RightFun'

const Right = () => {
    
    //functional component of right component
    const {info, todo} = RightFun();

    return (
        <div>
            <h3>User Details</h3>
            {info && todo ?
            <div className="DetailBox">
                <div className="InfoItem">
                    <h4>ToDo ID: </h4>
                    <h4>ToDo Title: </h4>
                    <h4>User ID: </h4>
                    <h4>Name: </h4>
                    <h4>Email: </h4>
                </div>
                <div className="InfoData">
                    <p>{todo.id} </p>
                    <p>{todo.title} </p>
                    <p>{info.id} </p>
                    <p>{info.name} </p>
                    <p>{info.email} </p>
                </div>
            </div>:
            ""
        }
        </div>
    )
}

export default Right
