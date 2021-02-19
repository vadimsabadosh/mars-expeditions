import React from 'react';
import FetchData from './components/FetchData/FetchData';
import { GlobalStyle } from './components/Style/GlobalStyle'; 
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Section from './components/Section/Section';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      images: [],
      rover: 'curiosity',
      sol: 0,
      page: 1,
      camera: 'fhaz',
      submitted: false,
      loading: false,
    }
    this.fetchData = new FetchData();
  }

  getData(){
    this.fetchData.getData(this.state.rover, this.state.sol, this.state.page, this.state.camera)
      .then(data => this.setState({images: data.photos}))
      .catch(err => console.error(err));
  }
  handleForm =(e) =>{
    e.preventDefault();
      this.getData();
      this.setState({
        submitted: true,
        loading: true
      });
      this.handleLoading()
  }
  handleLoading = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000)
  }
  changeRover = (e) =>{
    this.setState({
      rover: e.target.value,
    })
  }
  changeCamera = (e) =>{
    this.setState({
      camera: e.target.value,
    })
  }
  changeSol = (e) =>{
    this.setState({
      sol: e.target.value,
    })
  }
  plusPage = () =>{
      this.setState((state) => ({
        page: state.page + 1
      }), this.getData());
      
  }
  render() {
    return(
      <>
        <GlobalStyle/>
        <Header />
        <Main 
          handleForm={this.handleForm} 
          changeRover={this.changeRover} 
          changeCamera={this.changeCamera} 
          changeSol={this.changeSol}
        />
        <Section 
          images={this.state.images} 
          submitted={this.state.submitted} 
          loading={this.state.loading} 
          plusPage={this.plusPage}
        />
      </>
    );
    
  }
}

export default App;
