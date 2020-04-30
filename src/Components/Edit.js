import React, { useState, useEffect } from 'react';
import { getSingleBlog, updateBlog } from '../api';


const New = (props) => {
    const [Blog, setBlog] = useState({});

    useEffect(() => {
        const id = props.match.params.id;
        const blog = async () => {
            const [data] = await getSingleBlog(id)
            setBlog(data);
        }
        blog();
    }, [])

    const handleChange = (e) => {
        setBlog({ ...Blog, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await updateBlog(Blog._id, Blog)
        if (res && res.status === 200) {
            return props.history.push(`/blogs/${Blog._id}`);
        }
        props.history.push('/blogs')
    }
    const renderData = Blog ? (
        <div>
            <h1>Update Blog</h1>
            <form className='col s12' onSubmit={handleSubmit}>
                <div className="input-field col s6">
                    <input type="text" id='title' value={Blog.title} minLength={10} onChange={handleChange} required />
                    <label htmlFor="Title">Title (Min 10 Characters)</label>
                </div>
                <div className="input-field col s12">
                    <input type="text" id='image' value={Blog.image} onChange={handleChange} required />
                    <label htmlFor="image">Image URL</label>
                </div>
                <div className="input-field col s12">
                    <textarea className="materialize-textarea" defaultValue={Blog.body} id='body' onChange={handleChange} minLength={200} />
                    <label htmlFor="textarea1">Body Content (Min 200 Characters)</label>
                </div>

                <button className="btn waves-effect waves-light blue" type="submit" name="action">Update
                    <i className="material-icons right">send</i>
                </button>
            </form>
        </div>
    ) : (
            <div className="progress">
                <div className="indeterminate" />
            </div>
        )

    return (
        <div className="container form">
            {renderData}
        </div>
    );
}

export default New;
