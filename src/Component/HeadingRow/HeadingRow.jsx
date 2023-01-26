import React from "react";
import './HeadingRow.css'

const HeadingRow = ({popup}) => {

    return (
        <section className="heading-row">
            <h1 className="heading-row__title">{
                popup ? 'ADD TODO' : 'TODO'
            }</h1>
        </section>
    )
}

export default HeadingRow