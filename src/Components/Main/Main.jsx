import React, { Component } from 'react'
import LeftNav from '../LeftNav/LeftNav';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/fontawesome-free-solid'

export default class Menu extends Component {
constructor(props){
  super()
  this.state = {
    search:''
  }
}
  

  filterList=(e)=>{
    this.setState({
      search:e.target.value
    })
  }

  showAllCountries=()=>{
    this.setState({
      search:''
    })
  }

  toggleSideBar=()=>{
      this.props.toggleSideBar();
  }

    render() {
      let updateList = this.props.countryWiseData.map((country)=> country );
      updateList = updateList.filter(item => {
      return item.country_name.toLowerCase().search(
        this.state.search.toLowerCase()
        ) !== -1;
      });

      const { total_cases, total_deaths,total_recovered } = this.props.overAllData
		return (
  	  <>
        <div className="main">          
        	<nav class="navbar navbar-dark bg-dark">
        		<button class="navbar-toggler" type="button" onClick={ this.toggleSideBar } data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      				<span class="navbar-toggler-icon"></span>
    			</button>
    		</nav>
    			<main className="content">
				<div className="container-fluid">
					<div class="main_header">
						<h1 class="header-title">
							COVID-19 Twitter Data
						</h1>
					</div>
				<div class="row row_gap">
					<div class="col-xl-6 col-xxl-5 d-flex">
						<div class="w-100">
							<div class="row">
								<div class="col-sm-4 container_card">
									<div class="card">
										<div class="card-body">
											<div class="row">
												<div class="col mt-0">
													<h5 class="card-title">CORONA VIRUS CASES</h5>
												</div>

												<div class="col-auto">
													<div class="avatar">
														<div class="avatar-title rounded-circle bg-primary-dark">
														<FontAwesomeIcon icon={faUsers} />															{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-truck align-middle"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg> */}
														</div>
													</div>
												</div>
											</div>
											<h1 class="display-5 mt-1 mb-3">2.562</h1>
										</div>
									</div>
									
								</div>
								<div class="col-sm-4 container_card">
									<div class="card">
										<div class="card-body">
											<div class="row">
												<div class="col mt-0">
													<h5 class="card-title">DEATH</h5>
												</div>
												<div class="col-auto">
													<div class="avatar">
														<div class="avatar-title rounded-circle bg-primary-dark">
														<FontAwesomeIcon icon={faUsers} />															{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-truck align-middle"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg> */}
														</div>
													</div>
												</div>
											</div>
											<h1 class="display-5 mt-1 mb-3">$24.300</h1>
										</div>
									</div>
								</div>
								<div class="col-sm-4 container_card">
									<div class="card">
										<div class="card-body">
											<div class="row">
												<div class="col mt-0">
													<h5 class="card-title">RECOVERED</h5>
												</div>

												<div class="col-auto">
													<div class="avatar">
														<div class="avatar-title rounded-circle bg-primary-dark">
														<FontAwesomeIcon icon={faUsers} />															{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-truck align-middle"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg> */}
														</div>
													</div>
												</div>
											</div>
											<h1 class="display-5 mt-1 mb-3">$24.300</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
				<div class="col-xl-6 col-xxl-7 tweet_data">
						<div class="card flex-fill w-100">
							<div class="card-header">
								<h5 class="card-title mb-0">Tweets</h5>
							</div>
							<div class="card-body py-3">
								<div class="twitter_tweets d-flex">
									<div class="twitter_tweets__content">
										<div class="twitter_tweets__meta text-mutes">
										<span class="badge badge-success" style={{ float:"right"}}>Posted on <span class="text-mutes">- 3/26/2020</span>
											</span>												
										</div>
										<p class="m-0 my-1 mb-2 text-muted">#Italy vs #US #COVID19 #COVID2019 cases and deaths: updated: https://t.co/HEp8PBj50Z</p>
										<div class="blog-comments__actions">
											<div class="btn-group-sm btn-group">
												<button type="button" class="btn btn-danger">Report Spam</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="card-body py-3">
								<div class="twitter_tweets d-flex">
									<div class="twitter_tweets__content">
										<div class="twitter_tweets__meta text-mutes">
										<span class="badge badge-success" style={{ float:"right"}}>Posted on <span class="text-mutes">- 3/26/2020</span>
											</span>												
										</div>
										<p class="m-0 my-1 mb-2 text-muted">#Italy vs #US #COVID19 #COVID2019 cases and deaths: updated: https://t.co/HEp8PBj50Z</p>
										<div class="blog-comments__actions">
											<div class="btn-group-sm btn-group">
												<button type="button" class="btn btn-danger">Report Spam</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="card-body py-3">
								<div class="twitter_tweets d-flex">
									<div class="twitter_tweets__content">
										<div class="twitter_tweets__meta text-mutes">
										<span class="badge badge-success" style={{ float:"right"}}>Posted on <span class="text-mutes">- 3/26/2020</span>
											</span>												
										</div>
										<p class="m-0 my-1 mb-2 text-muted">#Italy vs #US #COVID19 #COVID2019 cases and deaths: updated: https://t.co/HEp8PBj50Z</p>
										<div class="blog-comments__actions">
											<div class="btn-group-sm btn-group">
												<button type="button" class="btn btn-danger">Report Spam</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="card-body py-3">
								<div class="twitter_tweets d-flex">
									<div class="twitter_tweets__content">
										<div class="twitter_tweets__meta text-mutes">
										<span class="badge badge-success" style={{ float:"right"}}>Posted on <span class="text-mutes">- 3/26/2020</span>
											</span>												
										</div>
										<p class="m-0 my-1 mb-2 text-muted">#Italy vs #US #COVID19 #COVID2019 cases and deaths: updated: https://t.co/HEp8PBj50Z</p>
										<div class="blog-comments__actions">
											<div class="btn-group-sm btn-group">
												<button type="button" class="btn btn-danger">Report Spam</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
      	</main>
    	</div>
	 	</>
	)
 }
}

