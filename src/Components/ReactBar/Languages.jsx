import React from "react";
import CanvasJSReact from "./canvasjs.react";
const CountContext = React.createContext()
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function ReactBar(){
    const options = {
        animationEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title: {
          text: "The Most Popular Languages !"
        },
        data: [
          {
            type: "column",
            dataPoints: [
                { label: "Roumnina (Top 4)", y: 45000000},
                { label: "French (Top 1)", y: 580000000 },
                { label: "Spain (Top 2)", y: 234000000 },
                { label: "Slovak (Top 5)", y: 13000000 },
                { label: "Germany (Top 3)", y: 92000000 }
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