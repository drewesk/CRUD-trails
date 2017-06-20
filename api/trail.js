const queries = require('../db/queries');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  queries.getAll().then((users) => {
    res.json(users);
  });
});

router.get('/:id', (req, res, next) => {
  queries.getOne(req.params.id).then((user) => {
    res.json(user);
  });
});

router.put('/:id', (req, res, next) => {
  if (req.body) {
    queries.updateUser(req.params.id, req.body)
      .then((users) => {
        res.json(users[0]);
      });

  } else {
    next(new Error('Invalid User Entry'));
  }
});

router.delete('/:id', (req, res) => {
  queries.deleteUser(req.params.id).then(() => {
    res.json({
      deleted: true
    })
  });
});

router.get('/:id/resource/', (req, res, next) => {
  queries.getResourcesByUser(req.params.id).then((resource) => {
    res.json(resource);
  });
});

router.post('/:id/resource/', (req, res, next) => {
  queries.create(req.body).then((trails) => {
    res.json(trails[0]);
  });
});

router.put('/:id/resource/:trail_id', (req, res, next) => {
  if (req.body) {
    queries.updateTrail(req.params.trail_id, req.body)
      .then((trails) => {
        res.json(trails[0]);
      });

  } else {
    next(new Error('Invalid Trail Entry'));
  }
});

router.delete('/:id/resource/:trail_id', (req, res) => {
  queries.deleteTrail(req.params.trail_id).then(() => {
    res.json({
      deleted: true
    })
  });
});

module.exports = router;
