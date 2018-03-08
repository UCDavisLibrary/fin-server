const router = require('express').Router();
const model = require('../../models/backup');
const path = require('path');

// router.get('/', async (req, res) => {
//   try {
//     let backups = await model.list();
//     res.json(backups);
//   } catch(e) {
//     res.status(400)
//       .json({error: true, message: e.message});
//   }
// });

// router.post('/:name', async (req, res) => {

//   try {
//     let response = await model.create(cleanName(req.params.name));
//     res.send({
//       name : req.param.name,
//       response
//     });
//   } catch(e) {
//     res.status(400)
//       .json({error: true, message: e.message});
//   }

  
// });

// router.get('/:name', async (req, res) => {
//   try {
//     model.get(cleanName(req.params.name))
//          .pipe(res);
//   } catch(e) {
//     res.status(400)
//         .json({error: true, message: e.message});
//   }
// });

function cleanName(oldName) {
  return path.parse(oldName).name;
}

module.exports = router;