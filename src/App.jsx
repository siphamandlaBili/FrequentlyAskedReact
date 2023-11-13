import { useState } from "react";
import questions from "./data";
import Questions from "./Questions";

const App = () => {
  const [data,setData] = useState(questions);
 
  return <main>
    <Questions data = {data}/>
  </main>;
};
export default App;
