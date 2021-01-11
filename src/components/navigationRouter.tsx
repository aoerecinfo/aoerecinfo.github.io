import React from "react";
import { Switch, Route } from "react-router-dom";
import { GameStates } from "../data/common/jsonStructure";
import Economy from "../pages/economy/economy";
import Home from "../pages/home/home";
import Military from "../pages/military/military";
import Society from "../pages/society/society";
import Techonology from "../pages/technology/technology";
import Map from "../pages/map/map";

interface Props {
  gameStates?: GameStates;
}

function NavigationRouter(props: Props) {
  return (
    <Switch>
      {/* <Route
        exact
        path={"/"}
        render={() => <Home gameStates={props.gameStates} />}
      /> */}
      <Route
        exact
        path={"/"}
        render={() => <Military gameStates={props.gameStates} />}
      />
      <Route
        exact
        path={"/economy"}
        render={() => <Economy gameStates={props.gameStates} />}
      />
      <Route
        exact
        path={"/technology"}
        render={() => <Techonology gameStates={props.gameStates} />}
      />
      <Route
        exact
        path={"/society"}
        render={() => <Society gameStates={props.gameStates} />}
      />
      <Route
        exact
        path={"/map"}
        render={() => <Map gameStates={props.gameStates} />}
      />
    </Switch>
  );
}

export default NavigationRouter;
