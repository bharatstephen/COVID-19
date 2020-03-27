import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';
import Main from '../Main/Main';
import { connect } from 'react-redux';
import { FETCH_OVERALL_DATA,FETCH_COUNTRYWISE_DATA, SIDEBAR_TOGGLE, ON_LOGOUT } from '../../Actions/Actions'
import './Dashboard.css';

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
        this.props.getData();
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
                <div className='wrapper'>
                <LeftNav
                toggleSideBar = { this.props.reducer.toggleSideBar }
                />
                <Main 
                countryWiseData = { this.props.reducer.countryWiseData }
                overAllData = { this.props.reducer.overAllData }
                countryCount = { this.props.reducer.countryCount }
                toggleSideBar = { this.props.toggleSideBar }
                />
                </div>
                <Footer/>
            </div>
        )
    }
}

export const mapStateToProps = (state)=>{
    console.log(state,'state')
    return{
        reducer:state
    }
}


export const mapDispatchToProps = (dispatch)=>{
    return{
        getData:()=>{
        dispatch({type:FETCH_COUNTRYWISE_DATA})
        dispatch({type:FETCH_OVERALL_DATA})
        },
        logout:(history)=>{
        dispatch({type:ON_LOGOUT, history:history })
        },
        toggleSideBar:()=>{
            console.log('dispatch')
            dispatch({type:SIDEBAR_TOGGLE })
            }
    }
        
}

export default connect( mapStateToProps, mapDispatchToProps )(Dashboard);