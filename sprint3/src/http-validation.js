import chalk from "chalk";

function extractLinks(linkArray) {
  return linkArray.map((linkObj) => Object.values(linkObj).join());
}

async function checkStatus(urlList) {
  const statusArray = await Promise.all(
    urlList.map(async (url) => {
      try {
        const response = await fetch(url, { method: "HEAD" });
        return `${response.status} - ${response.statusText}`;
      } catch (error) {
        return handlerErrors(error);
      }
    })
  );

  return statusArray;
}

function handlerErrors(error) {
  if (error.cause.code === "ENOTFOUND") {
    return "Link not found";
  } else if (error.cause.code === "UND_ERR_CONNECT_TIMEOUT") {
    return "Connection timeout";
  } else {
    return "Something went wrong";
  }
}

export default async function validatedList(linkList) {
  const links = extractLinks(linkList);
  const status = await checkStatus(links);

  return linkList.map((linkObj, index) => ({
    ...linkObj,
    status: status[index],
  }));
}
