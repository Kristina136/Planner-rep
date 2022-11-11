
import { Component } from "react";
import icon from "./ic.png";

export class Todo extends Component{
    state={
        userInput: "",
        list:[]
    }

    onChangeInput(e){
        this.setState({userInput:e})
    }

    onClickAdd(i){
        if(i===""){alert("Text your information")}
        else{
        let listArray=this.state.list;
        listArray.push(i);
        this.setState({list: listArray, userInput:""})
    }}

    crossedWord(event){
        const li=event.target;
        li.classList.toggle("crossed");
    }

    onClickDelete(){
        let listArray=this.state.list;
        listArray=[];
        this.setState({list:listArray})
    }

    eventEnter(e){
        e.preventDefault()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.eventEnter}>
                <input  className="container"
                placeholder="What you need to do today?"
                type="text"
                onChange={(e)=>{this.onChangeInput(e.target.value)}
                }
                value={this.state.userInput}
                />
            <div  className="container">
                <ul>
                    {this.state.list.map((item, index)=>(
                    <li onClick={this.crossedWord}
                        key={index}>
                       {item}
                       <img className="timerimg" src={icon} width="40px" alt="icon"/>
                        </li>))}
                </ul>
            </div>
            <div className="container">
                <button className="add" onClick={()=>this.onClickAdd(this.state.userInput)}>Add</button>
            </div> 

               <div className="container">
                <button onClick={()=>this.onClickDelete()} className="del">Delete</button>
            </div> 
            </form>
            </div>
        )
    }
}