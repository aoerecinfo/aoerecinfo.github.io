import React from "react";
import PlayerCards from "../../components/playerCards/playerCards";
import PlayerLineChart from "../../components/playerLineChart/playerLineChart";
import { GameState, GameStates } from "../../data/common/jsonStructure";
import { getPlayerCardData, getPlayerData } from "../../data/common/helper";

interface Props {
  gameStates?: GameStates;
}

function Military(props: Props) {
  const getMilitary = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].resources.militaryCount;
  };
  const getKills = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].resources.kills;
  };
  return (
    <div className="military">
      <PlayerCards players={getPlayerCardData(props?.gameStates)} />
      <div style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Military"}
                playerDatas={getPlayerData(getMilitary, props.gameStates)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Kills"}
                playerDatas={getPlayerData(getKills, props.gameStates)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Military;
