interface ResultJson {
  numTotalTestSuites:   number;
  numPassedTestSuites:  number;
  numFailedTestSuites:  number;
  numPendingTestSuites: number;
  numTotalTests:        number;
  numPassedTests:       number;
  numFailedTests:       number;
  numPendingTests:      number;
  numTodoTests:         number;
  startTime:            number;
  success:              boolean;
  testResults:          TestResult[];
}

interface TestResult {
  assertionResults: AssertionResult[];
  startTime:        number;
  endTime:          number;
  status:           Status;
  message:          string;
  name:             string;
}

interface AssertionResult {
  ancestorTitles:  string[];
  fullName:        string;
  status:          Status;
  title:           string;
  duration:        number;
  failureMessages: string[];
  location?:       Location;
}

interface Location {
  line:   number;
  column: number;
}

enum Status {
  Failed = "failed",
  Passed = "passed",
}

export type {
  ResultJson,
  TestResult,
  AssertionResult,
  Location,
  Status,
}
