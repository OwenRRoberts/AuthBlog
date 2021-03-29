import React from 'react';
import { blog } from "../types";
import { RouteComponentProps, Link } from "react-router-dom";

const SingleBlog: React.FC<SingleBlogProps> = (props: SingleBlogProps) => {
    const [blog, setBlog] = React.useState<blog>({
        id: null,
        title: "",
        content: "",
        name: "",
        tags: []
    });

    React.useEffect(() => {
        (async () => {
            let data = await fetch(`/api/blogs/${props.match.params.id}`)
            let blog = await data.json();
            setBlog(blog);
        })();
    }, []);

    return (
        <div className="container">
            <div className="shadow card home-blog-card m-3">
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{blog.name}</h6>
                    {blog.tags?.map((tag: { name: string }) => <span className="badge badge-pill badge-secondary">{tag.name}</span>)}
                    <p className="card-text">{blog.content}</p>
                    <Link to={`/blog/${blog.id}/admin`}>
                        <button className="btn btn-sm btn-outline-dark">Admin Options</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

interface SingleBlogProps extends RouteComponentProps<{ id: string }> { }

export default SingleBlog;