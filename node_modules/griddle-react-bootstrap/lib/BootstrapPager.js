"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_bootstrap_1 = require('react-bootstrap');
exports.DEFAULT_MAX_BUTTONS = 5;
var BootstrapPager = (function (_super) {
    __extends(BootstrapPager, _super);
    function BootstrapPager() {
        var _this = this;
        _super.apply(this, arguments);
        this.handleSelect = function (eventKey, event) {
            _this.props.setPage(eventKey - 1);
        };
    }
    BootstrapPager.prototype.getFilteredResults = function () {
        return null;
    };
    BootstrapPager.prototype.getTotalResults = function () {
        return null;
    };
    BootstrapPager.prototype.getResutlsPerPage = function () {
        return null;
    };
    BootstrapPager.prototype.render = function () {
        var filteredResults = this.getFilteredResults();
        var totalResults = this.getTotalResults();
        var resultsPerPage = this.getResutlsPerPage();
        var showPageInfo = totalResults && resultsPerPage;
        var info = '';
        if (showPageInfo) {
            var isFiltered = filteredResults !== null && filteredResults < totalResults;
            var subTotal = isFiltered ? filteredResults : totalResults;
            var startRecordIndex = (this.props.currentPage * resultsPerPage) + 1;
            var endRecordIndex = startRecordIndex + resultsPerPage - 1;
            // for last page
            if (subTotal < endRecordIndex) {
                endRecordIndex = subTotal;
            }
            info = isFiltered ? this.props.filteredPageInfoText(startRecordIndex, endRecordIndex, filteredResults, totalResults) : this.props.pageInfoText(startRecordIndex, endRecordIndex, totalResults);
        }
        return (React.createElement("div", {className: 'row'}, React.createElement("div", {className: 'paginate-info'}, React.createElement("label", {className: 'pagination'}, info)), React.createElement("div", {className: 'paginate'}, React.createElement(react_bootstrap_1.Pagination, {prev: true, next: true, first: true, last: true, ellipsis: true, items: this.props.maxPage, maxButtons: this.props.maxButtons, activePage: this.props.currentPage + 1, onSelect: this.handleSelect}))));
    };
    BootstrapPager.defaultProps = {
        maxButtons: exports.DEFAULT_MAX_BUTTONS
    };
    return BootstrapPager;
}(React.Component));
exports.BootstrapPager = BootstrapPager;
//# sourceMappingURL=BootstrapPager.js.map