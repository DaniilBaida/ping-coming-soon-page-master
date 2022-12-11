import ComingSoon from "./components/ComingSoon";
import ThankYou from "./components/ThankYou";
import { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="App">
      {!isSubmitted && <ComingSoon setIsSubmitted={setIsSubmitted} />}
      {isSubmitted && <ThankYou setIsSubmitted={setIsSubmitted} />}
    </div>
  );
}

export default App;
