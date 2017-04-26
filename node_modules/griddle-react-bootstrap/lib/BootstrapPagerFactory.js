"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BootstrapPager_1 = require('./BootstrapPager');
exports.defaultPagerOptions = {
    maxButtons: BootstrapPager_1.DEFAULT_MAX_BUTTONS,
    pageInfoText: function (from, to, total) { return ("Display " + from + " - " + to + ". (Total: " + total + ")"); },
    filteredPageInfoText: function (from, to, filtered, total) { return ("Display " + from + " - " + to + ". (Total: " + filtered + " / Filtered from " + total + ")"); }
};
function createBootstrapPager(options) {
    if (options === void 0) { options = exports.defaultPagerOptions; }
    return _createBootstrapPager(options, false);
}
exports.createBootstrapPager = createBootstrapPager;
function createBootstrapPagerWithPageInfo(options) {
    if (options === void 0) { options = exports.defaultPagerOptions; }
    return _createBootstrapPager(options, true);
}
exports.createBootstrapPagerWithPageInfo = createBootstrapPagerWithPageInfo;
function _createBootstrapPager(options, showPageInfo) {
    if (options === void 0) { options = exports.defaultPagerOptions; }
    var Pager = (function (_super) {
        __extends(Pager, _super);
        function Pager() {
            _super.apply(this, arguments);
        }
        Pager.bindGriddle = function (griddle) {
            this.griddle = griddle;
        };
        ;
        Pager.getGriddle = function () {
            return this.griddle;
        };
        ;
        Pager.prototype.getFilteredResults = function () {
            return showPageInfo && Pager.griddle && Pager.griddle.state.filteredResults && Pager.griddle.state.filteredResults.length;
        };
        Pager.prototype.getTotalResults = function () {
            return showPageInfo && Pager.griddle && Pager.griddle.props.results && Pager.griddle.props.results.length;
        };
        Pager.prototype.getResutlsPerPage = function () {
            return showPageInfo && Pager.griddle && Pager.griddle.state.resultsPerPage;
        };
        Pager.prototype.render = function () {
            var _this = this;
            if (showPageInfo && Pager.griddle === null) {
                setTimeout(function () {
                    _this.setState({});
                }, 0);
            }
            return _super.prototype.render.call(this);
        };
        Pager.defaultProps = {
            maxButtons: options.maxButtons || exports.defaultPagerOptions.maxButtons,
            pageInfoText: options.pageInfoText || exports.defaultPagerOptions.pageInfoText,
            filteredPageInfoText: options.filteredPageInfoText || exports.defaultPagerOptions.filteredPageInfoText
        };
        Pager.griddle = null;
        return Pager;
    }(BootstrapPager_1.BootstrapPager));
    return Pager;
}
//# sourceMappingURL=BootstrapPagerFactory.js.map