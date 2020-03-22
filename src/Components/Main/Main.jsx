import React, { Component } from 'react'

export default class Menu extends Component {
constructor(props){
  super()
  this.state = {
    search:'',
    ShowAll:false
  }
}
  

  filterList=(e)=>{
    this.setState({
      search:e.target.value,
      ShowAll:true
    })
  }

  showAllCountries=()=>{
    this.setState({
      search:'',
      ShowAll:false
    })
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
  <div>
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">COVID -19 Live Report</h1>
            </div>{/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="fakeURL">Home</a></li>
                {/* <li className="breadcrumb-item active">Dashboard v2</li> */}
              </ol>
            </div>{/* /.col */}
          </div>{/* /.row */}
        </div>{/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          {/* Info boxes */}
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box">
                <span className="info-box-icon bg-info elevation-1"><i className="fas fa-users" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">CoronaVirus Cases</span>
                  <span className="info-box-number">
                    { total_cases }
                  </span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-users" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Deaths</span>
                  <span className="info-box-number">{total_deaths}</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            {/* fix for small devices only */}
            <div className="clearfix hidden-md-up" />
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-success elevation-1"><i className="fas fa-users" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Recovered</span>
                  <span className="info-box-number">{total_recovered}</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Affected Countries</span>
                  <span className="info-box-number">{this.props.countryCount}</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
          </div>
          <div className="row">
            {/* Left col */}
            <div className="col-md-12">
              {/* /.card */}
              {/* TABLE: LATEST ORDERS */}
              <div className="card">
                <div className="card-header border-transparent">
                  <h3 className="card-title"><b>Confirmed Cases Country Wise</b></h3>
                  <form action="#" method="post" style={{ width: '40%', display: 'inline-block', marginLeft: '20%' }}>
                        <div className="input-group">
                          <input type="text" name="message" style={{borderRight: 'none'}} onChange = {this.filterList} placeholder="Search for Country..." className="form-control" />
                          <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit" style={{ border:'1px solid #0000002b', borderLeft: 'none' }}>
                              <i className="fas fa-search" />
                            </button>
                        </div>
                        </div>
                  </form>
                  <div className="card-tools" style={ { position: 'absolute', right: '14px', top: '0px'}}>
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                      <i className="fas fa-minus" />
                    </button>
                  </div>
                </div>
                {/* /.card-header */}
                { this.props.spinner && 
                <div>Loading</div> 
                }
                {! this.props.spinner &&
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table m-0">
                      <thead>
                        <tr>
                          <th>Country</th>
                          <th>Confirmed</th>
                          <th>Recovered</th>
                          <th>Death</th>
                          <th>Active Cases</th>
                    
                        </tr>
                      </thead>
                      <tbody>
                        {
                          updateList.map((data)=>{
                        return <tr>
                          <td><a>{data.country_name}</a></td>
                          <td> <span className="badge badge-primary">{data.cases}</span></td>
                          <td><span className="badge badge-success">{data.total_recovered}</span></td>
                          <td>
                            <div className="badge badge-danger" data-color="#00a65a" data-height={20}>{data.deaths}</div>
                          </td>
                          <td>
                            <div className="badge badge-warning" data-color="#00a65a" data-height={20}>{data.active_cases}</div>
                          </td>
                        </tr>
                          })
                        }
                        
                        {/* <tr>
                          <td><a href="pages/examples/invoice.html">OR1848</a></td>
                          <td>Samsung Smart TV</td>
                          <td><span className="badge badge-warning">Pending</span></td>
                          <td>
                            <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="pages/examples/invoice.html">OR7429</a></td>
                          <td>iPhone 6 Plus</td>
                          <td><span className="badge badge-danger">Delivered</span></td>
                          <td>
                            <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="pages/examples/invoice.html">OR7429</a></td>
                          <td>Samsung Smart TV</td>
                          <td><span className="badge badge-info">Processing</span></td>
                          <td>
                            <div className="sparkbar" data-color="#00c0ef" data-height={20}>90,80,-90,70,-61,83,63</div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="pages/examples/invoice.html">OR1848</a></td>
                          <td>Samsung Smart TV</td>
                          <td><span className="badge badge-warning">Pending</span></td>
                          <td>
                            <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="pages/examples/invoice.html">OR7429</a></td>
                          <td>iPhone 6 Plus</td>
                          <td><span className="badge badge-danger">Delivered</span></td>
                          <td>
                            <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                          </td>
                        </tr>
                        <tr>
                          <td><a href="pages/examples/invoice.html">OR9842</a></td>
                          <td>Call of Duty IV</td>
                          <td><span className="badge badge-success">Shipped</span></td>
                          <td>
                            <div className="sparkbar" data-color="#00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                  {/* /.table-responsive */}
                </div>
                }
                {/* /.card-body */}
                { this.state.ShowAll &&
                  <div className="card-footer clearfix">
                  <button onClick = { this.showAllCountries } className="btn btn-sm btn-info float-left">Show All</button>
                </div>
                }
                
                {/* /.card-footer */}
              </div>
              {/* /.card */}
              <div className="row">
                <div className="col-md-6">
                  {/* DIRECT CHAT */}
                  <div className="card direct-chat direct-chat-warning">
                    <div className="card-header">
                      <h3 className="card-title">Direct Chat</h3>
                      <div className="card-tools">
                        <span data-toggle="tooltip" title="3 New Messages" className="badge badge-warning">3</span>
                        <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                        </button>
                        <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                          <i className="fas fa-comments" /></button>
                        <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                        </button>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      {/* Conversations are loaded here */}
                      <div className="direct-chat-messages">
                        {/* Message. Default to the left */}
                        <div className="direct-chat-msg">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-left">Alexander Pierce</span>
                            <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="user" />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">
                            Is this template really for free? That's unbelievable!
                          </div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                        {/* Message to the right */}
                        <div className="direct-chat-msg right">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-right">Sarah Bullock</span>
                            <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="user" />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">
                            You better believe it!
                          </div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                        {/* Message. Default to the left */}
                        <div className="direct-chat-msg">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-left">Alexander Pierce</span>
                            <span className="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="user" />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">
                            Working with AdminLTE on a great new app! Wanna join?
                          </div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                        {/* Message to the right */}
                        <div className="direct-chat-msg right">
                          <div className="direct-chat-infos clearfix">
                            <span className="direct-chat-name float-right">Sarah Bullock</span>
                            <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                          </div>
                          {/* /.direct-chat-infos */}
                          <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="user" />
                          {/* /.direct-chat-img */}
                          <div className="direct-chat-text">
                            I would love to.
                          </div>
                          {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                      </div>
                      {/*/.direct-chat-messages*/}
                      {/* Contacts are loaded here */}
                      <div className="direct-chat-contacts">
                        <ul className="contacts-list">
                          <li>
                            <a href="fakeURL">
                              <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Count Dracula
                                  <small className="contacts-list-date float-right">2/28/2015</small>
                                </span>
                                <span className="contacts-list-msg">How have you been? I was...</span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="fakeURL">
                              <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Sarah Doe
                                  <small className="contacts-list-date float-right">2/23/2015</small>
                                </span>
                                <span className="contacts-list-msg">I will be waiting for...</span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="fakeURL">
                              <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Nadia Jolie
                                  <small className="contacts-list-date float-right">2/20/2015</small>
                                </span>
                                <span className="contacts-list-msg">I'll call you back at...</span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="fakeURL">
                              <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Nora S. Vans
                                  <small className="contacts-list-date float-right">2/10/2015</small>
                                </span>
                                <span className="contacts-list-msg">Where is your new...</span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="fakeURL">
                              <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  John K.
                                  <small className="contacts-list-date float-right">1/27/2015</small>
                                </span>
                                <span className="contacts-list-msg">Can I take a look at...</span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                          <li>
                            <a href="fakeURL">
                              <img className="contacts-list-img" src="dist/img/user8-128x128.jpg" />
                              <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Kenneth M.
                                  <small className="contacts-list-date float-right">1/4/2015</small>
                                </span>
                                <span className="contacts-list-msg">Never mind I found...</span>
                              </div>
                              {/* /.contacts-list-info */}
                            </a>
                          </li>
                          {/* End Contact Item */}
                        </ul>
                        {/* /.contacts-list */}
                      </div>
                      {/* /.direct-chat-pane */}
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      <form action="#" method="post">
                        <div className="input-group">
                          <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                          <span className="input-group-append">
                            <button type="button" className="btn btn-warning">Send</button>
                          </span>
                        </div>
                      </form>
                    </div>
                    {/* /.card-footer*/}
                  </div>
                  {/*/.direct-chat */}
                </div>
                {/* /.col */}
                <div className="col-md-6">
                  {/* USERS LIST */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Latest Members</h3>
                      <div className="card-tools">
                        <span className="badge badge-danger">8 New Members</span>
                        <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                        </button>
                        <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                        </button>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body p-0">
                      <ul className="users-list clearfix">
                        <li>
                          <img src="dist/img/user1-128x128.jpg" alt="user" />
                          <a className="users-list-name" href="fakeURL">Alexander Pierce</a>
                          <span className="users-list-date">Today</span>
                        </li>
                        <li>
                          <img src="dist/img/user8-128x128.jpg" alt="user" />
                          <a className="users-list-name" href="fakeURL">Norman</a>
                          <span className="users-list-date">Yesterday</span>
                        </li>
                        <li>
                          <img src="dist/img/user7-128x128.jpg" alt="user" />
                          <a className="users-list-name" href="fakeURL">Jane</a>
                          <span className="users-list-date">12 Jan</span>
                        </li>
                        <li>
                          <img src="dist/img/user6-128x128.jpg" alt="user" />
                          <a className="users-list-name" href="fakeURL">John</a>
                          <span className="users-list-date">12 Jan</span>
                        </li>
                        <li>
                          <img src="dist/img/user2-160x160.jpg" alt="user" />
                          <a className="users-list-name" href="fakeURL">Alexander</a>
                          <span className="users-list-date">13 Jan</span>
                        </li>
                        <li>
                          <img src="dist/img/user5-128x128.jpg" alt="user" />
                          <a className="users-list-name" href="fakeURL">Sarah</a>
                          <span className="users-list-date">14 Jan</span>
                        </li>
                        <li>
                          <img src="dist/img/user4-128x128.jpg" alt="user" />
                          <a className="users-list-name" href="fakeURL">Nora</a>
                          <span className="users-list-date">15 Jan</span>
                        </li>
                        <li>
                          <img src="dist/img/user3-128x128.jpg" alt="user" />
                          <a className="users-list-name" href="fakeURL">Nadia</a>
                          <span className="users-list-date">15 Jan</span>
                        </li>
                      </ul>
                      {/* /.users-list */}
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer text-center">
                      <a href="javascript::">View All Users</a>
                    </div>
                    {/* /.card-footer */}
                  </div>
                  {/*/.card */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.col */}
            <div className="col-md-4">
              {/* Info Boxes Style 2 */}
              <div className="info-box mb-3 bg-warning">
                <span className="info-box-icon"><i className="fas fa-tag" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Inventory</span>
                  <span className="info-box-number">5,200</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
              <div className="info-box mb-3 bg-success">
                <span className="info-box-icon"><i className="far fa-heart" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Mentions</span>
                  <span className="info-box-number">92,050</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
              <div className="info-box mb-3 bg-danger">
                <span className="info-box-icon"><i className="fas fa-cloud-download-alt" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Downloads</span>
                  <span className="info-box-number">114,381</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
              <div className="info-box mb-3 bg-info">
                <span className="info-box-icon"><i className="far fa-comment" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Direct Messages</span>
                  <span className="info-box-number">163,921</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Browser Usage</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="chart-responsive">
                        <canvas id="pieChart" height={150} />
                      </div>
                      {/* ./chart-responsive */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-4">
                      <ul className="chart-legend clearfix">
                        <li><i className="far fa-circle text-danger" /> Chrome</li>
                        <li><i className="far fa-circle text-success" /> IE</li>
                        <li><i className="far fa-circle text-warning" /> FireFox</li>
                        <li><i className="far fa-circle text-info" /> Safari</li>
                        <li><i className="far fa-circle text-primary" /> Opera</li>
                        <li><i className="far fa-circle text-secondary" /> Navigator</li>
                      </ul>
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.card-body */}
                <div className="card-footer bg-white p-0">
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <a href="fakeURL" className="nav-link">
                        United States of America
                        <span className="float-right text-danger">
                          <i className="fas fa-arrow-down text-sm" />
                          12%</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="fakeURL" className="nav-link">
                        India
                        <span className="float-right text-success">
                          <i className="fas fa-arrow-up text-sm" /> 4%
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="fakeURL" className="nav-link">
                        China
                        <span className="float-right text-warning">
                          <i className="fas fa-arrow-left text-sm" /> 0%
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /.footer */}
              </div>
              {/* /.card */}
              {/* PRODUCT LIST */}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Recently Added Products</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                      <i className="fas fa-minus" />
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body p-0">
                  <ul className="products-list product-list-in-card pl-2 pr-2">
                    <li className="item">
                      <div className="product-img">
                        <img src="dist/img/default-150x150.png" alt="Product" className="img-size-50" />
                      </div>
                      <div className="product-info">
                        <a href="javascript:void(0)" className="product-title">Samsung TV
                          <span className="badge badge-warning float-right">$1800</span></a>
                        <span className="product-description">
                          Samsung 32" 1080p 60Hz LED Smart HDTV.
                        </span>
                      </div>
                    </li>
                    {/* /.item */}
                    <li className="item">
                      <div className="product-img">
                        <img src="dist/img/default-150x150.png" alt="Product" className="img-size-50" />
                      </div>
                      <div className="product-info">
                        <a href="javascript:void(0)" className="product-title">Bicycle
                          <span className="badge badge-info float-right">$700</span></a>
                        <span className="product-description">
                          26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                        </span>
                      </div>
                    </li>
                    {/* /.item */}
                    <li className="item">
                      <div className="product-img">
                        <img src="dist/img/default-150x150.png" alt="Product" className="img-size-50" />
                      </div>
                      <div className="product-info">
                        <a href="javascript:void(0)" className="product-title">
                          Xbox One <span className="badge badge-danger float-right">
                            $350
                          </span>
                        </a>
                        <span className="product-description">
                          Xbox One Console Bundle with Halo Master Chief Collection.
                        </span>
                      </div>
                    </li>
                    {/* /.item */}
                    <li className="item">
                      <div className="product-img">
                        <img src="dist/img/default-150x150.png" alt="Product" className="img-size-50" />
                      </div>
                      <div className="product-info">
                        <a href="javascript:void(0)" className="product-title">PlayStation 4
                          <span className="badge badge-success float-right">$399</span></a>
                        <span className="product-description">
                          PlayStation 4 500GB Console (PS4)
                        </span>
                      </div>
                    </li>
                    {/* /.item */}
                  </ul>
                </div>
                {/* /.card-body */}
                <div className="card-footer text-center">
                  <a href="javascript:void(0)" className="uppercase">View All Products</a>
                </div>
                {/* /.card-footer */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>{/*/. container-fluid */}
      </section>
      {/* /.content */}
    </div>
  </div>
  )
    }
}

