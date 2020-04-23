function link(parent, args, context) {
  console.log("link");

  return context.prisma.vote({ id: parent.id }).link();
}

function user(parent, args, context) {
  return context.prisma.vote({ id: parent.id }).user();
}

module.exports = {
  link,
  user,
};
