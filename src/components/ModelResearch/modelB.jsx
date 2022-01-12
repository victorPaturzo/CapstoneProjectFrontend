import React from "react";
import "./modelResearch.css";
import "bootstrap";

const ModelBFeed = (props) => {
    return (
        <div>
            <div>
                <table >
                    <thead className="trStyle">
                        <tr >
                            <th >Model A</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className="trStyle">
                            <td className="columnOne" colSpan="1">Name:</td> 
                            <td className="columnTwo" colSpan="2">{props.model.modelName}</td>
                        </tr>
                        <tr className="trStyle">
                            <td className="columnOne" colSpan="1">PL:</td>
                            <td className="columnTwo" colSpan="2">{props.model.powerLevel}</td>
                        </tr>
                        <tr className="trStyle">
                            <td className="columnOne" colSpan="1">Points:</td>
                            <td className="columnTwo" colSpan="2">{props.model.pointCost}</td>
                        </tr>
                        <tr className="trStyle">
                            <td className="columnOne" colSpan="1">Movement:</td>
                            <td className="columnTwo" colSpan="2">{props.model.stats[0].movement}</td>
                        </tr>
                        <tr className="trStyle">
                            <td className="columnOne" colSpan="1">Weapon Skill:</td>
                            <td className="columnTwo" colSpan="2">{props.model.stats[0].weaponSkill}</td>
                        </tr>
                        <tr className="trStyle">
                            <td className="columnOne" colSpan="1">Ballistic Skill:</td>
                            <td className="columnTwo" colSpan="2">{props.model.stats[0].ballisticSkill}</td>
                        </tr>
                        <tr className="trStyle">
                            <td className="columnOne" colSpan="1">Strength:</td>
                            <td className="columnTwo" colSpan="2">{props.model.stats[0].strength}</td>
                        </tr>
                        <tr className="trStyle">
                            <td className="columnOne" colSpan="1">Toughness:</td>
                            <td className="columnTwo" colSpan="2">{props.model.stats[0].toughness}</td>
                        </tr>
                        <tr className="trStyle">
                            <td className="columnOne" colSpan="1">Wounds:</td>
                            <td className="columnTwo" colSpan="2">{props.model.stats[0].wounds}</td>
                        </tr>
                        <tr className="trStyle">
                            <td className="columnOne" colSpan="1">Attacks:</td>
                            <td className="columnTwo" colSpan="2">{props.model.stats[0].attacks}</td>
                        </tr>
                        <tr className="trStyle">
                            <td className="columnOne" colSpan="1">Leadership:</td>
                            <td className="columnTwo" colSpan="2">{props.model.stats[0].leadership}</td>
                        </tr>
                        <tr className="trStyle">
                            <td className="columnOne" colSpan="1">Save:</td>
                            <td className="columnTwo" colSpan="2">{props.model.stats[0].modelSave}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <thead className="trStyle">
                        <tr>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="trStyle">
                            {
                                props.model.comments.map(comment => <tr><li key={comment.id}>{comment.userName}------{comment.text}</li></tr>)
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ModelBFeed;