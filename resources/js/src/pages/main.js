import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { Home } from './index'
import { Navbar } from '../components'
import { RUN_FOR_EARTH_API_URL } from '../config';

export default class Main extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="row no-gutters flex-row flex-nowrap">
                <div className="col">
                    <div className="main-container">
                        <Navbar/>
                        <div className="main py-4">
                            <Route exact path='/' render={() => <Home />} />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}