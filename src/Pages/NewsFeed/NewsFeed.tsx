import React, { useState, useEffect } from "react";
import BreadCrumb from "../../Components/Main/BreadCrumb";
import { toast } from 'react-toastify';
import { instance } from "../../Services/Service";
import { ApiEndPoints } from "../../Constants/ApiEndPoints";

const NewsFeed = () => {

    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        instance.get(ApiEndPoints.getNewsFeed)
        .then((res: any) => {
            if (res.status === 200) {
                setNewsList(res.data);
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
        const monthNames = ["Jan", "Feb", "Mar", "April", "May", "June",
            "July", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        let date = new Date(data).getDate();
        let count = new Date(data).getMonth() + 1;
        let year = new Date(data).getFullYear();
        return date + " " + monthNames[count] + " " + year;
    }

    return (
        <>
            <BreadCrumb pagename="News Feed" link="news-feed" />
            <section className="tranding-area ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-tittle mb-30 d-flex align-items-center justify-content-between">
                                <h2>Personalized News Feed</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-xl-8 col-lg-8 col-md-8">
                            { newsList.map((news: any, i: any) => {
                                return (
                                    <div className="whats-right-single mb-40" key={`news${i}`}>
                                        <div className="whats-right-cap">
                                            <span>{news.webTitle}</span>
                                            <h4><a href="javascript:void(0)">Section Name : {news.sectionName}</a></h4>
                                            <p>Published at <a target="_blank">{convertDate(news.webPublicationDate)}</a></p>
                                            <p>Click To Visit <a target="_blank" href={news.webUrl}>Site</a></p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsFeed;