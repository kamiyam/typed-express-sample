import {default as express, NextFunction} from "express";
var router: express.Router = express.Router();

/* GET home page. */
router.get('/', function(req: express.Request, res: express.Response, next: NextFunction) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
