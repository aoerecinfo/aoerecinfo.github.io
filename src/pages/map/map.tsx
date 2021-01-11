import React from "react";
import { GameStates } from "../../data/common/jsonStructure";
import { Stage, Layer, Rect, Line } from "react-konva";
import {
  getColor,
  getPlayerCardData,
  milliSecToString,
} from "../../data/common/helper";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { KonvaEventObject } from "konva/types/Node";
import PlayerCards from "../../components/playerCards/playerCards";

interface Props {
  gameStates?: GameStates;
}

const aoeObjectsZoom = 6;

function Map(props: Props) {
  const [timeStep, setTimeStep] = React.useState<number>(0);
  const [stageScale, setStageScale] = React.useState(1);
  const [stageX, setStageX] = React.useState((window.innerWidth - 1060) / 2);
  const [stageY, setStageY] = React.useState(0);
  const [tool, setTool] = React.useState<string>("pen");
  const [lines, setLines] = React.useState<any[]>([]);
  const isDrawing = React.useRef(false);
  // const shiftIsDown = useKeyDown("Shift");

  const renderTrees = (idx: number) => {
    if (
      props?.gameStates?.gameStates &&
      props.gameStates.gameStates.length > 0 &&
      props.gameStates.gameStates[idx] &&
      props.gameStates.gameStates[idx].map &&
      props.gameStates.gameStates[idx].map.mapObjects &&
      props.gameStates.gameStates[idx].map.mapObjects.length > 0
    ) {
      return props.gameStates.gameStates[idx].map.mapObjects
        .filter(
          (x) => x !== undefined && x !== null && x.n.indexOf("Tree ") !== -1
        )
        .filter((x) => x.p.w < 10 && x.p.h < 10 && x.p.h > 0 && x.p.w > 0)
        .map((m, idx) => {
          return (
            <Rect
              key={`rect-${idx}`}
              x={m.p.x * aoeObjectsZoom}
              y={m.p.y * aoeObjectsZoom}
              width={m.p.w * aoeObjectsZoom}
              height={m.p.h * aoeObjectsZoom}
              fill="#157615"
            />
          );
        });
    } else {
      return <></>;
    }
  };
  const renderPlayerObjects = (idx: number) => {
    if (
      props?.gameStates?.gameStates &&
      props.gameStates.gameStates.length > 0 &&
      props.gameStates.gameStates[idx] &&
      props.gameStates.gameStates[idx].playerMain &&
      props.gameStates.gameStates[idx].playerMain.players &&
      props.gameStates.gameStates[idx].playerMain.players.length > 0
    ) {
      return props.gameStates.gameStates[idx].playerMain.players.map(
        (p, pIdx) => {
          return p.objectList.objects
            .filter(
              (x) =>
                x?.p !== undefined &&
                x.p.w < 10 &&
                x.p.h < 10 &&
                x.p.h > -200 &&
                x.p.w > -200 &&
                x.p.h !== 0 &&
                x.p.w !== 0
            )
            .map((po, objIdx) => {
              return (
                <Rect
                  key={`rect-${pIdx}-${objIdx}`}
                  x={po.p.x * aoeObjectsZoom}
                  y={po.p.y * aoeObjectsZoom}
                  width={
                    (po.p.w > -200 && po.p.w < 0 ? 1 : po.p.w) * aoeObjectsZoom
                  }
                  height={
                    (po.p.h > -200 && po.p.h < 0 ? 1 : po.p.h) * aoeObjectsZoom
                  }
                  fill={
                    pIdx === 0
                      ? po.n.indexOf("StoneMine") !== -1
                        ? "#919191"
                        : po.n.indexOf("GoldMine") !== -1
                        ? "#fff600"
                        : po.n.indexOf("Forage") !== -1
                        ? "#79c46b"
                        : po.n.indexOf("Relic") !== -1
                        ? "#fff"
                        : "#79c46b"
                      : getColor(p.colorId)
                  }
                />
              );
            });
        }
      );
    } else {
      return <></>;
    }
  };

  const handleWheel = (e: KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();

    const scaleBy = 1.12;
    const stage = e.target.getStage();
    if (stage) {
      const oldScale = stage.scaleX();
      const pointerPos = stage.getPointerPosition();
      const newScale =
        e.evt.deltaY <= 0 ? oldScale * scaleBy : oldScale / scaleBy;

      const mousePointTo = {
        x: pointerPos!.x / oldScale - stage.x() / oldScale,
        y: pointerPos!.y / oldScale - stage.y() / oldScale,
      };
      setStageScale(newScale);
      setStageX(-(mousePointTo.x - pointerPos!.x / newScale) * newScale);
      setStageY(-(mousePointTo.y - pointerPos!.y / newScale) * newScale);
    }
  };

  const onSliderChange = (val: number) => {
    setTimeStep(val);
  };

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    isDrawing.current = true;
    const stage = e.target.getStage();
    if (stage) {
      const scale = stage.scaleX();
      const pointerPos = stage.getPointerPosition();

      const scaledPos = {
        x: pointerPos!.x / scale - stage.x() / scale,
        y: pointerPos!.y / scale - stage.y() / scale,
      };
      setLines([...lines, { tool, points: [scaledPos.x, scaledPos.y] }]);
    }
  };

  const handleMouseMove = (e: any) => {
    if (isDrawing.current) {
      const stage = e.target.getStage();
      const scale = stage.scaleX();
      const pointerPos = stage.getPointerPosition();
      const scaledPos = {
        x: pointerPos!.x / scale - stage.x() / scale,
        y: pointerPos!.y / scale - stage.y() / scale,
      };

      let lastLine = lines[lines.length - 1];

      // add point
      lastLine.points = lastLine.points.concat([scaledPos.x, scaledPos.y]);

      // replace last
      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const renderDraw = () => {
    return lines.map((line, i) => (
      <Line
        key={"line-" + i}
        points={line.points}
        stroke="#df4b26"
        strokeWidth={5}
        tension={0.5}
        lineCap="round"
        globalCompositeOperation={
          line.tool === "eraser" ? "destination-out" : "source-over"
        }
      />
    ));
  };

  const eraseAllDrawing = () => {
    setLines([]);
  };

  return (
    <div className="map">
      <PlayerCards players={getPlayerCardData(props?.gameStates)} />
      <h5 className="centerContent">
        {props?.gameStates?.gameStates[timeStep].time !== undefined
          ? milliSecToString(props?.gameStates?.gameStates[timeStep].time)
          : "Invalid time"}
      </h5>
      <div style={{ marginTop: 20 }}>
        <input
          type="button"
          className="btn btn-primary"
          value="Erase drawings"
          onClick={eraseAllDrawing}
        />
        <div className="mapArea">
          <Stage
            width={window.innerWidth - 560}
            height={800}
            scaleX={stageScale}
            scaleY={stageScale}
            x={stageX}
            y={stageY}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMousemove={handleMouseMove}
            onMouseup={handleMouseUp}
          >
            <Layer>{renderTrees(timeStep)}</Layer>
            <Layer>{renderPlayerObjects(timeStep)}</Layer>
            <Layer>{renderDraw()}</Layer>
          </Stage>
        </div>
      </div>
      <div>
        <Slider
          min={0}
          max={
            props?.gameStates?.gameStates !== undefined
              ? props?.gameStates?.gameStates.length - 1
              : 1
          }
          step={1}
          defaultValue={0}
          onChange={onSliderChange}
        />
      </div>
    </div>
  );
}

export default Map;
