'use strict';

module.exports.post = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Content (POST)',
        input: event,
      },
      null,
      2
    ),
  };
};
