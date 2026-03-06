import { BiblicalPeriod } from "@/types/timeline"

export interface Period {
  id: BiblicalPeriod
  label: string
  shortLabel: string
  description: string
  approximateDateLabel: string
  color: {
    dot: string
    text: string
    badge: string
    panel: string
    border: string
    accent: string
  }
}

export const periods: Period[] = [
  {
    id: "creation",
    label: "Creation",
    shortLabel: "Creation",
    description:
      "God creates the heavens and the earth in six days, forms man in His image, and establishes the moral order of the world. The Fall of Man introduces sin, death, and the first promise of redemption.",
    approximateDateLabel: "~4004 BC",
    color: {
      dot: "bg-amber-400",
      text: "text-amber-700",
      badge: "bg-amber-100 text-amber-800",
      panel: "bg-amber-50",
      border: "border-amber-200",
      accent: "bg-amber-400",
    },
  },
  {
    id: "pre-flood",
    label: "Pre-Flood World",
    shortLabel: "Pre-Flood",
    description:
      "Mankind multiplies across the earth, but wickedness increases until God determines to judge the world with a global flood, saving only righteous Noah and his family.",
    approximateDateLabel: "~3800–2349 BC",
    color: {
      dot: "bg-orange-400",
      text: "text-orange-700",
      badge: "bg-orange-100 text-orange-800",
      panel: "bg-orange-50",
      border: "border-orange-200",
      accent: "bg-orange-400",
    },
  },
  {
    id: "post-flood-patriarchs",
    label: "Post-Flood & Patriarchs",
    shortLabel: "Patriarchs",
    description:
      "Noah's descendants scatter from Babel across the earth. God calls Abraham out of Ur to father a covenant people through whom all nations will be blessed.",
    approximateDateLabel: "~2349–1446 BC",
    color: {
      dot: "bg-yellow-500",
      text: "text-yellow-700",
      badge: "bg-yellow-100 text-yellow-800",
      panel: "bg-yellow-50",
      border: "border-yellow-200",
      accent: "bg-yellow-500",
    },
  },
  {
    id: "exodus-conquest",
    label: "Exodus & Conquest",
    shortLabel: "Exodus",
    description:
      "God delivers Israel from Egyptian bondage through ten plagues and Moses, gives the Law at Sinai, and leads them into the Promised Land under Joshua.",
    approximateDateLabel: "~1446–1400 BC",
    color: {
      dot: "bg-red-400",
      text: "text-red-700",
      badge: "bg-red-100 text-red-800",
      panel: "bg-red-50",
      border: "border-red-200",
      accent: "bg-red-400",
    },
  },
  {
    id: "judges",
    label: "Period of the Judges",
    shortLabel: "Judges",
    description:
      "Israel cycles repeatedly through sin, oppression, crying out, and deliverance — each time falling deeper. The period ends with Israel demanding a king like the nations.",
    approximateDateLabel: "~1400–1050 BC",
    color: {
      dot: "bg-rose-400",
      text: "text-rose-700",
      badge: "bg-rose-100 text-rose-800",
      panel: "bg-rose-50",
      border: "border-rose-200",
      accent: "bg-rose-400",
    },
  },
  {
    id: "united-kingdom",
    label: "United Kingdom",
    shortLabel: "United Kingdom",
    description:
      "Israel united under Saul, David, and Solomon. David receives the eternal covenant. Solomon builds the Temple. The kingdom reaches its greatest territorial and economic extent.",
    approximateDateLabel: "~1050–930 BC",
    color: {
      dot: "bg-purple-400",
      text: "text-purple-700",
      badge: "bg-purple-100 text-purple-800",
      panel: "bg-purple-50",
      border: "border-purple-200",
      accent: "bg-purple-400",
    },
  },
  {
    id: "divided-kingdom",
    label: "Divided Kingdom",
    shortLabel: "Divided Kingdom",
    description:
      "The kingdom splits into Israel (North) and Judah (South). The prophets thunder warnings of coming judgment. The northern kingdom falls to Assyria in 722 BC.",
    approximateDateLabel: "~930–586 BC",
    color: {
      dot: "bg-indigo-400",
      text: "text-indigo-700",
      badge: "bg-indigo-100 text-indigo-800",
      panel: "bg-indigo-50",
      border: "border-indigo-200",
      accent: "bg-indigo-400",
    },
  },
  {
    id: "exile",
    label: "Exile",
    shortLabel: "Exile",
    description:
      "Babylon destroys Jerusalem and the Temple, carrying Judah into 70 years of captivity. Daniel, Ezekiel, and Jeremiah minister during this period of national judgment.",
    approximateDateLabel: "~586–538 BC",
    color: {
      dot: "bg-blue-400",
      text: "text-blue-700",
      badge: "bg-blue-100 text-blue-800",
      panel: "bg-blue-50",
      border: "border-blue-200",
      accent: "bg-blue-400",
    },
  },
  {
    id: "return",
    label: "Return from Exile",
    shortLabel: "Return",
    description:
      "Cyrus the Great fulfills Isaiah's prophecy and decrees Israel's return. Ezra, Nehemiah, and Zerubbabel lead the rebuilding of the Temple and Jerusalem's walls.",
    approximateDateLabel: "~538–430 BC",
    color: {
      dot: "bg-cyan-400",
      text: "text-cyan-700",
      badge: "bg-cyan-100 text-cyan-800",
      panel: "bg-cyan-50",
      border: "border-cyan-200",
      accent: "bg-cyan-400",
    },
  },
  {
    id: "intertestamental",
    label: "Intertestamental Period",
    shortLabel: "Between Testaments",
    description:
      "Four hundred years of prophetic silence between Malachi and Matthew. Alexander the Great Hellenizes the world; Rome rises to power. God sovereignly prepares the world for the Gospel.",
    approximateDateLabel: "~430–5 BC",
    color: {
      dot: "bg-teal-400",
      text: "text-teal-700",
      badge: "bg-teal-100 text-teal-800",
      panel: "bg-teal-50",
      border: "border-teal-200",
      accent: "bg-teal-400",
    },
  },
  {
    id: "jesus-ministry",
    label: "The Life & Ministry of Jesus",
    shortLabel: "Jesus' Ministry",
    description:
      "The fullness of time arrives. The eternal Son of God takes on human flesh, is born in Bethlehem, grows up in Nazareth, and begins His public ministry around age 30. He proclaims the Kingdom, teaches in parables, performs miracles, calls twelve disciples, and ultimately gives His life on the cross — rising from the dead on the third day and ascending to the Father.",
    approximateDateLabel: "~5 BC–30 AD",
    color: {
      dot: "bg-sky-400",
      text: "text-sky-700",
      badge: "bg-sky-100 text-sky-800",
      panel: "bg-sky-50",
      border: "border-sky-200",
      accent: "bg-sky-400",
    },
  },
  {
    id: "new-testament",
    label: "New Testament Era",
    shortLabel: "New Testament",
    description:
      "The Holy Spirit is poured out at Pentecost and the Church is born. The apostles carry the Gospel from Jerusalem to the ends of the earth. Paul plants churches across the Roman Empire. The New Testament letters are written, and the age of the Church begins.",
    approximateDateLabel: "~30–100 AD",
    color: {
      dot: "bg-green-400",
      text: "text-green-700",
      badge: "bg-green-100 text-green-800",
      panel: "bg-green-50",
      border: "border-green-200",
      accent: "bg-green-400",
    },
  },
  {
    id: "second-coming",
    label: "The Return of Christ",
    shortLabel: "His Return",
    description:
      "The Lord Jesus Christ will return visibly, bodily, and gloriously to judge the living and the dead, resurrect His people, and establish His eternal kingdom. The date is known only to the Father — but the promise is absolutely certain.",
    approximateDateLabel: "???",
    color: {
      dot: "bg-yellow-400",
      text: "text-yellow-700",
      badge: "bg-yellow-100 text-yellow-800",
      panel: "bg-yellow-50",
      border: "border-yellow-200",
      accent: "bg-yellow-400",
    },
  },
]

export function getPeriod(id: BiblicalPeriod): Period {
  return periods.find((p) => p.id === id)!
}
