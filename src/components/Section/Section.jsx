import React from "react"
import { Title,SectionTitle } from "./Section.styled"
export const Section = ({title,children})=>{
    return(
        <SectionTitle>
            <Title>{title}</Title>
            {children}
        </SectionTitle>
    )
}