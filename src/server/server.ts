import * as http from "http";
import * as winston from "winston";

// Configure logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => {
            return `${info.timestamp} [${info.level.toLocaleUpperCase()}]: ${info.message}`;
        })
    ),
    transports: new winston.transports.Console()
});

// Initialize.
main();

/**
 * Starts the server.
 */
function main(): void {
    // Start the web server.
    startWebServer();
}

/**
 * Starts the web server if the PORT environment variable is defined.
 */
function startWebServer(): void {

    // Ensure PORT env var is defined.
    if (!process.env.PORT || isNaN(Number.parseInt(process.env.PORT))) {
        logger['error']("PORT not defined; cannot start web server.");
        return;
    }

    logger['info']("Starting web server on port " + process.env.PORT);

    // Create a server and bind it to the environment variable PORT.
    http.createServer((req, res) => {
        res.write("Hello World");
        res.end();
    }).listen(process.env.PORT);
}