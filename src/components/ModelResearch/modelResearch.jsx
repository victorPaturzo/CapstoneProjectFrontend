import React, { useState, useEffect } from "react";
import "./modelResearch.css";
import "../Home/home";
import axios from "axios";
import NavBar from "../NavBar/navBar";
import "bootstrap";
import ModelAFeed from "./modelA";
import ModelBFeed from "./modelB"
import CommentBar from "./commentBar";

const ModelResearch = (props) => {

    const [allModels, setAllModels] = useState([]);
    const [modelA, setModelA] = useState(null);
    const [modelB, setModelB] = useState(null);
    const [modelAResult, setModelAResult] = useState(null);
    const [modelBResult, setModelBResult] = useState(null);

    useEffect((e) => {

        axios.get(`http://localhost:5000/api/models/getAllModels`, allModels)
             .then(res => {
                 setAllModels(res.data);
             })
             .catch(err => {
                 console.log(err)
             })
    })

    async function handleSubmitA(e) {
        e.preventDefault();

        let response = await axios.get(`http://localhost:5000/api/models/getModelByName/${modelA}`);
        console.log(response.data);
        setModelAResult(response.data);
    }

    async function handleSubmitB(e) {
        e.preventDefault();

        let response = await axios.get(`http://localhost:5000/api/models/getModelByName/${modelB}`, modelBResult);
        console.log(response.data);
        setModelBResult(response.data);
    }

    const handleChangeA = (event) => {
        setModelA({
            [event.target.name]: event.target.value
        });
    }

    const handleChangeB = (event) => {
        setModelB({
            [event.target.name]: event.target.value
        });
    }

    return(
        <>
            <div className="modelResearchBackground">
                <NavBar />
                <h1 className="modelResearchHeader">Research Models</h1>
                <div className="searchBars">
                    <form onSubmit={handleSubmitA}>
                        <div className="searchBarA">
                            <div>
                                <label>Model Name</label>
                                <input name="modelA" onChange={handleChangeA} value={modelA} onChange={(event) => setModelA(event.target.value)} type="text" />
                                <button type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                    <form onSubmit={handleSubmitB}>
                        <div className="searchBarB">
                            <div>
                                <label>Model Name</label>
                                <input name="modelB" onChange={handleChangeB} value={modelB} onChange={(event) => setModelB(event.target.value)} type="text" />
                                <button type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="ModelsFeed">
                    <div className="modelsAFeed">
                        {modelAResult && <ModelAFeed model={modelAResult}/>}
                    </div>
                    <div className="modelsBFeed">
                        {modelBResult && <ModelBFeed model={modelBResult}/>}
                    </div>
                </div>
                <div className="commentBar">
                    {modelAResult && <CommentBar model={modelAResult}/>}
                </div>
                <h6 className="footer">Footer</h6>
            </div>
        </>
    )
}

export default ModelResearch;