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
            <SEO title="Compra Cancelada" />
            <Purchase>
                <h2>Compra Cancelada</h2>
                <p>Sentimos que no hayas comprado tu nuevo swag.</p>
                <p>Recuerda que aquí seguirá por si decides volver.</p>
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