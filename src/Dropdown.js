import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function Dropdown() {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label"></InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value="test"
        label="Age"
        // onChange={handleChange}
      >
        <MenuItem value={"A"}>A</MenuItem>
        <MenuItem value={"B"}>B</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Dropdown;
