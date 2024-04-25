import React from "react";

// images
import yellowBlob from "./Assets/images/blobs-yellow.png";
import blueBlob from "./Assets/images/blobs-blue.png";

// components
import OpenScreen from "./Components/OpenScreen";
import Questions from "./Components/Questions";

function App() {
  // show questions screen
  const [showQuestions, setShowQuestions] = React.useState(false);

  return (
    <div>
      <img src={yellowBlob} className="blobs-yellow" />
      {showQuestions ? (
        <Questions />
      ) : (
        <OpenScreen setShowQuestions={setShowQuestions} />
      )}
      <img src={blueBlob} className="blobs-blue" />
    </div>
  );
}

export default App;
