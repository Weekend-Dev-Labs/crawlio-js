export type CrawlStatus =
    | 'IN_QUEUE'
    | 'RUNNING'
    | 'LIMIT_EXCEEDED'
    | 'ERROR'
    | 'SUCCESS'

export type WorkflowType = 'scroll' | 'click' | 'wait' | 'eval' | 'screenshot'

export interface CrawlioOptions {
    baseUrl?: string
    apiKey: string
}

export interface ScrapeOptions {
    url: string
    exclude?: string[]
    includeOnly?: string[]
    markdown?: boolean
    returnUrls?: boolean
    workflow?: Workflow[]
    normalizeBase64?: boolean
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

export interface EvaluationResult {
    result?: string
    error?: string
}

export interface ScrapeResponse {
    jobId: string
    html: string
    markdown: string
    meta: Record<string, string>
    urls?: string[]
    url: string
    evaluation?: Record<string, EvaluationResult>
    screenshots?: Record<string, string>
}

export interface Workflow {
    type: WorkflowType
    selector?: string
    script?: string
    duration?: number
    id?: string
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

export interface CrawlResultResponse {
    id: string
    results: {
        id: string
        result: ScrapeResponse
    }[]
    next?: string
    total: number
}

export interface SearchItem {
    title: string
    description?: string
    link: string
}

export interface SearchResponse {
    jobId: string
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

export interface BatchScrapeResultResponse {
    id: string
    results: BatchScrapeResult[]
    next?: string
    total: number
}

export interface BatchScrapeResult {
    id: string
    result: ScrapeResponse
}
