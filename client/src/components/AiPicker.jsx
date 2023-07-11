import React from "react";
import CustomButton from "./CustomButton";
const AiPicker = ({ prompt, setPrompt, generateImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Generate with AI"
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="ai-picker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generateImg ? (
          <CustomButton
            type="outline"
            title="Generate with AI"
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AiPicker;
