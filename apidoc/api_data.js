define({ "api": [
  {
    "type": "get",
    "url": "/api/notification/controller",
    "title": "Controller Status Change",
    "name": "ControllerStatusChangeNotification",
    "group": "APINotifications",
    "description": "<p>Notification message sent when a controller's state changes (online, offline or restarting)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Notification url.</p>"
          },
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
          "content": "{\n        \"url\": \"/api/notification/controller\",\n        \"serialNumber\": \"1546165\",\n        \"status\": \"2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "LCSServer/APIController.h",
    "groupTitle": "Notifications",
    "groupDescription": "<p>API notifications are sent as a JSON text message through a separate Web Socket connection initiated by the client.  In order for the client to receive notification messages, this connection must remain open/connected during the entire session.</p>"
  },
  {
    "type": "get",
    "url": "/api/notification/device",
    "title": "Device Status Change",
    "name": "DeviceStatusChangeNotification",
    "group": "APINotifications",
    "description": "<p>Notification message sent when a device's state changes.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Notification url.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deviceID",
            "description": "<p>Device's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deviceState",
            "description": "<p>Device's new state</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "locked",
            "description": "<p>Device's locked state.  0 = unlocked, 1 = locked.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"url\": \"/api/notification/device\",\n        \"deviceID\": \"1\",\n        \"deviceState\": \"2\",\n        \"locked\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "LCSServer/APIDevice.h",
    "groupTitle": "Notifications",
    "groupDescription": "<p>API notifications are sent as a JSON text message through a separate Web Socket connection initiated by the client.  In order for the client to receive notification messages, this connection must remain open/connected during the entire session.</p>"
  },
  {
    "type": "get",
    "url": "/api/notification/route",
    "title": "Route Status Change",
    "name": "RouteStatusChangeNotification",
    "group": "APINotifications",
    "description": "<p>Notification message sent when a route's state changes.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Notification url.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "routeID",
            "description": "<p>Route's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "isActive",
            "description": "<p>Flag indicating if the route is active. 0 = not active, 1 = active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "isLocked",
            "description": "<p>Flag indicating if the route is currently locked.  0 = not locked, 1 = locked</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "canLock",
            "description": "<p>Flag indicating if the lock is allowed to be locked. 0 = cannot be locked, 1 = can be locked.  If any of the turnouts contained in the route are currently in a locked state, the route cannot be locked.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"url\": \"/api/notification/route\",\n        \"routeID\": \"16\",\n        \"isActive\": \"1\",\n        \"isLocked\": \"0\",\n        \"canLock\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "LCSServer/APIRoute.h",
    "groupTitle": "Notifications",
    "groupDescription": "<p>API notifications are sent as a JSON text message through a separate Web Socket connection initiated by the client.  In order for the client to receive notification messages, this connection must remain open/connected during the entire session.</p>"
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
    "groupTitle": "Controller",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/controller/config:serialNumber"
      }
    ]
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
            "optional": true,
            "field": "serialNumber",
            "description": "<p>The controller's serial number.  If 0 or excluded, all controllers will delete their configuration data.</p>"
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
    "groupTitle": "Controller",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/send_controller_reset_config:serialNumber"
      }
    ]
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
            "optional": true,
            "field": "serialNumber",
            "description": "<p>The controller's serial number.  If 0 or excluded, all controllers will delete their controllers-to-notify list.</p>"
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
    "groupTitle": "Controller",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/send_controller_reset_notification_list:serialNumber"
      }
    ]
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
            "optional": true,
            "field": "controllerID",
            "description": "<p>The controller's ID.</p>"
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
    "groupTitle": "Controller",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/controller_list:controllerID"
      }
    ]
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
    "groupTitle": "Controller",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/controller/module/config:serialNumber,address"
      }
    ]
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
            "optional": true,
            "field": "controllerID",
            "description": "<p>The controller's ID.</p>"
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
    "groupTitle": "Controller",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/controller_module_list:controllerID"
      }
    ]
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
            "optional": true,
            "field": "serialNumber",
            "description": "<p>The controller's serial number.  If 0 or excluded, all controllers will restart.</p>"
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
    "groupTitle": "Controller",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/send_controller_reset:serialNumber"
      }
    ]
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
    "groupTitle": "Controller",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/controller/notification_list:serialNumber"
      }
    ]
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
    "groupTitle": "Controller",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/controller/device/config:deviceID"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/copy_device:deviceID",
    "title": "Copy a device's data to a new device entry",
    "name": "CopyDevice",
    "group": "Device",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deviceID",
            "description": "<p>The device's id to be coppied.</p>"
          }
        ]
      }
    },
    "description": "<p>Creates a copy of an existing device.  The new entry is an exact copy of the original except for the id field which is set to the new entry's id value.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "controllerModuleID",
            "description": "<p>Controller Module's ID to which the device is connected.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deviceClass",
            "description": "<p>Device's classification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceDescription",
            "description": "<p>Device's description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceName",
            "description": "<p>Device Device's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Device's new ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "port/pin",
            "description": "<p>Port to which the device is connected.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n        \"controllerModuleID\": \"4\",\n        \"deviceClass\": \"1\",\n        \"deviceDescription\": \"\",\n        \"deviceName\": \"TY30-1\",\n        \"id\": \"82\",\n        \"port\": \"0\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/copy_device?deviceID=1",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIDevice.h",
    "groupTitle": "Device",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/copy_device:deviceID"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/send_device_config:deviceID",
    "title": "Reset device's configuration",
    "name": "DeviceConfigReset",
    "group": "Device",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "deviceID",
            "description": "<p>The device's id.  If 0 or excluded, all devices will reset their configuration data.</p>"
          }
        ]
      }
    },
    "description": "<p>Sends a SYS_RESET_DEVICE_CONFIG broadcast UDP message instructing the device(s) to re-download its configuration data.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/send_device_config?deviceID=1",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIDevice.h",
    "groupTitle": "Device",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/send_device_config:deviceID"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/device_list:serialNumber,moduleID,controllerID,classCode",
    "title": "Get a list of devices",
    "name": "GetDeviceList",
    "group": "Device",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "serialNumber",
            "description": "<p>filter device list by a specific controller's serial number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "moduleID",
            "description": "<p>filter device list by a specific controller module's ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "controllerID",
            "description": "<p>filter device list by a specific controller's ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "classCode",
            "description": "<p>filter device list by a specific device classification.</p>"
          }
        ]
      }
    },
    "description": "<p>Returns a list of devices.  If no parameters are supplied, all devices are returned.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the module to which the device is connected.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "controllerID",
            "description": "<p>Controller ID of the controller to which the device is connected.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "controllerModuleID",
            "description": "<p>Controller Module ID of the controller to which the module the device is connected.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deviceClass",
            "description": "<p>Device classification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceDescription",
            "description": "<p>Device's description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deviceID",
            "description": "<p>Device's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceName",
            "description": "<p>Device's name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deviceState",
            "description": "<p>Device's current state.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "moduleClass",
            "description": "<p>Classification of the controller module to which the device is connected.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "port",
            "description": "<p>Port/pin the device to which the connected.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "serialNumber",
            "description": "<p>Serial Number of the controller to which the device is connected.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n        \"address\": \"0\",\n        \"controllerID\": \"30\",\n        \"controllerModuleID\": \"8\",\n        \"deviceClass\": \"5\",\n        \"deviceDescription\": \"\",\n        \"deviceID\": \"19\",\n        \"deviceName\": \"GK Mine Signal\",\n        \"deviceState\": 0,\n        \"moduleClass\": \"5\",\n        \"port\": \"0\",\n        \"serialNumber\": \"585680\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/device_list?controllerID=30",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIDevice.h",
    "groupTitle": "Device",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/device_list:serialNumber,moduleID,controllerID,classCode"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/device_property_list:deviceID",
    "title": "Get deviceProperty entries for a given device",
    "name": "GetDevicePropertyList",
    "group": "Device",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deviceID",
            "description": "<p>device's ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Returns a list of deviceProperty entries for a given device..</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deviceID",
            "description": "<p>Device's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>deviceProperty's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "key",
            "description": "<p>Device Property key.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Device Property value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n        \"deviceID\": \"1\",\n        \"id\": \"243\",\n        \"key\": \"MOTORPIN\",\n        \"value\": \"1\"\n    }, {\n        \"deviceID\": \"1\",\n        \"id\": \"244\",\n        \"key\": \"INPUTPIN\",\n        \"value\": \"1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/device_property_list?deviceID=1",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIDevice.h",
    "groupTitle": "Device",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/device_property_list:deviceID"
      }
    ]
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
    "groupTitle": "Entity",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/entity/[EntityName]"
      }
    ]
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
        "content": "http://localhost:8080/api/entity/route\n\n    body:\n    {\n      \"id\": 7\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIEntity.h",
    "groupTitle": "Entity",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/entity/[EntityName]"
      }
    ]
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
            "optional": true,
            "field": "fieldName",
            "description": "<p>Any combination of FieldName=value pairs can be passed to filter the list returned.  Multiple field/value pairs are joined as an &quot;AND&quot; in the generated WHERE clause.</p>"
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
    "groupTitle": "Entity",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/entity/[EntityName]:where"
      }
    ]
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
        "content": "http://localhost:8080/api/entity/route\n\n    body:\n    {\n      \"id\": 7,\n      \"routeName\": \"CA 1\",\n      \"routeDescription\": \"New Description\"\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIEntity.h",
    "groupTitle": "Entity",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/entity/[EntityName]"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/activate_route:routeID",
    "title": "Activate Route",
    "name": "ActivateRoute",
    "group": "Route",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "routeID",
            "description": "<p>The id of the route to activate.</p>"
          }
        ]
      }
    },
    "description": "<p>Activates the specified route.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/activate_route?routeID=6",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIRoute.h",
    "groupTitle": "Route",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/activate_route:routeID"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/lock_route:routeID,lock",
    "title": "Lock Route",
    "name": "LockRoute",
    "group": "Route",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "routeID",
            "description": "<p>The id of the route to lock.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "lock",
            "description": "<p>Lock flag.  0 = Unlock, 1 = Lock.</p>"
          }
        ]
      }
    },
    "description": "<p>Activates and locks the specified route.  Locking a route locks all turnouts in the route's list.  The route must be unlocked in in order to activate any turnouts assigned to this route.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/lock_route?routeID=6",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIRoute.h",
    "groupTitle": "Route",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/lock_route:routeID,lock"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/route_entry_list:routeID",
    "title": "Route Entry List",
    "name": "RouteEntryList",
    "group": "Route",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "routeID",
            "description": "<p>ID of the route.</p>"
          }
        ]
      }
    },
    "description": "<p>Returns a list route entries which define the turnouts that are set when the route is activated.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deviceID",
            "description": "<p>deviceID of the turnout.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "routeEntryID",
            "description": "<p>routeEntry's ID field.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "routeID",
            "description": "<p>routeID of the route the entry is assigned to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "1",
              "3"
            ],
            "optional": false,
            "field": "turnoutState",
            "description": "<p>The state the turnout is to be set to when the route is activated.  1 = Normal, 3 = Diverging (thrown)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n        \"deviceID\": \"15\",\n        \"routeEntryID\": \"23\",\n        \"routeID\": \"16\",\n        \"turnoutState\": \"1\"\n    }, {\n        \"deviceID\": \"16\",\n        \"routeEntryID\": \"24\",\n        \"routeID\": \"16\",\n        \"turnoutState\": \"1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/route_entry_list?routeID=16",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIRoute.h",
    "groupTitle": "Route",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/route_entry_list:routeID"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/route_list:",
    "title": "Route List",
    "name": "RouteList",
    "group": "Route",
    "description": "<p>Returns a list of all routes and the routes current state.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "canLock",
            "description": "<p>Flag indicating if the route can be locked.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "isActive",
            "description": "<p>Flag indicating if the route is currently active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "isLocked",
            "description": "<p>Flag indicating if the route is currently locked.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "routeDescription",
            "description": "<p>Route's description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "routeID",
            "description": "<p>Route's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "routeName",
            "description": "<p>Route's name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n        \"canLock\": true,\n        \"isActive\": false,\n        \"isLocked\": false,\n        \"routeDescription\": \"To Mine\",\n        \"routeID\": \"7\",\n        \"routeName\": \"CA 1\"\n    }, {\n        \"canLock\": true,\n        \"isActive\": false,\n        \"isLocked\": false,\n        \"routeDescription\": \"West X-Over 2 (Restore)\",\n        \"routeID\": \"16\",\n        \"routeName\": \"CA 10\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/route_list",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APIRoute.h",
    "groupTitle": "Route",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/route_list:"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/lock_device:deviceID,lock,redMode,greenMode,yellowMode",
    "title": "Lock Signal",
    "name": "LockSignal",
    "group": "Signal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deviceID",
            "description": "<p>The signal's Device ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "lock",
            "description": "<p>Flag which unlocks or locks the signal to its current aspect.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": true,
            "field": "redMode",
            "description": "<p>Red LED state.  0 = off, 1 = on, 2 = flashing.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": true,
            "field": "greenMode",
            "description": "<p>Green LED state.  0 = off, 1 = on, 2 = flashing.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": true,
            "field": "yellowMode",
            "description": "<p>Yellow LED state.  0 = off, 1 = on, 2 = flashing.</p>"
          }
        ]
      }
    },
    "description": "<p>Locks/unlocks the signal.  If the lock parameter is set to 1, and redMode, greenMode and/or yellowMode are supplied, the signal's aspect is first updated to values provided and then locked.  If all three modes are not supplied, the missing modes will be set to 0 = off.  If no LED modes are supplied, the signal's current pin settings are &quot;locked&quot; as is.</p>",
    "examples": [
      {
        "title": "In this example, Signal 21 is locked and its aspect set to flashing yellow.",
        "content": "http://localhost:8080/api/lock_device?deviceID=21&lock=1&yellowMode=2",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APISignal.h",
    "groupTitle": "Signal",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/lock_device:deviceID,lock,redMode,greenMode,yellowMode"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/signal_condition_list:aspectID",
    "title": "Aspect Condition List",
    "name": "SignalAspectConditionList",
    "group": "Signal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "aspectID",
            "description": "<p>The aspect's ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Returns a list conditions that must be met for the aspect to be valid (selected).  All conditions in this list are evaluated by comparing the device's current state specified by deviceID to the entry's deviceState using the conditionOperand (equals or not equals).  If the comparison is successful the Signal Condition is considered to be true/valid.  All conditions in this list must evaluate to true for the aspect to be selected.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "conditionOperand",
            "description": "<p>Operand used for comparison.  0 = Equals, 1 = Not Equals.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deviceID",
            "description": "<p>The ID of the device to be monitored.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deviceState",
            "description": "<p>The state the monitored device is compared to.  When evaluated, this value is compared to the device's current state.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "signalAspectID",
            "description": "<p>signalAspect's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "signalConditionID",
            "description": "<p>signalCondition's ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n        \"conditionOperand\": \"0\",\n        \"deviceID\": \"17\",\n        \"deviceState\": \"3\",\n        \"signalAspectID\": \"6\",\n        \"signalConditionID\": \"19\"\n    }, {\n        \"conditionOperand\": \"0\",\n        \"deviceID\": \"18\",\n        \"deviceState\": \"3\",\n        \"signalAspectID\": \"6\",\n        \"signalConditionID\": \"20\"\n    }, {\n        \"conditionOperand\": \"0\",\n        \"deviceID\": \"11\",\n        \"deviceState\": \"1\",\n        \"signalAspectID\": \"6\",\n        \"signalConditionID\": \"21\"\n    }, {\n        \"conditionOperand\": \"0\",\n        \"deviceID\": \"5\",\n        \"deviceState\": \"3\",\n        \"signalAspectID\": \"6\",\n        \"signalConditionID\": \"22\"\n    }, {\n        \"conditionOperand\": \"0\",\n        \"deviceID\": \"6\",\n        \"deviceState\": \"3\",\n        \"signalAspectID\": \"6\",\n        \"signalConditionID\": \"23\"\n    }, {\n        \"conditionOperand\": \"0\",\n        \"deviceID\": \"8\",\n        \"deviceState\": \"1\",\n        \"signalAspectID\": \"6\",\n        \"signalConditionID\": \"24\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/signal_condition_list?aspectID=6",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APISignal.h",
    "groupTitle": "Signal",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/signal_condition_list:aspectID"
      }
    ]
  },
  {
    "type": "get",
    "url": "/controller/device/config:aspectID",
    "title": "Download Aspect Configuration",
    "name": "SignalAspectConfiguration",
    "group": "Signal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "aspectID",
            "description": "<p>The aspect's ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Download the configuration information for a signal aspect.  See <a href=\"#api-Signal-SignalAspectList\">/api/signal_aspect_list</a> and <a href=\"#api-Signal-SignalAspectConditionList\">/api/signal_condition_list</a> for more information.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "aspectID",
            "description": "<p>Aspect's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "conditions",
            "description": "<p>List of conditions.  See <a href=\"#api-Signal-SignalAspectList\">/api/signal_aspect_list</a> for more information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "conditions.conditionOperand",
            "description": "<p>Operand used for comparison.  0 = Equals, 1 = Not Equals.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "conditions.deviceID",
            "description": "<p>Device ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "conditions.deviceState",
            "description": "<p>Device state.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": false,
            "field": "greenMode",
            "description": "<p>Green LED state.  0 = off, 1 = on, 2 = flashing.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": false,
            "field": "redMode",
            "description": "<p>Red LED state.  0 = off, 1 = on, 2 = flashing.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": false,
            "field": "yellowMode",
            "description": "<p>Yellow LED state.  0 = off, 1 = on, 2 = flashing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"aspectID\": \"6\",\n    \"conditions\": [{\n            \"conditionOperand\": \"0\",\n            \"deviceID\": \"17\",\n            \"deviceState\": \"3\"\n        }, {\n            \"conditionOperand\": \"0\",\n            \"deviceID\": \"18\",\n            \"deviceState\": \"3\"\n        }, {\n            \"conditionOperand\": \"0\",\n            \"deviceID\": \"11\",\n            \"deviceState\": \"1\"\n        }, {\n            \"conditionOperand\": \"0\",\n            \"deviceID\": \"5\",\n            \"deviceState\": \"3\"\n        }, {\n            \"conditionOperand\": \"0\",\n            \"deviceID\": \"6\",\n            \"deviceState\": \"3\"\n        }, {\n            \"conditionOperand\": \"0\",\n            \"deviceID\": \"8\",\n            \"deviceState\": \"1\"\n        }\n    ],\n    \"greenMode\": \"2\",\n    \"redMode\": \"1\",\n    \"yellowMode\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage.  This example returns the configuration for Signal Aspect 6:",
        "content": "http://localhost:8080/controller/device/config?aspectID=6",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APISignal.h",
    "groupTitle": "Signal",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/controller/device/config:aspectID"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/signal_aspect_list:deviceID",
    "title": "Signal Aspect List",
    "name": "SignalAspectList",
    "group": "Signal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deviceID",
            "description": "<p>The signal's Device ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Returns a list aspects defined for a signal sorted by sortIndex.  A Signal device uses this list to determine what state the LED's of a signal head should be set to (on, off or flashing).  The signal starts at the first entry in this list and evaluates each signal condition entry assigned to the aspect (see /api/signal_condition_list).  If all conditions of an aspect entry evaluate to true, processing stops and the signal is set to the aspect.  If none of the aspects evaluate to true, the signal sets the red LED on and all others off.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deviceID",
            "description": "<p>Signal's device ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": false,
            "field": "greenMode",
            "description": "<p>Green LED state.  0 = off, 1 = on, 2 = flashing.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": false,
            "field": "redMode",
            "description": "<p>Red LED state.  0 = off, 1 = on, 2 = flashing.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "signalAspectID",
            "description": "<p>signalAspect's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sortIndex",
            "description": "<p>sort order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": false,
            "field": "yellowMode",
            "description": "<p>Yellow LED state.  0 = off, 1 = on, 2 = flashing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n        \"deviceID\": \"21\",\n        \"greenMode\": \"1\",\n        \"redMode\": \"0\",\n        \"signalAspectID\": \"5\",\n        \"sortIndex\": \"0\",\n        \"yellowMode\": \"0\"\n    }, {\n        \"deviceID\": \"21\",\n        \"greenMode\": \"2\",\n        \"redMode\": \"1\",\n        \"signalAspectID\": \"6\",\n        \"sortIndex\": \"1\",\n        \"yellowMode\": \"0\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/signal_aspect_list?deviceID=21",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APISignal.h",
    "groupTitle": "Signal",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/signal_aspect_list:deviceID"
      }
    ]
  },
  {
    "type": "get",
    "url": "/controller/device/config:deviceID",
    "title": "Download Configuration",
    "name": "SignalConfiguration",
    "group": "Signal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deviceID",
            "description": "<p>The signal's Device ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Download the signal's configuration.  See <a href=\"#api-Signal-SignalAspectList\">/api/signal_aspect_list</a> and <a href=\"#api-Signal-SignalAspectConditionList\">/api/signal_condition_list</a> for more information on how the signal device uses this information.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "aspects",
            "description": "<p>List of aspects.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "aspects.aspectID",
            "description": "<p>Aspect's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": false,
            "field": "aspects.greenMode",
            "description": "<p>Green LED state.  0 = off, 1 = on, 2 = flashing.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": false,
            "field": "aspects.redMode",
            "description": "<p>Red LED state.  0 = off, 1 = on, 2 = flashing.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": false,
            "field": "aspects.yellowMode",
            "description": "<p>Yellow LED state.  0 = off, 1 = on, 2 = flashing.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "devices",
            "description": "<p>List of devices to monitor.  The signal depends on the current state of these devices in order to determine the proper aspect to display.  The signal listens for UDP status update messages from these devices and saves their current state.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "devices.deviceID",
            "description": "<p>ID of the device to monitor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"aspects\": [{\n            \"aspectID\": \"5\",\n            \"greenMode\": \"1\",\n            \"redMode\": \"0\",\n            \"yellowMode\": \"0\"\n        }, {\n            \"aspectID\": \"6\",\n            \"greenMode\": \"2\",\n            \"redMode\": \"1\",\n            \"yellowMode\": \"0\"\n        }\n    ],\n    \"devices\": [{\n            \"deviceID\": \"17\"\n        }, {\n            \"deviceID\": \"18\"\n        }, {\n            \"deviceID\": \"12\"\n        }, {\n            \"deviceID\": \"5\"\n        }, {\n            \"deviceID\": \"6\"\n        }, {\n            \"deviceID\": \"8\"\n        }, {\n            \"deviceID\": \"11\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage.  This example returns the configuration for Signal Device 21:",
        "content": "http://localhost:8080/controller/device/config?deviceID=21",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APISignal.h",
    "groupTitle": "Signal",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/controller/device/config:deviceID"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/activate_turnout:deviceID,turnoutState",
    "title": "Activate Turnout",
    "name": "ActivateTurnout",
    "group": "Turnout",
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
            "optional": true,
            "field": "turnoutState",
            "description": "<p>The desired state to set the turnout to.</p>"
          }
        ]
      }
    },
    "description": "<p>Sets the turnout to the desired state (direction) 1 = Normal 2 = Diverging.  If no state is specified, the turnout is toggled between normal and thrown.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/activate_turnout?deviceID=7&turnoutState=3",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APITurnout.h",
    "groupTitle": "Turnout",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/activate_turnout:deviceID,turnoutState"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/lock_device:deviceID,lock",
    "title": "Lock Turnout",
    "name": "LockTurnout",
    "group": "Turnout",
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
              "0",
              "1"
            ],
            "optional": false,
            "field": "lock",
            "description": "<p>Flag which unlocks or locks the turnout.  0 = unlock, 1 = lock.</p>"
          }
        ]
      }
    },
    "description": "<p>Locks/unlocks the turnout.  If the lock parameter is set to 1, the turnout will ignore future TRN_ACTIVATE and TRN_ACTIVATE_ROUTE messages until another lock message is sent with the lock flag set to 0.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8080/api/lock_device?deviceID=7&lock=1",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "LCSServer/APITurnout.h",
    "groupTitle": "Turnout",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/api/lock_device:deviceID,lock"
      }
    ]
  },
  {
    "type": "get",
    "url": "/controller/device/config:deviceID",
    "title": "Download Configuration",
    "name": "TurnoutConfiguration",
    "group": "Turnout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deviceID",
            "description": "<p>The turnout's Device ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Download the turnout's configuration.  INPUTPIN and MOTORPIN entries control how the device handles the pin.  If set to 1, the pin order is reversed. This is useful if the wires are connected backwards to the motor and/or the input pins.  Usually, both of these entries are set together, meaning, if MOTORPIN is set to 1 set INPUTPIN to 1 as well. The routes list is used by the device to determine what direction the turnout should be set to in response to a TRN_ACTIVATE_ROUTE message.</p>",
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
    "filename": "LCSServer/APITurnout.h",
    "groupTitle": "Turnout",
    "sampleRequest": [
      {
        "url": "http://APITest.entrydns.org:8080/controller/device/config:deviceID"
      }
    ]
  }
] });
