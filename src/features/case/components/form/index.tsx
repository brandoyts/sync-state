"use client";

import { ChangeEvent, useEffect } from "react";
import {
  onChangeDescription,
  onChangeTitle,
  onReset,
  onSubmitCase,
} from "../../slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

function CaseForm() {
  const caseState = useAppSelector((state) => state.case);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      onReset();
    };
  });

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeTitle(event.target.value));
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeDescription(event.target.value));
    onReset();
  };

  const handleSubmitCase = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(onSubmitCase());
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmitCase}>
      <section className="flex flex-col gap-1">
        <label htmlFor="title" className="text-gray-500">
          Title:
        </label>
        <input
          className="bg-gray-200 p-3 text-red outline-none"
          type="text"
          placeholder="Title"
          id="title"
          value={caseState.title}
          onChange={handleTitleChange}
        />
      </section>
      <section className="flex flex-col gap-1">
        <label htmlFor="description" className="text-gray-500">
          Description:
        </label>
        <input
          className="bg-gray-200 p-3 text-red outline-none"
          type="text"
          placeholder="Description"
          id="description"
          value={caseState.description}
          onChange={handleDescriptionChange}
        />
      </section>
      <button type="submit" className="bg-indigo-500 text-white p-3">
        Submit
      </button>
    </form>
  );
}

export default CaseForm;
