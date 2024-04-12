import { Button } from "./Button/Button";
import React from "react";


export default function StudioList({ title, description, img_url, ...props }) {
  return (
    <li>
      <h3>{title}</h3>
        <img style={{margin:5, width: 300,}} src={img_url} alt={img_url}/>
        <p>{description}</p>
        <hr color="gray"></hr>
        {/* <a href='/aboutstudio/{number}'><Button>More Info</Button></a> */}

    </li>
  );
}

