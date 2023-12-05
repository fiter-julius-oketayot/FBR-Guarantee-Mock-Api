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
            "agencyId": 100,
            "clientId": 112333,
            "productName": "Garantia",
            "caseId": "54e5c540-7414-4175-b674-581e21038576"
        },
        {
            "agencyId": 140,
            "clientId": 112333,
            "productName": "Garantia",
            "caseId": "54e5c540-7414-4175-b674-581e21038576"
        },
        {
            "agencyId": 140,
            "clientId": 117093,
            "productName": "Garantia",
            "caseId": "238ad865-ca84-463d-a292-5e9e8d5e67de"
        },
        {
            "agencyId": 140,
            "clientId": 111960,
            "productName": "Garantia",
            "caseId": "0a8858fd-ba35-4dc3-aad0-c7da1c207fc7"
        }
    ]);
});


app.post("/api/additionals", (req, res) => {
    LOGGER.info("GUARANTEES REQUEST BODY");
    LOGGER.info("============================");
    LOGGER.info(req.body);

    LOGGER.info("GUARANTEES REQUEST HEADERS");
    LOGGER.info("===========================");
    LOGGER.info(req.headers);
    res.status(200).send(
        {
            "domain": "gds",
            "case_id": "51de1e62-aae4-4c26-b1aa-f1c99d42b287",
            "user_id": "abf702183e2a43cc9b6727d26421b1d7",
            "closed": false,
            "xform_ids": [
                "1866555a-be32-430b-9095-167fa8845623",
                "5389c307-0d25-4659-bcdb-335a1c9dec6c"
            ],
            "date_closed": null,
            "date_modified": "2023-05-25T21:35:27.106000Z",
            "server_date_modified": "2023-05-25T21:35:27.776709Z",
            "properties": {
                "Ciclos_Cancelados": "4",
                "branch_code": "70",
                "cargo": "Tesorera",
                "estado_solicitud": "solicitud_enviada",
                "fecha_inicio": "2023-05-25",
                "producto": "chanim",
                "Fecha_Solicitud": "2023-05-25",
                "codigo_cliente": "12345",
                "Relacion_otros_ingresos": "26.79",
                "activo_corriente": "5000",
                "activo_no_corriente": "200",
                "capacidad_pago": "12.17",
                "capital_de_trabajo": "5000",
                "costo_unitario": "2000",
                "costo_venta": "1000",
                "cuota": "460",
                "cuotas_pendientes_bc": "5",
                "destino_prestamo": "Capital_de_Trabajo",
                "endeudamiento_futuro": "0.28",
                "enf": "81",
                "f_pep": "no",
                "fecha_primera_reunion": "2023-07-03",
                "flujo_disponible": "5600",
                "garantia_prestamo": "fiduciario",
                "gastos_familiares": "400",
                "gastos_negocio": "500",
                "ingresado_por": "mynor.enrique.xar.miculax",
                "integrantes_adicional": "1",
                "inversion_total": "2000",
                "invertir": "4 quintales de abono a 500 cada uno total de 2000",
                "monto_otros_ingresos": "1500",
                "monto_solicitado": "2000",
                "motivo_solicitud": "no",
                "nit": "No tiene",
                "nombre_propio": "si",
                "origen_otros_ingresos": "Gastos del esposo",
                "otros_ingresos": "si",
                "pasivo_corriente": "0",
                "pasivo_no_Corriente": "0",
                "pep": "no",
                "plazo": "5",
                "posee_cuenta": "no",
                "propuesta_facilitador": "2000",
                "punto_reunion": "Casa de doña Angelica",
                "total_activo": "5200",
                "total_pasivo": "0",
                "utilidad_neta": "4100",
                "ventas": "6000",
                "external_id": null,
                "owner_id": "823800863e224cc88795e5bb2fb66f98",
                "case_name": "1PQQ MARIA ASCENCION CATU SIGUIL DE LIX",
                "case_type": "solicitud",
                "date_opened": "2023-05-25T21:27:00.757"
            },
            "indices": {
                "parent": {
                    "case_type": "client",
                    "case_id": "f6d01437e8094a4db65d880ca5acde81",
                    "relationship": "child"
                }
            },
            "attachments": {}
        }
    );
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    LOGGER.info(`Server started @ http://localhost:${PORT}`);
})
