import React from "react";
import Card from "./Card";

const CardList = ({ Frnds }) => {
    return (
        <div>
            {
                Frnds.map(( robo, i ) => {
                    return (
                        <Card key = {i} 
                        id = { robo.id } 
                        name = { robo.name } 
                        email = { robo.email }/>
                    )
                 })
            }
        </div>
    )
}

export default CardList;