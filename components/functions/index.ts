function useOriginalImage(url: string) {
  if (!url) return null
  return url.slice(0, -4) + "_o.jpg"
}
useOriginalImage.string = `
function useOriginalImage(url: string) {
  if (!url) return null
  return url.slice(0, -4) + "_o.jpg"
}
`

function useOptimisedImage(url: string) {
  if (!url) return null
  return url.slice(0, -4) + "_z.jpg"
}
useOptimisedImage.string = `
function useOptimisedImage(url: string) {
  if (!url) return null
  return url.slice(0, -4) + "_z.jpg"
}
`

function splitNameAndUrl(title) {
  // really need refactor
  var value = '';
  var insideValue = '';
  if (title.includes('[') && title.includes(']')) {
    insideValue = title.substring(title.indexOf('[') + 1, title.indexOf(']'));
    value = title.split('[')[0];
  } else {
    value = title
  }
  return [value, insideValue];
}
splitNameAndUrl.string = `
function splitNameAndUrl(title) {
  // really need refactor
  var value = '';
  var insideValue = '';
  if (title.includes('[') && title.includes(']')) {
    insideValue = title.substring(title.indexOf('[') + 1, title.indexOf(']'));
    value = title.split('[')[0];
  } else {
    value = title
  }
  return [value, insideValue];
}
`

function splitName(title) {
  var insideValue = '';
  if (title.includes('[') && title.includes(']')) {
    insideValue = title.substring(title.indexOf('[') + 1, title.indexOf(']'));
  } else {
    insideValue = title
  }
  return insideValue;
}
splitName.string = `
function splitName(title) {
  var insideValue = '';
  if (title.includes('[') && title.includes(']')) {
    insideValue = title.substring(title.indexOf('[') + 1, title.indexOf(']'));
  } else {
    insideValue = title
  }
  return insideValue;
}
`

function extractSquareBracket(title: string): string[] {
  const betweenSquareBracket = /(?<=\[).+?(?=\])/;
  const withSquareBracket = /\[(.*?)\]/
  const matchFound = title.match(betweenSquareBracket)
  const value = title.replace(withSquareBracket, '')
  if (matchFound != null) {
    const [insideValue] = matchFound
    return [value, insideValue]
  }
  return [value]
}
extractSquareBracket.string = `
function extractSquareBracket(title: string): string[] {
  const betweenSquareBracket = /(?<=\[).+?(?=\])/;
  const withSquareBracket = /\[(.*?)\]/
  const matchFound = title.match(betweenSquareBracket)
  const value = title.replace(withSquareBracket, '')
  if (matchFound != null) {
    const [insideValue] = matchFound
    return [value, insideValue]
  }
  return [value]
}
`
function extractFromAngleQuotationMarks(title: string): string[] {
  const betweenAngle = /(?<=\<).+?(?=\>)/;
  const withAngle = /\<(.*?)\>/
  const matchFound = title.match(betweenAngle)
  const value = title.replace(withAngle, '')
  if (matchFound != null) {
    const [insideValue] = matchFound
    return [value, insideValue]
  }
  return [value]
}
extractFromAngleQuotationMarks.string = `
function extractFromAngleQuotationMarks(title: string): string[] {
  const betweenAngle = /(?<=\<).+?(?=\>)/;
  const withAngle = /\<(.*?)\>/
  const matchFound = title.match(betweenAngle)
  const value = title.replace(withAngle, '')
  if (matchFound != null) {
    const [insideValue] = matchFound
    return [value, insideValue]
  }
  return [value]
}
`

function addHtmlSpacing(value: string): string {
  if (value != null) {
    return value.replace(/\n/g, "<br/>");
  }
  return value;
}
addHtmlSpacing.string = `
function addHtmlSpacing(value: string): string {
  if (value != null) {
    return value.replace(/\n/g, "<br/>");
  }
  return value;
}
`

function extractFromSymbol(title: string, symbols: string[]): (string | any)[] {
  const useAbleSymbols = symbols.map(symbol => `\\${symbol}`)
  const [from, to] = useAbleSymbols || ['\\[', '\\]'];

  const betweenSymbol = RegExp(`(?<=` + from + `).+?(?=` + to + `)`, 'g')
  const withSymbol = RegExp(from + `(.*?)` + to, 'g')
  const matchFound = title.match(betweenSymbol);
  const value = title.replace(withSymbol, '');
  const result = addHtmlSpacing(value)

  if (matchFound != null) {
    return [result, matchFound]
  }
  return [result]
}
extractFromSymbol.string = `
function extractFromSymbol(title: string, symbols: string[]): (string | any)[] {
  const useAbleSymbols = symbols.map(symbol => \`\\\${ symbol } \`)
  const [from, to] = useAbleSymbols || ['\\[', '\\]'];

  const betweenSymbol = RegExp(\`(?<= \` + from + \`).+? (?= \` + to + \`)\`, 'g')
  const withSymbol = RegExp(from + \`(.*?)\` + to, 'g')
  const matchFound = title.match(betweenSymbol);
  const value = title.replace(withSymbol, '');
  const result = addHtmlSpacing(value)

  if (matchFound != null) {
    return [result, matchFound]
  }
  return [result]
}
`

function chunk(inputArray: [], perChunk: number) {
  var i, j, result = [];
  for (i = 0, j = inputArray.length; i < j; i += perChunk) {
    result.push(inputArray.slice(i, i + perChunk))
  }
  return result;
}
chunk.string = `
function chunk(inputArray: [], perChunk: number) {
  var i, j, result = [];
  for (i = 0, j = inputArray.length; i < j; i += perChunk) {
    result.push(inputArray.slice(i, i + perChunk))
  }
  return result;
}
`


