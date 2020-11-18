import React from 'react'
import styled from 'styled-components'
import {StyledJumbo} from '../styles/components'

const JumboStyled=styled.div`

`
function Jumbo() {
    return (
        <StyledJumbo>
            <div className="">
                <h2>Consigue el mejor swag exclusivo y especial Platzi!</h2>
                <small>Piezas elegantes para los mejores estudiantes.</small>
            </div>
        </StyledJumbo>
    )
}

export default Jumbo