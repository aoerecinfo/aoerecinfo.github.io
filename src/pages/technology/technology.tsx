import React from "react";
import PlayerCards from "../../components/playerCards/playerCards";
import PlayerLineChart from "../../components/playerLineChart/playerLineChart";
import { GameState, GameStates } from "../../data/common/jsonStructure";
import { getPlayerCardData, getPlayerData } from "../../data/common/helper";

interface Props {
  gameStates?: GameStates;
}

function Techonology(props: Props) {
  const getResearch = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].resources.totalResearchCount;
  };
  const getMapExplored = (gameState: GameState, idx: number) => {
    return gameState.playerMain.players[idx].resources.mapExplored;
  };
  return (
    <div className="techonology">
      <PlayerCards players={getPlayerCardData(props?.gameStates)} />
      <div style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Research count"}
                playerDatas={getPlayerData(getResearch, props.gameStates)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div style={{ height: 300 }}>
              <PlayerLineChart
                title={"Map explored (%)"}
                playerDatas={getPlayerData(getMapExplored, props.gameStates)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techonology;
