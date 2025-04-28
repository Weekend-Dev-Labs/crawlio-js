import Crawlspace from './client.js'

import {
    CrawlspaceAuthenticationError,
    CrawlspaceLimitExceeded,
    CrawlspaceError,
    CrawlspaceFailureError,
    CrawlspaceInternalServerError,
    CrawlspaceRateLimit,
} from './errors.js'

import {
    CrawlOptions,
    CrawlResponse,
    CrawlStatus,
    CrawlStatusResponse,
    CrawlspaceOptions,
    ScrapeOptions,
    ScrapeResponse,
    SearchItem,
    SearchOptions,
    SearchResponse,
} from './types.js'

export {
    CrawlOptions,
    CrawlResponse,
    CrawlStatus,
    CrawlStatusResponse,
    CrawlspaceOptions,
    ScrapeOptions,
    ScrapeResponse,
    SearchItem,
    SearchOptions,
    SearchResponse,
}

export {
    CrawlspaceAuthenticationError,
    CrawlspaceError,
    CrawlspaceFailureError,
    CrawlspaceInternalServerError,
    CrawlspaceRateLimit,
    CrawlspaceLimitExceeded,
}

export { Crawlspace }
