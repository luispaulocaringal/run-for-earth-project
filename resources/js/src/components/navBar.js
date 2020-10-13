import React, { Component } from 'react'

import { RUN_FOR_EARTH_API_URL } from '../config';

export default class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className='navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm opacity-2'>
                    <div className='container'>
                        <a className="mx-5 my-3 navbar-brand" href="#"><img src={`${RUN_FOR_EARTH_API_URL}/storage/resources/logo.png`} className="" /></a>
                        <button className="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                            <ul class="font-weight-bold navbar-nav ml-auto mr-5">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">HOME</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">RUN INFORMATION</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">REGISTRATION</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">CONTACT US</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}