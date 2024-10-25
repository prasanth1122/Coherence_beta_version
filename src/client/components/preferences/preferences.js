import React, { useState } from "react";
import { useNavigation } from "../../store/context/navigationContext";
import PreferenceBar from "./preferenceBar";

export default function Preferences() {
  const {
    handlePreferenceClose,
    handleAddPreference,
    myPreferences,
    handleRemovePreference,
  } = useNavigation();
  const [newPreference, setNewPreference] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setNewPreference(e.target.value);
  };

  const handleAddClick = () => {
    if (newPreference.trim() !== "") {
      handleAddPreference(newPreference); // Add the new preference
      setNewPreference(""); // Clear the input after adding
    }
  };
  const handlePreferenceClick = () => {
    if (myPreferences.length < 3) {
      setErrorMessage("Add minimum 3 preferences");
    } else {
      handlePreferenceClose();
    }
  };

  return (
    <div className="w-full h-full z-20 flex items-center justify-center bg-transparent/[0.5] absolute top-0 left-0">
      <div className="p-4 w-96 min-h-[500px] bg-terinary rounded-xl flex flex-col items-center gap-8">
        <p className="text-2xl">Preferences</p>
        <div className="w-full flex flex-col items-start gap-2">
          <p className="text-lg">Enter Preference</p>
          <div className="w-full flex items-center gap-2">
            <input
              type="text"
              className="w-3/4 h-10 text-lg rounded-xl bg-white shadow-input_shadow p-4"
              placeholder="Add Preferences"
              value={newPreference}
              onChange={handleInputChange}
            />
            <button
              className="px-4 py-2 bg-secondary rounded-xl text-white text-lg hover:shadow-cta_button_shadow"
              onClick={handleAddClick}
            >
              Add
            </button>
          </div>
        </div>

        <div className="p-4 w-full flex-1 rounded-xl bg-white flex items-start gap-2 flex-wrap">
          {myPreferences.map((preference, index) => (
            <PreferenceBar
              key={index}
              preference={preference}
              onRemove={() => handleRemovePreference(preference)} // Pass the handler here
            />
          ))}
        </div>
        <button
          className="px-4 py-2 bg-secondary rounded-xl text-white text-lg hover:shadow-cta_button_shadow"
          onClick={handlePreferenceClick}
        >
          Submit
        </button>
        {errorMessage && (
          <p className="text-lg w-full text-center">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}
