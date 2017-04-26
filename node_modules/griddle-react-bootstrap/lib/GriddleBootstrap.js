"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require('react');
var BootstrapPagerFactory_1 = require('./BootstrapPagerFactory');
var Griddle = require('griddle-react');
var GriddleBootstrap = (function (_super) {
    __extends(GriddleBootstrap, _super);
    function GriddleBootstrap(props) {
        _super.call(this, props);
        this.state = {
            pagerClass: null
        };
        this.state.pagerClass = BootstrapPagerFactory_1.createBootstrapPagerWithPageInfo(props.pagerOptions);
    }
    GriddleBootstrap.prototype.componentWillReceiveProps = function (nextProps) {
        var pagerOptions = this.props.pagerOptions;
        var nextPagerOptions = nextProps.pagerOptions;
        if (pagerOptions.filteredPageInfoText !== nextPagerOptions.filteredPageInfoText ||
            pagerOptions.maxButtons !== nextPagerOptions.maxButtons ||
            pagerOptions.pageInfoText !== nextPagerOptions.pageInfoText) {
            var nextPagerClass = BootstrapPagerFactory_1.createBootstrapPagerWithPageInfo(nextProps.pagerOptions);
            if (this.state.pagerClass) {
                nextPagerClass.bindGriddle(this.state.pagerClass.getGriddle());
            }
            this.setState({
                pagerClass: nextPagerClass
            });
        }
    };
    GriddleBootstrap.prototype.render = function () {
        var tableClassName = 'table ' + this.props.tableClassName;
        if (this.props.bordered) {
            tableClassName += ' table-bordered';
        }
        if (this.props.condensed) {
            tableClassName += ' table-condensed';
        }
        if (this.props.hover) {
            tableClassName += ' table-hover';
        }
        if (this.props.striped) {
            tableClassName += ' table-striped';
        }
        return (React.createElement(Griddle, __assign({}, this.props, {ref: function (ref) {
            if (ref) {
                ref.props.customPagerComponent.bindGriddle(ref);
            }
        }, tableClassName: tableClassName, useGriddleStyles: false, useCustomPagerComponent: true, customPagerComponent: this.state.pagerClass})));
    };
    GriddleBootstrap.defaultProps = {
        tableClassName: '',
        settingsToggleClassName: 'btn btn-default',
        bordered: false,
        condensed: false,
        hover: false,
        striped: false,
        pagerOptions: BootstrapPagerFactory_1.defaultPagerOptions
    };
    return GriddleBootstrap;
}(React.Component));
exports.GriddleBootstrap = GriddleBootstrap;
//# sourceMappingURL=GriddleBootstrap.js.map