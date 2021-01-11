export interface GameStates {
  gameStates: GameState[];
  version: string;
}

export interface GameState {
  time: number;
  map: Map;
  playerMain: PlayerMain;
}

export interface PlayerMain {
  players: Player[];
}

export interface Resources {
  age: number;
  buildingsRazed: number;
  deaths: number;
  food: number;
  gold: number;
  kills: number;
  mapExplored: number;
  militaryCount: number;
  population: number;
  populationUntilHoused: number;
  relicCount: number;
  relicGold: number;
  stone: number;
  totalCastles: number;
  totalFood: number;
  totalGold: number;
  totalResearchCount: number;
  totalStone: number;
  totalWood: number;
  villagerCount: number;
  wood: number;
}

export interface Player {
  civilization: string;
  colorId: number;
  gameObjectSummary: GameObjectSummary;
  name: string;
  objectList: ObjectList;
  resources: Resources;
}

export interface GameObjectSummary {
  unitSummary: UnitSummary;
  buildingSummary: BuildingSummary;
}

export interface UnitSummary {
  arbalesterCount: number;
  archerCount: number;
  batteringRamCount: number;
  battleElephantCount: number;
  bombardCannonCount: number;
  camelRiderCount: number;
  cannonGalleonCount: number;
  cappedRamCount: number;
  caravelCount: number;
  cavalierCount: number;
  cavalryArcherCount: number;
  championCount: number;
  condottieroCount: number;
  crossbowmanCount: number;
  demolitionRaftCount: number;
  demolitionShipCount: number;
  eagleScoutCount: number;
  eagleWarriorCount: number;
  eliteBattleElephantCount: number;
  eliteCannonGalleonCount: number;
  eliteCaravelCount: number;
  eliteEagleWarriorCount: number;
  eliteGenitourCount: number;
  eliteLongboatCount: number;
  eliteSkirmisherCount: number;
  eliteSteppeLancerCount: number;
  eliteTurtleShipCount: number;
  farmerCount: number;
  fastFireShipCount: number;
  fireGalleyCount: number;
  fireShipCount: number;
  fishingShipCount: number;
  foragerCount: number;
  galleonCount: number;
  galleyCount: number;
  genitourCount: number;
  goldMinerCount: number;
  halberdierCount: number;
  handCannoneerCount: number;
  heavyCamelRiderCount: number;
  heavyCavalryArcherCount: number;
  heavyDemolitionShipCount: number;
  heavyScorpionCount: number;
  hunterCount: number;
  hussarCount: number;
  idleTradeCartCount: number;
  idleVills: number;
  imperialCamelRiderCount: number;
  imperialSkirmisherCount: number;
  knightCount: number;
  lightCavalryCount: number;
  longSwordsmanCount: number;
  longboatCount: number;
  lumberjackCount: number;
  manAtArmsCount: number;
  mangonelCount: number;
  militiaCount: number;
  missionaryCount: number;
  monkCount: number;
  onagerCount: number;
  paladinCount: number;
  petardCount: number;
  pikemanCount: number;
  scorpionCount: number;
  scoutCavalryCount: number;
  shepherdCount: number;
  siegeOnagerCount: number;
  siegeRamCount: number;
  siegeTowerCount: number;
  skirmisherCount: number;
  slingerCount: number;
  spearmanCount: number;
  steppeLancerCount: number;
  stoneMinerCount: number;
  tradeCartCount: number;
  tradeCogCount: number;
  transportShipCount: number;
  trebuchetCount: number;
  turtleShipCount: number;
  twoHandedSwordsmanCount: number;
  uniqueUnitCount: number;
  warGalleyCount: number;
}

export interface BuildingSummary {
  archeryRangeCount: number;
  barracksCount: number;
  blacksmithCount: number;
  bombardTowerCount: number;
  castleCount: number;
  dockCount: number;
  farmCount: number;
  feitoriaCount: number;
  fishTrapCount: number;
  fortifiedWallCount: number;
  gateCount: number;
  guardTowerCount: number;
  houseCount: number;
  keepCount: number;
  krepostCount: number;
  lumberCampCount: number;
  marketCount: number;
  millCount: number;
  miningCampCount: number;
  monasteryCount: number;
  outpostCount: number;
  palisadeGateCount: number;
  palisadeWallCount: number;
  siegeWorkshopCount: number;
  stableCount: number;
  stoneWallCount: number;
  townCenterCount: number;
  universityCount: number;
  watchTowerCount: number;
  wonderCount: number;
}

export interface MapObjectsSummary {
  treeCount: number;
  goldMineCount: number;
  stoneMineCount: number;
  fishCount: number;
  berryCount: number;
  sheepCount: number;
  deerCount: number;
  boarCount: number;

  woodLeft: number;
  goldLeft: number;
  stoneLeft: number;
  fishLeft: number;
  berryLeft: number;
  sheepFoodLeft: number;
  deerFoodLeft: number;
  boarFoodLeft: number;
}

export interface ObjectList {
  count: number;
  objects: Object[];
}

export interface Object {
  n: string;
  p: P;
  r: number;
}

export interface P {
  h: number;
  w: number;
  x: number;
  y: number;
}

export interface Map {
  mapObjects: MapObject[];
  mapObjectsSummary: MapObjectsSummary;
}

export interface MapObject {
  n: string;
  p: P;
  r: number;
  x: number;
  y: number;
}
