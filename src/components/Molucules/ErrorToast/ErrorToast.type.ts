import { CustomError } from "../../../services/api";

export type ErrorToastProps = {
    error: unknown | CustomError;
}