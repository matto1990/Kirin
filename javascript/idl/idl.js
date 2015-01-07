module.exports = {
  namespace: "com.futureplatforms.kirin.generated.demo.hellokirin",
  classes: {
    "IDumbButtonScreen": {
      implementedBy: "native",
      methods: {
        // only methods allowed
        "updateLabelSize:andText:": [{ size : "integer" }, { text : "string" }],
        "changeScreen:": [{ finalLabel: "string" }]
      }
    },
    "IDumbButtonScreenModule": {
      implementedBy: "javascript",
      alias: 'dumb-button-screen',
      methods: {
        "onDumbButtonClick": [],
        "onNextScreenButtonClick": []
      }
    },


    "IDumbListScreen": {
      docs: "This screen looks after a list",
      implementedBy: "native",
      methods: {
        // only methods allowed
        "populateList": [{ list : "array" }],
        "showToast": [{ toast: "string" }]
      }
    },
    "IDumbListScreenModule": {
      implementedBy: "javascript",
      alias: 'dumb-list-screen',
      methods: {
        "onListItemClick": [{index: "int"}, {label: "string"}]
      }
    }



  }
};
