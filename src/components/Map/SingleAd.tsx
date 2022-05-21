import React, {useEffect, useState} from "react";
import { AdEntity } from "types";
import {apiUrl} from "../../config/api";

interface Props {
    id: string;
}

export const SingleAd = (props: Props) => {

    const [ad, setAd] = useState<AdEntity | null>(null);

    const {id} = props;

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/ad/${id}`);
            const data = await res.json();

            setAd(data);
        })()
    }, [])

    if (ad === null){
        return <p>Loading...</p>;
    }

    return <>
        <h2>{ad.name}</h2>
        <p>{ad.description}</p>
        {!!ad.price ?? <p>{ad.price} $</p>}
        <hr/>
        <a href={ad.url} target="_blank">Open advertisement</a>
    </>;
}