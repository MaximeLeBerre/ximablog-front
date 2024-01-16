"use client"

import Image from "next/image";

export const Article = ({id, data}) => {
    console.log("data", data)
    return <div onClick={() => console.log("In article", id, data)}>
        <Image src={"http://localhost:1337" + data.cover.data.attributes.url} alt={"cover"} width={300} height={300}/>
        <div>
            <h2>{data.title}</h2>
            <p>{data.introduction}</p>
        </div>

    </div>
}