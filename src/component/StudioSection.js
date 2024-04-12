import { studios } from "../data/data_studios"
import StudioList from "./StudioList"


export default function StudioSection() {
    return(
        <section>
        <h2>Studios</h2>
        <ul>
          {studios.map((studio)=>(<StudioList key={studio.title} {...studio}/>))}
        </ul>
      </section>
    )
}