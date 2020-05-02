import React, { useState, useEffect } from 'react';
import { getBlogs } from '../api';
import { Link } from 'react-router-dom';

const Main = () => {

    const [popularBLog, setpopularBLog] = useState([]);
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
        const blogsFetchApi = async () => {
            const { data: { blogs } } = await getBlogs()
            return setblogs(blogs)
        }
        blogsFetchApi()
    }, [setblogs])

    useEffect(() => {
        const blogsFetchApi = async () => {
            const { data: { blogs } } = await getBlogs()
            return setpopularBLog(blogs)
        }
        blogsFetchApi()
    }, [])



    const listBlogs = blogs.length ? (
        blogs.map((blog, i) => {
            return (
                <div className="main-list s12 m6 l6" key={i}>
                    <div className="main-list-content">
                        <div className='main-list-image'>
                            <img src={blog.image} alt="" />
                        </div>
                        <div>
                            <Link to={`/blogs/${blog._id}`}>
                                <h5>{blog.title}</h5>
                            </Link>
                            <p>{blog.body.substring(0, 100)}</p>
                        </div>
                    </div>
                </div>
            )
        })
    ) : (
            <div className="progress">
                <div className="indeterminate" />
            </div>
        )

    const popularBlogs = popularBLog.length ? (
        popularBLog.map((blog, i) => {
            return (
                <div key={blog._id} className='main-popular-content hero-center'>
                    <span>{i + 1}.</span>
                    <Link to={`/blogs/${blog._id}`}>
                        <p>{blog.title}</p>
                    </Link>
                </div>
            )
        })
    ) : (

            null
        )

    return (
        <div className='container l7 s12 main'>
            <div className="submain s12">
                <h2>Latest Stories</h2>
                {listBlogs}
            </div>
            <div className='main-popular'>
                <h4 className='hero-center'>Popular on Median.!</h4>
                {popularBlogs}
            </div>
        </div>
    );
}

export default Main;
