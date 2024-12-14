import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg mb-4">
          I am a highly skilled CNC machining and CAD/CAM mechanical design professional with a strong background in
          Mechanical Engineering. I am proficient in advanced CNC machining operations and experienced with software
          such as SolidWorks, Inventor, Fusion 360, and Mastercam.
        </p>

        <h2 className="text-3xl font-bold mt-6 mb-2">Skills</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>SolidWorks, Mastercam, AutoCAD, Fusion 360, Inventor</li>
          <li>Blueprint reading and geometric dimensioning and tolerancing (GD&T)</li>
          <li>CNC milling and lathe machine programming</li>
          <li>Precision measurements and quality inspections</li>
        </ul>

        <h2 className="text-3xl font-bold mt-6 mb-2">Experience</h2>
        <p className="font-semibold">CNC Set-up/Programmer - Bhangu Industries (Oct 2021 – May 2022)</p>
        <p className="mb-4">Designed 3D CAD models and produced toolpaths for CNC mill and lathe machines.</p>

        <p className="font-semibold">Welder - Anmol Works (Apr 2017 – Jun 2022)</p>
        <p className="mb-4">Performed MIG, TIG, and stick welding on various metals.</p>

        <h2 className="text-3xl font-bold mt-6 mb-2">Education</h2>
        <p className="mb-4">Post-Graduate Certificate – Advanced CNC Manufacturing, Conestoga College (Jan 2024 – Aug 2024)</p>
        <p>Bachelor of Mechanical Engineering, Baba Farid College of Engineering and Technology (2019 – 2023)</p>

        <h2 className="text-3xl font-bold mt-6 mb-2">Contact</h2>
        <p>Email: <a href="mailto:navjotsingh00300@gmail.com" className="text-blue-600">navjotsingh00300@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/navjot-singh-87a773323/" className="text-blue-600">LinkedIn Profile</a></p>
      </div>
    </div>
  );
};

export default About;
