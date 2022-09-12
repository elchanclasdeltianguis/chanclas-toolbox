const isString = (unknow: any) => {
  const result: boolean =
    typeof unknow === "string" || unknow instanceof String;
  return result;
};

export default isString;
