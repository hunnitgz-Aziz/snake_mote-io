exec(function(){


  mote.io.remote = {
    api_version: '0.1',
    app_name: 'Snake Game',
    display_input : true,
    update: function(force) {console.log(force)},
    
    blocks: [
          {
            type: 'notify'
          },
          {
            type: 'buttons',
            data: [
              {
                press: function () {
                  d = "up";
                },
                icon: 'chevron-up'
              }
            ]
          },
          {
            type: 'buttons',
            data: [
              {
                press: function () {
                  d = "left";
                },
                icon: 'chevron-left'
              },
              {
                press: function () {
                  alert('middle pressed');
                },
                icon: 'circle-blank'
              },
              {
                press: function () {
                  d = "right";
                },
                icon: 'chevron-right'
              }
            ]
          },
          {
            type: 'buttons',
            data: [
              {
                press: function () {
                  d = "down";
                },
                icon: 'chevron-down'
              }
            ]
          }
        ]
  }

});