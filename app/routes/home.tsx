import Navbar from "../components/Navbar";
import ThreeDViewer from "../components/ThreeDViewer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">My 3D models</h1>

        <section className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Baseplate Model</h2>
            <ThreeDViewer
              modelPath="/models/baseplate.glb"
              altText="Baseplate 3D Model"
              solidWorksPath="/models/baseplate.SLDPRT"
              drawingPath="/models/baseplate_drawing.SLDDRW"
              
            />
          </div>
        </section>

        <br></br>

        <section className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Stairs Model</h2>
            <ThreeDViewer
              modelPath="/models/Stairs/stairs.glb"
              altText="3D Stairs Model"
              solidWorksPath="/models/Stairs/Stairs.SLDPRT"
              drawingPath="/models/Stairs/Stairs.SLDDRW"
              
            />
          </div>
        </section>

        <br></br>

        <section className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Dome Model</h2>
            <ThreeDViewer
              modelPath="/models/Dome/assem5.glb"
              altText="3D Stairs Model"
              solidWorksPath="/models/Stairs/Stairs.SLDPRT"
              drawingPath="/models/Stairs/Stairs.SLDDRW"
              
            />
          </div>
        </section>

        <br></br>

        <section className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Dome Model</h2>
            <ThreeDViewer
              modelPath="/models/Roller/roller.glb"
              altText="3D Stairs Model"
              solidWorksPath="/models/Stairs/Roller.SLDPRT"
              drawingPath="/models/Stairs/Stairs.SLDDRW"
              
            />
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
