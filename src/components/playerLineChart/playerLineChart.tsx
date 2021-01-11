import React from "react";
import { ChartData, Line } from "react-chartjs-2";
import { getColor, milliSecToString } from "../../data/common/helper";
import { PlayerData } from "../../data/common/player";

interface Props {
  title: string;
  playerDatas: PlayerData[];
}

function PlayerLineChart(props: Props) {
  const [graphData, setGraphData] = React.useState<ChartData<{}>>();

  React.useEffect(() => {
    const graphData: ChartData<{}> = {
      labels:
        props.playerDatas && props.playerDatas[0]
          ? props.playerDatas[0].dataTicks.map((x, idx) => milliSecToString(x.time))
          : [],
      datasets: props.playerDatas.map((x) => {
        return {
          label: x.name,
          data: x.dataTicks.map((x) => x.data),
          fill: false,
          backgroundColor: getColor(x.colorId),
          borderColor: getColor(x.colorId),
        };
      }),
    };

    setGraphData(graphData);
  }, [props.playerDatas]);

  const options = {
    animation: {
      duration: 0, // general animation time
    },
    hover: {
      animationDuration: 0, // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    elements: {
      line: {
        borderWidth: 5,
        tension: 0, // disables bezier curves
      },
      point: {
        radius: 0,
      },
    },
  };

  return (
    <>
      <h4>{props.title}</h4>
      {graphData !== undefined ? (
        <Line data={graphData} options={options} />
      ) : (
        <></>
      )}
    </>
  );
}
export default PlayerLineChart;
