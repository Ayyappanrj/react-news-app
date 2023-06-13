import React, { useState, useEffect } from "react";
import './Settings.css';
import { ApiEndPoints } from "../../Constants/ApiEndPoints";
import { instance } from "../../Services/Service";
import { toast } from 'react-toastify';

const Settings = () => {

    const [category, setCategory] = useState([
        {name: "Business", active: false}, 
        {name: "Entertainment", active: false}, 
        {name: "General", active: false}, 
        {name: "Health", active: false}, 
        {name: "Science", active: false}, 
        {name: "Sports", active: false}, 
        {name: "Technology", active: false}
    ]);
    const [id, setId] = useState();

    useEffect(() => {
        instance.get(ApiEndPoints.getUser)
            .then((res: any) => {
                setId(res.id);
                const data = JSON.parse(res.category);
                if(data.length > 0) {
                    setCategory(data);
                }
            }).catch((err: any) => {
            });
    }, []);

    const handleClick = (value: any) => {
        const finalData: any = category.map((data: any) => {
            if(value === data.name)
            {
                data.active = !data.active;
            }
            return data;
        });
        setCategory(finalData);
    }

    const handleSubmit = () => {
        instance.post(ApiEndPoints.updateCategory, { category: JSON.stringify(category), id: id})
        .then((res: any) => {
            toast.success("Category updated successfully", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }).catch((err: any) => {
        });
    }

    return (
        <section className="blog_area bottom-padding mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-4 cus-res">
                        <h4 className="mb-3">Select Category</h4>
                        { category.map((data: any, i: any) => {
                            return (
                                <span className={`tag-span ${ data.active && "active" } `} onClick={()=>handleClick(data.name)}>{data.name}</span>
                            )
                        }) }
                    </div>
                    <div className="text-right w-100">
                        <button className="button rounded-0 primary-bg text-white w-20 btn_1 boxed-btn" type="button" onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Settings;