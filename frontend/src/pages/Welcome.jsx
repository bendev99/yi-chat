import Navbar from "../components/Navbar";

const Welcome = () => {
  return (
    <div>
      <Navbar />
      <div className="py-2 px-44">
        <div className="flex gap-14 mb-5">
          <img
            src="/texto.svg"
            alt="img texto"
            className="w-1/2 items-center justify-center text-center h-96"
          ></img>
          <div className="w-1/2 items-center justify-center mt-20">
            <h1 className="font-bold text-4xl uppercase">Texto</h1>
            <p className="font-mono">
              Trouver et entamer la discussion avec vos amis ! Envoi des photos,
              fichier audio, message vocal, ...
            </p>
          </div>
        </div>

        <div className="flex gap-20">
          <div className="w-1/2 items-center justify-center mt-20">
            <h1 className="font-bold text-4xl uppercase">Appel video</h1>
            <p className="font-mono">
              Trouver et discuter librement avec vos amis comme s'ils étaient à
              vos côtés. Riez ensemble, faites des blagues, ...
            </p>
          </div>
          <img
            src="/video_call.svg"
            alt="img appel video"
            className="w-1/2 items-center justify-center text-center h-96"
          ></img>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Welcome;
