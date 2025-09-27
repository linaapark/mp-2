import ArtsInstitueChicago from "./components/art_institute_of_chicago.tsx";
//import styled from "styled-components";
import {useEffect, useState} from "react";
import {Artwork} from "interfaces/arts.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Arts[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://api.artic.edu/docs/#introduction");
            const {results} : {results: Arts[]} = await rawData.json();
            setData(results);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <ArtsInstitueChicago data={data}/>
        </ParentDiv>
    )
}