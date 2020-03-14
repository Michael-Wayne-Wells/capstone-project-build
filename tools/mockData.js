const owasp = [
  {
    name: "Injection",
    rank: 1,
    description:
      "Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query. The attacker’s hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization.",
    content: [
      [
        "Threat Agents/Attack Vectors:",
        "Almost any source of data can be an injection vector, environment variables, parameters, external and internal web services, and all types of users. Injection flaws occur when an attacker can send hostile data to an interpreter."
      ],
      [
        "Security Weakness:",
        "Injection flaws are very prevalent, particularly in legacy code. Injection vulnerabilities are often found in SQL, LDAP, XPath, or NoSQL queries, OS commands, XML parsers, SMTP headers, expression languages, and ORM queries. Injection flaws are easy to discover when examining code. Scanners and fuzzers can help attackers find injection flaws."
      ],
      [
        "Impacts:",
        "Injection can result in data loss, corruption, or disclosure to unauthorized parties, loss of accountability, or denial of access. Injection can sometimes lead to complete host takeover. The business impact depends on the needs of the application and data."
      ],
      ["An application is vulnerable to attack when:", ""],
      [
        ".",
        "User-supplied data is not validated, filtered, or sanitized by the application. Dynamic queries or non-parameterized calls without context-aware escaping are used directly in the interpreter."
      ],
      [
        ".",
        "Dynamic queries or non-parameterized calls without context-aware escaping are used directly in the interpreter."
      ],
      [
        ".",
        "Hostile data is used within object-relational mapping (ORM) search parameters to extract additional, sensitive records"
      ],
      [
        ".",
        "Hostile data is directly used or concatenated, such that the SQL or command contains both structure and hostile data in dynamic queries, commands, or stored procedures."
      ],
      ["How to Prevent", ""],
      [
        "The preferred option",
        "is to use a safe API, which avoids the use of the interpreter entirely or provides a parameterized interface, or migrate to use Object Relational Mapping Tools (ORMs). Note: Even when parameterized, stored procedures can still introduce SQL injection if PL/SQL or T-SQL concatenates queries and data, or executes hostile data with EXECUTE IMMEDIATE or exec()."
      ],
      [
        "Use positive or “whitelist” server-side input validation.",
        "This is not a complete defense as many applications require special characters, such as text areas or APIs for mobile applications.For any residual dynamic queries, escape special characters using the specific escape syntax for that interpreter. Note: SQL structure such as table names, column names, and so on cannot be escaped, and thus user-supplied structure names are dangerous. This is a common issue in report-writing software."
      ],
      [
        "Use LIMIT ",
        "and other SQL controls within queries to prevent mass disclosure of records in case of SQL injection."
      ]
    ]
  },
  {
    name: "Broken Authentication & Session Management",
    rank: 2,
    description:
      "Application functions related to authentication and session management are often implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users’ identities temporarily or permanently.",
    content: [
      [
        "Threat Agents/Attack Vectors:",
        "Attackers have access to hundreds of millions of valid username and password combinations for credential stuffing, default administrative account lists, automated brute force, and dictionary attack tools. Session management attacks are well understood, particularly in relation to unexpired session tokens."
      ],
      [
        "Security Weakness:",
        "The prevalence of broken authentication is widespread due to the design and implementation of most identity and access controls. Session management is the bedrock of authentication and access controls, and is present in all stateful applications. Attackers can detect broken authentication using manual means and exploit them using automated tools with password lists and dictionary attacks."
      ],
      [
        "Impacts:",
        "Attackers have to gain access to only a few accounts, or just one admin account to compromise the system. Depending on the domain of the application, this may allow money laundering, social security fraud, and identity theft, or disclose legally protected highly sensitive information."
      ]
    ]
  },
  {
    name: "Cross-Site Scripting (XSS))",
    rank: 3,
    description:
      "Many web applications and APIs do not properly protect sensitive data, such as financial, healthcare, and PII. Attackers may steal or modify such weakly protected data to conduct credit card fraud, identity theft, or other crimes. Sensitive data may be compromised without extra protection, such as encryption at rest or in transit, and requires special precautions when exchanged with the browser.",
    content: [
      [
        "Threat Agents/Attack Vectors:",
        "Rather than directly attacking crypto, attackers steal keys, execute man-in-the-middle attacks, or steal clear text data off the server, while in transit, or from the user’s client, e.g. browser. A manual attack is generally required. Previously retrieved password databases could be brute forced by Graphics Processing Units (GPUs)."
      ],
      [
        "Security Weakness:",
        "Over the last few years, this has been the most common impactful attack. The most common flaw is simply not encrypting sensitive data. When crypto is employed, weak key generation and management, and weak algorithm, protocol and cipher usage is common, particularly for weak password hashing storage techniques. For data in transit, server side weaknesses are mainly easy to detect, but hard for data at rest."
      ],
      [
        "Impacts:",
        "Failure frequently compromises all data that should have been protected. Typically, this information includes sensitive personal information (PII) data such as health records, credentials, personal data, and credit cards, which often require protection as defined by laws or regulations such as the EU GDPR or local privacy laws."
      ]
    ]
  },
  {
    name: "Insecure Direct Object References",
    rank: 4,
    description:
      "Many older or poorly configured XML processors evaluate external entity references within XML documents. External entities can be used to disclose internal files using the file URI handler, internal file shares, internal port scanning, remote code execution, and denial of service attacks.",
    content: [
      [
        "Threat Agents/Attack Vectors:",
        "Attackers can exploit vulnerable XML processors if they can upload XML or include hostile content in an XML document, exploiting vulnerable code, dependencies or integrations."
      ],
      [
        "Security Weakness:",
        "By default, many older XML processors allow specification of an external entity, a URI that is dereferenced and evaluated during XML processing. SAST tools can discover this issue by inspecting dependencies and configuration. DAST tools require additional manual steps to detect and exploit this issue. Manual testers need to be trained in how to test for XXE, as it not commonly tested as of 2017."
      ],
      [
        "Impacts:",
        "These flaws can be used to extract data, execute a remote request from the server, scan internal systems, perform a denial-of-service attack, as well as execute other attacks. The business impact depends on the protection needs of all affected application and data."
      ]
    ]
  },
  {
    name: "Security Misconfiguration",
    rank: 5,
    description:
      "Restrictions on what authenticated users are allowed to do are often not properly enforced. Attackers can exploit these flaws to access unauthorized functionality and/or data, such as access other users’ accounts, view sensitive files, modify other users’ data, change access rights, etc.",
    content: [
      [
        "Threat Agents/Attack Vectors:",
        "Exploitation of access control is a core skill of attackers. SAST and DAST tools can detect the absence of access control but cannot verify if it is functional when it is present. Access control is detectable using manual means, or possibly through automation for the absence of access controls in certain frameworks."
      ],
      [
        "Security Weakness:",
        "Access control weaknesses are common due to the lack of automated detection, and lack of effective functional testing by application developers. Access control detection is not typically amenable to automated static or dynamic testing. Manual testing is the best way to detect missing or ineffective access control, including HTTP method (GET vs PUT, etc), controller, direct object references, etc."
      ],
      [
        "Impacts:",
        "The technical impact is attackers acting as users or administrators, or users using privileged functions, or creating, accessing, updating or deleting every record. The business impact depends on the protection needs of the application and data."
      ]
    ]
  },
  {
    name: "Sensitive Data Exposure",
    rank: 6,
    description:
      "Security misconfiguration is the most commonly seen issue. This is commonly a result of insecure default configurations, incomplete or ad hoc configurations, open cloud storage, misconfigured HTTP headers, and verbose error messages containing sensitive information. Not only must all operating systems, frameworks, libraries, and applications be securely configured, but they must be patched/upgraded in a timely fashion.",
    content: [
      [
        "Threat Agents/Attack Vectors: ",
        "Attackers will often attempt to exploit unpatched flaws or access default accounts, unused pages, unprotected files and directories, etc to gain unauthorized access or knowledge of the system."
      ],
      [
        "Security Weakness:",
        "Security misconfiguration can happen at any level of an application stack, including the network services, platform, web server, application server, database, frameworks, custom code, and pre-installed virtual machines, containers, or storage. Automated scanners are useful for detecting misconfigurations, use of default accounts or configurations, unnecessary services, legacy options, etc."
      ],
      [
        "Impacts:",
        "Such flaws frequently give attackers unauthorized access to some system data or functionality. Occasionally, such flaws result in a complete system compromise. The business impact depends on the protection needs of the application and data."
      ]
    ]
  },
  {
    name: "Missing Function Level Access Control",
    rank: 7,
    description:
      "XSS flaws occur whenever an application includes untrusted data in a new web page without proper validation or escaping, or updates an existing web page with user-supplied data using a browser API that can create HTML or JavaScript. XSS allows attackers to execute scripts in the victim’s browser which can hijack user sessions, deface web sites, or redirect the user to malicious sites.",
    content: [
      [
        "Threat Agents/Attack Vectors:",
        "Automated tools can detect and exploit all three forms of XSS, and there are freely available exploitation frameworks."
      ],
      [
        "Security Weakness:",
        "XSS is the second most prevalent issue in the OWASP Top 10, and is found in around two thirds of all applications. Automated tools can find some XSS problems automatically, particularly in mature technologies such as PHP, J2EE / JSP, and ASP.NET."
      ],
      [
        "Impacts:",
        "The impact of XSS is moderate for reflected and DOM XSS, and severe for stored XSS, with remote code execution on the victim’s browser, such as stealing credentials, sessions, or delivering malware to the victim."
      ]
    ]
  },
  {
    name: "Cross-Site Request Forgery (CSRF)",
    rank: 8,
    description:
      "Insecure deserialization often leads to remote code execution. Even if deserialization flaws do not result in remote code execution, they can be used to perform attacks, including replay attacks, injection attacks, and privilege escalation attacks.",
    content: [
      [
        "Threat Agents/Attack Vectors:",
        "Exploitation of deserialization is somewhat difficult, as off the shelf exploits rarely work without changes or tweaks to the underlying exploit code."
      ],
      [
        "Security Weakness:",
        "This issue is included in the Top 10 based on an industry survey and not on quantifiable data. Some tools can discover deserialization flaws, but human assistance is frequently needed to validate the problem. It is expected that prevalence data for deserialization flaws will increase as tooling is developed to help identify and address it."
      ],
      [
        "Impacts:",
        "The impact of deserialization flaws cannot be overstated. These flaws can lead to remote code execution attacks, one of the most serious attacks possible. The business impact depends on the protection needs of the application and data."
      ]
    ]
  },
  {
    name: "Using Component with Known Vulnerabilities",
    rank: 9,
    description:
      "Components, such as libraries, frameworks, and other software modules, run with the same privileges as the application. If a vulnerable component is exploited, such an attack can facilitate serious data loss or server takeover. Applications and APIs using components with known vulnerabilities may undermine application defenses and enable various attacks and impacts.",
    content: [
      [
        "Threat Agents/Attack Vectors:",
        "While it is easy to find already-written exploits for many known vulnerabilities, other vulnerabilities require concentrated effort to develop a custom exploit."
      ],
      [
        "Security Weakness:",
        "Prevalence of this issue is very widespread. Component-heavy development patterns can lead to development teams not even understanding which components they use in their application or API, much less keeping them up to date. Some scanners such as retire.js help in detection, but determining exploitability requires additional effort."
      ],
      [
        "Impacts:",
        "While some known vulnerabilities lead to only minor impacts, some of the largest breaches to date have relied on exploiting known vulnerabilities in components. Depending on the assets you are protecting, perhaps this risk should be at the top of the list."
      ]
    ]
  },
  {
    name: "Unvalidated Redirects and Forwards",
    rank: 10,
    description:
      "Insufficient logging and monitoring, coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain persistence, pivot to more systems, and tamper, extract, or destroy data. Most breach studies show time to detect a breach is over 200 days, typically detected by external parties rather than internal processes or monitoring.",
    content: [
      [
        "Threat Agents/Attack Vectors:",
        "Exploitation of insufficient logging and monitoring is the bedrock of nearly every major incident. Attackers rely on the lack of monitoring and timely response to achieve their goals without being detected."
      ],
      [
        "Security Weakness:",
        "This issue is included in the Top 10 based on an industry survey. One strategy for determining if you have sufficient monitoring is to examine the logs following penetration testing. The testers’ actions should be recorded sufficiently to understand what damages they may have inflicted."
      ],
      [
        "Impacts:",
        "Most successful attacks start with vulnerability probing. Allowing such probes to continue can raise the likelihood of successful exploit to nearly 100%. In 2016, identifying a breach took an average of 191 days – plenty of time for damage to be inflicted."
      ]
    ]
  }
];
module.exports = {
  owasp
};
