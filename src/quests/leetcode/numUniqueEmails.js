/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function (emails) {
  let uniqueEmails = []
  emails = emails.map(mail => {
    let aEmails = mail.split('@')
    let localName = aEmails[0].split('+')[0].replace(/\./g, '')
    let domainName = aEmails[1]

    return `${localName}@${domainName}`
  })

  emails.forEach(mail => {
    if (uniqueEmails.indexOf(mail) === -1) {
      uniqueEmails.push(mail)
    }
  })
  return uniqueEmails.length
}
module.exports = numUniqueEmails