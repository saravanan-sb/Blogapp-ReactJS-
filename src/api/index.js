import axios from 'axios';
let url = 'http://localhost:3001/blogs';
let registerURL = 'http://localhost:3001/register';
let loginURL = 'http://localhost:3001/login';
let logoutURL = 'http://localhost:3001/logout';
let detailsURL = 'http://localhost:3001/userdetails'

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

export const postBlog = async (data) => {
    try {

        const res = await axios.post(url, data, {
            headers: {
                'x-auth-token': JSON.parse(localStorage.getItem('token'))
            }
        });
        return res;
    } catch (error) {
        console.log(error.message)
    }
}

export const newUser = async (user) => {
    try {
        const res = await axios.post(registerURL, user)
        return res;

    } catch (error) {
        const res = {
            data: 'Username already registerd, please login',
            status: 400
        }
        return res
    }
}

export const userLogin = async (user) => {
    try {
        const res = await axios.post(loginURL, user)
        return res;
    } catch (error) {
        const res = {
            data: 'Username not available. Please signup',
            status: 400
        }
        return res
    }
}



export const userDetails = async () => {
    const userdata = await axios.get(detailsURL, {
        headers: {
            'x-auth-token': JSON.parse(localStorage.getItem('token'))
        }
    })
    return userdata;
}

export const userLogout = async () => {
    const res = await axios.get(logoutURL)
    return res;
}

export const deleteBlog = async (id) => {
    const res = await axios.delete(`${url}/${id}`, {
        headers: {
            'x-auth-token': JSON.parse(localStorage.getItem('token'))
        }
    })
    return res;
}