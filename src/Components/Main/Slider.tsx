import React, { useState, useEffect } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

const Slider = () => {

    const [sliderData, setSliderData] = useState([]);

    // useEffect(() => {
    //     axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=4&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
    //     .then((res: any) => {
    //         if (res.status === 200) {
    //             window.scrollTo(0,0);
    //             setSliderData(res.data.sources);
    //         }
    //     }).catch((err: any) => {
    //         toast.error(err?.data?.message, {
    //             position: "top-right",
    //             autoClose: 3000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "colored"
    //         });
    //     });
    // }, []);

    return (
        <section className="popular-item-area fix pt-padding">
            <div className="container-fluid p-0">
                <div className="custom-row">

                </div>
            </div>
        </section>
    )
}

export default Slider;