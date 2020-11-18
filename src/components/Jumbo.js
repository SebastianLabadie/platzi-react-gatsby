import React from 'react'
import {StyledJumbo} from '../styles/components'
import Image  from './image'
function Jumbo({description}) {


    return (
        <StyledJumbo>
            <div className="">
                <h2>Consigue el mejor swag exclusivo y especial Platzi!</h2>
                <small>{description}</small>
            </div>
            <Image name="icon"/>
        </StyledJumbo>
    )
}

export default Jumbo