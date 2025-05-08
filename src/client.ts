import { CrawlioError } from './errors.js'
import type {
    BatchScrapeOptions,
    BatchScrapeResponse,
    BatchScrapeStatusResponse,
    CrawlOptions,
    CrawlResponse,
    CrawlioOptions,
    CrawlStatusResponse,
    ScrapeOptions,
    ScrapeResponse,
    SearchOptions,
    SearchResponse,
} from './types.js'
import { processStatus } from './utils.js'

class Crawlio {
    #baseUrl: string
    #apiKey: string
    constructor({ apiKey, baseUrl }: CrawlioOptions) {
        if (!apiKey) {
            throw new CrawlioError(
                'apiKey is missing. Please provide apiKey to initiate a Crawlio client',
                {},
            )
        }

        this.#baseUrl = baseUrl || 'http://localhost:3000'
        this.#apiKey = apiKey
    }

    async #request<T>(endpoint: string, options: RequestInit): Promise<T> {
        const res = await fetch(this.#baseUrl + endpoint, {
            ...options,
            headers: {
                authorization: `Bearer ${this.#apiKey}`,
                'Content-Type': 'application/json',
                ...(options.headers || {}),
            },
        })

        const body = await res.json()
        processStatus(res.status, body)
        return body as T
    }

    async scrape(options: ScrapeOptions) {
        return this.#request<ScrapeResponse>('/api/scrape', {
            method: 'POST',
            body: JSON.stringify(options),
        })
    }

    async crawl(options: CrawlOptions) {
        return this.#request<CrawlResponse>('/api/crawl', {
            method: 'POST',
            body: JSON.stringify(options),
        })
    }

    async crawlStatus(id: string) {
        return this.#request<CrawlStatusResponse>(`/api/crawl/status/${id}`, {
            method: 'GET',
        })
    }

    async crawlResults(id: string) {
        return this.#request<{ results: ScrapeResponse[] }>(
            `/api/crawl/${id}`,
            {
                method: 'GET',
            },
        )
    }

    async search(query: string, options?: SearchOptions) {
        return this.#request<SearchResponse>('/api/results', {
            method: 'POST',
            body: JSON.stringify({ query, ...(options ? options : {}) }),
        })
    }

    async batchScrape(options: BatchScrapeOptions) {
        return this.#request<BatchScrapeResponse>('/api/scrape/batch', {
            body: JSON.stringify(options),
            method: 'POST',
        })
    }

    async batchScrapeStatus(batchId: string) {
        return this.#request<BatchScrapeStatusResponse>(
            `/api/scrape/batch/status/${batchId}`,
            {
                method: 'GET',
            },
        )
    }

    async batchScrapeResult(batchId: string) {
        return this.#request<BatchScrapeResponse>(
            `/api/scrape/batch/${batchId}`,
            { method: 'GET' },
        )
    }
}

export default Crawlio
