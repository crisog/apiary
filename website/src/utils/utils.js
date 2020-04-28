const PROFILE_PREFIX = 'PROFILE_DATA'

export function isProfileEmpty ({ name, description, icon, links }) {
  return !name && !description && !icon && !links.length
}

export function composeMessage (address, name, description, icon, links) {
  const concatenatedLinks = links.reduce((concatenatedLinks, link) => `${concatenatedLinks}${link}`, '')
  return `${PROFILE_PREFIX}${address}${name.replace(/\s/g, '')}${description.replace(/\s/g, '')}${icon}${concatenatedLinks}`
}
