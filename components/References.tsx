const SECTIONS = [
  {
    title: "Scripture Translation",
    color: "amber",
    items: [
      {
        name: "English Standard Version (ESV)",
        detail: "Crossway, 2001 (text edition 2016)",
        note: "All scripture quotations used in summaries and notes are from the ESV unless otherwise indicated. The ESV is an essentially literal translation aiming for word-for-word accuracy while maintaining readability.",
        url: "https://www.crossway.org/esv/",
      },
      {
        name: "BibleGateway.com",
        detail: "Scripture links open ESV passages at BibleGateway",
        note: "All scripture reference badges in this app link to BibleGateway using the ESV. You can change the version on BibleGateway after following the link.",
        url: "https://www.biblegateway.com",
      },
    ],
  },
  {
    title: "Dating & Chronology",
    color: "blue",
    items: [
      {
        name: "Edwin R. Thiele",
        detail: "The Mysterious Numbers of the Hebrew Kings (3rd ed., Kregel, 1983)",
        note: "The most comprehensive synchronization of Hebrew and Assyrian king lists. The standard reference for dating the divided monarchy period.",
        url: null,
      },
      {
        name: "Kenneth A. Kitchen",
        detail: "On the Reliability of the Old Testament (Eerdmans, 2003)",
        note: "Landmark archaeological defense of Old Testament historicity. Primary reference for Bronze Age and Iron Age dating, Egyptian synchronisms, and the Exodus/Conquest chronology.",
        url: null,
      },
      {
        name: "Eugene H. Merrill",
        detail: "Kingdom of Priests: A History of Old Testament Israel (Baker, 1987)",
        note: "Comprehensive Old Testament history with detailed chronological discussions. Uses the early Exodus date (1446 BC) from 1 Kings 6:1.",
        url: null,
      },
      {
        name: "Harold W. Hoehner",
        detail: "Chronological Aspects of the Life of Christ (Zondervan, 1977)",
        note: "The standard evangelical reference for New Testament chronology, including the birth of Christ, the beginning of His ministry, and the crucifixion date.",
        url: null,
      },
      {
        name: "Rainer Riesner",
        detail: "Paul's Early Period (Eerdmans, 1998)",
        note: "Detailed chronological study of Paul's life from conversion through the early missionary journeys, anchored by the Gallio inscription from Delphi.",
        url: null,
      },
    ],
  },
  {
    title: "Old Testament Background & Commentary",
    color: "emerald",
    items: [
      {
        name: "Gordon J. Wenham",
        detail: "Genesis 1–15; Genesis 16–50 (Word Biblical Commentary, 1987, 1994)",
        note: "The standard scholarly commentary on Genesis. Primary reference for patriarchal narratives, dating, and ancient Near Eastern background.",
        url: null,
      },
      {
        name: "Victor P. Hamilton",
        detail: "The Book of Genesis (NICOT, Eerdmans, 1990, 1995)",
        note: "Thorough exegetical commentary on Genesis, particularly strong on textual and theological analysis of the patriarchal period.",
        url: null,
      },
      {
        name: "Nahum Sarna",
        detail: "Genesis; Exodus (JPS Torah Commentary, 1989, 1991)",
        note: "Rich commentary on Genesis and Exodus with particular attention to ancient Near Eastern parallels and the literary artistry of the text.",
        url: null,
      },
      {
        name: "Daniel I. Block",
        detail: "Judges, Ruth (NAC, Broadman & Holman, 1999)",
        note: "Comprehensive commentary on Judges and Ruth. Primary reference for the Judges period, the Judges cycle pattern, and individual judge accounts.",
        url: null,
      },
      {
        name: "John Bright",
        detail: "A History of Israel (4th ed., Westminster John Knox, 2000)",
        note: "Classic history of Israel covering the entire biblical period. Used for general historical context and the late Exodus date alternative.",
        url: null,
      },
      {
        name: "James A. Hoffmeier",
        detail: "Israel in Egypt (Oxford, 1996); Ancient Israel in Sinai (Oxford, 2005)",
        note: "Detailed archaeological and historical defense of the Exodus and wilderness accounts from an Egyptologist's perspective.",
        url: null,
      },
      {
        name: "Tremper Longman III",
        detail: "Daniel (NIVAC, Zondervan, 1999); Jeremiah, Lamentations (NIBCOT, Hendrickson, 2008)",
        note: "Accessible yet scholarly commentaries on Daniel and Jeremiah. Primary references for the exile period events and Jeremiah's life.",
        url: null,
      },
      {
        name: "Derek Kidner",
        detail: "Ezra and Nehemiah (TOTC, IVP, 1979); Psalms 1–72; Psalms 73–150 (TOTC, IVP, 1973)",
        note: "Concise and insightful commentaries on Ezra-Nehemiah and the Psalms. Used for the return period and David's life.",
        url: null,
      },
    ],
  },
  {
    title: "New Testament Background & Commentary",
    color: "violet",
    items: [
      {
        name: "D. A. Carson",
        detail: "The Gospel According to John (PILLAR, Eerdmans, 1991); Matthew (EBC, Zondervan, 1984)",
        note: "Leading evangelical New Testament scholar. Primary reference for gospel chronology, the Triumphal Entry, the Last Supper, and Passion Week events.",
        url: null,
      },
      {
        name: "R. T. France",
        detail: "The Gospel of Mark (NIGTC, Eerdmans, 2002)",
        note: "Definitive scholarly commentary on Mark. Used for Jesus' ministry chronology and passion narrative.",
        url: null,
      },
      {
        name: "Eckhard J. Schnabel",
        detail: "Early Christian Mission, 2 vols. (IVP, 2004)",
        note: "The most comprehensive study of Paul's missionary journeys available, covering every city, date, and route in detail.",
        url: null,
      },
      {
        name: "John Nolland",
        detail: "Luke 1–9:20; Luke 9:21–18:34; Luke 18:35–24:53 (WBC, Word, 1989–1993)",
        note: "Detailed commentary on Luke. Primary reference for Luke's historical notices, the birth narratives, and the baptism/temptation of Jesus.",
        url: null,
      },
    ],
  },
  {
    title: "Typology & Biblical Theology",
    color: "rose",
    items: [
      {
        name: "Graeme Goldsworthy",
        detail: "According to Plan (IVP, 1991); Gospel and Kingdom (Paternoster, 1981)",
        note: "Foundational works in biblical theology tracing the kingdom-of-God theme from creation to new creation. Foundational for understanding the typological structure of redemptive history.",
        url: null,
      },
      {
        name: "G. K. Beale",
        detail: "A New Testament Biblical Theology (Baker, 2011); The Temple and the Church's Mission (IVP, 2004)",
        note: "Leading scholar in New Testament use of the Old Testament. Primary reference for typology, temple theology, and the fulfillment structure throughout this app.",
        url: null,
      },
      {
        name: "Edmund P. Clowney",
        detail: "The Unfolding Mystery: Discovering Christ in the Old Testament (NavPress, 1988)",
        note: "Accessible introduction to Christocentric reading of the Old Testament. The typology notes in this app draw on Clowney's approach to seeing Christ in every period.",
        url: null,
      },
      {
        name: "Thomas R. Schreiner",
        detail: "New Testament Theology (Baker, 2008); The King in His Beauty (Baker, 2013)",
        note: "Comprehensive biblical theology integrating both Testaments. Used for theological framing of the Davidic covenant, the New Covenant, and eschatology.",
        url: null,
      },
    ],
  },
  {
    title: "Archaeology & Ancient Near East",
    color: "orange",
    items: [
      {
        name: "Alfred J. Hoerth",
        detail: "Archaeology and the Old Testament (Baker, 1998)",
        note: "Survey of the major archaeological finds relevant to Old Testament history. Used for world context notes throughout the patriarchal, Exodus, and conquest sections.",
        url: null,
      },
      {
        name: "Bryant G. Wood",
        detail: "Various articles in the Biblical Archaeology Review and the Associates for Biblical Research",
        note: "Wood's work on the archaeology of Jericho and the proposed identification of Tall el-Hammam with Sodom is referenced in the Sodom event.",
        url: null,
      },
      {
        name: "Craig S. Keener",
        detail: "The IVP Bible Background Commentary: New Testament (IVP, 1993)",
        note: "Detailed Greco-Roman background for New Testament passages. Used for world context notes in the New Testament period events.",
        url: null,
      },
    ],
  },
  {
    title: "General & Study Commentaries",
    color: "indigo",
    items: [
      {
        name: "William MacDonald",
        detail: "Believer's Bible Commentary (Thomas Nelson, 1995; rev. ed. 2016)",
        note: "A comprehensive one-volume commentary on the entire Bible from a dispensational, Brethren perspective. Valued for its accessibility, devotional depth, and consistent Christ-centered reading of both Testaments. A primary influence on the theological tone and summary language throughout this app.",
        url: null,
      },
      {
        name: "John MacArthur",
        detail: "The MacArthur Bible Commentary (Thomas Nelson, 2005)",
        note: "A single-volume commentary distilled from MacArthur's decades of expositional preaching through the entire Bible. Reflects a Reformed dispensationalist hermeneutic with strong emphasis on grammatical-historical interpretation. Used particularly for event summaries, key theological notes, and cross-testament connections.",
        url: "https://www.gty.org",
      },
      {
        name: "Michael Rydelnik & Michael Vanlaningham (eds.)",
        detail: "The Moody Bible Commentary (Moody Publishers, 2014)",
        note: "A thorough evangelical one-volume commentary produced by faculty of Moody Bible Institute. Combines technical scholarship with pastoral application. Particularly strong on Messianic prophecy, Old Testament backgrounds, and the Jewish context of the New Testament. Used as a cross-reference for event summaries and typological notes.",
        url: null,
      },
      {
        name: "Wayne Grudem",
        detail: "Systematic Theology (Crossway, 1994; 2nd ed. 2020)",
        note: "The standard evangelical systematic theology text. While not a biblical commentary, Grudem's theological categories — particularly his treatment of Scripture, covenant, eschatology, and the nature of Christ — inform the theological framing used throughout this app. His positions represent the Reformed evangelical consensus this timeline is built to reflect.",
        url: null,
      },
    ],
  },
  {
    title: "A Note on Dates",
    color: "stone",
    items: [
      {
        name: "Date ranges are approximate",
        detail: "Many events cannot be dated precisely",
        note: "Biblical chronology involves genuine scholarly debate. Where multiple credible positions exist (e.g., early vs. late Exodus date), the app presents both and explains the reasoning for each. Dates marked with ~ indicate approximations.",
        url: null,
      },
      {
        name: "BC/AD convention",
        detail: "Used throughout for consistency",
        note: "This app uses BC (Before Christ) and AD (Anno Domini) rather than BCE/CE for consistency with most of the referenced sources.",
        url: null,
      },
      {
        name: "This is a work in progress",
        detail: "Content is being added regularly",
        note: "The goal is to eventually include every biblical story and character. If you notice an error, a missing event, or a questionable date, the scholarly sources listed here are the best place to investigate further.",
        url: null,
      },
    ],
  },
  {
    title: "Theological Framework & AI Disclosure",
    color: "amber",
    items: [
      {
        name: "Theological Tradition",
        detail: "Conservative evangelical · grammatical-historical hermeneutic",
        note: "The interpretive framework underlying this timeline reflects a conservative evangelical theology consistent with the tradition of Wayne Grudem, John MacArthur, and William MacDonald. This tradition is characterized by a high view of Scripture as the inerrant and infallible Word of God, the grammatical-historical method of interpretation, a Christ-centered reading of the Old Testament, and a commitment to the unity of both Testaments in revealing one redemptive story. Where interpretive choices were made — in typology, theological summary, and event framing — these commitments have guided those decisions.",
        url: null,
      },
      {
        name: "AI-Assisted Content",
        detail: "Generated with Claude (Anthropic) · theologian-specified framework",
        note: "The summaries, typological connections, world context notes, and event descriptions in this application were generated with the assistance of Claude, an AI model by Anthropic. The AI was explicitly instructed to operate within the theological framework described above — reflecting the positions of Grudem, MacArthur, MacDonald, and scholars of similar conviction — rather than presenting a theologically neutral or pluralist perspective. All generated content should be verified against the primary sources listed in these references. Scripture remains the final authority; these notes are study aids, not substitutes for reading the text itself.",
        url: null,
      },
    ],
  },
]

