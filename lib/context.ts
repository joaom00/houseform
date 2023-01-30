import {createContext, MutableRefObject} from "react";
import type { FieldProps } from "./types";

export interface FormContext<T = any> {
    formFieldsRef: MutableRefObject<FieldProps<T>[]>;
    recomputeErrors: () => void;
    recomputeIsDirty: () => void;
    recomputeIsTouched: () => void;
    errors: string[];
    submit: () => Promise<boolean>;
    getFieldValue: (val: string) => FieldProps<T> | undefined;
    onChangeListenerRefs: MutableRefObject<Record<string, (() => void)[]>>;
    onBlurListenerRefs: MutableRefObject<Record<string, (() => void)[]>>;
}

/* c8 ignore start */
export const initialContext = {
  formFieldsRef: { current: [] },
  recomputeErrors: () => {
    return undefined;
  },
  recomputeIsDirty: () => {
    return undefined;
  },
  recomputeIsTouched: () => {
    return undefined;
  },
  errors: [],
  submit: async () => {
    return true;
  },
  getFieldValue: (val) => {
    return undefined;
  },
  onChangeListenerRefs: { current: {} },
  onBlurListenerRefs: { current: {} },
} as FormContext;
/* c8 ignore stop */

export const FormContext = createContext(initialContext);
