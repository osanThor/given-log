import TurndownService from "turndown";

export const createTurndownService = function () {
  const turndown = new TurndownService();
  return turndown;
};
export const td = createTurndownService();
