
# Smart Platform for Automated Retail & Knowledge

A full-stack application using React, Spring Boot, Kafka, Kubernetes, MySQL, BeautifulSoup web scraper, integrating with ChatGPT API, deployed on AWS. This platform scrapes Amazon, Flipkart, and Meesho for a product, compares prices, and recommends the best price and product.

## Technology Stack
- **Frontend:** ReactJS
- **Backend:** SpringBoot in JAVA
- **Database:** MySQL
- **Messaging/Streaming:** Kafka
- **Web Scraping:** Python (BeautifulSoup)
- **Orchestration:** Kubernetes
- **Cloud Deployment:** AWS
- **AI Integration:** ChatGPT API

---

## Project Structure

### Backend (Spring Boot)
- `src/main/java/com/smartretail`
  - `controller/` : REST endpoints for product requests and chat integration
  - `service/` : Business logic including product search, comparison, AI communication
  - `entity/` : Product and User entity models
  - `repository/` : Database CRUD operations using JPA
  - `config/` : Kafka, MySQL, CORS configurations
  - `exception/` : Custom error handling classes
- `src/main/resources/` : `application.properties` (env keys, DB config)

### Frontend (React)
- `src/`
  - `components/` : `ProductSearch`, `ProductList`, `ChatBot`, etc.
  - `services/` : API calls to backend (REST)
  - `App.js` : Routing and main structure
  - `index.js` : React entrypoint

### Web Scraper (Python)
- `scraper/`
  - `amazon_scraper.py`
  - `flipkart_scraper.py`
  - `meesho_scraper.py`
  - Scraping logic using BeautifulSoup, requests, storing results to MySQL via REST endpoint or Kafka topic

---

## Data Flow & Architecture
1. **User searches for product/brand.**
2. **Frontend sends API request to Spring Boot server.**
3. **Spring Boot triggers Python scrapers via Kafka (microservices) for each marketplace.**
4. **Scraper fetches & parses product data, writes results to MySQL or sends to Kafka topic.**
5. **Spring Boot aggregates, compares, and selects the best/cheapest product.**
6. **ChatGPT API (free/alternative endpoint) receives summarized comparison and user prompts and responds via backend API.**
7. **React displays product results, chat interface.**

---

## Key Features
- Real-time product price comparison from Amazon, Flipkart, Meesho
- Scraping via Python BeautifulSoup for each platform (anti-block headers)
- Kafka for microservices communication and scraping triggers
- Product result storage in MySQL, aggregation logic in Spring Boot
- ChatGPT integration for product recommendation and user queries
- UI in React with chat and product comparison modules
- Containerization with Docker, orchestration on Kubernetes, deployed to AWS



## References
- [Spring Boot Structure Best Practices](https://www.codingshuttle.com/blog/spring-boot-folder-structure-best-practices)
- [Spring Boot with ChatGPT Integration Example](https://www.javaguides.net/2024/05/spring-boot-chatgpt-integration-tutorial.html)
- [React & Spring Boot Integration](https://dev.to/arpan_banerjee7/run-react-frontend-and-springboot-backend-on-the-same-port-and-package-them-as-a-single-artifact-14pa)
- [BeautifulSoup Amazon Scraper](https://www.geeksforgeeks.org/python/scraping-amazon-product-information-using-beautiful-soup/)
- [Kafka Microservices Example](https://github.com/ZaTribune/spring-kafka-microservices)
- [Deploy React on Kubernetes](https://overcast.blog/deploying-a-react-ecommerce-website-with-kubernetes-e7187a378e9d)
