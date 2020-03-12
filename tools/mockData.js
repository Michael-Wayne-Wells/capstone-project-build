const owasp = [
  {
    name: "Injection",
    rank: 1,
    description:
      "Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query. The attacker’s hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization.",
    content: ["test", "test"]
  },
  {
    name: "Broken Authentication & Session Management",
    rank: 2,
    description:
      "Application functions related to authentication and session management are often implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users’ identities temporarily or permanently.",
    content: ["test", "test"]
  },
  {
    name: "Cross-Site Scripting (XSS))",
    rank: 3,
    description:
      "Many web applications and APIs do not properly protect sensitive data, such as financial, healthcare, and PII. Attackers may steal or modify such weakly protected data to conduct credit card fraud, identity theft, or other crimes. Sensitive data may be compromised without extra protection, such as encryption at rest or in transit, and requires special precautions when exchanged with the browser.",
    content: ["test", "test"]
  },
  {
    name: "Insecure Direct Object References",
    rank: 4,
    description:
      "Many older or poorly configured XML processors evaluate external entity references within XML documents. External entities can be used to disclose internal files using the file URI handler, internal file shares, internal port scanning, remote code execution, and denial of service attacks.",
    content: ["test", "test"]
  },
  {
    name: "Security Misconfiguration",
    rank: 5,
    description:
      "Restrictions on what authenticated users are allowed to do are often not properly enforced. Attackers can exploit these flaws to access unauthorized functionality and/or data, such as access other users’ accounts, view sensitive files, modify other users’ data, change access rights, etc.",
    content: ["test", "test"]
  },
  {
    name: "Sensitive Data Exposure",
    rank: 6,
    description:
      "Security misconfiguration is the most commonly seen issue. This is commonly a result of insecure default configurations, incomplete or ad hoc configurations, open cloud storage, misconfigured HTTP headers, and verbose error messages containing sensitive information. Not only must all operating systems, frameworks, libraries, and applications be securely configured, but they must be patched/upgraded in a timely fashion.",
    content: ["test", "test"]
  },
  {
    name: "Missing Function Level Access Control",
    rank: 7,
    description:
      "XSS flaws occur whenever an application includes untrusted data in a new web page without proper validation or escaping, or updates an existing web page with user-supplied data using a browser API that can create HTML or JavaScript. XSS allows attackers to execute scripts in the victim’s browser which can hijack user sessions, deface web sites, or redirect the user to malicious sites.",
    content: ["test", "test"]
  },
  {
    name: "Cross-Site Request Forgery (CSRF)",
    rank: 8,
    description:
      "Insecure deserialization often leads to remote code execution. Even if deserialization flaws do not result in remote code execution, they can be used to perform attacks, including replay attacks, injection attacks, and privilege escalation attacks.",
    content: ["test", "test"]
  },
  {
    name: "Using Component with Known Vulnerabilities",
    rank: 9,
    description:
      "Components, such as libraries, frameworks, and other software modules, run with the same privileges as the application. If a vulnerable component is exploited, such an attack can facilitate serious data loss or server takeover. Applications and APIs using components with known vulnerabilities may undermine application defenses and enable various attacks and impacts.",
    content: ["test", "test"]
  },
  {
    name: "Unvalidated Redirects and Forwards",
    rank: 10,
    description:
      "Insufficient logging and monitoring, coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain persistence, pivot to more systems, and tamper, extract, or destroy data. Most breach studies show time to detect a breach is over 200 days, typically detected by external parties rather than internal processes or monitoring.",
    content: ["test", "test"]
  }
];
module.exports = {
  owasp
};