import React from 'react';
import { blog } from "../types";
import { Link } from "react-router-dom";

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const [blogs, setBlogs] = React.useState<blog[]>([]);

    React.useEffect(() => {
        (async () => {
            let data = await fetch("/api/blogs")
            let blogs = await data.json();
            blogs.reverse();
            setBlogs(blogs);
        })();
    }, [])

    return (
        <div className="container">
            {blogs.map(blog => (
                <div className="shadow card home-blog-card m-3">
                    <div className="card-body">
                        <h5 className="card-title">{ blog.title }</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{ blog.name }</h6>
                        <p className="card-text">{blog.content}</p>
                        <Link to={`/blog/${blog.id}`}>
                            <button className="btn btn-sm btn-outline-dark">Read More</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

interface HomeProps { }

export default Home;