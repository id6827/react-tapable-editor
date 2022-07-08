import {Action} from 'sabar';
import {OnMoveHandleContext} from '../../../../types';

const removeIntermediateCtxValue = (ctx: object, actions: Action) => {
	const context = ctx as OnMoveHandleContext;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	delete context.action;
	actions.next();
};

export default removeIntermediateCtxValue;
