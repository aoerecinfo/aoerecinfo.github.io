import React from "react";
import "./playerCard.scss";
import aztecs from "../../assets/civIcons/aztecs.png";
import berbers from "../../assets/civIcons/berbers.png";
import britons from "../../assets/civIcons/britons.png";
import bulgarians from "../../assets/civIcons/bulgarians.png";
import burmese from "../../assets/civIcons/burmese.png";
import byzantines from "../../assets/civIcons/byzantines.png";
import chinese from "../../assets/civIcons/chinese.png";
import cumans from "../../assets/civIcons/cumans.png";
import ethiopians from "../../assets/civIcons/ethiopians.png";
import franks from "../../assets/civIcons/franks.png";
import goths from "../../assets/civIcons/goths.png";
import huns from "../../assets/civIcons/huns.png";
import incas from "../../assets/civIcons/incas.png";
import indians from "../../assets/civIcons/indians.png";
import italians from "../../assets/civIcons/italians.png";
import japanese from "../../assets/civIcons/japanese.png";
import khmer from "../../assets/civIcons/khmer.png";
import koreans from "../../assets/civIcons/koreans.png";
import lithuanians from "../../assets/civIcons/lithuanians.png";
import magyars from "../../assets/civIcons/magyars.png";
import malay from "../../assets/civIcons/malay.png";
import malians from "../../assets/civIcons/malians.png";
import mayans from "../../assets/civIcons/mayans.png";
import mongols from "../../assets/civIcons/mongols.png";
import persians from "../../assets/civIcons/persians.png";
import portuguese from "../../assets/civIcons/portuguese.png";
import saracens from "../../assets/civIcons/saracens.png";
import slavs from "../../assets/civIcons/slavs.png";
import spanish from "../../assets/civIcons/spanish.png";
import tatars from "../../assets/civIcons/tatars.png";
import teutons from "../../assets/civIcons/teutons.png";
import turks from "../../assets/civIcons/turks.png";
import vietnamese from "../../assets/civIcons/vietnamese.png";
import vikings from "../../assets/civIcons/vikings.png";
import { getColor } from "../../data/common/helper";

interface Props {
  name: string;
  civ: string;
  rightAlign?: boolean;
  colorId: number;
}

function PlayerCard(props: Props) {
  const getImg = (civ: string) => {
    switch (civ.toLowerCase()) {
      case "aztecs":
        return aztecs;
      case "berbers":
        return berbers;
      case "britons":
        return britons;
      case "bulgarians":
        return bulgarians;
      case "burmese":
        return burmese;
      case "byzantines":
        return byzantines;
      case "chinese":
        return chinese;
      case "cumans":
        return cumans;
      case "ethiopians":
        return ethiopians;
      case "franks":
        return franks;
      case "goths":
        return goths;
      case "huns":
        return huns;
      case "incas":
        return incas;
      case "indians":
        return indians;
      case "italians":
        return italians;
      case "japanese":
        return japanese;
      case "khmer":
        return khmer;
      case "koreans":
        return koreans;
      case "lithuanians":
        return lithuanians;
      case "magyars":
        return magyars;
      case "malay":
        return malay;
      case "malians":
        return malians;
      case "mayans":
        return mayans;
      case "mongols":
        return mongols;
      case "persians":
        return persians;
      case "portuguese":
        return portuguese;
      case "saracens":
        return saracens;
      case "slavs":
        return slavs;
      case "spanish":
        return spanish;
      case "tatars":
        return tatars;
      case "teutons":
        return teutons;
      case "turks":
        return turks;
      case "vietnamese":
        return vietnamese;
      case "vikings":
        return vikings;
      default:
        return aztecs;
    }
  };

  return (
    <div className="playerCard">
      <div
        className="body"
        style={{ backgroundColor: getColor(props.colorId) }}
      >
        <div
          className={
            props.rightAlign === true
              ? "civImgContainerRight"
              : "civImgContainer"
          }
        >
          <img src={getImg(props.civ)} className={"civImg"} />
        </div>
        <span
          className={
            props.rightAlign === true ? "playerTextRight" : "playerText"
          }
        >
          {props.name}
        </span>
      </div>
    </div>
  );
}

export default PlayerCard;
