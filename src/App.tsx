import ArtsInstitueChicago from "./components/art_institute_of_chicago.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Artwork} from "./interfaces/arts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Artwork[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://api.artic.edu/api/v1/artworks");
            const { data } : { data: Artwork[]} = await rawData.json();
            setData(data);

        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <h1>Art Institute of Chicago</h1>
            <ArtsInstitueChicago data={data}/>
        </ParentDiv>
    )
}