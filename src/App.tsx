import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";

export default function App() {
  return (
    <main className="h-screen flex gap-8">
      <ProjectSidebar />
      <NewProject />
    </main>
  );
}
