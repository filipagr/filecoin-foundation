import { normalizeString } from '../../src/app/_utils/normalizeString'

describe('normalizeString', () => {
  it('should normalize apostrophes', () => {
    const standard = "democracy's"
    const curlyApostrophe = 'democracy’s'

    expect(normalizeString(curlyApostrophe)).to.equal(standard)
  })

  it('should normalize double quotes', () => {
    const standard = '"word"'
    const curlyDoubleQuotes = '“word”'

    expect(normalizeString(curlyDoubleQuotes)).to.equal(standard)
  })

  it('should normalize single quotes', () => {
    const standard = "'word'"
    const curlySingleQuotes = '‘word’'

    expect(normalizeString(curlySingleQuotes)).to.equal(standard)
  })

  it('should normalize hyphens', () => {
    const standard = 'word-word'
    const enDash = 'word–word'
    const emDash = 'word—word'

    expect(normalizeString(enDash)).to.equal(standard)
    expect(normalizeString(emDash)).to.equal(standard)
  })

  it('should remove diacritical marks', () => {
    const standard = 'cafe naive fiance cooperate jalapeno'
    const diacriticalMarks = 'café naïve fiancé coöperate jalapeño'

    expect(normalizeString(diacriticalMarks)).to.equal(standard)
  })

  it('should normalize ellipsis', () => {
    const standard = 'word...'
    const ellipsis = 'word…'

    expect(normalizeString(ellipsis)).to.equal(standard)
  })

  it('should normalize spaces', () => {
    const standard = 'a sentence with spaces'
    const tooMuchSpace = 'a  sentence         with    spaces'

    expect(normalizeString(tooMuchSpace)).to.equal(standard)
  })

  it('should convert to lowercase', () => {
    const standard = 'word'
    const capitalized = 'Word'

    expect(normalizeString(capitalized)).to.equal(standard)
  })
})
