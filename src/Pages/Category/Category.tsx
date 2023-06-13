import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import BreadCrumb from "../../Components/Main/BreadCrumb";

const Category = () => {
    const [newsList, setNewsList] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
        .then((res: any) => {
            if (res.status === 200) {
                window.scrollTo(0,0);
                setNewsList(res.data.sources);
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
    }, [category]);

    return (
        <>
            <BreadCrumb pagename={category} link={category} />
            <section className="tranding-area ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-tittle mb-30 d-flex align-items-center justify-content-between">
                                <h2>{category} News</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-xl-8 col-lg-8 col-md-8">
                            { newsList.map((news: any, i: any) => {
                                return (
                                    <div className="whats-right-single mb-40" key={`news${i}`}>
                                        <div className="whats-right-cap">
                                            <span>{news.name}</span>
                                            <h4><a href="javascript:void(0)">{news.description}</a></h4>
                                            <p>Click To Visit <a target="_blank" href={news.url}>Site</a></p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-8">
                            <div className="google-add mb-40">
                                <img src="assets/img/gallery/Ad.jpg" alt="google ad" className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category;