import Button from "./Button";
import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-140 mt-16">
      <menu className="flex items-center justify-end gap-4 my-8">
        <li>
          <Button variant="ghost">Cancel</Button>
        </li>
        <li>
          <Button>Save</Button>
        </li>
      </menu>
      <Input label="Title" />
      <Input label="Description" isTextarea />
      <Input label="Due Date" />
    </div>
  );
}
