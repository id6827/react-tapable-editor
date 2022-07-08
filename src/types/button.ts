import {ReactNode} from 'react';

export interface WithActionProps {
	onClick: () => void;
}

export interface WithFillColorProps {
	active: boolean;
}

export interface ButtonProps {
	children?: ReactNode;
	fill: string;
}

export type IWithActionProps<T> = {
	[P in keyof T]: T[P];
};
