import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props: any) => {
    return (        
        <div className="page-notification">
        <div className="container">
        <div className="row">
        <div className="col-lg-12">
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item"><Link to={props.pagelink}>{props.pagename}</Link></li>
        </ol>
        </nav>
        </div>
        </div>
        </div>
        </div>
    )
}

export default BreadCrumb;