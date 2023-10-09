const express = require('express');
const winston = require("winston");

const app = express();
app.use(express.json());

const logConfiguration = {
    'transports': [
        new winston.transports.Console()
    ]
};
const LOGGER = winston.createLogger(logConfiguration);

app.post("/api/guarantees", (req, res) => {
    LOGGER.info("GUARANTEES REQUEST BODY");
    LOGGER.info("============================");
    LOGGER.info(req.body);

    LOGGER.info("GUARANTEES REQUEST HEADERS");
    LOGGER.info("===========================");
    LOGGER.info(req.headers);
    res.status(200).send([
        {
            "agencyId" : 100,
            "clientId": 112333,
            "productName": "Garantia",
            "caseId": "54e5c540-7414-4175-b674-581e21038576"
        },
        {
            "agencyId" : 140,
            "clientId": 112333,
            "productName": "Garantia",
            "caseId": "54e5c540-7414-4175-b674-581e21038576"
        },
        {
            "agencyId" : 140,
            "clientId": 117093,
            "productName": "Garantia",
            "caseId": "238ad865-ca84-463d-a292-5e9e8d5e67de"
        },
        {
            "agencyId" : 140,
            "clientId": 111960,
            "productName": "Garantia",
            "caseId": "0a8858fd-ba35-4dc3-aad0-c7da1c207fc7"
        }
    ]);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    LOGGER.info(`Server started @ http://localhost:${PORT}`);
})
