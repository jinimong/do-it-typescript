import ResultType from "./ResultType";

const doSomething = (): ResultType => {
  try {
    throw new Error("Some error occurs...");
  } catch (e) {
    return [false, e.message];
  }
};
export default doSomething;
