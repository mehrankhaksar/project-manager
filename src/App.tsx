import ProjectSidebar from "./components/ProjectSidebar";
import ProjectProvider from "./contexts/ProjectProvider";
import AppContent from "./components/AppContent";

export default function App() {
  return (
    <ProjectProvider>
      <main className="h-screen flex gap-8 overflow-hidden">
        <ProjectSidebar />
        <AppContent />
      </main>
    </ProjectProvider>
  );
}
