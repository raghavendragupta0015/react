import React, { useEffect, useState } from "react";
import { CircleX } from "lucide-react";

const App = () => {
  const [note, setNote] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  // useEffect(() => {
  //   console.log("task updated", task);
  // }, [task]);

  const handleOnChange = (e) => {
    setNote(e.target.value);
  };

  const handleTextArea = (e) => {
    setDetails(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const newTask = [...task];
    newTask.push({ note, details });
    setTask(newTask);

    setNote("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const updatedTask = task.filter((t, i) => i !== idx);
    // console.log(updatedTask);
    // console.log(idx);
    setTask(updatedTask);
    console.log("note deleted");
  };
  return (
    <>
      <h1 className="flex flex-row justify-center items-center text-3xl text-green-500 font-bold py-3">
        Notes-App
      </h1>
      <div className="h-screen lg:flex">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="p-5 justify-between flex gap-5 lg:w-1/2 w-full form"
        >
          <div className="flex flex-col w-full gap-5">
            <input
              type="text"
              value={note}
              placeholder="enter notes heading"
              onChange={handleOnChange}
              className="border-2 w-full border-black px-3 py-5 rounded-xl font-medium bg-black text-white"
            />
            <textarea
              type="text"
              value={details}
              onChange={handleTextArea}
              placeholder="prepare notes"
              className="border-2 w-full  border-black px-3 py-5 h-40 rounded-xl font-medium bg-black text-white"
            ></textarea>

            <button className="bg-blue-600 active:scale-95 w-full px-3 py-5 font-medium text-white rounded cursor-pointer">
              Add Notes
            </button>
          </div>
        </form>
        <div className="bg-gray-500 lg:w-1/2 w-full h-full overflow-auto lg:my-5 rounded">
          <h1 className="text-xl text-white font-bold py-5 px-5">Your Notes</h1>
          <div className="flex gap-5 flex-wrap px-5 justify-start">
            {task.map((t, idx) => (
              <div
                className="bg-[url('note.png')] bg-cover relative text-xl text-black border-0  border-white h-60 w-52 rounded py-7.5 px-5"
                key={idx}
              >
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="absolute top-2 right-2 cursor-pointer bg-red-400 rounded-full active:scale-90"
                >
                  <CircleX strokeWidth={3} size={27} />
                </button>

                <h3 className="font-bold">{t.note}</h3>
                <p className="text-xs font-bold mt-2 leading-tight">
                  {t.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
