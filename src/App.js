
import './App.css';
import Component from './Copmonent.js';

const colorcode=()=>{

}

function App() {
  return (
    <div style={{display:"flex", flexDirtection:"row",backgroundColor:"linear-gradient(to bottom right, red, yellow);", flexWrap:"wrap", paddingLeft:"100px", paddingRight:"100px",rowGap:"10px",columnGap:"10px",}} >
      <Component color_code="#FF6663" color_name="PINK"/>
      <Component color_code="#333333" color_name="GRAY"/>
      <Component color_code="#000000" color_name="BLACK"/>
      <Component color_code="#38BB14" color_name="GREEN"/>
      <Component color_code="#C90B0B" color_name="RED"/>
      <Component color_code="#FF8000" color_name="ORANGE"/>
      <Component color_code="#FFF500" color_name="YELLOW"/>
      <Component color_code="#CCCCCC" color_name="LIGHT GRAY"/>
      <Component color_code="#7E41A2" color_name="PURPLE"/>
      <Component color_code="#C14911" color_name="BROWN"/>
      
      
      
    </div>
  );
}

export default App;
