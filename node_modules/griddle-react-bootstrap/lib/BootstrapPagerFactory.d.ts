export interface PagerOptions {
    maxButtons?: number;
    pageInfoText?: (from: number, to: number, total: number) => string;
    filteredPageInfoText?: (from: number, to: number, filtered: number, total: number) => string;
}
export declare const defaultPagerOptions: PagerOptions;
export declare function createBootstrapPager(options?: PagerOptions): any;
export declare function createBootstrapPagerWithPageInfo(options?: PagerOptions): any;