function splitSearchItem(content) {
  // need refactor
  const splitLi = content
    .replace(/\n/g, '')
    .replace('<ul>', '')
    .replace('</ul>', '')
    .split('<li>')
  splitLi.shift();

  const values = splitLi.map(li => {
    const item = li.replace('</li>', '')
    const [title, link] = splitNameAndUrl(item)
    return {
      title,
      link
    }
  })
  return values;
}
splitSearchItem.string = `
function splitSearchItem(content) {
  // need refactor
  const splitLi = content
    .replace(/\n/g, '')
    .replace('<ul>', '')
    .replace('</ul>', '')
    .split('<li>')
  splitLi.shift();

  const values = splitLi.map(li => {
    const item = li.replace('</li>', '')
    const [title, link] = splitNameAndUrl(item)
    return {
      title,
      link
    }
  })
  return values;
}
`

function splitContent(menuContent) {
  const splitP = menuContent.content.replace(/\n/g, '').split("<p>")
  splitP.shift()
  const menu = splitP.map(item => {
    const getUrl = item.match(/\[(.*?)\]/g)
    const hasChildren = item.match(/<ul(.*?)\/ul>/g)
    let value: any = {
      title: item.replace('</p>', '').trim()
    }
    if (hasChildren) {
      value.title = value.title.replace(hasChildren[0], '').trim()
      value.children = hasChildren[0]
        .match(/<li(.*?)\/li>/g)
        .map(child => {
          const getChildUrl = child.match(/\[(.*?)\]/g)
          let childValue: any = {
            title: child.replace('<li>', '').replace('</li>', '').trim()
          }
          if (getChildUrl) {
            childValue.title = childValue.title.replace(getChildUrl[0], '').trim()
            const rawUrl = getChildUrl[0].replace('[', '').replace(']', '').trim()
            const [url, chineseTitle] = rawUrl.split(', ')
            childValue.url = url
            childValue.chineseTitle = chineseTitle
          }
          return (childValue)
        })
    }
    if (getUrl) {
      value.title = value.title.replace(getUrl[0], '').trim()
      const rawUrl = getUrl[0].replace('[', '').replace(']', '').trim()
      const [url, chineseTitle] = rawUrl.split(', ')
      value.url = url
      value.chineseTitle = chineseTitle
    }
    return (value)
  })
  return menu;
}
splitContent.string = `
function splitContent(menuContent) {
  const splitP = menuContent.content.replace(/\n/g, '').split("<p>")
  splitP.shift()
  const menu = splitP.map(item => {
    const getUrl = item.match(/\[(.*?)\]/g)
    const hasChildren = item.match(/<ul(.*?)\/ul>/g)
    let value: any = {
      title: item.replace('</p>', '').trim()
    }
    if (hasChildren) {
      value.title = value.title.replace(hasChildren[0], '').trim()
      value.children = hasChildren[0]
        .match(/<li(.*?)\/li>/g)
        .map(child => {
          const getChildUrl = child.match(/\[(.*?)\]/g)
          let childValue: any = {
            title: child.replace('<li>', '').replace('</li>', '').trim()
          }
          if (getChildUrl) {
            childValue.title = childValue.title.replace(getChildUrl[0], '').trim()
            const rawUrl = getChildUrl[0].replace('[', '').replace(']', '').trim()
            const [url, chineseTitle] = rawUrl.split(', ')
            childValue.url = url
            childValue.chineseTitle = chineseTitle
          }
          return (childValue)
        })
    }
    if (getUrl) {
      value.title = value.title.replace(getUrl[0], '').trim()
      const rawUrl = getUrl[0].replace('[', '').replace(']', '').trim()
      const [url, chineseTitle] = rawUrl.split(', ')
      value.url = url
      value.chineseTitle = chineseTitle
    }
    return (value)
  })
  return menu;
}
`

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
isObjectEmpty.string = `
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
`

function cleanUrl(url: string) {
  if (!url) return null
  const alpanumericHyphened = url
    .toLowerCase()                    // convert to lowercase
    .replace(/[^a-zA-Z0-9]/g, ' ')     // replace non alpanumerics with spaces
    .trim()                           // remove trailing spaces
    .replace(/( )\1{1,}/g, ' ')        // reduce consecutive spaces
    .replace(/ /g, '-')                // replace spaces with hyphens
  return (alpanumericHyphened || "-") // use hyphen in case of ""
}
cleanUrl.string = `
function cleanUrl(url: string) {
  if (!url) return null
  const alpanumericHyphened = url
    .toLowerCase()                    // convert to lowercase
    .replace(/[^a-zA-Z0-9]/g, ' ')     // replace non alpanumerics with spaces
    .trim()                           // remove trailing spaces
    .replace(/( )\\1{1,}/g, ' ')        // reduce consecutive spaces
    .replace(/ /g, '-')                // replace spaces with hyphens
  return (alpanumericHyphened || "-") // use hyphen in case of ""
}
`

export default {
  useOriginalImage,
  cleanUrl,
  isObjectEmpty,
  splitContent,
  splitSearchItem,
  extractFromSymbol,
  chunk,
  extractFromAngleQuotationMarks,
  extractSquareBracket,
  useOptimisedImage,
  splitName
}