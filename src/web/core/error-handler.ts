import {ErrorHandler} from "@angular/core";

export class CustomErrorHandler implements ErrorHandler {
    handleError(error) {
        console.error("Uncaught Error: " + error);
    }
}