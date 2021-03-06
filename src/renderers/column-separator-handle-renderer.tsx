import * as React from 'react';
import * as RenderersModel from '../renderers-model';

export class ColumnSeparatorHandleRenderer extends React.PureComponent<RenderersModel.ColumnSeparatorHandleRendererProps, never> {
    public render() {
        return <div style={{ position: 'relative', width: '100%', height: 6 }}>
            <div style={{
                backgroundColor: 'black',
                position: 'absolute',
                cursor: 'pointer',
                top: this.props.offset,
                left: 0,
                width: '100%',
                height: '100%'
            }} />
        </div>;
    }
}
