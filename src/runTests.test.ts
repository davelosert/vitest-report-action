import { describe, it, expect } from 'vitest';
import { runTests } from './runTest';

describe('runTests()', (): void => {
  it('executes vitest and collects JSON results.', async (): Promise<void> => {
    const results = await runTests();
    
    expect(results).toContain({
      numFailedTests: 0,
      numFailedTestSuites: 0,
      numPassedTests: 1,
      numPassedTestSuites: 1,
      numPendingTests: 0,
      numPendingTestSuites: 0,
      numRuntimeErrorTestSuites: 0,
      numTotalTests: 1,
      numTotalTestSuites: 1,
    });
  });
});
