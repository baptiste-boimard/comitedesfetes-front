// ACTION for UTILITIES

/** Controlled fields */
export const HANDLE_FIELD_CHANGE = 'HANDLE_FIELD_CHANGE';
export const handleFieldChange = (value, name) => ({
  type: HANDLE_FIELD_CHANGE,
  value: value,
  name: name,
});