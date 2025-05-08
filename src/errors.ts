export class CrawlioError extends Error {
    response: any
    constructor(message: string, response: any){
        super(message)
        this.response = response
    }
}

export class CrawlioRateLimit extends CrawlioError {
    constructor(message: string, response: any) {
        super(message, response)
    }
}

export class CrawlioLimitExceeded extends CrawlioError {
    constructor(message: string, response: any) {
        super(message, response)
    }
}

export class CrawlioAuthenticationError extends CrawlioError {
    constructor(message: string, response: any) {
        super(message, response)
    }
}

export class CrawlioInternalServerError extends CrawlioError {
    constructor(message: string, response: any) {
        super(message, response)
    }
}

export class CrawlioFailureError extends CrawlioError {
    constructor(message: string, response: any) {
        super(message, response)
    }
}