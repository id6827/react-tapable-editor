import LinkSpan from '../components/link-span';
import {DecoratorPair, DraftNodeDecoratorStrategy, GetEditor} from '../types';
import {ReactNode} from "react";

function LinkSpanDecoratorPlugin(this: any) {
	this.apply = (getEditor: GetEditor) => {
		const {hooks} = getEditor();

		hooks.updateDecorator.tap(
				'LinkSpanDecoratorPlugin',
				(pairs: DecoratorPair[] = []) => {
					const strategy: DraftNodeDecoratorStrategy = (
							contentBlock,
							cb,
							contentState
					) => {
						if (!contentState) return;
						contentBlock.findEntityRanges(character => {
							const entityKey = character.getEntity();

							if (!entityKey) return false;
							const entityType = contentState.getEntity(entityKey).getType();

							return entityType === 'LINK_SPAN';
						}, cb);
					};

					const decoratorPair: DecoratorPair = {
						strategy: strategy,
						component: LinkSpan as unknown as ReactNode,
					}

					return pairs.concat(decoratorPair);
				}
		);
	};
}

export default LinkSpanDecoratorPlugin;
