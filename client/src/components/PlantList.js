import React, { Component } from "react";
import axios from "axios";
import SearchForm from '../components/SearchForm';


export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array

  constructor(){
    super();
    this.state = {
      plants:[],
      filteredPlants:[],
      searchPlant:''
    }
    
  }

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  componentDidMount(){
    this.getPlants();
  }

  componentDidUpdate(previousProps, previousState){
    if(previousState.searchPlant !== this.state.searchPlant){
      // console.log(`input change`);   
      let filteredPlants = this.state.plants.filter((plant) => {
        // console.log(plant)
        // var str = "Hello world, welcome to the universe.";
        // var n = str.includes("world");
        if (plant.name.toLowerCase().includes(this.state.searchPlant.toLowerCase())){
          return plant
        }
        
      })
        this.setState({filteredPlants: filteredPlants})
    }
  }

  getPlants = () => {
    axios
    .get('http://localhost:3333/plants')
    .then(response => {
      // console.log(response.data.plantsData)
      this.setState({plants: response.data.plantsData, filteredPlants: response.data.plantsData})
      
      
    })
    .catch(err => console.log(`There was an error fetching plants`, err))  }


    //Handle search plant input changes
    handleChanges = event => { 
      //Set the local state first    
     this.setState({searchPlant: event.target.value})   
     
   }
         
      
      

 

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return ( 
        
        <>
         <SearchForm        
            handleChanges={this.handleChanges}            
        />
           <br/>

        <main className="plant-list">   
                 
        {this.state?.filteredPlants?.map((plant) => (   
                 
         
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>              
            </div>
          </div>
        ))}
         
      </main>
      </>
    );
  }
}
