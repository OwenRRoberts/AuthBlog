export interface blog {
    id: number,
    title: string,
    content: string,
    name: string,
    tags?: []
}

export interface newBlog {
    author: {
        name: string,
        email: string
    },
    blog: {
        title: string,
        content: string,
        tags: string[]
    },
}
