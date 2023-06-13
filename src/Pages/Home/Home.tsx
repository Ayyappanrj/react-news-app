import React, { useEffect } from "react";
import "./Home.css";
import Slider from "../../Components/Main/Slider";
import HeadLines from "../../Components/HeadLines/HeadLines";

const Home = () => {

    useEffect(() => {

    }, []);

    return (
        <>
            <Slider />
            <HeadLines />
        </>
    )
}

export default Home;