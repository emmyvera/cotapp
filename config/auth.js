module.exports = { ensureAuthenticated: function(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }

res.json({
    message: "Authentication Failed"
});
} 
}