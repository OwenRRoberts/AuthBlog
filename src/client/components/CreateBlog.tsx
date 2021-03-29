import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { newBlog } from '../types';

const CreateBlog: React.FC<CreateBlogProps> = (props: CreateBlogProps) => {
    const [newBlog, setNewBlog] = React.useState<newBlog>({
        author: {
            name: "",
            email: ""
        },
        blog: {
            title: "",
            content: "",
            tags: []
        },
    });

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewBlog({
        author: {
            name: e.target.value,
            email: newBlog.author.email
        },
        blog: {
            title: newBlog.blog.title,
            content: newBlog.blog.content,
            tags: newBlog.blog.tags
        },
    });

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewBlog({
        author: {
            name: newBlog.author.name,
            email: e.target.value
        },
        blog: {
            title: newBlog.blog.title,
            content: newBlog.blog.content,
            tags: newBlog.blog.tags
        },
    });

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewBlog({
        author: {
            name: newBlog.author.name,
            email: newBlog.author.email
        },
        blog: {
            title: e.target.value,
            content: newBlog.blog.content,
            tags: newBlog.blog.tags
        },
    });

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setNewBlog({
        author: {
            name: newBlog.author.name,
            email: newBlog.author.email
        },
        blog: {
            title: newBlog.blog.title,
            content: e.target.value,
            tags: newBlog.blog.tags
        },
    });

    const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => setNewBlog({
        author: {
            name: newBlog.author.name,
            email: newBlog.author.email
        },
        blog: {
            title: newBlog.blog.title,
            content: e.target.value,
            tags: [...newBlog.blog.tags, e.target.value]
        },
    });

    const PostBlog = async (blog: {}) => {
        await fetch("/api/blogs/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBlog)
        });

        props.history.push("/");
    }

    return (
        <div>
            <div className="container">
                <div className="card shadow-lg m-2">
                    <div className="card-body">
                        <div className="row">
                            <input type="text" className="card-title" placeholder="Name?" onChange={handleNameChange} />
                            <input type="text" className="card-title" placeholder="Email?" onChange={handleEmailChange} />
                        </div>
                        <div className="row">
                            <input type="text" className="card-title" placeholder="Title?" onChange={handleTitleChange} />
                            <textarea className="card-text" defaultValue={newBlog.blog.content} cols={50} rows={15} onChange={handleContentChange}></textarea>
                            <select multiple={true} value={newBlog.blog.tags} name="tags" id="tag-select" onChange={handleTagChange}>
                                <option value="coding">coding</option>
                                <option value="lifestyle">lifestyle</option>
                                <option value="literature">literature</option>
                                <option value="tech">tech</option>
                                <option value="political">political</option>
                            </select>
                        </div>
                        <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={PostBlog}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface CreateBlogProps extends RouteComponentProps {}

export default CreateBlog;