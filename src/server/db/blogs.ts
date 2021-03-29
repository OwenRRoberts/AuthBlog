import { Query } from "./index";

const all = () => Query(`
    select blogs.id, blogs.title, blogs.content, authors.name from blogs 
    join authors 
    on blogs.authorid = authors.id
`);

const one = (id: number) => Query(`
    select blogs.id, blogs.title, blogs.content, authors.name from blogs 
    join authors 
    on blogs.authorid = authors.id
    where blogs.id = ?
`, [id]);

const insert = (title: string, content: string, authorid: number) => Query(`
    insert into blogs (title, content, authorid)
    values(?, ?, ?)
`, [title, content, authorid]);

const update = (content: string, id: number) => Query(`
    UPDATE blogs
    SET content = ?
    WHERE blogs.id = ?;
`, [content, id]);

const deleteBlog = (id: number) => Query(`
    delete from blogs
    where blogs.id = ?
`, [id]);

export default {
    all,
    one,
    insert,
    update,
    deleteBlog
}