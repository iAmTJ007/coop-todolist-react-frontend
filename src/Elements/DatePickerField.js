import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerField({ value, onChange }) {
  return (
    <div>
      <label>Date:</label>
      <br />
      <DatePicker
        selected={value}
        onChange={(date) => onChange(date)}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select due date"
      />
    </div>
  );
}

export default DatePickerField;