export const shortner = (text) => {
  const partition = text.split(' ')
  return `${partition[0]} ${partition[1]}`
}
