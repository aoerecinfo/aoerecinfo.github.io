import React from "react";
import PlayerCards from "../../components/playerCards/playerCards";
import { GameStates } from "../../data/common/jsonStructure";
import { getPlayerCardData } from "../../data/common/helper";

interface Props {
  gameStates?: GameStates;
}

function Home(props: Props) {
  return (
    <div className="home">
      <PlayerCards players={getPlayerCardData(props?.gameStates)} />
    </div>
  );
}

export default Home;
