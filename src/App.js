
import React, {useState} from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostPage from "./components/PostsContainer/PostsPage";
import SearchBar from './components/SearchBar/SearchBarContainer';
import dummyData from "./dummy-data";

const App = () => {
  const [data] = useState(dummyData)
  
  
  return (
    <div className="App">
        <SearchBar />
      <PostPage post = {data} />
    
    </div>
  );
};

export default App;
