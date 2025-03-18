import { env } from "./env/env";

function App() {
  return (
    <>
      <h1>env</h1>
      <p>MODE: {env.MODE}</p>
      <p>VITE_SAMPLE_TITLE: {env.VITE_SAMPLE_TITLE}</p>
      <p>VITE_SAMPLE_URL: {env.VITE_SAMPLE_URL}</p>
      <p>{env.VITE_GENERATE_SOURCE_MAP && "source map is generated"}</p>
    </>
  );
}

export default App;
