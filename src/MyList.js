import { Component } from "react";
import check from './icon.png';

export class MyList extends Component {
    state = {
        userInput:'',
        myList:[]
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert ("Please enter an item")
        } else {
            let listArray = this.state.myList;
            listArray.push(input);
            this.setState({myList: listArray, userInput:''})
        }
    }

    deleteItem() {
        let listArray = this.state.myList;
        listArray = [];
        this.setState({myList: listArray})
    }

    crossedWord(event) {
        const li= event.target;
        li.classList.toggle('crossed')
    }

    onFormSumbit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSumbit}>
                <div className="container">
                    <input type="text" placeholder="What do you want to do today?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
                </div>
                <ul>
                    {this.state.myList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}><img src={check} width="20px" className="icon"/>{item}</li>
                    ))}
                    </ul>
                    <div className="container">
                    <button onClick={() => this.addItem(this.state.userInput)} className="add" >Add</button>
                    <button onClick={() => this.deleteItem()}className="delete" >Delete</button>
                </div>
                </form>
            </div>
        )
    }
}

export default MyList;