function objToUpdateVals(obj) {
  return Object.entries(obj)
    .map(([entryProp, entryVal]) => `${entryProp} = '${entryVal}'`)
    .join(',')
}

module.exports = {
  objToUpdateVals,
}