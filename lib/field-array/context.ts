import { createContext } from "react";
import { FieldArrayInstance } from "./types";

/* c8 ignore start */
export const initialFieldArrayContext = {
  value: [],
  setValue: () => {},
  props: {
    name: "",
  },
  errors: [],
  setErrors: () => {},
  isValid: false,
  isDirty: false,
  isTouched: false,
  _normalizedDotName: "",
  add: () => {},
  remove: () => {},
  insert: () => {},
  move: () => {},
  swap: () => {},
  replace: () => {},
} as FieldArrayInstance;
/* c8 ignore stop */

export const FieldArrayContext = createContext(initialFieldArrayContext);
