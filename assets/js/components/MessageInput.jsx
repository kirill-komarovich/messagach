import React from 'react';
import { TextField } from '@material-ui/core'

const MessageInput = ({ value, onChange}) => {
  const handleChange = React.useCallback(({ target: { value: newMessage }}) => {
    onChange(newMessage);
  }, [onChange]);

  return (
    <TextField
      fullWidth
      multiline
      label="Write a message..."
      rowsMax="15"
      value={value}
      onChange={handleChange}
      margin="normal"
      variant="outlined"
    />
  );
};

export default MessageInput;
