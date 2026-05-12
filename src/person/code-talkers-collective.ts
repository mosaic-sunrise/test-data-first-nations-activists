import type { Person } from '@mosaic-code/test-data-factory';

export default {
  id: "code-talkers-collective",
  fullName: "Code Talkers (Collective)",
  dateOfBirth: new Date("1920-01-01T00:00:00.000Z"),
  pronouns: "they/them",
  bio: "The Navajo Code Talkers served as communications specialists in the U.S. Marine Corps during World War II, using their native language to transmit military messages that Japanese cryptographers never broke. Recruited from the same communities that federal boarding schools had punished for speaking Navajo, these Marines transformed a language the government had tried to eradicate into an invaluable military asset. Beyond the Navajo, Code Talkers from the Choctaw, Cherokee, Lakota, and other nations served in both World Wars, though their contributions went unrecognized for decades due to military secrecy. Their service highlighted a painful irony: Indigenous peoples defending a nation that continued to deny them full citizenship and systematically attacked their cultures.",
  email: "codetalkers@navajo.test",
  phone: "+1-555-0131",
  picture: null,
  tags: [
    "Navajo",
    "Code-Talkers",
    "World-War-II",
    "Marines",
  ],
  groupMemberships: [],
  reference: "https://en.wikipedia.org/wiki/Code_talker",
  address: {
  street: "3131 Test Street",
  city: "Window Rock",
  state: "Arizona",
  country: "United States",
  zipCode: "86515",
},
  quote: "The Navajo language was our weapon.",
  quoteReference: "https://en.wikipedia.org/wiki/Code_talker",
} satisfies Person;
