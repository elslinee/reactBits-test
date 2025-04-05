import "./App.css";
import TextPressure from "./animation/TextPressure/TextPressure";
function App() {
  return (
    <main>
      <div style={{ position: "relative", height: "300px" }}>
        <TextPressure
          text="samir!"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#000"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
    </main>
  );
}

export default App;
