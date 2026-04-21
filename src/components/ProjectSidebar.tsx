export default function ProjectSidebar() {
  return (
    <aside className="bg-stone-900 text-stone-50 px-8 py-16 w-1/3 md:w-72 rounded-r-xl my-8">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button className="bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 px-4 py-2 text-xs md:text-base rounded-xl transition-colors">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
