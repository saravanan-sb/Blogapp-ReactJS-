import axios from 'axios';
let url = 'http://localhost:3001';

export const getBlogs = async () => {
    try {
        const data = await axios.get(`${url}/blogs`)
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getSingleBlog = async (id) => {
    try {
        const { data } = await axios.get(`${url}/blogs/${id}`)
        return data.blog;
    } catch (error) {
        console.error(error);
    }
}

export const postBlog = async (data) => {
    try {
        const res = await axios.post(`${url}/blogs`, data, {
            headers: {
                'x-auth-token': JSON.parse(localStorage.getItem('token'))
            }
        });
        return res;
    } catch (error) {
        console.log(error.message)
    }
}

export const updateBlog = async (id, data) => {
    try {
        console.log(id, data)
        const res = await axios.put(`${url}/blogs/${id}`, data, {
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
        const res = await axios.post(`${url}/register`, user)
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
        const res = await axios.post(`${url}/login`, user)
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
    const userdata = await axios.get(`${url}/userdetails`, {
        headers: {
            'x-auth-token': JSON.parse(localStorage.getItem('token'))
        }
    })
    return userdata;
}

export const userLogout = async () => {
    const res = await axios.get(`${url}/logout`)
    return res;
}

export const deleteBlog = async (id) => {
    const res = await axios.delete(`${url}/blogs/${id}`, {
        headers: {
            'x-auth-token': JSON.parse(localStorage.getItem('token'))
        }
    })
    return res;
}