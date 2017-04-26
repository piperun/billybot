import * as React from 'react';
export interface BootstrapPagerProps extends React.Props<BootstrapPager> {
    maxPage: number;
    currentPage: number;
    maxButtons?: number;
    pageInfoText?: (from: number, to: number, total: number) => string;
    filteredPageInfoText?: (from: number, to: number, filtered: number, total: number) => string;
    setPage: (number) => void;
    next: () => void;
    previous: () => void;
}
export declare const DEFAULT_MAX_BUTTONS: number;
export declare class BootstrapPager extends React.Component<BootstrapPagerProps, any> {
    static defaultProps: {
        maxButtons: number;
    };
    handleSelect: (eventKey: any, event: any) => void;
    getFilteredResults(): number;
    getTotalResults(): number;
    getResutlsPerPage(): number;
    render(): JSX.Element;
}
