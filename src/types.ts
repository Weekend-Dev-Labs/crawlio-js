export type CrawlStatus =
    | 'IN_QUEUE'
    | 'RUNNING'
    | 'LIMIT_EXCEEDED'
    | 'ERROR'
    | 'SUCCESS'

export interface CrawlspaceOptions {
    baseUrl?: string
    apiKey: string
}

export interface ScrapeOptions {
    url: string
    exclude?: string[]
    includeOnly?: string[]
    markdown?: boolean
    returnUrls?: boolean
}

export interface CrawlOptions {
    url: string
    exclude?: string[]
    includeOnly?: string[]
    sameSite?: boolean
    count: number
    patterns?: string[]
}

export interface SearchOptions {
    site?: string
}

export interface BatchScrapeOptions {
    url: string[]
    options: Omit<ScrapeOptions, 'url'>
}

export interface ScrapeResponse {
    jobId: string
    html: string
    markdown: string
    meta: Record<string, string>
    urls?: string[]
    url: string
}

export interface CrawlResponse {
    crawlId: string
}

export interface CrawlStatusResponse {
    id: string
    status: CrawlStatus
    error: number
    success: number
    total: number
}

export interface SearchItem {
    title: string
    description?: string
    link: string
}

export interface SearchResponse {
    id: string
    results: SearchItem[]
}

export interface BatchScrapeResponse {
    batchId: string
}

export interface BatchScrapeStatusResponse {
    id: string
    status: CrawlStatus
    error: number
    success: number
}

export interface BatchScrapeResponse {
    results: { id: string; result: ScrapeResponse }
}
