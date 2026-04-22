import React, { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import { useProject } from "../contexts/ProjectProvider";
import Modal, { type ModalRefType } from "./Modal";

export default function NewProjectTask() {
  const {
    projectData: { selectedProjectId },
    onAddNewProjectTask,
  } = useProject();

  const dialogRef = useRef<ModalRefType>(null);

  const [name, setName] = React.useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onAdd = () => {
    if (!selectedProjectId) return;

    if (name.trim() === "") {
      dialogRef.current?.open();
      return;
    }

    const newTask = {
      id: Math.random(),
      name,
      projectId: selectedProjectId,
    };

    onAddNewProjectTask(newTask);

    setName("");
  };

  return (
    <>
      <Modal ref={dialogRef}>
        <h2 className="mb-4 font-bold uppercase md:text-xl text-stone-700">
          Invalid Input
        </h2>
        <p className="font-semibold text-stone-500">
          Oops... looks like you forget to enter a name for task.
        </p>
      </Modal>
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <Input value={name} onChange={onChangeName} placeholder="Name" />
        </div>
        <Button onClick={onAdd}>Add</Button>
      </div>
    </>
  );
}
