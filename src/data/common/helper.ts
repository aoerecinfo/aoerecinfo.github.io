import { GameState, GameStates } from "./jsonStructure";
import { PlayerColor } from "./common";
import { DataTick, PlayerCardData, PlayerData } from "./player";

type PDataFunc = (gameState: GameState, idx: number) => number;

export const getPlayerData = (
  pDataFunc: PDataFunc,
  gameStates?: GameStates
) => {
  if (
    gameStates?.gameStates &&
    gameStates.gameStates[0] &&
    gameStates.gameStates[0].playerMain?.players
  ) {
    const playerCount = gameStates.gameStates[0].playerMain?.players.length;

    const playerDatas: PlayerData[] = [];
    // i == 0 => Gaia
    for (let i = 1; i < playerCount; i++) {
      const playerData: PlayerData = {
        dataTicks: gameStates.gameStates.map((gState) => {
          const dataTick: DataTick = {
            data: pDataFunc(gState, i),
            time: gState.time,
          };
          return dataTick;
        }),
        name: gameStates.gameStates[0].playerMain?.players[i].name,
        colorId: gameStates.gameStates[0].playerMain?.players[i].colorId,
      };
      playerDatas.push(playerData);
    }
    return playerDatas;
  }
  return [];
};

const getPlayersFromState = (id: number, gameStates?: GameStates) => {
  return gameStates?.gameStates &&
    gameStates.gameStates[id] &&
    gameStates.gameStates[id].playerMain?.players
    ? gameStates.gameStates[id].playerMain.players.filter(
        (x) => x.name !== "Gaia"
      )
    : [];
};

export const getPlayerCardData = (gameStates?: GameStates) => {
  return getPlayersFromState(0, gameStates).map((x) => {
    const playerData: PlayerCardData = {
      name: x.name,
      civilization: x.civilization,
      colorId: x.colorId,
    };
    return playerData;
  });
};

export const getColor = (colorId: number) => {
  switch (colorId) {
    case PlayerColor.Blue:
      return "rgb(31, 119, 180)";
    case PlayerColor.Red:
      return "rgb(214, 39, 40)";
    case PlayerColor.Green:
      return "rgb(44, 160, 44)";
    case PlayerColor.Yellow:
      return "rgb(233, 212, 96)";
    case PlayerColor.Teal:
      return "rgb(86, 182, 194)";
    case PlayerColor.Pink:
      return "rgb(198, 120, 221)";
    case PlayerColor.Gray:
      return "rgb(220, 223, 228)";
    case PlayerColor.Orange:
      return "rgb(255, 127, 14)";
    default:
      return "rgba(31, 119, 180)";
  }
};

export const milliSecToString = (milliSec: number) => {
  let minutes = Math.round(milliSec / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  minutes = minutes - hours * 60;

  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};
