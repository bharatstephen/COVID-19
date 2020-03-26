// import React, { Component } from 'react'

// export default class Menu extends Component {
// constructor(props){
//   super()
//   this.state = {
//     search:''
//   }
// }
  

//   filterList=(e)=>{
//     this.setState({
//       search:e.target.value
//     })
//   }

//   showAllCountries=()=>{
//     this.setState({
//       search:''
//     })
//   }


//     render() {
//       let updateList = this.props.countryWiseData.map((country)=> country );
//       updateList = updateList.filter(item => {
//       return item.country_name.toLowerCase().search(
//         this.state.search.toLowerCase()
//         ) !== -1;
//       });

//       const { total_cases, total_deaths,total_recovered } = this.props.overAllData
// return (
//   <div>
//     <div className="content-wrapper">
//       {/* Content Header (Page header) */}
//       <div className="content-header">
//         <div className="container-fluid">
//           <div className="row mb-2">
//             <div className="col-sm-6">
//               <h1 className="m-0 text-dark">COVID -19 Live Report</h1>
//             </div>{/* /.col */}
//             <div className="col-sm-6">
//               <ol className="breadcrumb float-sm-right">
//                 <li className="breadcrumb-item"><a href="fakeURL">Home</a></li>
//                 {/* <li className="breadcrumb-item active">Dashboard v2</li> */}
//               </ol>
//             </div>{/* /.col */}
//           </div>{/* /.row */}
//         </div>{/* /.container-fluid */}
//       </div>
//       {/* /.content-header */}
//       {/* Main content */}
//       <section className="content">
//         <div className="container-fluid">
//           {/* Info boxes */}
//           <div className="row">
//             <div className="col-12 col-sm-6 col-md-3">
//               <div className="info-box">
//                 <span className="info-box-icon bg-info elevation-1"><i className="fas fa-users" /></span>
//                 <div className="info-box-content">
//                   <span className="info-box-text">CoronaVirus Cases</span>
//                   <span className="info-box-number">
//                     { total_cases }
//                   </span>
//                 </div>
//                 {/* /.info-box-content */}
//               </div>
//               {/* /.info-box */}
//             </div>
//             {/* /.col */}
//             <div className="col-12 col-sm-6 col-md-3">
//               <div className="info-box mb-3">
//                 <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-users" /></span>
//                 <div className="info-box-content">
//                   <span className="info-box-text">Deaths</span>
//                   <span className="info-box-number">{total_deaths}</span>
//                 </div>
//                 {/* /.info-box-content */}
//               </div>
//               {/* /.info-box */}
//             </div>
//             {/* /.col */}
//             {/* fix for small devices only */}
//             <div className="clearfix hidden-md-up" />
//             <div className="col-12 col-sm-6 col-md-3">
//               <div className="info-box mb-3">
//                 <span className="info-box-icon bg-success elevation-1"><i className="fas fa-users" /></span>
//                 <div className="info-box-content">
//                   <span className="info-box-text">Recovered</span>
//                   <span className="info-box-number">{total_recovered}</span>
//                 </div>
//                 {/* /.info-box-content */}
//               </div>
//               {/* /.info-box */}
//             </div>
//             {/* /.col */}
//             <div className="col-12 col-sm-6 col-md-3">
//               <div className="info-box mb-3">
//                 <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
//                 <div className="info-box-content">
//                   <span className="info-box-text">Affected Countries</span>
//                   <span className="info-box-number">{this.props.countryCount}</span>
//                 </div>
//                 {/* /.info-box-content */}
//               </div>
//               {/* /.info-box */}
//             </div>
//             {/* /.col */}
//           </div>
//           <div className="row">
//             {/* Left col */}
//             <div className="col-md-12">
//               {/* /.card */}
//               {/* TABLE: LATEST ORDERS */}
//               <div className="card">
//                 <div className="card-header border-transparent">
//                   <h3 className="card-title"><b>Confirmed Cases Country Wise</b></h3>
//                   <form action="#" method="post" style={{ width: '40%', display: 'inline-block', marginLeft: '20%' }}>
//                         <div className="input-group">
//                           <input type="text" name="message" style={{borderRight: 'none'}} onChange = {this.filterList} placeholder="Search for Country..." className="form-control" />
//                           <div className="input-group-append">
//                             <button className="btn btn-navbar" type="submit" style={{ border:'1px solid #0000002b', borderLeft: 'none' }}>
//                               <i className="fas fa-search" />
//                             </button>
//                         </div>
//                         </div>
//                   </form>
//                   <div className="card-tools" style={ { position: 'absolute', right: '14px', top: '0px'}}>
//                     <button type="button" className="btn btn-tool" data-card-widget="collapse">
//                       <i className="fas fa-minus" />
//                     </button>
//                   </div>
//                 </div>
//                 {/* /.card-header */}
//                 { this.props.spinner && 
//                 <div>Loading</div> 
//                 }
//                 {! this.props.spinner &&
//                 <div className="card-body p-0">
//                   <div className="table-responsive">
//                     <table className="table m-0">
//                       <thead>
//                         <tr>
//                           <th>Country</th>
//                           <th>Confirmed</th>
//                           <th>Recovered</th>
//                           <th>Death</th>
//                           <th>Active Cases</th>
                    
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {
//                           updateList.slice(0, 10).map((data)=>{
//                         return <tr>
//                           <td><a>{data.country_name}</a></td>
//                           <td> <span className="badge badge-primary">{data.cases}</span></td>
//                           <td><span className="badge badge-success">{data.total_recovered}</span></td>
//                           <td>
//                             <div className="badge badge-danger" data-color="#00a65a" data-height={20}>{data.deaths}</div>
//                           </td>
//                           <td>
//                             <div className="badge badge-warning" data-color="#00a65a" data-height={20}>{data.active_cases}</div>
//                           </td>
//                         </tr>
//                           })
//                         }
//                       </tbody>
//                     </table>
//                   </div>
//                   {/* /.table-responsive */}
//                 </div>
//                 }
//               </div>
//               {/* /.card */}
//               <div className="row">
//               <div className="col-md-6">
//               {/* Info Boxes Style 2 */}
//               <div className="info-box mb-3 bg-warning">
//                 <span className="info-box-icon"><i className="fas fa-tag" /></span>
//                 <div className="info-box-content">
//                   <span className="info-box-text">Inventory</span>
//                   <span className="info-box-number">5,200</span>
//                 </div>
//                 {/* /.info-box-content */}
//               </div>
//               {/* /.info-box */}
//               <div className="info-box mb-3 bg-success">
//                 <span className="info-box-icon"><i className="far fa-heart" /></span>
//                 <div className="info-box-content">
//                   <span className="info-box-text">Mentions</span>
//                   <span className="info-box-number">92,050</span>
//                 </div>
//                 {/* /.info-box-content */}
//               </div>
//               {/* /.info-box */}
//               <div className="info-box mb-3 bg-danger">
//                 <span className="info-box-icon"><i className="fas fa-cloud-download-alt" /></span>
//                 <div className="info-box-content">
//                   <span className="info-box-text">Downloads</span>
//                   <span className="info-box-number">114,381</span>
//                 </div>
//                 {/* /.info-box-content */}
//               </div>
//               {/* /.info-box */}
//               <div className="info-box mb-3 bg-info">
//                 <span className="info-box-icon"><i className="far fa-comment" /></span>
//                 <div className="info-box-content">
//                   <span className="info-box-text">Direct Messages</span>
//                   <span className="info-box-number">163,921</span>
//                 </div>
//                 {/* /.info-box-content */}
//               </div>
//             </div>
//                 <div className="col-md-6">
//                   {/* USERS LIST */}
//                   <div className="card">
//                     <div className="card-header">
//                       <h3 className="card-title">Latest Members</h3>
//                       <div className="card-tools">
//                         <span className="badge badge-danger">8 New Members</span>
//                         <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
//                         </button>
//                         <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
//                         </button>
//                       </div>
//                     </div>
//                     {/* /.card-header */}
//                     <div className="card-body p-0">
//                       <ul className="users-list clearfix">
//                         <li>
//                           <img src="dist/img/user1-128x128.jpg" alt="user" />
//                           <a className="users-list-name" href="fakeURL">Alexander Pierce</a>
//                           <span className="users-list-date">Today</span>
//                         </li>
//                         <li>
//                           <img src="dist/img/user8-128x128.jpg" alt="user" />
//                           <a className="users-list-name" href="fakeURL">Norman</a>
//                           <span className="users-list-date">Yesterday</span>
//                         </li>
//                         <li>
//                           <img src="dist/img/user7-128x128.jpg" alt="user" />
//                           <a className="users-list-name" href="fakeURL">Jane</a>
//                           <span className="users-list-date">12 Jan</span>
//                         </li>
//                         <li>
//                           <img src="dist/img/user6-128x128.jpg" alt="user" />
//                           <a className="users-list-name" href="fakeURL">John</a>
//                           <span className="users-list-date">12 Jan</span>
//                         </li>
//                         <li>
//                           <img src="dist/img/user2-160x160.jpg" alt="user" />
//                           <a className="users-list-name" href="fakeURL">Alexander</a>
//                           <span className="users-list-date">13 Jan</span>
//                         </li>
//                         <li>
//                           <img src="dist/img/user5-128x128.jpg" alt="user" />
//                           <a className="users-list-name" href="fakeURL">Sarah</a>
//                           <span className="users-list-date">14 Jan</span>
//                         </li>
//                         <li>
//                           <img src="dist/img/user4-128x128.jpg" alt="user" />
//                           <a className="users-list-name" href="fakeURL">Nora</a>
//                           <span className="users-list-date">15 Jan</span>
//                         </li>
//                         <li>
//                           <img src="dist/img/user3-128x128.jpg" alt="user" />
//                           <a className="users-list-name" href="fakeURL">Nadia</a>
//                           <span className="users-list-date">15 Jan</span>
//                         </li>
//                       </ul>
//                       {/* /.users-list */}
//                     </div>
//                     {/* /.card-body */}
//                     <div className="card-footer text-center">
//                       <a href="javascript::">View All Users</a>
//                     </div>
//                     {/* /.card-footer */}
//                   </div>
//                   {/*/.card */}
//                 </div>
//                 {/* /.col */}
//               </div>
//               {/* /.row */}
//             </div>
//           </div>
//           {/* /.row */}
//         </div>
//       </section>
//     </div>
//   </div>
//   )
//     }
// }

