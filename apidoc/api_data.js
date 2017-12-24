define({ "api": [
  {
    "type": "put",
    "url": "/controller/module:serialNumber,address,classCode,action",
    "title": "Message from the Block Module of state change in the monitored block.",
    "name": "BlockStateChanged",
    "group": "Block",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serialNumber",
            "description": "<p>The controller's serial number (chip ID).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0-8"
            ],
            "optional": false,
            "field": "address",
            "description": "<p>The sending module's address.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "classCode",
            "description": "<p>The sending module's classification.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "action",
            "description": "<p>The action requested.  0=Get,1=Add,2=Update,3=Delete</p>"
          }
        ]
      }
    },
    "description": "<p>Sent by a controller's BlockModule indicating the state of the block it's monitoring has changed.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"action\": \"2\"\n    \"messageUri\": \"/controller/module\",\n    \"class\": \"8\"\n    \"address\": \"0\"\n    \"blocks\": [\n                {\n                    \"pin\": 1\n                    \"pinState\": 0\n                },\n                {\n                    \"pin\": 4\n                    \"pinState\": 1\n                },\n              ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "LCSServer/BlockHandler.h",
    "groupTitle": "Block"
  },
  {
    "type": "get",
    "url": "/controller/connect/:serialNumber,version",
    "title": "Controller Connect Message",
    "name": "ControllerConnect",
    "group": "Controller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serialNumber",
            "description": "<p>The controller's serial number (chip ID).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>The controller's firmware version number.</p>"
          }
        ]
      }
    },
    "description": "<p>Sent from a controller once a web socket connection is made.</p>",
    "version": "0.0.0",
    "filename": "LCSServer/ControllerManager.h",
    "groupTitle": "Controller"
  },
  {
    "type": "get",
    "url": "/controller/multiConfig/:serialNumber",
    "title": "Get configuration information for a specific MultiModule controller.",
    "name": "MultiModuleConfig",
    "group": "Controller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serialNumber",
            "description": "<p>The controller's serial number (chip ID).</p>"
          }
        ]
      }
    },
    "description": "<p>Returns the coniguration information for a specific MultiModule controller.  This includes the controller classification and a list of modules, the module's classification and the module's address.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"messageUri\": \"/controllerConfig\",\n    \"controllerClass\": \"7\"\n    \"modules\" : [\n                  {\n                     \"address\": \"0\",\n                     \"class\": \"1\"\n                  },\n                  {\n                      \"address\": \"1\",\n                      \"class\": \"1\"\n                  },\n                ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "LCSServer/ControllerManager.h",
    "groupTitle": "Controller"
  },
  {
    "type": "get",
    "url": "/api/notification/controller",
    "title": "Controller status notification.",
    "name": "ControllerStatusChange",
    "group": "Notifications",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serialNumber",
            "description": "<p>The controller's serial number (chip ID).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>The current state of the controller  1=Unknown, 2=Offline, 3=Online, 4=Restarting, 5=Connected.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pingLength",
            "description": "<p>The total time (in milliseconds) for the last ping to make its round trip from the server to the controller.</p>"
          }
        ]
      }
    },
    "description": "<p>Notification message sent when a controller's status changes.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"messageUri\": \"/api/notification/controller\",\n    \"serialNumber\": \"123456\"\n    \"status\": \"3\"\n    \"pingLength\": \"62\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "LCSServer/ControllerManager.h",
    "groupTitle": "Notifications"
  },
  {
    "type": "get",
    "url": "/panel_list/",
    "title": "Get a list of Panels",
    "name": "PanelList",
    "group": "Panels",
    "description": "<p>Returns a list of defined panels</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "panels",
            "description": "<p>List of panels.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "panels.address",
            "description": "<p>Index of the module.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "panels.panelID",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "panels.panelName",
            "description": "<p>Descriptive name of the panel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "panels.serialNumber",
            "description": "<p>Controller's serial number.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[\n   {\n       \"address\": \"0\",\n       \"panelID\": \"2\",\n       \"panelName\": \"CA Panel1\",\n       \"serialNumber\": \"637866\"\n   },\n   {\n       \"address\": \"0\",\n       \"panelID\": \"1\",\n       \"panelName\": \"Gaskill Mine\",\n       \"serialNumber\": \"1551385\"\n   },\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/panel_list",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIHandler.h",
    "groupTitle": "Panels"
  },
  {
    "type": "get",
    "url": "/panel_routes/:panelID",
    "title": "Get a list of Routes assigned to a Panel",
    "name": "PanelRoutes",
    "group": "Panels",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "panelID",
            "description": "<p>The panel's ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Returns a list of routes (buttons) assigned to a panel</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "routes",
            "description": "<p>List of routes assigned to the panel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "routes.isActive",
            "description": "<p>indicates if the route is active.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "routes.routeDescription",
            "description": "<p>Descriptive name of the route</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "routes.routeID",
            "description": "<p>The route's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "routes.routeName",
            "description": "<p>Route's name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[\n   {\n       \"isActive\": \"false\",\n       \"routeDescription\": \"Gaskill Mine Route 1\",\n       \"routeID\": \"1\",\n       \"routeName\": \"GM 1\"\n   },\n   {\n       \"isActive\": \"true\",\n       \"routeDescription\": \"Gaskill Mine Route 2\",\n       \"routeID\": \"2\",\n       \"routeName\": \"GM 2\"\n   },\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/panel_routes?panelID=1",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIHandler.h",
    "groupTitle": "Panels"
  },
  {
    "type": "get",
    "url": "/activate_route/:routeID",
    "title": "Activate Route",
    "name": "ActivateRoute",
    "group": "Routes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "routeID",
            "description": "<p>The route's ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Activates the desired route.  When activated, all turnouts are set to the directing as defined in the route configuration.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/activate_route?routeID=1",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIHandler.h",
    "groupTitle": "Routes"
  },
  {
    "type": "get",
    "url": "/activate_turnout/:deviceID,turnoutState",
    "title": "Activate Turnout",
    "name": "ActivateTurnout",
    "group": "Turnouts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deviceID",
            "description": "<p>The turnout's Device ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "3"
            ],
            "optional": false,
            "field": "turnoutState",
            "description": "<p>The desired state to set the turnout to.</p>"
          }
        ]
      }
    },
    "description": "<p>Sets the turnout to the desired state (direction) 1 = Normal 2 = Diverging</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/activate_turnout?deviceID=7&turnoutState=3",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIHandler.h",
    "groupTitle": "Turnouts"
  }
] });
