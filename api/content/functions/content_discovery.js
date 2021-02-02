'use strict';

module.exports.get = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Discovery (GET)',
        input: event,
      },
      null,
      2
    ),
  };
};
