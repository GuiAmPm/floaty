import * as React from 'react';
import * as RenderersModel from '../renderers-model';

export class RowRenderer extends React.PureComponent<RenderersModel.RowRendererProps, never> {
    private container: HTMLDivElement | null = null;

    public render() {
        const gridTemplateColumns: string[] = [];
        const elements: React.ReactNode[] = [];

        for (let i = 0; i < this.props.row.items.length; i++) {
            if (i > 0) {
                gridTemplateColumns.push('6px');
                elements.push(
                    <this.props.floatyRenderers.rowSeparatorRenderer
                        key={`${this.props.row.items[i].key}-seperator`}
                        index={i - 1}
                        onMove={this.handleMove}
                        clamp={this.clamp}
                    />
                );
            }
            gridTemplateColumns.push(`minmax(0, ${this.props.row.items[i].fraction}fr)`);
            elements.push(
                <this.props.floatyRenderers.layoutRenderer
                    key={this.props.row.items[i].key}
                    floatyRenderers={this.props.floatyRenderers}
                    floatyManager={this.props.floatyManager}
                    layout={this.props.row.items[i].child}
                />
            );
        }

        return <div ref={this.handleRef} style={{ display: 'grid', gridTemplateColumns: gridTemplateColumns.join(' '), width: '100%', height: '100%' }}>
            {elements}
        </div>;
    }

    private handleRef = (ref: HTMLDivElement | null) => {
        this.container = ref;
    }

    private clamp = (index: number, deltaX: number) => {
        if (this.container) {
            const widthA = this.container.children[index * 2].getBoundingClientRect().width;
            const widthB = this.container.children[index * 2 + 2].getBoundingClientRect().width;
            return Math.min(widthB, Math.max(-widthA, deltaX));
        }
        return Number.NaN;
    }

    private handleMove = (index: number, deltaX: number) => {
        if (this.container) {
            const widthA = this.container.children[index * 2].getBoundingClientRect().width;
            const widthS = this.container.children[index * 2 + 1].getBoundingClientRect().width;
            const widthB = this.container.children[index * 2 + 2].getBoundingClientRect().width;
            const widthTotal = widthA + widthS + widthB;
            const fractionA = widthA / widthTotal;
            const fractionS = widthS / widthTotal;
            const fractionB = widthB / widthTotal;
            const fractionTotal = fractionA + fractionS + fractionB;
            const deltaF = fractionTotal * deltaX / widthTotal;
            const fractionOriginal = this.props.row.items[index].fraction + this.props.row.items[index + 1].fraction;
            const normalizer = fractionOriginal / (fractionA + fractionB);

            this.props.floatyManager.onRowUpdateFractions(
                this.props.row,
                index,
                normalizer * (fractionA + deltaF),
                index + 1,
                normalizer * (fractionB - deltaF)
            );
        }
    }
}