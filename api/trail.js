const queries = require('../db/queries');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  queries.getAll().then((users) => {
    res.json(users);
  });
});

router.get('/:id', (req, res, next) => {
  queries.getOne(req.params.id).then((user)=> {
    res.json(user);
  });
});

router.get('/:id/resource/', (req, res, next) => {
  queries.getResourcesByUser(req.params.id).then((resource) => {
    res.json(resource);
  });
});

router.post('/:id/resource/', (req, res, next) => {
  queries.create(req.body).then((trails)=> {
    res.json(trails[0]);
  });
});

module.exports = router;
