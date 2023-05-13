// https://leetcode.com/problems/unique-email-addresses/

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const uniqueEmails = new Set()

  for (const email of emails) {
    let [name, domain] = email.split('@')
    name = name.split('+')[0].replace(/[.]/g, '')

    uniqueEmails.add(`${name}@${domain}`)
  }

  return uniqueEmails.size
};