import { CrawlspaceRateLimit } from "./errors"
import type { CrawlOptions, CrawlResponse, CrawlspaceOptions, CrawlStatusResponse, ScrapeOptions, ScrapeResponse } from "./types"
import { processStatus } from "./utils"

class Crawlspace {
    #baseUrl: string
    #apiKey: string
    constructor({apiKey, baseUrl}: CrawlspaceOptions) {
        this.#baseUrl = baseUrl || "http://localhost:3000"
        this.#apiKey = apiKey
    }

    async scrape(options: ScrapeOptions) {
        const res = await fetch(this.#baseUrl + "/api/scrape", {
            body: JSON.stringify({...options}),
            headers: {
                authorization: `Bearer ${this.#apiKey}`,
                "Content-Type": "application/json"
            },
            method: "POST"
        })

        const body = await res.json()

        processStatus(res.status, body)

        return body as ScrapeResponse;
    }

    async crawl(options: CrawlOptions) {
        const res = await fetch(this.#baseUrl + "/api/crawl", {
            body: JSON.stringify({...options}),
            headers: {
                authorization: `Bearer ${this.#apiKey}`,
                "Content-Type": "application/json"
            },
            method: "POST"
        })

        const body = await res.json()

        processStatus(res.status, body)

        return body as CrawlResponse
    }

    async crawlStatus(id: string) {
        const res = await fetch(this.#baseUrl + `/api/crawl/status/${id}`, {
            headers: {
                authorization: `Bearer ${this.#apiKey}`,
                "Content-Type": "application/json"
            },
            method: "GET"
        })

        const body = await res.json()

        processStatus(res.status, body)

        return body as CrawlStatusResponse
    }

    async crawlResults(id: string) {
        const res = await fetch(this.#baseUrl + `/api/crawl/status/${id}`, {
            headers: {
                authorization: `Bearer ${this.#apiKey}`,
                "Content-Type": "application/json"
            },
            method: "GET"
        })

        const body = await res.json()

        processStatus(res.status, body)

        return body as CrawlStatusResponse
    }
}

export default Crawlspace