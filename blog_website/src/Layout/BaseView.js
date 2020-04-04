import React from 'react'
import Header from  './Header/Header'
import Footer from  './Footer/Footer'
import Sidebar from  './Sidebar/Sidebar'
import BaseContent from  '../Content/BaseContent'

export default class BaseView extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            
        }
    }
    render (){
        return(
            <div>
                <Header/>
                <Footer/>
                <Sidebar/>
                <BaseContent/>

            </div>
        )
    }

}