'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World, this is a lambda function',
        input: event,
      },
      null,
      2
    ),
  };
};
