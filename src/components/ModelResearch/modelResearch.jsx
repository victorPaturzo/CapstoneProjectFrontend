import React, { useState, useEffect } from "react";
import "./modelResearch.css";
import "../Home/home";
import axios from "axios";
import NavBar from "../NavBar/navBar";
import "bootstrap";

const ModelResearch = (props) => {

    const [allModels, setAllModels] = useState([]);
    const [modelA, setModelA] = useState("");
    const [modelB, setModelB] = useState("");
    useEffect((e) => {

        axios.get(`http://localhost:5000/api/models/getAllModels`, allModels)
             .then(res => {
                 setAllModels(res.data)
             })
             .catch(err => {
                 console.log(err)
             })
    })

    async function handleSubmitA(e) {
        e.preventDefault();

        const getModel = {
            modelA: modelA
        };
        let response = await axios.get(`http://localhost:5000/api/models/getModelByName/${modelA}`, getModel);
        if(response.status === 200){
            console.log(response.data);
        }
    }

    async function handleSubmitB(e) {
        e.preventDefault();

        const getModel = {
            modelB: modelB
        };
        let response = await axios.get(`http://localhost:5000/api/models/getModelByName/${modelB}`, getModel);
        if(response.status === 200){
            console.log(response.data);
        }
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

    const ModelAFeed = (props) => {
        return (
            <table >
                <thead className="trStyle">
                    <tr >
                        <th >Model A</th>
                    </tr>
                </thead>
                <tbody >
                    <tr className="trStyle">
                        <td  colSpan="1">
                            {/* {
                            modelA.map(post => <li key={post.id}>{post.powerLevel}</li>)
                            } */}
                        </td> 
                    </tr>
                    <tr className="trStyle">
                        <td colSpan="1">Event</td>
                    </tr>
                    <tr className="trStyle">
                        <td colSpan="1">Event</td>
                    </tr>
                    <tr className="trStyle">
                        <td colSpan="1">Event</td>
                    </tr>
                    <tr className="trStyle">
                        <td colSpan="1">Event</td>
                    </tr>
                    <tr className="trStyle">
                        <td colSpan="1">Event</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    const ModelBFeed = (props) => {
        return (
            <table >
                <thead >
                    <tr className="trStyle">
                        <th >Model B</th>
                    </tr>
                </thead>
                <tbody >
                    <tr className="trStyle">
                        <td  colSpan="1">Event</td> 
                    </tr>
                    <tr className="trStyle">
                        <td colSpan="1">Event</td>
                    </tr>
                    <tr className="trStyle">
                        <td colSpan="1">Event</td>
                    </tr>
                    <tr className="trStyle">
                        <td colSpan="1">Event</td>
                    </tr>
                    <tr className="trStyle">
                        <td colSpan="1">Event</td>
                    </tr>
                    <tr className="trStyle">
                        <td colSpan="1">Event</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    // const ModelImageA = (props) => {
    //     return(
    //         <img
    //     )
    // }

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
                                <input value={modelB} onChange={handleChangeB} onChange={(event) => setModelB(event.target.value)} type="text" />
                                <button type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="ModelsFeed">
                    <div className="modelsAFeed">
                        <ModelAFeed />
                    </div>
                    <div className="modelsBFeed">
                        <ModelBFeed />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModelResearch;