import React from "react";
import PlayerCards from "../../components/playerCards/playerCards";
import PlayerLineChart from "../../components/playerLineChart/playerLineChart";
import { GameState, GameStates } from "../../data/common/jsonStructure";
import { getPlayerCardData, getPlayerData } from "../../data/common/helper";

interface Props {
  gameStates?: GameStates;
}

function Economy(props: Props) {
  // Current resources
  const getFood = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].resources.food;
  };
  const getWood = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].resources.wood;
  };
  const getStone = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].resources.stone;
  };
  const getGold = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].resources.gold;
  };
  // Total resources
  const getTotalFood = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].resources.totalFood;
  };
  const getTotalWood = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].resources.totalWood;
  };
  const getTotalStone = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].resources.totalStone;
  };
  const getTotalGold = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].resources.totalGold;
  };
  // Working vills
  const getForagerCount = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].gameObjectSummary.unitSummary
      .foragerCount;
  };
  const getHunterCount = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].gameObjectSummary.unitSummary
      .hunterCount;
  };
  const getShepherdCount = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].gameObjectSummary.unitSummary
      .shepherdCount;
  };
  const getFarmerCount = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].gameObjectSummary.unitSummary
      .farmerCount;
  };
  const getLumberjackCount = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].gameObjectSummary.unitSummary
      .lumberjackCount;
  };
  const getGoldMinerCount = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].gameObjectSummary.unitSummary
      .goldMinerCount;
  };
  const getStoneMinerCount = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].gameObjectSummary.unitSummary
      .stoneMinerCount;
  };

  return (
    <div className="society">
      <PlayerCards players={getPlayerCardData(props?.gameStates)} />
      <div style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Food"}
                playerDatas={getPlayerData(getFood, props.gameStates)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Wood"}
                playerDatas={getPlayerData(getWood, props.gameStates)}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 40 }}>
        <div className="row">
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Stone"}
                playerDatas={getPlayerData(getStone, props.gameStates)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Gold"}
                playerDatas={getPlayerData(getGold, props.gameStates)}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 40 }}>
        <div className="row">
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Total Food"}
                playerDatas={getPlayerData(getTotalFood, props.gameStates)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Total Wood"}
                playerDatas={getPlayerData(getTotalWood, props.gameStates)}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 40 }}>
        <div className="row">
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Total Stone"}
                playerDatas={getPlayerData(getTotalStone, props.gameStates)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Total Gold"}
                playerDatas={getPlayerData(getTotalGold, props.gameStates)}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 40 }}>
        <div className="row">
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Foragers"}
                playerDatas={getPlayerData(getForagerCount, props.gameStates)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Hunters"}
                playerDatas={getPlayerData(getHunterCount, props.gameStates)}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 40 }}>
        <div className="row">
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Shepherds"}
                playerDatas={getPlayerData(getShepherdCount, props.gameStates)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Farmers"}
                playerDatas={getPlayerData(getFarmerCount, props.gameStates)}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 40 }}>
        <div className="row">
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Lumberjacks"}
                playerDatas={getPlayerData(
                  getLumberjackCount,
                  props.gameStates
                )}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Goldminers"}
                playerDatas={getPlayerData(getGoldMinerCount, props.gameStates)}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 40 }}>
        <div className="row">
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Stoneminers"}
                playerDatas={getPlayerData(
                  getStoneMinerCount,
                  props.gameStates
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Economy;
