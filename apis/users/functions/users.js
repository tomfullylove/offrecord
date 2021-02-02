'use strict';

module.exports.post = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Users (POST)',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.get = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Users (GET)',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.put = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Users (PUT)',
        input: event,
      },
      null,
      2
    ),
  };
};
