export const getPagesFrom = (arr: any[], limit: number): any[][] => {
  return arr.reduce(
    (response, curr) => {
      const lastIndex = response.length - 1;
      if (response[lastIndex].length === limit) {
        response.push([curr]);
      } else {
        response[lastIndex].push(curr);
      }
      return response;
    },
    [[]]
  );
};
