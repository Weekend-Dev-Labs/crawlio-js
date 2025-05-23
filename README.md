# 🕷️ Crawlio JS SDK

**crawlio-js** is a Node.js SDK for interacting with the Crawlio web scraping and crawling API. It provides programmatic access to scraping, crawling, and batch processing endpoints with built-in error handling.

[Visit Crawlio](https://crawlio.xyz)  [See Docs](https://docs.crawlio.xyz)

---

## 📦 Installation

```bash
npm install crawlio-js
```

---

## 🚀 Getting Started

```ts
import Crawlio from 'crawlio-js'

const client = new Crawlio({ apiKey: 'your-api-key' })

const result = await client.scrape({ url: 'https://example.com' })
console.log(result.html)
```

---

## 🔧 Constructor

### `new Crawlio(options: CrawlioOptions)`

Creates a new Crawlio client.

**Options:**

| Name    | Type     | Required | Description                                     |
| ------- | -------- | -------- | ----------------------------------------------- |
| apiKey  | `string` | ✅        | Your Crawlio API key                            |
| baseUrl | `string` | ❌        | API base URL (default: `https://crawlio.xyz`) |

---

## 📘 API Methods

### `scrape(options: ScrapeOptions): Promise<ScrapeResponse>`

Scrapes a single page.

```ts
await client.scrape({ url: 'https://example.com' })
```

**ScrapeOptions:**

| Name        | Type       | Required | Description                |
| ----------- | ---------- | -------- | -------------------------- |
| url         | `string`   | ✅        | Target URL                 |
| exclude     | `string[]` | ❌        | CSS selectors to exclude   |
| includeOnly | `string[]` | ❌        | CSS selectors to include   |
| markdown    | `boolean`  | ❌        | Convert HTML to Markdown   |
| returnUrls  | `boolean`  | ❌        | Return all discovered URLs |

---

### `crawl(options: CrawlOptions): Promise<CrawlResponse>`

Initiates a site-wide crawl.

**CrawlOptions:**

| Name        | Type       | Required | Description                |
| ----------- | ---------- | -------- | -------------------------- |
| url         | `string`   | ✅        | Root URL to crawl          |
| count       | `number`   | ✅        | Number of pages to crawl   |
| sameSite    | `boolean`  | ❌        | Limit crawl to same domain |
| patterns    | `string[]` | ❌        | URL patterns to match      |
| exclude     | `string[]` | ❌        | CSS selectors to exclude   |
| includeOnly | `string[]` | ❌        | CSS selectors to include   |

---

### `crawlStatus(id: string): Promise<CrawlStatusResponse>`

Checks the status of a crawl job.

---

### `crawlResults(id: string): Promise<{ results: ScrapeResponse[] }>`

Gets results from a completed crawl.

---

### `search(query: string, options?: SearchOptions): Promise<SearchResponse>`

Performs a search on scraped content.

**SearchOptions:**

| Name | Type     | Description                       |
| ---- | -------- | --------------------------------- |
| site | `string` | Limit search to a specific domain |

---

### `batchScrape(options: BatchScrapeOptions): Promise<BatchScrapeResponse>`

Initiates scraping for multiple URLs in one request.

**BatchScrapeOptions:**

| Name    | Type                         | Description                 |
| ------- | ---------------------------- | --------------------------- |
| url     | `string[]`                   | List of URLs                |
| options | `Omit<ScrapeOptions, 'url'>` | Common options for all URLs |

---

### `batchScrapeStatus(batchId: string): Promise<BatchScrapeStatusResponse>`

Checks the status of a batch scrape job.

---

### `batchScrapeResult(batchId: string): Promise<{ results: { id: string; result: ScrapeResponse } }>`

Fetches results from a completed batch scrape.

---

## 🛑 Error Handling

All Crawlio errors extend from `CrawlioError`. You can catch and inspect these for more context.

### Error Types:

* `CrawlioError`
* `CrawlioRateLimit`
* `CrawlioLimitExceeded`
* `CrawlioAuthenticationError`
* `CrawlioInternalServerError`
* `CrawlioFailureError`

---

## 📄 Types

### `ScrapeResponse`

```ts
{
  jobId: string
  html: string
  markdown: string
  meta: Record<string, string>
  urls?: string[]
  url: string
}
```

### `CrawlStatusResponse`

```ts
{
  id: string
  status: 'IN_QUEUE' | 'RUNNING' | 'LIMIT_EXCEEDED' | 'ERROR' | 'SUCCESS'
  error: number
  success: number
  total: number
}
```
