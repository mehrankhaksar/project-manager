import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-140 mt-16">
      <menu className="flex items-center justify-end gap-4 my-8">
        <li>
          <button className="text-stone-800 hover:text-stone-950 transition-colors">
            Cancel
          </button>
        </li>
        <li>
          <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md transition-colors">
            Save
          </button>
        </li>
      </menu>
      <Input label="Title" />
      <Input label="Description" isTextarea />
      <Input label="Due Date" />
    </div>
  );
}
