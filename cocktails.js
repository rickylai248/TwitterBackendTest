const handleCocktails = (req, res, db) => {
    const { page } = req.body;
    db.select('*').from('cocktails').limit(10).then(cocktail => {
        res.json(cocktail)
    }).
    catch(err => res.status(400).json('error getting cocktails'))
}

module.exports = {
    handleCocktails: handleCocktails
};