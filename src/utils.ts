import {
    CrawlioAuthenticationError,
    CrawlioFailureError,
    CrawlioInternalServerError,
    CrawlioLimitExceeded,
    CrawlioRateLimit,
} from './errors.js'

export function processStatus(status: number, response: any) {
    if (status === 400) {
        throw new CrawlioFailureError(
            response?.message || 'failed to perform request',
            response,
        )
    }

    if (status === 421) {
        throw new CrawlioLimitExceeded(
            response?.message || 'limit exceeded. Please upgrade your plan',
            response,
        )
    }

    if (status === 429) {
        throw new CrawlioRateLimit('rate limit exceeded', response)
    }

    if (status === 403 || status === 401) {
        throw new CrawlioAuthenticationError('apiKey is invalid', response)
    }

    if (status >= 500) {
        throw new CrawlioInternalServerError(
            'internal server error',
            response,
        )
    }
}
