/* eslint-disable @typescript-eslint/no-explicit-any */
import { modalActions } from "./modal";

export interface addNewProps<T extends object = any, ResponseData = T>
	extends modalActions<T> {
	onSuccess?(data?: ResponseData): void;
	onDeleteSuccess?(data?: ResponseData): void;
	onSetEditedData?(val: boolean): void;
}
