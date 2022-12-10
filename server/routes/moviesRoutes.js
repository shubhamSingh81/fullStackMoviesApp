const {Router} = require("express");
const { getMovies , saveMovies} = require("../controllers/moviesController");

const router = Router()

router.get('/get', getMovies)
router.post('/save', saveMovies)

module.exports = router;