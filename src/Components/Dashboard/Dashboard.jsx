import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';
import Main from '../Main/Main';
import { connect } from 'react-redux';
import { FETCH_OVERALL_DATA,FETCH_COUNTRYWISE_DATA, FETCH_DATA_LOADING } from '../../Actions/Actions'


class Dashboard extends Component {
    constructor(props){
        super()
    }

componentDidMount(){
    this.props.getData();
    // this.props.fetchDataLoading();
}

    render() {
        console.log(this.props.reducer.total_cases,'total_cases')
        return (
            <div className='Dashboard'>
                <Header/>
                <LeftNav/>
                <Main 
                countryWiseData = { this.props.reducer.countryWiseData }
                overAllData = { this.props.reducer.overAllData }
                countryCount = { this.props.reducer.countryCount }
                />
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
            console.log('dis')
        dispatch({type:FETCH_COUNTRYWISE_DATA})
        dispatch({type:FETCH_OVERALL_DATA})
        },
        // fetchDataLoading:()=>{
        //     console.log('fetchDataLoading')
        // dispatch({type:FETCH_DATA_LOADING })
        // }
    }
        
}

export default connect( mapStateToProps, mapDispatchToProps )(Dashboard);