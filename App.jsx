import "./App.css";
import { useState } from "react";

function DescriptionList({ edad, ocupacion, descripcion, creador, año_lanzamiento, tempradas }) {
  return (
    <ul>
      {edad && <li><strong>Edad:</strong> {edad}</li>}
      {ocupacion && <li><strong>Ocupación:</strong> {ocupacion}</li>}
      {creador && <li><strong>Creador:</strong> {creador}</li>}
      {año_lanzamiento && <li><strong>Año de lanzamiento:</strong>{año_lanzamiento}</li>}
      {tempradas && <li><strong>Temporadas:</strong> {tempradas}</li>}
      {descripcion && <li><strong>Descripción:</strong> {descripcion}</li>}
    </ul>
  );
}

function Profile({ urlBj, nomBj, numBj , edad, ocupacion, descripcion, creador, año_lanzamiento , tempradas }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`card-container ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card">
        <div className="front">
          <img src={urlBj} alt={nomBj} className="imagen" />
        </div>
        <div className="back">
          <p>{numBj}</p>
          <h2>{nomBj}</h2>
          <DescriptionList
            edad={edad}
            ocupacion={ocupacion}
            descripcion={descripcion}
            creador={creador}
            año_lanzamiento={año_lanzamiento}
            tempradas={tempradas}
          />
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <>
      <h1>Bojack Horseman</h1>
      <div className="grande">
        <Profile
          urlBj={
            "https://m.media-amazon.com/images/M/MV5BNWE5MWM0ZTQtMTk4ZS00ZjFiLWIwZTMtMjJmOWIwNDczMzUxXkEyXkFqcGc@._V1_.jpg"
          }
          nomBj={"Bojack Horseman"}
          numBj={"0000"}
          creador={"Raphael Bob-Waksberg"}
          año_lanzamiento={"2014"}
          tempradas={"6"}
          descripcion={"BoJack Horseman es una serie animada para adultos creada por Raphael Bob-Waksberg. La historia gira en torno a BoJack Horseman, un caballo antropomórfico que fue una estrella de televisión en los años 90 gracias a su papel en la comedia familiar Horsin' Around. Aunque su fama ha disminuido, BoJack intenta recuperar su relevancia en Hollywood mientras lidia con sus problemas personales, como la depresión, el alcoholismo y las relaciones tóxicas. La serie combina humor oscuro, sátira y drama, explorando temas profundos como la salud mental, el vacío existencial y las consecuencias de las decisiones personales. Ambientada en un mundo donde humanos y animales antropomórficos coexisten, la serie es una crítica mordaz a la industria del entretenimiento y a la sociedad moderna."}
        />
      </div >
      <div className="contenedor-principal">
        <div className="contenedor">
          <Profile
            urlBj={"https://w0.peakpx.com/wallpaper/578/214/HD-wallpaper-bojack-horseman.jpg"}
            nomBj={"Bojack Horseman"}
            numBj={"0001"}
            edad={"50+ años"}
            ocupacion={"Actor, exestrella de televisión"}
            descripcion={"Cínico, autodestructivo, pero con momentos de vulnerabilidad y bondad."}
          />
        </div>
        <div className="contenedor">
          <Profile
            urlBj={"https://pm1.aminoapps.com/7554/7ed264ebad46f7d42ef5a64b7b3ea5d856159d9fr1-400-400v2_00.jpg"}
            nomBj={"Diane Nguyen"}
            numBj={"0002"}
            edad={"30+ años"}
            ocupacion={"Escritora, periodista, activista"}
            descripcion={"Idealista, crítica, pero también insegura y propensa a la ansiedad."}
          />
        </div>

        <div className="contenedor">
          <Profile
            urlBj={"https://preview.redd.it/snloe7w7lhlb1.jpg?auto=webp&s=c7109d97310ad501e8275b40390fc6d46c738c33"}
            nomBj={"Princess Carolyn"}
            numBj={"0003"}
            edad={"40+ años"}
            ocupacion={"Agente de talentos, productora"}
            descripcion={"Trabajadora, ambiciosa, pero emocionalmente reservada."}
          />
        </div>
        <div className="contenedor">
          <Profile
            urlBj={
              "https://preview.redd.it/is-mr-peanutbutter-as-miserable-as-bojack-it-seems-that-his-v0-1q160usvmrp81.jpg?auto=webp&s=1e3088e0df351d4d5bf461136e2615719cdefbec"
            }
            nomBj={"Mr. Peanutbutter"}
            numBj={"0004"}
            edad={"50+ años"}
            ocupacion={"Actor, empresario"}
            descripcion={"Extrovertido, entusiasta, pero a veces superficial."}
          />
        </div>
        <div className="contenedor">
          <Profile
            urlBj={"https://i.pinimg.com/736x/88/40/fa/8840fa92a8de0a165d011ca00043fd0a.jpg"}
            nomBj={"Sarah Lynn"}
            numBj={"0005"}
            edad={"30+ años (fallece en la serie)"}
            ocupacion={"Actriz, cantante"}
            descripcion={"Extrovertida, caótica, pero profundamente infeliz."}
          />
        </div>
        <div className="contenedor">
          <Profile
            urlBj={"https://pm1.aminoapps.com/6599/e60a3836de449e4ff60c712bfc7360a91f4c1c06_00.jpg"}
            nomBj={"Beatrice Horseman"}
            numBj={"0006"}
            edad={" 70+ años (fallece en la serie)"}
            ocupacion={"Ama de casa (anteriormente)"}
            descripcion={" Fría, sarcástica, pero profundamente herida."}
          />
        </div>
        <div className="contenedor">
          <Profile
            urlBj={"https://i.redd.it/76reg1de7mx91.jpg"}
            nomBj={"Hollyhock"}
            numBj={"0007"}
            edad={"18+ años"}
            ocupacion={"Estudiante"}
            descripcion={"Dulce, ingenua, pero con una fuerte determinación."}
          />
        </div>
        <div className="contenedor">
          <Profile
            urlBj={"https://i.pinimg.com/736x/dc/54/7a/dc547a745901a2dcf0f6317f6768743f.jpg"}
            nomBj={"Todd Chavez"}
            numBj={"0008"}
            edad={"20+ años"}
            ocupacion={"Desempleado, emprendedor, músico"}
            descripcion={"Divertido, leal, y con una visión única de la vida."}
          />
        </div>
        <div className="contenedor">
          <Profile
            urlBj={"https://preview.redd.it/9ee991opzw051.jpg?auto=webp&s=16188de51bdaa5170439e9b923eafb60c32f648f"}
            nomBj={"Herb Kazzaz"}
            numBj={"0009"}
            edad={"50+ años (fallece en la serie)"}
            ocupacion={"Director de televisión, escritor"}
            descripcion={"Ingenioso, amable, pero con un profundo resentimiento hacia BoJack."}
          />
        </div>
        <div className="contenedor">
          <Profile
            urlBj={"https://i.pinimg.com/736x/8e/75/3c/8e753c56dddbfd4c62c2d88d60963745.jpg"}
            nomBj={"Charlotte Moore"}
            numBj={"0010"}
            edad={"50+ años"}
            ocupacion={"Ama de casa, madre"}
            descripcion={"Cálida, protectora, pero firme en sus límites."}
          />
        </div>
      </div>
    </>
  );
}