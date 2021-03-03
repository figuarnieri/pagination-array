const Pagination = ({
  pageCurrent,
  pageTotal,
  pagePerResult,
  pagesShow = 5,
}) => {
  const pagesBegin = Math.ceil(pagesShow / 2);
  const pagesEnd = Math.ceil(pageTotal / pagePerResult);
  const pagesArray = [];
  const pagesLimited = pagesBegin > pagesEnd;

  if (pageCurrent <= pagesBegin) {
    if (!pagesLimited) {
      const pages = [...new Array(pagesShow)].map((item, i) => ({
        page: i + 1,
        active: i + 1 === pageCurrent,
      }));
      pagesArray.push(...pages);
    }
  }

  if (pageCurrent > pagesEnd - pagesBegin) {
    const pagesInitCount = pagesEnd - pagesShow + 1;
    const pagesIncrement = Math.max(pagesInitCount, 1);
    const pageConfig = [];
    if (pagesLimited) {
      const pages = [...new Array(pagesIncrement)].map((item, i) => ({
        page: i + 1,
        active: i + 1 === pageCurrent,
      }));
      pageConfig.push(...pages);
    } else {
      const pages = [...new Array(pagesShow)].map((item, i) => ({
        page: pagesInitCount + i,
        active: pagesInitCount + i === pageCurrent,
      }));
      pageConfig.push(...pages);
    }
    pagesArray.push(...pageConfig);
  }

  if (pageCurrent > pagesBegin && pageCurrent <= pagesEnd - pagesBegin) {
    const pagesInitCount = pageCurrent - pagesBegin + 1;
    const pages = [...new Array(pagesShow)].map((item, i) => ({
      page: pagesInitCount + i,
      active: pagesInitCount + i === pageCurrent,
    }));
    pagesArray.push(...pages);
  }
  return pagesArray;
};
