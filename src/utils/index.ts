export const scrollToElement = (elementID: string) => {
  document.getElementById(elementID)?.scrollIntoView({
    behavior: 'smooth',
  })
}
