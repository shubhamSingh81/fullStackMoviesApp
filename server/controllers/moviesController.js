const MoviesModel = require('../models/movies');

const getMovies = async (req, res) => {
    try {
        let { page, limit, sort = 'name', category='' } = req.query;
        const options = {
            page: page || 1,
            limit: limit || 10,
            sort,
            select: "", 
        };
        const data = await MoviesModel.paginate({category}, options)
        res.status(200).json({data});
    } catch (error) {
        res.status(500).json({ error });
    }
}

const saveMovies = async (req, res) => {
    try {
        const { category, name, imageUrl } = req.body;
        const data = await MoviesModel.create({ category, name, imageUrl })
        res.json({
            data
        });
    } catch (error) {
        res.status(500).json({ error });
    }
}

module.exports = {
    getMovies,
    saveMovies
}