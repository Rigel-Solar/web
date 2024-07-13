export interface modalActions<T extends object> {
	data?: T;
	onClose?(): void;
	onUpdateModalData?(): void;
	onDelete?(): void;
	canEdit?: boolean;
}
