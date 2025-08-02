const GenderChoose = ({ onCheckChange, selectedGender }) => {
  return (
    <div className="flex items-center mx-3 gap-15">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "homme" ? "selected" : ""
          }`}
        >
          <input
            type="checkbox"
            className="checkbox border-gray-500"
            checked={selectedGender === "homme"}
            onChange={() => onCheckChange("homme")}
          />
          <span className="label-text">Homme</span>
        </label>
      </div>

      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "femme" ? "selected" : ""
          }`}
        >
          <input
            type="checkbox"
            className="checkbox border-gray-500"
            checked={selectedGender === "femme"}
            onChange={() => onCheckChange("femme")}
          />
          <span className="label-text">Femme</span>
        </label>
      </div>
    </div>
  );
};

export default GenderChoose;
