export const catHasOrigin = (cats, origins) => {
    console.log('hello');
    for(let i=0; i<origins.length; i++){
        return cats.filter(cat => {
            return cat.origin === origins[i]
        })
    }
}

export const findMatchingCats = (cats, origins) => {
    console.log('hello', catHasOrigin(cats, origins));
    if (origins.length !== 0) {
      return catHasOrigin(cats, origins);
    }
    return ""
  }