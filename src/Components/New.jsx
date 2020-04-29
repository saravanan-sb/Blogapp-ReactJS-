import React, { useState } from 'react';
import { postBlog } from '../api';


const New = (props) => {

    const [Blog, setBlog] = useState({
        title: '',
        image: '',
        body: ''
    });

    const handleChange = (e) => {
        setBlog(
            { ...Blog, [e.target.id]: e.target.value }
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await postBlog(Blog);
        if (res.status === 200) {
            setTimeout(() => {
                props.history.push('/blogs')
            }, 1000);
        } else {
            setTimeout(() => {
                props.history.push('/blogs/new')
            }, 1000);
        }
    }
    return (
        <div className="container form">
            <h1>Add Blog</h1>
            <form className='col s12' onSubmit={handleSubmit}>
                <div className="input-field col s6">
                    <input type="text" id='title' onChange={handleChange} minLength={10} required />
                    <label htmlFor="Title">Title (Min 10 Characters)</label>
                </div>
                <div className="input-field col s12">
                    <input type="text" id='image' onChange={handleChange} required />
                    <label htmlFor="image">Image URL</label>
                </div>
                <div className="input-field col s12">
                    <textarea className="materialize-textarea" defaultValue={''} id='body' onChange={handleChange} minLength={200} />
                    <label htmlFor="textarea1">Body Content (Min 200 Characters)</label>
                </div>

                <button className="btn waves-effect waves-light blue" type="submit" name="action">Create New
                    <i className="material-icons right">send</i>
                </button>
            </form>
        </div>
    );
}

export default New;
