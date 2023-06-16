import { List } from "./Components/List";

function App() {
  import React,  {useState} from `react`;
  function App() {
    const [projects, setProjects]=useState<String>([]);
    function handleAddProject() {
      setProjects([...App,`Novo Projeto ${Date.now()}`]);
    }
  return (
  <>
  <Headers>Conteúdo da home</Headers>
  <main>
    <ul>]
      {projects.map(item=><List key={item}>{item}</List>)}
    </ul>
    <button> onClick={handleAddProject}>Adicionar</button>
  </main>
  </>
  )
}
}
export default App
 