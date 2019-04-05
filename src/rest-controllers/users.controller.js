const UserCreatorService = require('../services/users/user-creator.service');
const UsersFetcherService = require('../services/users/users-fetcher.service');

async function create(req, res) {
  try {
    const jsonUsers =  await UserCreatorService.create(req.body.user)
    return res.json(jsonUsers);
  }
  catch(e) {
    return res.sendStatus(400);
  }
}

async function showAll(req, res) {
    const jsonUsers = await UsersFetcherService.getAll();
    return res.json(jsonUsers);
}

module.exports = {
  create,
  showAll,
};
