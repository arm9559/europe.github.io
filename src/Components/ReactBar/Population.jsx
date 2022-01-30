import React from "react";
import CanvasJSReact from "./canvasjs.react";
const CountContext = React.createContext()
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function ReactBar(props){
    const options = {
        animationEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title: {
          text: "The Popular Countries !"
        },
        data: [
          {
            type: "column",
            dataPoints: [
              { label: "French", y: props.populationFirst },
              { label: "Roumnina", y: props.populationSecond },
              { label: "Federal Republic of Germany", y: props.populationThird },
              { label: "Kingdom of Spain", y: props.populationFourth },
              { label: "Slovak republic", y: props.populationFiveth }
            ]
          }
        ]
      };
      const containerProps = {
        height: "calc(100vh - 150px)"
      };
      return(
        <nav className="container">
          <CanvasJSChart containerProps={containerProps} options={options} />
        </nav>
      )
}