import React, {FC, ReactNode} from 'react';
import './styles.css';

const CodeWrapper: FC<{ children?: ReactNode }> = props => {
	const {children} = props;

	return <div className="code-mirror">{children}</div>;
};

export default CodeWrapper;
