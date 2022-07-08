import {ReactNode, RefObject} from 'react';
import {BlockProps, ContentNodeState} from '.';
import {ContentBlockNode} from './draft-js';

export interface LinkProps {
	entityKey: string;
	contentState: ContentNodeState;
	children?: ReactNode;
}

export interface LinkSpanProps {
	children?: ReactNode;
}

export interface SidebarProps {
	forwardRef: RefObject<HTMLDivElement>;
}

export enum Label {
	H1 = 'fas fa-heading',
	Blockquote = 'fas fa-quote-left',
	UL = 'fas fa-list-ul',
	OL = 'fas fa-list-ol',
	'Code Block' = 'fas fa-code',
}

// ts-hint: https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript
export interface StyleControlButtonProps {
	label: keyof typeof Label;
	active: boolean;
	onToggle: (style: object) => void;
	style: object;
}

export interface ImageProps {
	block: ContentBlockNode;
	contentState: ContentNodeState;
	blockProps: BlockProps;
}
