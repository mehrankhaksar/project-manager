import Button from "./Button";

export default function ProjectSidebar({
  onStartCreateNewProject,
}: {
  onStartCreateNewProject: () => void;
}) {
  return (
    <aside className="bg-stone-900 text-stone-50 px-8 py-16 w-1/3 md:w-72 rounded-r-xl my-8">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={onStartCreateNewProject} variant="secondary">
        + Add Project
      </Button>
      <ul></ul>
    </aside>
  );
}
