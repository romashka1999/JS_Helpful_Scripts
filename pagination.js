

const makePagination = (page, pageSize) => {
    const offset = page * pageSize;
    const limit = pageSize;
    return {
        offset,
        limit
    }
}

/********************** Driver Code *********************/
console.log(makePagination(2,5));