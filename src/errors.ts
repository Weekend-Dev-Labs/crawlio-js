export class CrawlspaceError extends Error {
    response: any
    constructor(message: string, response: any){
        super(message)
        this.response = response
    }
}

export class CrawlspaceRateLimit extends CrawlspaceError {
    constructor(message: string, response: any) {
        super(message, response)
    }
}

export class CrawlspaceAuthenticationError extends CrawlspaceError {
    constructor(message: string, response: any) {
        super(message, response)
    }
}

export class CrawlspaceInternalServerError extends CrawlspaceError {
    constructor(message: string, response: any) {
        super(message, response)
    }
}