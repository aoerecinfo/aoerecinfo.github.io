import React from "react";
import { PlayerCardData } from "../../data/common/player";
import PlayerCard from "../playerCard/playerCard";

interface Props {
  players: PlayerCardData[];
}

function PlayerCards(props: Props) {
  return (
    <>
      <div>
        <div className={"row"}>
          {props.players.length === 2 ? (
            <>
              <div className={"col-sm-6"} key={`player-row-1-${1}`}>
                <div
                  className={"float-right text-right"}
                  style={{ marginRight: 10 }}
                >
                  <PlayerCard
                    colorId={props.players[0].colorId}
                    name={props.players[0].name}
                    civ={props.players[0].civilization}
                  />
                </div>
              </div>
              <div className={"col-sm-6"} key={`player-row-2-${2}`}>
                <div style={{ marginLeft: 10 }}>
                  <PlayerCard
                    colorId={props.players[1].colorId}
                    rightAlign={true}
                    name={props.players[1].name}
                    civ={props.players[1].civilization}
                  />
                </div>
              </div>
            </>
          ) : (
            props.players.slice(0, 4).map((x, idx) => {
              return (
                <div className={"col-sm-6"} key={`player-row-1-${idx}`}>
                  <PlayerCard
                    colorId={props.players[1].colorId}
                    name={x.name}
                    civ={x.civilization}
                  />
                </div>
              );
            })
          )}
        </div>
        <div className={"row"} style={{ marginTop: 30 }}>
          {props.players.length > 2 &&
            props.players.slice(4).map((x, idx) => {
              return (
                <div className={"col-sm-6"} key={`player-row-2-${idx}`}>
                  <PlayerCard
                    colorId={props.players[1].colorId}
                    name={x.name}
                    civ={x.civilization}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default PlayerCards;
