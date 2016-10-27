# My Meteor Boilerplate
_A simple yet efficient(for **ME** at least :D) Meteor Boilerplate using **Blaze**, **Materialize** and **Flow Router**._

## Packages
* **Usefull/Basics**
  * [juliancwirko:s-alert](http://s-alert.meteorapp.com/)
  * [settinghead:auto-nprogress](https://atmospherejs.com/settinghead/auto-nprogress)
  * [reactive-dict](https://atmospherejs.com/meteor/reactive-dict)
  * [raix:handlebar-helpers](https://atmospherejs.com/raix/handlebar-helpers)
* **UI**
  * [materialize:materialize](https://atmospherejs.com/materialize/materialize)
  * [aldeed:template-extension](https://atmospherejs.com/aldeed/template-extension)
  * [fortawesome:fontawesome](https://github.com/FortAwesome/Font-Awesome)
  
* **Collections**
  * [aldeed:simple-schema](https://atmospherejs.com/aldeed/simple-schema)
  * [aldeed:collection2](https://atmospherejs.com/aldeed/collection2)
  * [dburles:collection-helpers](https://atmospherejs.com/dburles/collection-helpers)
  * [matb33:collection-hooks](https://atmospherejs.com/matb33/collection-hooks)
  * [reywood:publish-composite](https://atmospherejs.com/reywood/publish-composite)
  * [tmeasday:publish-counts](https://atmospherejs.com/tmeasday/publish-counts)
  
* **Methods**
  * [mdg:validated-method](https://atmospherejs.com/mdg/validated-method)
  * [doctorpangloss:method-hooks](https://atmospherejs.com/doctorpangloss/method-hooks)
  * [tunifight:loggedin-mixin](https://atmospherejs.com/tunifight/loggedin-mixin)
  * [rlivingston:simple-schema-mixin](https://atmospherejs.com/rlivingston/simple-schema-mixin)
  
* **Forms**
  * [aldeed:autoform](https://atmospherejs.com/aldeed/autoform)
  * [shinn:autoform-file](https://atmospherejs.com/shinn/autoform-file)
  
* **Routing**
  * [useraccounts:flow-routing](https://atmospherejs.com/useraccounts/flow-routing)
  * [kadira:flow-router](https://atmospherejs.com/kadira/flow-router)
  * [kadira:blaze-layout](https://atmospherejs.com/kadira/blaze-layout)
  * [arillo:flow-router-helpers](https://atmospherejs.com/arillo/flow-router-helpers)
  * [zimme:active-route](https://atmospherejs.com/zimme/active-route)
  * [tomwasd:flow-router-seo](https://atmospherejs.com/tomwasd/flow-router-seo)
  
* **Accounts/Services**
  * [useraccounts:unstyled](https://atmospherejs.com/useraccounts/unstyled)
  * [accounts-base](https://atmospherejs.com/meteor/accounts-base)
  * [accounts-password](https://atmospherejs.com/meteor/accounts-password)
  * [alanning:roles](https://atmospherejs.com/alanning/roles)
  * [softwarerero:accounts-t9n](https://atmospherejs.com/softwarerero/accounts-t9n)
  * [service-configuration](https://atmospherejs.com/meteor/service-configuration)
  
* **Production**
  * [ddp-rate-limiter](https://atmospherejs.com/meteor/ddp-rate-limiter)

## Folder Structure
    Main Folder                                           
    ├── client                                            
    │   ├── main.js                                       \\ import client files
    |   └── main.less                                     \\ import client styles
    ├── imports                                           
    │   ├── api                                           
    |   |   └── users                                     \\ ie.: user api
    |   |       ├── server                                \\ server files from user api
    |   |       |   └── publications.js                   \\ publications from user api
    |   |       ├── config.js                             \\ in this specific case: Accounts configuration
    |   |       ├── methods.js                            \\ users api methods
    |   |       └── users.js                              \\ users api init
    |   ├── startup
    |   |   ├── client                                    
    |   |   |   ├── routes                                
    |   |   |   |   ├── private                           \\ private routes files
    |   |   |   |   ├── private.js                        \\ private routes imports and main private route declaration
    |   |   |   |   ├── public.js                         \\ public routes
    |   |   |   |   └── security.js                       \\ security configurations
    |   |   |   ├── config.js                             \\ client startup configurations
    |   |   |   ├── index.js                              \\ imports from startup client
    |   |   |   ├── routes.js                             \\ import routes
    |   |   |   └── template-helpers.js                   \\ common template helpers
    |   |   ├── config                                    \\\\ any necessary startup configuration should go here
    |   |   |   ├── accounts-config.js                    \\ startup accounts configuration
    |   |   |   ├── accounts-t9n.js                       \\ startup accounts internationalization configuration
    |   |   |   ├── at-config.js                          \\ startup accounts template configuration
    |   |   |   └── index.js                              \\ import configurations
    |   |   ├── forms                                     \\\\ any form content should go here
    |   |   |   └── private                               \\ private forms
    |   |   ├── server
    |   |   |   ├── index.js                              \\ import from startup server
    |   |   |   └── register-api.js                       \\ import api files(ie.: methods, publications)
    |   |   ├── services
    |   |   |   └── notifier.service.js                   \\ service to make notifications easier to use
    |   |   └── utils
    |   |       └── validated-method-mixins.js            \\ method mixins validations (ie.: check schema, isAdmin, isServer)
    |   └── ui
    |       ├── stylesheets
    |       |   ├── base.less                             \\ base stylesheet
    |       |   └── main.less                             \\ import all stylsheets
    |       └── views
    |           ├── private                               \\ private route layouts
    |           |   ├── index.html
    |           |   └── index.js
    |           ├── home.html
    |           ├── home.js
    |           ├── layout.html                           \\ main container view
    |           ├── layout.js                             \\ import the html view(same name)
    |           ├── login.html
    |           ├── login.js
    |           ├── not-found.html
    |           └── not-found.js
    └── server
        └── main.js                                       \\ import server files
