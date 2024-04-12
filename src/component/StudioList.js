import { studios } from "../data/data_studios";
import { Button } from "./Button/Button";
import React from "react";


export default function StudioList({ number, title, description, img_url, ...props }) {
  return (
    <li>
      <h3>{title}</h3>
        <img style={{margin:5, width: 300,}} src={img_url} alt={img_url}/>
        <p>{description}</p>
        <hr color="gray"></hr>
        <Button onClick={()=>{console.log(studios[number])}}>open</Button>

    </li>
  );
}

