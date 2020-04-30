import React, { useState, useEffect } from 'react';
import { getBlogs } from '../api';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [blogs, setBlogs] = useState([]);
    const [listState, setlistState] = useState([]);

    useEffect(() => {
        const blogsFetchApi = async () => {
            const { data: { blogs } } = await getBlogs()
            return setBlogs(blogs)
        }
        blogsFetchApi()
    }, [setBlogs])
    useEffect(() => {
        const blogsFetchApi = async () => {
            const { data: { blogs } } = await getBlogs()
            return setlistState(blogs.slice(0, 3))
        }
        blogsFetchApi()
    }, [setlistState])

    const allblogs = blogs.length && blogs[0] ? (

        <div className="container row">
            <div className="col m6 s6 l4">
                <div className='hero-bigcard'>
                    <img src={blogs[0].image} alt={blogs[0].title} />
                    <div className='bigcard-content'>
                        <Link to={`/blogs/${blogs[0]._id}`}>
                            <h6>{blogs[0].title}</h6>
                        </Link>
                        <p>{blogs[0].body.substring(0, 100)}</p>
                    </div>
                </div>
            </div>
            <div className='col m4 s4 l4 hero-center'>
                {
                    listState.map(blog => {
                        return (
                            <div key={blog._id} className="list-content">
                                <img src={blog.image} alt="" />
                                <Link to={`/blogs/${blog._id}`}>
                                    <h6>{blog.title}</h6>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className="col m6 s6 l4">
                <div className='hero-bigcard'>
                    <img src={blogs[1].image} alt={blogs[1].title} />
                    <div className='bigcard-content'>
                        <Link to={`/blogs/${blogs[1]._id}`}>
                            <h6>{blogs[1].title}</h6>
                        </Link>
                        <p>{blogs[1].body.substring(0, 100)}</p>
                    </div>
                </div>
            </div>
        </div>
    ) : (
            <div className="progress">
                <div className="indeterminate" />
            </div>
        )

    return (
        <div>
            {allblogs}
            <hr />
        </div>
    );
}

export default Hero;
