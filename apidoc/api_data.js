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
    "url": "/controller/config:serialNumber",
    "title": "Download Controller Configuration",
    "name": "ControllerConfiguration",
    "group": "Controller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serialNumber",
            "description": "<p>The controller's Serial number.</p>"
          }
        ]
      }
    },
    "description": "<p>Download the controller's configuration which includes the controller's ID, list of controllers to notify and a list of connected modules.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "config",
            "description": "<p>Controller configuration.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "config.controllerClass",
            "description": "<p>Controller's classification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "config.controllerID",
            "description": "<p>Controller's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "controllersToNotify",
            "description": "<p>List of controllers that need to be notified when device status changes occur.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "controllersToNotify.controllerID",
            "description": "<p>Controller's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "modules",
            "description": "<p>List of connected modules.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "modules.address",
            "description": "<p>Module's address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "modules.class",
            "description": "<p>Module's classification.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"controllerClass\": \"7\",\n    \"controllerID\": \"34\",\n    \"controllersToNotify\": [{\n            \"controllerID\": \"35\"\n        }\n    ],\n    \"modules\": [{\n            \"address\": \"0\",\n            \"class\": \"1\"\n        }, {\n            \"address\": \"1\",\n            \"class\": \"1\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/controller/config?serialNumber=1546165",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIController.h",
    "groupTitle": "Controller"
  },
  {
    "type": "get",
    "url": "/api/send_controller_reset_config:serialNumber",
    "title": "Reset Controller's configuration",
    "name": "ControllerConfigurationReset",
    "group": "Controller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serialNumber",
            "description": "<p>(optional) The controller's serial number.  If 0 or excluded, all controllers will delete their configuration data.</p>"
          }
        ]
      }
    },
    "description": "<p>Sends a SYS_RESET_CONFIG broadcast UDP message instructing the controller(s) to delete all configuration data.  Once the data is deleted, the controller will restart.  Upon restarting, the controller re-downloads all configuration data.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/send_controller_reset_config?serialNumber=1546165",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIController.h",
    "groupTitle": "Controller"
  },
  {
    "type": "get",
    "url": "/api/send_controller_reset_notification_list:serialNumber",
    "title": "Reset Controller's controllers-to-notify list",
    "name": "ControllerConfigurationReset",
    "group": "Controller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serialNumber",
            "description": "<p>(optional)  The controller's serial number.  If 0 or excluded, all controllers will delete their controllers-to-notify list.</p>"
          }
        ]
      }
    },
    "description": "<p>Sends a SYS_RESET_NOTIFICATION_LIST broadcast UDP message instructing the controller(s) to delete controllers-to-notify list.  The controller responds by sending a /controller/notification_list to the application server.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/send_controller_reset_notification_list?serialNumber=1546165",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIController.h",
    "groupTitle": "Controller"
  },
  {
    "type": "get",
    "url": "/api/controller_list:controllerID",
    "title": "Get controller list",
    "name": "ControllerList",
    "group": "Controller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "controllerID",
            "description": "<p>(optional) The controller's ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Returns the list of LCS controllers.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "controllerClass",
            "description": "<p>Controller's Class.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "controllerDescription",
            "description": "<p>Controller's Description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "controllerID",
            "description": "<p>Controller's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "controllerName",
            "description": "<p>Controller's Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "serialNumber",
            "description": "<p>Controller's Serial NUmber.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Controller's current status. 0 = Unknown, 1 = Offline, 2 = Online, 3 = Restarting.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>Controller's current firmware version.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n        \"controllerClass\": \"7\",\n        \"controllerDescription\": \"\",\n        \"controllerID\": \"34\",\n        \"controllerName\": \"CA Aux Panel\",\n        \"serialNumber\": \"877478\",\n        \"status\": 0,\n        \"version\": \"0.0.0\"\n    }, {\n        \"controllerClass\": \"7\",\n        \"controllerDescription\": \"\",\n        \"controllerID\": \"33\",\n        \"controllerName\": \"CA East End Multi\",\n        \"serialNumber\": \"1593808\",\n        \"status\": 2,\n        \"version\": \"0.0.0\"\n    }, {\n        \"controllerClass\": \"7\",\n        \"controllerDescription\": \"\",\n        \"controllerID\": \"31\",\n        \"controllerName\": \"CA Panel 1\",\n        \"serialNumber\": \"877670\",\n        \"status\": 2,\n        \"version\": \"0.0.0\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/controller_list",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIController.h",
    "groupTitle": "Controller"
  },
  {
    "type": "get",
    "url": "/controller/module/config:serialNumber,address",
    "title": "Download module configuration",
    "name": "ControllerModuleConfiguration",
    "group": "Controller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serialNumber",
            "description": "<p>Controller's serial number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0-7"
            ],
            "optional": false,
            "field": "address",
            "description": "<p>module's address.</p>"
          }
        ]
      }
    },
    "description": "<p>Download the modules configuration which consists of a list of connected devices.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "devices",
            "description": "<p>List of connected devices.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "devices.c",
            "description": "<p>Device's classification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "devices.id",
            "description": "<p>Device's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "devices.p",
            "description": "<p>Port/pin to which the device is connected.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"devices\": [{\n            \"c\": \"1\",\n            \"id\": \"3\",\n            \"p\": \"0\"\n        }, {\n            \"c\": \"1\",\n            \"id\": \"4\",\n            \"p\": \"1\"\n        }\n    ],\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/controller/module/config?serialNumber=1546165&address=0",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIController.h",
    "groupTitle": "Controller"
  },
  {
    "type": "get",
    "url": "/api/controller_module_list:controllerID",
    "title": "Get controller's module list",
    "name": "ControllerModuleList",
    "group": "Controller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "controllerID",
            "description": "<p>(optional) The controller's ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Returns the list of LCS controller modules for a specific controller.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address",
            "description": "<p>Module's address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "controllerID",
            "description": "<p>Controller's ID the module is assigned to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "controllerModuleID",
            "description": "<p>Module's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "disable",
            "description": "<p>enable/disable the module.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "moduleClass",
            "description": "<p>Controller's serial number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "moduleName",
            "description": "<p>Module's name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n        \"address\": \"0\",\n        \"controllerID\": \"34\",\n        \"controllerModuleID\": \"19\",\n        \"disable\": \"0\",\n        \"moduleClass\": \"8\",\n        \"moduleName\": \"CA Aux Panel Input\"\n    }, {\n        \"address\": \"1\",\n        \"controllerID\": \"34\",\n        \"controllerModuleID\": \"20\",\n        \"disable\": \"0\",\n        \"moduleClass\": \"9\",\n        \"moduleName\": \"CA Aux Panel Output 1\"\n    }, {\n        \"address\": \"2\",\n        \"controllerID\": \"34\",\n        \"controllerModuleID\": \"23\",\n        \"disable\": \"0\",\n        \"moduleClass\": \"9\",\n        \"moduleName\": \"CA Aux Panel Output 2\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/controller_module_list?controllerID=34",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIController.h",
    "groupTitle": "Controller"
  },
  {
    "type": "get",
    "url": "/api/send_controller_reset:serialNumber",
    "title": "Reset Controller",
    "name": "ControllerReset",
    "group": "Controller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serialNumber",
            "description": "<p>(optional) The controller's serial number.  If 0 or excluded, all controllers will restart.</p>"
          }
        ]
      }
    },
    "description": "<p>Sends a SYS_REBOOT_CONTROLLER broadcast UDP message instructing the controller(s) to restart.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/send_controller_reset?serialNumber=1546165",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIController.h",
    "groupTitle": "Controller"
  },
  {
    "type": "get",
    "url": "/controller/notification_list:serialNumber",
    "title": "Download controllers-to-notify list",
    "name": "ControllersToNotify",
    "group": "Controller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serialNumber",
            "description": "<p>The controller's serial number.</p>"
          }
        ]
      }
    },
    "description": "<p>Downloads the controller's controllers-to-notify list</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "controllersToNotify",
            "description": "<p>List of controllers that need to be notified when device status changes occur.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "controllersToNotify.controllerID",
            "description": "<p>Controller's ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n        \"controllerID\": \"35\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/controller/notification_list?serialNumber=1546165",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIController.h",
    "groupTitle": "Controller"
  },
  {
    "type": "get",
    "url": "/controller/device/config:deviceID",
    "title": "Download device configuration",
    "name": "DeviceConfiguration",
    "group": "Controller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deviceID",
            "description": "<p>The Device's ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Download the devices configuration.  The returned data is device type dependent, however, it follows a similar format for each device type.</p>",
    "examples": [
      {
        "title": "Example usage.  This example returns the configuration for a Turnout Device:",
        "content": "http://localhost:8080/controller/device/config?deviceID=1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"INPUTPIN\": \"1\",\n    \"MOTORPIN\": \"1\",\n    \"deviceClass\": \"1\",\n    \"routes\": [{\n            \"routeID\": \"1\",\n            \"turnoutState\": \"1\"\n        }, {\n            \"routeID\": \"2\",\n            \"turnoutState\": \"1\"\n        }, {\n            \"routeID\": \"3\",\n            \"turnoutState\": \"3\"\n        }, {\n            \"routeID\": \"4\",\n            \"turnoutState\": \"3\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "LCSServer/APIController.h",
    "groupTitle": "Controller"
  },
  {
    "type": "post",
    "url": "/api/entity/[EntityName]",
    "title": "Add a new Entity",
    "name": "AddEntity",
    "group": "Entity",
    "description": "<p>Adds a new record into the [EntityName] table.  The entity is sent as a JSON document.</p>",
    "examples": [
      {
        "title": "This example adds a new \"route\".  Note:  Exclude the ID field as this field will be auto-generated.  The newly generated id is part of the returned JSON payload. :",
        "content": "http://localhost:8080/api/entity/route\n\n    body:\n    {\n      \"routeName\": \"New Route\"\n      \"routeDescription\": \"New Route Description\"\n    }",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n        \"id\": \"15\",\n        \"routeDescription\": \"New Route\",\n        \"routeName\": \"New Route Description\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "LCSServer/APIEntity.h",
    "groupTitle": "Entity"
  },
  {
    "type": "delete",
    "url": "/api/entity/[EntityName]",
    "title": "Delete an Entity",
    "name": "DeleteEntity",
    "group": "Entity",
    "description": "<p>Deletes a specific record in the [EntityName] table.  The entity is sent as a JSON document.</p>",
    "examples": [
      {
        "title": "This example deletes a \"route\" with an ID of 7.:",
        "content": "http://localhost:8080/api/entity/route\n\n    body:\n    {\n      \"id\": 7,\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIEntity.h",
    "groupTitle": "Entity"
  },
  {
    "type": "get",
    "url": "/api/entity/[EntityName]:where",
    "title": "Fetch",
    "name": "FetchEntity",
    "group": "Entity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fieldName",
            "description": "<p>(optional) Any combination of FieldName=value pairs can be passed to filter the list returned.  Multiple field/value pairs are joined as an &quot;AND&quot; in the generated WHERE clause.</p>"
          }
        ]
      }
    },
    "description": "<p>Fetches records from the [EntityName] table with the optional filters applied.</p>",
    "examples": [
      {
        "title": "This example fetches all controllerModules with an address of 2:",
        "content": "http://localhost:8080/api/entity/controllerModule?address=2",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n        \"address\": \"2\",\n        \"controllerID\": \"24\",\n        \"disable\": \"0\",\n        \"id\": \"6\",\n        \"moduleClass\": \"1\",\n        \"moduleName\": \"TY30-4\"\n    }, {\n        \"address\": \"2\",\n        \"controllerID\": \"31\",\n        \"disable\": \"0\",\n        \"id\": \"18\",\n        \"moduleClass\": \"9\",\n        \"moduleName\": \"CA Panel1 Output 2\"\n    }, {\n        \"address\": \"2\",\n        \"controllerID\": \"34\",\n        \"disable\": \"0\",\n        \"id\": \"23\",\n        \"moduleClass\": \"9\",\n        \"moduleName\": \"CA Aux Panel Output 2\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "LCSServer/APIEntity.h",
    "groupTitle": "Entity"
  },
  {
    "type": "put",
    "url": "/api/entity/[EntityName]",
    "title": "Update an Entity",
    "name": "UpdateEntity",
    "group": "Entity",
    "description": "<p>Updates a specific record in the [EntityName] table.  The entity is sent as a JSON document.</p>",
    "examples": [
      {
        "title": "This example updates a \"route\" with an ID of 7.  Note:  You only need to supply the fields that are modified, however like this example, you may include all fields. :",
        "content": "http://localhost:8080/api/entity/route\n\n    body:\n    {\n      \"id\": 7,\n      \"routeName\": \"CA 1\"\n      \"routeDescription\": \"New Description\"\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIEntity.h",
    "groupTitle": "Entity"
  },
  {
    "type": "get",
    "url": "/api/notification/controller",
    "title": "Controller Status Change",
    "name": "ControllerStatusChangeNotification",
    "group": "Notifications",
    "description": "<p>Notification message sent when a controller's state changes (online, offline or restarting)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "serialNumber",
            "description": "<p>Controller's serial number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Controller's new status.  1 = Offline, 2 = Online, 3 = Restarting</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"serialNumber\": \"1546165\"\n        \"status\": \"2\"\n}",
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
