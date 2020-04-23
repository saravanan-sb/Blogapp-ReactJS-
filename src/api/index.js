import axios from 'axios';
let url = 'http://localhost:3001/blogs';

export const getBlogs = async () => {
    try {
        const data = await axios.get(url)
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getSingleBlog = async (id) => {
    try {
        const { data } = await axios.get(`${url}/${id}`)
        return data.blog;
    } catch (error) {
        console.error(error);
    }
}