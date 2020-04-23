import React, { useState, useEffect } from 'react';
import { getSingleBlog } from '../api';

const Show = (props) => {
    const [blog, setblog] = useState([]);
    useEffect(() => {
        const iid = props.match.params.id;
        const data = async () => {
            setblog(await getSingleBlog(iid))
        }
        data();
    }, [])

    console.log(blog[0])

    const newblog = blog[0] ? (
        <div>
            <div className='center'>
                <div className="container">
                    <h2>{blog[0].title}</h2>
                </div>
            </div>
            <div className='center'>
                <img src={blog[0].image} alt={blog[0].title} />

            </div>
            <div>
                <div className="container para">
                    <p>{blog[0].body}</p>
                </div>
            </div>
        </div>
    ) : (
            <div className="center">Loading.....</div>
        )

    return (
        <div className='l12 m8 s12 post'>
            {newblog}
        </div>
    );
}

export default Show;
