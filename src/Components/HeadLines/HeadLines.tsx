import React, { useState, useEffect } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import './HeadLines.css'

const TrendingNews = () => {

    const [trendingNewsList, setTrendingNewsList] = useState([]);

    useEffect(() => {
        // axios.get(`https://content.guardianapis.com/search?pageSize=6&q=trending&api-key=${process.env.REACT_APP_NEWS_GUARDIAN_API_KEY}`)
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
        .then((res: any) => {
            if (res.status === 200) {
                setTrendingNewsList(res.data.articles);
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

    return (
        <section className="tranding-area section-padding">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="section-tittle mb-30 d-flex align-items-center justify-content-between">
                    <h2>Headlines</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                    { trendingNewsList.map((news: any, i: any) => {
                        if(i == 0) {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="trending mb-30">
                                        <div className="trend-top-img">
                                            <img src={news.urlToImage} alt="" className="trend-news-img" />
                                            <div className="trend-top-cap">
                                            <span>{news.source.name}</span>
                                            <h2>
                                                <a href={news.url}>{news.title}</a>
                                            </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="properties mb-30">
                                    <div className="properties-card">
                                        <div className="properties-img">
                                        <a href={news.url}>
                                            <img src={news.urlToImage} alt="" className="trend-news-img-2" />
                                        </a>
                                        <div className="img-text">
                                            <span>{news.source.name}</span>
                                        </div>
                                        </div>
                                        <div className="properties-caption">
                                        <h3>
                                            <a href={news.url}>{news.title}</a>
                                        </h3>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default TrendingNews;