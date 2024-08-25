# TuneTunnel API

Welcome to the TuneTunnel API! This API is designed to handle various tasks related to music streaming and downloading. Below are the steps to set up and run the server.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/decoded-satapathy/TuneTunnel_API.git
   ```

2. Navigate to the project directory:

   ```bash
   cd TuneTunnel_API
   ```

3. Install the dependencies:

   ```bash
   npm i
   ```

### Running the Server

To start the server, run:

```bash
npm run dev
```

The server will start on port `3000` by default. If port `3000` is busy, the server will throw an error. To resolve this, either change the port number in the `src/index.ts` file or free up port `3000`.

### Changing the Port

If you need to change the port, open the `src/index.ts` file and modify the following line:

```typescript
app.listen(3001); // change 3000 to some unused port like 3001
```

Replace `3001` with your desired port number.

## API Endpoints

(Include your API endpoints and their descriptions here)

## License

(Include license information here, if applicable)
