import React, {Component} from 'react'
import { RUN_FOR_EARTH_API_URL } from '../config';

export default class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='main-home-content'>
                <div className='row no-gutters flex-row flex-nowrap'>
                    <div className='col-md-12'>
                        <div className='row no-gutters flex-row flex-nowrap'>
                            <div className='col-md-12 d-flex justify-content-center'>
                                <img src={`${RUN_FOR_EARTH_API_URL}/storage/resources/header.png`} className=''/>
                            </div>
                        </div>
                        <div className='row no-gutters flex-row flex-nowrap'>
                            <div className='col-md-12 d-flex justify-content-center'>
                                <div className='desc'>
                                    <p className='text-center'>A 3K run alongside the candidates of Miss Philippines Earth 2015 to aid the Calumpang River Rehabilitation</p>
                                </div>
                            </div>
                        </div>
                        <div className='row no-gutters flex-row flex-nowrap'>
                            <div className='col-md-12 d-flex justify-content-center'>
                                <div className='venue-desc'>
                                    <p className='text-center font-weight-bold'>APRIL 25, 2015 | Assembly Time: 5:00AM | SM City Batangas Parking Grounds</p>
                                </div>
                            </div>
                        </div>
                        <div className='row no-gutters flex-row flex-nowrap'>
                            <div className='col-md-12 d-flex justify-content-center'>
                                <div className='registration-fee'>
                                    <p className='text-center'>Registration Fee: Php500 inclusive of race kit with shirt</p>
                                </div>
                            </div>
                        </div>
                        <div className='row no-gutters flex-row flex-nowrap'>
                            <div className='col-md-12 d-flex justify-content-center'>
                                <div className=''>
                                    <button className='register-btn' type='button'>Register now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}