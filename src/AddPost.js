import React from "react";
import './Post.css'

class AddPost extends React.Component{

    state = {
        text: ""
    }

    updateState = (event) => {
        this.setState({text:event.target.value})
        console.log("Text of input = ", this.state.text)
    }

    handleAdd = () => {
        console.log("new posting = ", this.state.text)
        this.props.onClick(this.state.text)
    }

    render() {
        return(
            <div className="post-container">
                <textarea onChange={this.updateState} type="text" value={this.state.text}/>
                <br />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}
export default AddPost