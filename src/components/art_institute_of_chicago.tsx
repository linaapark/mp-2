import styled from "styled-components";
import type {Artwork} from "../interfaces/arts.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: center;
    background-color: bisque;
`;

const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 20%;
    padding: 2%;
    margin: 1%;
    background-color: white;
    color: darkgoldenrod;
    border: 3px #39002c solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function RickAndMorty({ data }: { data: Artwork[] }) {
    return (
        <AllCharsDiv>
            {data.map((art) => (
                <SingleCharDiv key={art.id}>
                    <h1>{art.title}</h1>
                    <img
                        src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
                        alt={`Artwork titled ${art.title}`}
                    />
                    <p>Artist: {art.artist_display}</p>
                    <p>Year: {art.date_display}</p>
                    <p>{art.is_on_view ? "Currently on view" : "Not on display"}</p>
                </SingleCharDiv>
            ))}
        </AllCharsDiv>
    );
}