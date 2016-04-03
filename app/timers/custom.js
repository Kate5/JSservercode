/* global Backendless */
/**
* custom timer.
* It is executed according to the schedule
*/
Backendless.ServerCode.addTimer({

  name: 'custom',

  startDate: 1459327080000,

  frequency: {
    schedule: 'custom',

    repeat: {'every':60}
  },

  /**
  * @param {Object} req
  * @param {String} req.context Application Version Id
  */
  execute(req){
    //add your code here
  }
});