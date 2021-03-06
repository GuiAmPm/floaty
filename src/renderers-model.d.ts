import * as StateModel from './state-model';
import * as DropModel from './drop-model';
import { FloatyManager } from './floaty-manager';

export interface ColumnRendererProps<T> {
    floatyManager: FloatyManager<T>;
    floatyRenderers: FloatyRenderers<T>;
    column: StateModel.Column<T>;
}

export interface RowRendererProps<T> {
    floatyManager: FloatyManager<T>;
    floatyRenderers: FloatyRenderers<T>;
    row: StateModel.Row<T>;
}

export interface ColumnSeparatorRendererProps<T> {
    floatyRenderers: FloatyRenderers<T>;
    index: number;
    onMove: (index: number, deltaY: number) => void;
    clamp: (index: number, deltaY: number) => number | null;
}

export interface RowSeparatorRendererProps<T> {
    floatyRenderers: FloatyRenderers<T>;
    index: number;
    onMove: (index: number, deltaX: number) => void;
    clamp: (index: number, deltaX: number) => number | null;
}

export interface ColumnSeparatorHandleRendererProps {
    offset: number;
}

export interface RowSeparatorHandleRendererProps {
    offset: number;
}

export interface TabRendererProps<T> {
    floatyManager: FloatyManager<T>;
    stack: StateModel.Stack<T>;
    stackItemIndex: number;
    stackItem: StateModel.StackItem<T>;
}

export interface TabFillerRendererProps<T> {
    floatyManager: FloatyManager<T>;
    stack: StateModel.Stack<T>;
}

export interface ContentRendererProps<T> {
    floatyManager: FloatyManager<T>;
    stack: StateModel.Stack<T>;
    stackIndex: number;
    stackItem: StateModel.StackItem<T>;
}

export interface StackRendererProps<T> {
    floatyManager: FloatyManager<T>;
    floatyRenderers: FloatyRenderers<T>;
    stack: StateModel.Stack<T>;
}

export interface StackContainerRendererProps<T> {
    floatyManager: FloatyManager<T>;
    stack: StateModel.Stack<T>;
}

export interface StackTabsRendererProps<T> {
    floatyManager: FloatyManager<T>;
    stack: StateModel.Stack<T>;
}

export interface LayoutRendererProps<T> {
    floatyManager: FloatyManager<T>;
    floatyRenderers: FloatyRenderers<T>;
    layout: StateModel.Layout<T>;
}

export interface FloatingTabRendererProps<T> {
    floatyManager: FloatyManager<T>;
    stackItem: StateModel.StackItem<T>;
}

export interface FloatingContentRendererProps<T> {
    floatyManager: FloatyManager<T>;
    stackItem: StateModel.StackItem<T>;
}

export interface FloatingRendererProps<T> {
    floatyManager: FloatyManager<T>;
    floatyRenderers: FloatyRenderers<T>;
    floating: StateModel.StackItem<T>;
}

export interface DropAreaRendererProps<T> {
    floatyManager: FloatyManager<T>;
    dropArea: DropModel.DropArea;
}

export interface FloatyRenderers<T> {
    columnRenderer: React.ComponentType<ColumnRendererProps<T>>;
    columnSeparatorHandleRenderer: React.ComponentType<ColumnSeparatorHandleRendererProps>;
    columnSeparatorRenderer: React.ComponentType<ColumnSeparatorRendererProps<T>>;
    contentRenderer: React.ComponentType<ContentRendererProps<T>>;
    dropAreaRenderer: React.ComponentType<DropAreaRendererProps<T>>;
    floatingContentRenderer: React.ComponentType<FloatingContentRendererProps<T>>;
    floatingRenderer: React.ComponentType<FloatingRendererProps<T>>;
    floatingTabRenderer: React.ComponentType<FloatingTabRendererProps<T>>;
    layoutRenderer: React.ComponentType<LayoutRendererProps<T>>;
    rowRenderer: React.ComponentType<RowRendererProps<T>>;
    rowSeparatorHandleRenderer: React.ComponentType<RowSeparatorHandleRendererProps>;
    rowSeparatorRenderer: React.ComponentType<RowSeparatorRendererProps<T>>;
    stackContainerRenderer: React.ComponentType<StackContainerRendererProps<T>>;
    stackRenderer: React.ComponentType<StackRendererProps<T>>;
    stackTabsRenderer: React.ComponentType<StackTabsRendererProps<T>>;
    tabFillerRenderer: React.ComponentType<TabFillerRendererProps<T>>;
    tabRenderer: React.ComponentType<TabRendererProps<T>>;
}
