import React, { useState, useEffect } from "react";
import BreadCrumb from "../../Components/Main/BreadCrumb";
import './Articles.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useParams } from "react-router-dom";

const Articles = () => {

    const [articlesList, setArticlesList] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=hot&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
        .then((res: any) => {
            if (res.status === 200) {
                setArticlesList(res.data.articles);
            }
        }).catch((err: any) => {
            toast.error(err?.data?.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        });
    }, []);
    
    const convertDate = (data: any) => {
        return new Date(data.article.publishedAt).getDate();
    }
    
    const convertMonth = (data: any) => {
        const monthNames = ["Jan", "Feb", "Mar", "April", "May", "June",
            "July", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        let count = new Date(data.article.publishedAt).getMonth() + 1;
        return monthNames[count];
    }

    const handleChange = (e: any) => {
        let name = e.target.name;
        let value = e.target.value;
        if(name == "keyword") {
            setKeyword(value);
        }
        else if(name == "date") {
            setDate(value);
        } else if(name == "category") {
            setCategory(value);
        }
    }

    const filterArticles = () => {
        let url = "";
        if(keyword != "") {
            url = `https://newsapi.org/v2/everything?q=${keyword}&pageSize=20&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        } else {
            url = `https://newsapi.org/v2/everything?q=hot&pageSize=20&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
        }
        axios.get(url)
        .then((res: any) => {
            if (res.status === 200) {
                setArticlesList(res.data.articles);
            }
        }).catch((err: any) => {
            toast.error(err?.data?.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        });
    }

    const handleSubmit = () => {
        filterArticles();
    }

    const handleFilter = () => {
        window.scrollTo(0,0);
        const filterByDate = articlesList.filter((data: any) => {
            let date = new Date(data.publishedAt);
            let filterDate = new Date(date);
            return date === filterDate;
        });
        setArticlesList(filterByDate);
    }

    return (
        <section className="blog_area bottom-padding mt-5">
        <div className="container">
            <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="blog_left_sidebar">
                    { articlesList.map((article: any, i: any) => {
                        return (
                            <article className="blog_item" key={`article${i}`}>
                                <div className="blog_item_img">
                                <img className="card-img rounded-0" src={article.urlToImage} alt="" />
                                <a href={article.url} className="blog_item_date">
                                    <h3>{convertDate({article})}</h3>
                                    <p>{convertMonth({article})}</p>
                                </a>
                                </div>
                                <div className="blog_details">
                                <a className="d-inline-block" href={article.url}>
                                    <h2 className="blog-head" style={{color: "#2d2d2d"}}>{article.title}</h2>
                                </a>
                                <p>{article.description}</p>
                                <ul className="blog-info-link">
                                    <li>
                                    <a href={article.url}>
                                        <i className="fa fa-user"></i> {article.author} </a>
                                    </li>
                                    <li>
                                    <a href={article.url}>
                                        <i className="fa fa-link"></i> {article.source.name} </a>
                                    </li>
                                </ul>
                                </div>
                            </article>
                        )
                    })}
                    {articlesList.length === 0 && 
                        <p className="no-data">No articles available</p>
                    }
                </div>
            </div>
            <div className="col-lg-4">
                <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                    <form action="#">
                        <div className="form-group">
                            <div className="input-group mb-3">
                            <input type="text" className="form-control" name="keyword" placeholder='Search Keyword' onChange={handleChange} value={keyword} />
                            <div className="input-group-append">
                                <button className="btns" type="button" onClick={handleSubmit}>
                                <i className="ti-search"></i>
                                </button>
                            </div>
                            </div>
                        </div>
                    </form>
                </aside>
                <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title" style={{ color: "#2d2d2d" }}>Date</h4>
                    <input type="date" className="form-control" name="date" onChange={handleChange} value={date} />
                </aside>
                <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title" style={{ color: "#2d2d2d" }}>Category</h4>
                    <select className="form-control" name="category" onChange={handleChange} value={category}>
                        <option value="">Select Category</option>
                        <option value="business">Business</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="general">General</option>
                        <option value="health">Health</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                    </select>
                </aside>
                <aside className="single_sidebar_widget newsletter_widget">
                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="button" onClick={handleFilter}>Filter</button>
                </aside>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Articles;