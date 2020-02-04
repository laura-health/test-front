import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './App.scss';
class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     txt: "This is the state text",
  //     cat: 1
  //   }
  // }
  // update (e) {
  //   this.setState({txt: e.target.value})
  // }
  // render() {
  //   let txt = this.state.txt
  //   let cat = this.state.cat
  //   return (
  //     <div>
  //       <Widget update={this.update.bind(this)} />
  //       <h1>{txt} - {cat}</h1>
  //     </div>
  //
  //   )
  // }
  render() {
    return (
      <section className="application">

        <div className="navigation">
          <div className="container">
            <div className="user-space">
              <img className="responsive-img" src={require("./conta.png")}/>
              <h2 className="username">João da Silva</h2>
              <h4 className="userposition gray-txt">Cargo</h4>
            </div>
            <div className="user-data">
              <div className="followers">
                <strong><h4>Followers</h4></strong>
                <p>14.500</p>
              </div>
              <div className="following">
                <strong><h4>Following</h4></strong>
                <p>50</p>
              </div>

            </div>
            <div className="menu">
              <ul className="nav">
                <li className="nav-item active">
                  <img src=""/>
                  <a className="black-txt  active-txt" href="#"><p>Menu</p></a>
                </li>
                <li className="nav-item">
                  <img src=""/>
                  <a className="black-txt" href="#"><p>Menu</p></a>
                </li>
                <li className="nav-item">
                  <img src=""/>
                  <a className="black-txt" href="#"><p>Menu</p></a>
                </li>
                <li className="nav-item">
                  <img src=""/>
                  <a className="black-txt" href="#"><p>Menu</p></a>
                </li>
                <li className="nav-item">
                  <img src=""/>
                  <a className="black-txt" href="#"><p>Menu</p></a>
                </li>
                <li className="nav-item">
                  <img src=""/>
                  <a className="black-txt" href="#"><p>Menu</p></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="main-section">
          <div className="container">
          <div className="tabs w-100">
            <a href="#" data-target="">
            <div className="tab active">

              <h3 className="blue-txt">1000</h3>
              <p className="black-txt">Lorem ipsum dolor sit amet</p>

            </div>
            </a>
            <a href="#" data-target="">
            <div className="tab">

              <h3 className="blue-txt">1200</h3>
              <p className="black-txt">Lorem ipsum dolor sit amet</p>

            </div>
            </a>
            <a href="#" data-target="">
            <div className="tab">

              <h3 className="blue-txt">1983</h3>
              <p className="black-txt">Lorem ipsum dolor sit amet</p>

            </div>
            </a>
          </div>

          <div className="graph">

          </div>

          <div className="list">
            <div className="latest">
              <div className="container">
                <h3 className="blue-txt">Latest</h3>
                <ul className="no-padding">
                  <li className="item">
                    <div className="container d-flex align-items-center">
                      <img className="small-avatar" src={require("./conta.png")} />
                      <p className="title">Titulo</p>
                      <p className="status">Status</p>
                      <span className="number">1000.00</span>
                      <a href="#" className="toast"><p>+</p></a>
                    </div>
                  </li>
                  <li className="item">
                    <div className="container d-flex align-items-center">
                      <img className="small-avatar" src={require("./conta.png")} />
                      <p className="title">Titulo</p>
                      <p className="status">Status</p>
                      <span className="number">1000.00</span>
                      <a href="#" className="toast">+</a>
                    </div>
                  </li>
                  <li className="item">
                    <div className="container d-flex align-items-center">
                      <img className="small-avatar" src={require("./conta.png")} />
                      <p className="title">Titulo</p>
                      <p className="status">Status</p>
                      <span className="number">1000.00</span>
                      <a href="#" className="toast">+</a>
                    </div>
                  </li>
                  <li className="item">
                    <div className="container d-flex align-items-center">
                      <img className="small-avatar" src={require("./conta.png")} />
                      <p className="title">Titulo</p>
                      <p className="status">Status</p>
                      <span className="number">1000.00</span>
                      <a href="#" className="toast">+</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="popular">
              <div className="container">
                <h3 className="blue-txt">Popular</h3>
                <ul className="no-padding">
                  <li className="item">
                    <div className="container d-flex align-items-center">
                      <img className="small-avatar" src={require("./conta.png")} />
                      <p className="name">Nome</p>
                      <p className="subtitle">Titulo</p>
                      <a href="#" className="toast">+</a>
                    </div>
                  </li>
                  <li className="item">
                    <div className="container d-flex align-items-center">
                      <img className="small-avatar" src={require("./conta.png")} />
                      <p className="name">Nome</p>
                      <p className="subtitle">Titulo</p>
                    <a href="#" className="toast">+</a>
                    </div>
                  </li>
                  <li className="item">
                    <div className="container d-flex align-items-center">
                      <img className="small-avatar" src={require("./conta.png")} />
                      <p className="name">Nome</p>
                      <p className="subtitle">Titulo</p>
                      <a href="#" className="toast">+</a>
                    </div>
                  </li>
                  <li className="item">
                    <div className="container d-flex align-items-center">
                      <img className="small-avatar" src={require("./conta.png")} />
                      <p className="name">Nome</p>
                      <p className="subtitle">Titulo</p>
                      <a href="#" className="toast">+</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          </div>
        </div>

        <div className="tab-section">
            <div className="container">
              <div className="title">
                <h3  className="blue-txt">Lorem ipsum</h3>
                <img className="search-promp" src="" />
              </div>
              <div className="list">
                <ul className="no-padding">

                  <li className="item d-flex align-items-center justify-content-around">
                    <img className="small-avatar" src={require("./sino-b.png")} />
                    <p className="name">Name</p>
                    <p className="number green-txt">20.000,00</p>
                  </li>

                  <li className="item d-flex align-items-center justify-content-around">
                    <img className="small-avatar" src={require("./sino-r.png")} />
                    <p className="name">Name</p>
                    <p className="number red-txt">20.000,00</p>
                  </li>

                  <li className="item d-flex align-items-center justify-content-around">
                    <img className="small-avatar" src={require("./sino-y.png")} />
                    <p className="name">Name</p>
                    <p className="number yellow-txt">20.000,00</p>
                  </li>

                  <li className="item d-flex align-items-center justify-content-around">
                    <img className="small-avatar" src={require("./sino-b.png")} />
                    <p className="name">Name</p>
                    <p className="number green-txt">20.000,00</p>
                  </li>

                  <li className="item d-flex align-items-center justify-content-around">
                    <img className="small-avatar" src={require("./sino-r.png")} />
                    <p className="name">Name</p>
                    <p className="number red-txt">20.000,00</p>
                  </li>
                  <li className="item d-flex align-items-center justify-content-around">
                    <img className="small-avatar" src={require("./sino-b.png")} />
                    <p className="name">Name</p>
                    <p className="number green-txt">20.000,00</p>
                  </li>

                  <li className="item d-flex align-items-center justify-content-around">
                    <img className="small-avatar" src={require("./sino-r.png")} />
                    <p className="name">Name</p>
                    <p className="number red-txt">20.000,00</p>
                  </li>

                  <li className="item d-flex align-items-center justify-content-around">
                    <img className="small-avatar" src={require("./sino-y.png")} />
                    <p className="name">Name</p>
                    <p className="number yellow-txt">20.000,00</p>
                  </li>

                  <li className="item d-flex align-items-center justify-content-around">
                    <img className="small-avatar" src={require("./sino-b.png")} />
                    <p className="name">Name</p>
                    <p className="number green-txt">20.000,00</p>
                  </li>

                  <li className="item d-flex align-items-center justify-content-around">
                    <img className="small-avatar" src={require("./sino-r.png")} />
                    <p className="name">Name</p>
                    <p className="number red-txt">20.000,00</p>
                  </li>
                  <li className="item d-flex align-items-center justify-content-around">
                    <img className="small-avatar" src={require("./sino-b.png")} />
                    <p className="name">Name</p>
                    <p className="number green-txt">20.000,00</p>
                  </li>

                  <li className="item d-flex align-items-center justify-content-around">
                    <img className="small-avatar" src={require("./sino-r.png")} />
                    <p className="name">Name</p>
                    <p className="number red-txt">20.000,00</p>
                  </li>

                  <li className="item d-flex align-items-center justify-content-around">
                    <img className="small-avatar" src={require("./sino-y.png")} />
                    <p className="name">Name</p>
                    <p className="number yellow-txt">20.000,00</p>
                  </li>



                </ul>
              </div>
            </div>
        </div>
      </section>
    )
  }
}
App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number
}

App.defaultProps = {
  txt: "This is the default text",
  cat: 0
}
const Widget = (props) =>
<input type="text" onChange={props.update} />


export default App