const COLOR_MAP: Record<string, { header: string; badge: string; dot: string }> = {
  amber: {
    header: "bg-amber-50 border-amber-100",
    badge: "bg-amber-100 text-amber-800",
    dot: "bg-amber-400",
  },
  blue: {
    header: "bg-blue-50 border-blue-100",
    badge: "bg-blue-100 text-blue-800",
    dot: "bg-blue-400",
  },
  emerald: {
    header: "bg-emerald-50 border-emerald-100",
    badge: "bg-emerald-100 text-emerald-800",
    dot: "bg-emerald-400",
  },
  violet: {
    header: "bg-violet-50 border-violet-100",
    badge: "bg-violet-100 text-violet-800",
    dot: "bg-violet-400",
  },
  rose: {
    header: "bg-rose-50 border-rose-100",
    badge: "bg-rose-100 text-rose-800",
    dot: "bg-rose-400",
  },
  orange: {
    header: "bg-orange-50 border-orange-100",
    badge: "bg-orange-100 text-orange-800",
    dot: "bg-orange-400",
  },
  indigo: {
    header: "bg-indigo-50 border-indigo-100",
    badge: "bg-indigo-100 text-indigo-800",
    dot: "bg-indigo-400",
  },
  stone: {
    header: "bg-stone-50 border-stone-100",
    badge: "bg-stone-100 text-stone-700",
    dot: "bg-stone-400",
  },
}

export default function References() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      {SECTIONS.map((section) => {
        const c = COLOR_MAP[section.color]
        return (
          <div
            key={section.title}
            className="rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden"
          >
            {/* Section header */}
            <div className={`${c.header} border-b px-5 py-3.5 flex items-center gap-2`}>
              <div className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
              <h2 className="text-sm font-bold text-stone-800">{section.title}</h2>
            </div>

            {/* Items */}
            <div className="divide-y divide-stone-100">
              {section.items.map((item) => (
                <div key={item.name} className="px-5 py-4">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1.5">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-stone-900 hover:underline"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-stone-900">
                        {item.name}
                      </span>
                    )}
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>
                      {item.detail}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
