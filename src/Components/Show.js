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
        <div className="post">
            <h1>{blog[0].title}</h1>
        </div>
    ) : (
            <div className="center">Loading.....</div>
        )

    return (
        <div className='post'>
            {newblog}
        </div>
    );
}

export default Show;
