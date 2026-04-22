import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal, { type ModalRefType } from "./Modal";
import { useProject } from "../contexts/ProjectProvider";

export default function NewProject() {
  const { onCreateNewProject, onCancelCreateNewProject } = useProject();

  const dialogRef = useRef<ModalRefType>(null);
  
  const titleRef = useRef<HTMLInputElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const onSave = () => {
    if (!titleRef.current || !descriptionRef.current || !dueDateRef.current)
      return;

    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    const dueDate = dueDateRef.current?.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      dialogRef.current?.open();
      return;
    }

    const newProject = {
      id: Math.random(),
      title,
      description,
      dueDate,
    };

    onCreateNewProject(newProject);
  };

  return (
    <>
      <Modal ref={dialogRef}>
        <h2 className="mb-4 font-bold uppercase md:text-xl text-stone-700">
          Invalid Input
        </h2>
        <p className="font-semibold text-stone-500">
          Oops... looks like you forget to enter a value.
        </p>
        <p className="font-semibold text-stone-500 my-2">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-140 mt-16">
        <menu className="flex items-center justify-end gap-4 my-8">
          <li>
            <Button variant="ghost" onClick={onCancelCreateNewProject}>
              Cancel
            </Button>
          </li>
          <li>
            <Button onClick={onSave}>Save</Button>
          </li>
        </menu>
        <Input ref={titleRef} label="Title" />
        <Input ref={descriptionRef} label="Description" isTextarea />
        <Input type="date" ref={dueDateRef} label="Due Date" />
      </div>
    </>
  );
}
