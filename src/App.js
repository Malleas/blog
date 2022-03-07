import React from "react";
import Post from './Post'
import AddPost from "./AddPost";

class App extends React.Component {

    state = {
        nextIdNumber:3,
        posts: [
            {
                postNumber: 0,
                text: "A starting blog post"
            },
            {
                postNumber: 1,
                text: "My Second ever post"
            },
            {
                postNumber: 2,
                text: "Blah and more useless typing"
            }
        ]
    }

    deleteBlogPost = (toBeDeleted) => {
        console.log("Current post list ", this.state.posts)
        var postToDelete = this.state.posts.filter((post) => {
            console.log(post.postNumber, toBeDeleted)
            return post.postNumber === toBeDeleted
        })
        console.log("Going to delete blog post: ", postToDelete)

        this.setState({posts: this.state.posts.filter( (post)=>{
            return post !== postToDelete[0]
            })})
    }

    addNewPost = (t) => {
        console.log("Creating a new post with the text of: ", t)
        this.setState({nextNumber: this.state.nextIdNumber+1})
        var newPost = {
            postNumber: this.state.nextIdNumber,
            text:t
        }
        var newArray = this.state.posts.concat(newPost)
        this.setState({posts: newArray})
    }

    render() {
        const posts = this.state.posts.map(
            (onePost) => {
                return (
                    <Post onClick={this.deleteBlogPost} text={onePost.text} id={onePost.postNumber}/>
                )
            }
        )
        return(
            <div>
                {posts}
                <AddPost onClick={this.addNewPost}/>
            </div>
        )
    }
}

export default App