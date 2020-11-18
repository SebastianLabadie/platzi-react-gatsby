import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import {SEO} from '../components'
import { Button,Purchase } from '../styles/components'

const graciasStyled=styled.div`

`
function gracias() {
    return (
        <graciasStyled>
            <SEO title="Compra Exitosa" />
            <Purchase>
                <h2>Compra Exitosa</h2>
                <p>Espero que disfrutes tu swag, lucelo con orgullo.</p>
                <p>Te esperamos de vuelta, nunca pares de aprender!</p>
                <span rol="img" aria-label="emoji" >❤❤</span>

                <Link to="/" >
                    <Button>Volver al Catálogo.</Button>
                </Link>
            </Purchase>
        </graciasStyled>
    )
}

export default gracias