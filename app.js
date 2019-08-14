const express = require('express');
const app = express();

// Routing requests
const insuranceRoutes = require('./api/public/v1/getPopularTopics/insurance');
const investmentRoutes = require('./api/public/v1/getPopularTopics/investment');

app.use("/api/public/v1/getPopularTopics/insurance", insuranceRoutes);
app.use("/api/public/v1/getPopularTopics/investment", investmentRoutes);

//Error Handling
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error : {
            message : error.message
        }
    });
});

module.exports = app;