import { Component } from 'react';
import './images.css'


class App extends Component{

    constructor(props){
        super(props)
        this.state = {
          imageUrl: " ",
          imageUrlArray: [
            "https://img.freepik.com/premium-photo/indian-sweet-motichoor_55610-938.jpg?w=2000",
            "https://www.holidify.com/images/cmsuploads/compressed/Ras-Malai_20180523170446.jpg",
            "https://cdn.pixabay.com/photo/2015/06/23/05/23/fresh-jalebi-818316__480.jpg",
            "https://b.zmtcdn.com/data/pictures/7/19526627/d5fb6fd12367b4f3a47ae4e49b6137d5_featured_v2.jpg"
          ],
          showModal: false,
          popImageURl: " "
      
        }; 
        
      }
      render(){
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url, index) => {
          return (
            <img 
            className='singleImage'
            src={url}
            alt=" "
            key={index}
            />
            
          )
        }) 
        return (
        <div className="App">
            {images}
        </div>
    );
  }
}

export default App;
