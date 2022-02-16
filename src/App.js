import { useState } from "react";
import "./App.css";

const imatges = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

function App() {
  const [imggalery, setImgAmpliar] = useState("imgPetit");
  const [fotoclikada, setFotoClikada] = useState(null);

  const open = (foto) => {
    setFotoClikada(foto);
    imggalery === "imgPetit"
      ? setImgAmpliar("imgGran")
      : setImgAmpliar("imgPetit");
  };

  return (
    <>
      <div className="content">
        <div>
          {imatges.map((foto) => (
            <img
              alt={foto}
              onClick={() => open(foto)}
              className={fotoclikada === foto ? imggalery : "imgPetit"}
              src={`img/${foto}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
