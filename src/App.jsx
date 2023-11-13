import { useState } from "react";
import questions from "./data";
import Questions from "./Questions";

const App = () => {
  // state value
  const [data,setData] = useState(questions);
 
  return <main>
    <Questions data = {data}/>
  </main>;
};
export default App;
