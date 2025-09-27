import styled from "styled-components";
import {Artwork} from "../interfaces/arts.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv=styled.div<{status: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: white;
    color: darkgoldenrod;
    border: 3px #39002c solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function Artwork(props : { data:Artwork[] } ){
    return (
        <AllCharsDiv >
            {props.data.map((art: Artwork) =>
                    <SingleCharDiv key={art.id}>
                        <h1>{art.title}</h1>
                        <p>{art.artist_display}</p>
                        <img src={art.image} alt={`Artwork ${art.title}`} />
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}