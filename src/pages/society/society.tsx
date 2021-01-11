import React from "react";
import PlayerCards from "../../components/playerCards/playerCards";
import PlayerLineChart from "../../components/playerLineChart/playerLineChart";
import { GameState, GameStates } from "../../data/common/jsonStructure";
import { getPlayerCardData, getPlayerData } from "../../data/common/helper";

interface Props {
  gameStates?: GameStates;
}

function Society(props: Props) {
  const getVillCount = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].resources.villagerCount;
  };
  const getIdleVills = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].gameObjectSummary.unitSummary
      .idleVills;
  };
  const getTradeCartCount = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].gameObjectSummary.unitSummary
      .tradeCartCount;
  };
  const getTradeCartIdle = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].gameObjectSummary.unitSummary
      .idleTradeCartCount;
  };
  return (
    <div className="society">
      <PlayerCards players={getPlayerCardData(props?.gameStates)} />
      <div style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Villagers"}
                playerDatas={getPlayerData(getVillCount, props.gameStates)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Idle villagers"}
                playerDatas={getPlayerData(getIdleVills, props.gameStates)}
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: 40 }}>
          <div className="row">
            <div className="col-sm-6">
              <div style={{ height: 300 }}>
                <PlayerLineChart
                  title={"Trade carts"}
                  playerDatas={getPlayerData(
                    getTradeCartCount,
                    props.gameStates
                  )}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div style={{ height: 300 }}>
                <PlayerLineChart
                  title={"Idle trade carts"}
                  playerDatas={getPlayerData(
                    getTradeCartIdle,
                    props.gameStates
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Society;
