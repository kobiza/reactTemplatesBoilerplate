'use strict';

require('./app.scss');

import React from 'react';
import template from './app.rt';

module.exports = React.createClass({
    displayName: 'App',
    render: template
});
