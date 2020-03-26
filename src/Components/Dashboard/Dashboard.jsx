import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';
import Main from '../Main/Main';
import { connect } from 'react-redux';
import { FETCH_OVERALL_DATA,FETCH_COUNTRYWISE_DATA, FETCH_DATA_LOADING, ON_LOGOUT } from '../../Actions/Actions'


class Dashboard extends Component {
    constructor(props){
        super()
    }

    componentDidMount() {
        if(sessionStorage.getItem('Token')){
            this.props.history.push('/dashboard')
        }
        else{
            this.props.history.push('/')
        }
        // this.props.getData();
        window.addEventListener('popstate', function (event){
            window.history.pushState(null, document.title,  window.location.href);
        });
    }
        onLogout=()=>{
            this.props.logout(this.props.history)
        }

    render() {
        return (
            <div className='Dashboard'>
                <Header
                onLogout= {this.onLogout}
                spinner= { this.props.reducer.spinner }
                />
                {/* <LeftNav/>
                <Main 
                countryWiseData = { this.props.reducer.countryWiseData }
                overAllData = { this.props.reducer.overAllData }
                countryCount = { this.props.reducer.countryCount }
                />
                <Footer/> */}
            </div>
        )
    }
}

export const mapStateToProps = (state)=>{
    return{
        reducer:state
    }
}


export const mapDispatchToProps = (dispatch)=>{
    return{
        // getData:()=>{
        // dispatch({type:FETCH_COUNTRYWISE_DATA})
        // dispatch({type:FETCH_OVERALL_DATA})
        // },
        logout:(history)=>{
        dispatch({type:ON_LOGOUT, history:history })
        }
    }
        
}

export default connect( mapStateToProps, mapDispatchToProps )(Dashboard);