// https://nodejs.org/api/worker_threads.html

const {
  Worker, isMainThread, parentPort, workerData,
} = require('node:worker_threads');

if (isMainThread) {
  module.exports = function parseJSAsync(script) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, {
        workerData: script,
      });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  };
} else {
  const { parse } = require('some-js-parsing-library');
  const script = workerData;
  parentPort.postMessage(parse(script));
} 


/**
 * The above example spawns a Worker thread for each parseJSAsync() call. In practice, use a pool of Workers for these kinds of tasks. Otherwise, the overhead of creating Workers would likely exceed their benefit.

When implementing a worker pool, use the AsyncResource API to inform diagnostic tools (e.g. to provide asynchronous stack traces) about the correlation between tasks and their outcomes. See "Using AsyncResource for a Worker thread pool" in the async_hooks documentation for an example implementation.

Worker threads inherit non-process-specific options by default. Refer to Worker constructor options to know how to customize worker thread options, specifically argv and execArgv options.
 * 
 */