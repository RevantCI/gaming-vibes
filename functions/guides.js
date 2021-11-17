exports.handler = async (event, context) => {
  const guides = [
    { title: "Beat all Zelda Bosses Like a Boss", author: "mario" },
    { title: "Mario Kart shortcuts you never knew existed", author: "luigi" },
    { title: "Ultimate Street figher guide", author: "chun-li" },
  ];

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides),
    };
  }
  return {
    statusCode: 401,
    body: JSON.stringify({
      mssg: "ah, ah, ah you must be logged in to see this",
    }),
  };
};