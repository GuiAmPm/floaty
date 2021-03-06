import classNames from 'classnames';
import * as React from 'react';
import { ContentRendererProps, defaultRenderers, Floaty, FloatyRenderers, State } from '../../src';
import { Fruit } from './fruit';
import './style.css';

export class CustomStyle extends React.PureComponent<{}, State<string>> {
    public state: State<string> = {
        layout: {
            type: 'stack',
            active: 0,
            items: [
                { key: 'a1', item: 'Apple' },
                { key: 'a2', item: 'Apple' },
                { key: 'b1', item: 'Banana' },
                { key: 'b2', item: 'Banana' },
                { key: 'c1', item: 'Cherries' },
                { key: 'c2', item: 'Cherries' }
            ]
        },
        floating: null
    };

    private floatyRenderers: FloatyRenderers<string> = {
        ...defaultRenderers,
        columnSeparatorHandleRenderer: React.memo((props) =>
            <div className="example02-resize-separator-column">
                <div className={classNames('example02-resize-handle', 'example02-resize-handle-column')} style={{ top: props.offset, left: 0 }} />
            </div>
        ),
        contentRenderer:
            // tslint:disable-next-line:max-classes-per-file
            class ContentRenderer extends React.PureComponent<ContentRendererProps<string>, never> {
                private fruitElement: HTMLDivElement | null = null;

                private handleDown = (event: MouseEvent | TouchEvent) => {
                    if (!(event instanceof MouseEvent) || event.button === 0) {
                        this.props.floatyManager.startFloat(this.props.stackItem, { event });
                    }
                }

                private handleFruitRef = (element: HTMLDivElement | null) => {
                    if (this.fruitElement) {
                        this.fruitElement.removeEventListener('mousedown', this.handleDown);
                        this.fruitElement.removeEventListener('touchstart', this.handleDown);
                    }
                    if (element) {
                        element.addEventListener('mousedown', this.handleDown);
                        element.addEventListener('touchstart', this.handleDown);
                    }
                    this.fruitElement = element;
                }

                public render() {
                    return <div className="example02-content">
                        <div className="example02-fruit" ref={this.handleFruitRef}>
                            <Fruit fruit={this.props.stackItem.item} />
                        </div>
                    </div>;
                }
            },
        floatingContentRenderer: React.memo((props) =>
            <React.Fragment>
                <div>You've got: <Fruit fruit={props.stackItem.item} /></div>
                <div>Drop it somewhere!</div>
            </React.Fragment>
        ),
        floatingTabRenderer: () => null,
        dropAreaRenderer: React.memo((props) =>
            <div className="example02-drop-area" style={{ top: props.dropArea.top, left: props.dropArea.left, width: props.dropArea.width, height: props.dropArea.height }} />
        ),
        rowSeparatorHandleRenderer: React.memo((props) =>
            <div className="example02-resize-separator-row">
                <div className={classNames('example02-resize-handle', 'example02-resize-handle-row')} style={{ top: 0, left: props.offset }} />
            </div>
        ),
        stackContainerRenderer: React.memo((props) =>
            <div className="example02-stack-container">{props.children}</div>
        ),
        tabRenderer: React.memo((props) =>
            <div className="example02-tab">
                <button className={classNames('example02-button', { active: props.stack.active === props.stackItemIndex })} onClick={() => props.floatyManager.activateStackItem(props.stackItem)}>
                    {props.stackItem.item}
                </button>
            </div>
        ),
        tabFillerRenderer: React.memo((props) =>
            <div className="example02-tab" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="example02-button" onClick={() => props.floatyManager.closeTab(props.stack.items[props.stack.active])}>
                    Close
                </button>
            </div>
        )
    };

    public render() {
        return <div className="example02-container">
            {this.state.layout === null && this.state.floating === null
                ? <div className="example02-content">
                    <div className="example02-bomb">
                        <Fruit fruit="Bomb" />
                    </div>
                </div>
                : <Floaty
                    renderers={this.floatyRenderers}
                    state={this.state}
                    onStateChange={this.handleStateChange}
                />
            }
        </div>;
    }

    private handleStateChange = (state: State<string>) => this.setState(state);
}
