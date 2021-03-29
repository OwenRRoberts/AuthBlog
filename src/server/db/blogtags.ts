import { Query } from "./index";

const insert = (blogid: number, tags: string[]) => {
    tags.forEach(async (tagName) => {
        const tagId = await Query(`
            select tags.id from tags 
            where tags.name = ?
        `, [tagName]);
        
        Query(`
            insert into blogtags (blogid, tagid)
            values (?, ?)
        `, [blogid, tagId[0].id])
    });
}

const one = (blogid: number) => Query(`call spBlogTags(?)`, [blogid]);

const deleteBlogTags = (blogid: number) => Query(`
    delete from blogtags
    where blogtags.blogid = ?
`, [blogid]);

export default {
    insert,
    one,
    deleteBlogTags
}