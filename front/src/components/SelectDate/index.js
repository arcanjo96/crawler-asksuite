import { TextField } from '@material-ui/core';

function SelectDate({ label, setCheckIn }) {
    return (
        <TextField
            id="date"
            label={label}
            type="date"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(e) => setCheckIn(e.target.value)}
        />
    );
}

export default SelectDate;