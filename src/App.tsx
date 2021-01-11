import React from "react";
import NavMenu from "./components/navMenu";
import NavigationRouter from "./components/navigationRouter";
import { GameStates } from "./data/common/jsonStructure";

function App() {
  const dropZone = React.createRef<HTMLDivElement>();
  const fileExt = ".recinfo";
  const [onDragOver, setOnDragOver] = React.useState<boolean>(false);
  const [gameStates, setGameStates] = React.useState<GameStates>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const isRecInfo = (fileName: string) => {
    if (fileName) {
      const dotIdx = fileName.lastIndexOf(".");
      if (dotIdx !== -1) {
        return fileName.substring(dotIdx).toLocaleLowerCase() === fileExt;
      }
    }
    return undefined;
  };

  React.useEffect(() => {
    if (dropZone && dropZone.current) {
      dropZone.current.addEventListener("dragover", function (e) {
        if (e && e.dataTransfer) {
          e.stopPropagation();
          e.preventDefault();
          e.dataTransfer.dropEffect = "copy";
          if (!onDragOver) {
            setOnDragOver(true);
          }
        }
      });

      dropZone.current.addEventListener("dragleave", function (e) {
        setOnDragOver(false);
      });

      // Get file data on drop
      dropZone.current.addEventListener("drop", function (e) {
        setOnDragOver(false);
        setLoading(true);
        if (
          e &&
          e.dataTransfer &&
          e.dataTransfer.files &&
          e.dataTransfer.files[0]
        ) {
          e.stopPropagation();
          e.preventDefault();

          var file = e.dataTransfer.files[0];
          if (isRecInfo(file.name)) {
            var reader = new FileReader();

            reader.onload = function (ev2) {
              if (ev2 && ev2.target && ev2.target.result) {
                const str = "data:application/octet-stream;base64,";
                const base64 = ev2.target.result.slice(str.length);
                const content = atob(base64 as string).replaceAll('\\"', '"');
                const test = JSON.parse(content) as GameStates;
                setGameStates(test);
                setLoading(false);
              }
            };

            reader.readAsDataURL(file);
          }
        }
        setLoading(false);
      });
    }
  }, []);

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <NavMenu fileLoaded={gameStates !== undefined} />
        </div>
        <div
          style={
            onDragOver
              ? { border: "1px dashed #ccc" }
              : { border: "1px solid #ffffff00" }
          }
          ref={dropZone}
          className="main"
        >
          <div className="content px-4">
            {gameStates === undefined ? (
              <div className="centerContent">
                <h5>Drag and drop a .recinfo file here to begin</h5>
              </div>
            ) : (
              <NavigationRouter gameStates={gameStates} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
