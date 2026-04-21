import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import type { IProject } from "../App";

export default function NewProject({
  onCreateNewProject,
}: {
  onCreateNewProject: (newProject: IProject) => void;
}) {
  const titleRef = useRef<HTMLInputElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const onSave = () => {
    if (!titleRef.current || !descriptionRef.current || !dueDateRef.current)
      return;

    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    const dueDate = dueDateRef.current?.value;

    onCreateNewProject({
      title,
      description,
      dueDate,
    });
  };

  return (
    <div className="w-140 mt-16">
      <menu className="flex items-center justify-end gap-4 my-8">
        <li>
          <Button variant="ghost">Cancel</Button>
        </li>
        <li>
          <Button onClick={onSave}>Save</Button>
        </li>
      </menu>
      <Input ref={titleRef} label="Title" />
      <Input ref={descriptionRef} label="Description" isTextarea />
      <Input type="date" ref={dueDateRef} label="Due Date" />
    </div>
  );
}
