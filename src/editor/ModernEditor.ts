import BlockStyleFnPlugin from '../plugins/BlockStyleFnPlugin';
import SelectionChangePlugin from '../plugins/SelectionChangePlugin';
import CustomStyleMapPlugin from '../plugins/CustomStyleMapPlugin';
import BlockRenderMapPlugin from '../plugins/block-render-map-plugin';
import HandleDroppedFilesPlugin from '../plugins/HandleDroppedFilesPlugin';
import AddImagePlugin from '../plugins/AddImagePlugin';
import DefaultHandleKeyCommandPlugin from '../plugins/DefaultHandleKeyCommandPlugin';

import InlineToolbarPlugin from '../plugins/InlineToolbarPlugin';
import LinkSpanDecoratorPlugin from '../plugins/LinkSpanDecoratorPlugin';
import LinkDecoratorPlugin from '../plugins/LinkDecorator';
import SidebarPlugin from '../plugins/sidebar-plugin';

import StateFilterPlugin from '../plugins/StateFilterPlugin';

import DNDPlugin from '../plugins/dnd-plugin/configNest';

import FinalNewLinePlugin from '../plugins/FinalNewLinePlugin';

import UpdateBlockDepthData from '../plugins/UpdateBlockDepthData';

import createEditor from '../createEditor';

const defaultPlugins = [
	new BlockStyleFnPlugin(),
	new SelectionChangePlugin(),
	new CustomStyleMapPlugin(),
	new BlockRenderMapPlugin(),
	new HandleDroppedFilesPlugin(),
	new AddImagePlugin(),
	new DefaultHandleKeyCommandPlugin(),
	new InlineToolbarPlugin(),
	new LinkSpanDecoratorPlugin(),
	new LinkDecoratorPlugin(),
	new SidebarPlugin(),
	new StateFilterPlugin(),
	new DNDPlugin(),
	new FinalNewLinePlugin(),
	new UpdateBlockDepthData(),
];

const ModernEditor = createEditor(defaultPlugins);

export default ModernEditor;
