# Important notice

NestedReact is the [BackboneJS](http://backbonejs.org) compatibility layer for [React-Type-R](https://volicon.github.io/React-MVx/) - modern React MVVM application framework. It will be maintained as long as Verizon/Volicon systems will depend in the legacy technologies - BackboneJS Views and jQuery.

If you don't need to reuse BackboneJS Views in your React application - please, switch to [React-Type-R](https://volicon.github.io/React-MVx/) instead.

NestedReact documentation won't be updated. Use React-MVx docs as your primary source of docs.

# Features

Feature list consists of all the features of React-MVx v2.x, plus this:

- Gradual transition procedure for backbone applications ([Backbone Migration Guide](/docs/05_Migration_from_Backbone.md)):
    - Complete interoperation with existing Backbone Views allowing you to reuse existing code and avoid upfront application rewrite.
    - Any type of application refactoring strategy is possible - top-to-bottom, bottom-to-top, and random parts at the middle.  
    - Support for Backbone events and jQuery accessors in React components simplifies View refactoring. 

## [Documentation](https://volicon.github.io/React-MVx/)

Please, use React-MVx documentation as a primary source of documentation and examples.

## Installation and Requirements    
	
    npm install --save-dev nestedreact nestedtypes underscore jquery react react-dom prop-types

Module extends React namespace (without modifying original React), and its safe to use it as a replacement for `react`.

    import React from 'nestedreact'
    
If you're migrating from backbone-based frameworks such as `ChaplinJS` or `Marionette`,
you need to do following things to make convergence layer work properly:

- Make sure that frameworks includes `nestedtypes` instead of `backbone`.
- On application start, tell `nestedreact` to use proper base class for the View.

	React.useView( Chaplin.View );
	