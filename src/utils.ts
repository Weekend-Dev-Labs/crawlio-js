import {
    CrawlspaceAuthenticationError,
    CrawlspaceFailureError,
    CrawlspaceInternalServerError,
    CrawlspaceLimitExceeded,
    CrawlspaceRateLimit,
} from './errors'

export function processStatus(status: number, response: any) {
    if (status === 400) {
        throw new CrawlspaceFailureError(
            response?.message || 'failed to perform request',
            response,
        )
    }

    if (status === 421) {
        throw new CrawlspaceLimitExceeded(
            response?.message || 'limit exceeded. Please upgrade your plan',
            response,
        )
    }

    if (status === 429) {
        throw new CrawlspaceRateLimit('rate limit exceeded', response)
    }

    if (status === 403 || status === 401) {
        throw new CrawlspaceAuthenticationError('apiKey is invalid', response)
    }

    if (status >= 500) {
        throw new CrawlspaceInternalServerError(
            'internal server error',
            response,
        )
    }
}
