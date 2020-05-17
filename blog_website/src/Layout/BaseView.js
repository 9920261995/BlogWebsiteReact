import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import BaseContent from '../Content/BaseContent'

export default class BaseView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div style={{ backgroundColor: "#32324e" }}>
                <Header />
                <Sidebar />
                <BaseContent />
                <Footer />

            </div>
        )
    }

}