import './Main.css'
import Header from './Header'
import Nav from './Nav'
import React, { Component } from 'react'

export default props =>
    <React.Fragment>
        <Header />
        <Nav />
        <main className="content container-fluid">
            Conteúdo
        </main>
    </React.Fragment>