import { TimelineEvent } from "@/types/timeline"

export const events: TimelineEvent[] = [
  // ── CREATION ──────────────────────────────────────────────────────────────
  {
    id: "the-fall",
    title: "The Fall of Man",
    period: "creation",
    summary:
      "Adam and Eve, deceived by the serpent and yielding to temptation, transgressed God's single prohibition and plunged the entire human race into sin, death, and condemnation. The Fall is the explanation for every form of evil and suffering in human experience. Yet in God's curse upon the serpent came the first glimmer of the Gospel — the protevangelium of Genesis 3:15 — that the seed of the woman would one day crush the serpent's head.",
    scriptures: [
      "Genesis 3:1–24",
      "Romans 5:12–21",
      "1 Corinthians 15:21–22",
      "Romans 8:20–22",
    ],
    dateOptions: [
      {
        label: "Shortly After Creation",
        scholars: [
          "Archbishop James Ussher",
          "Henry Morris",
          "John MacArthur",
        ],
        reasoning:
          "Since Adam and Eve were commanded to multiply and fill the earth (Genesis 1:28), and Cain was conceived after the expulsion (Genesis 4:1), the Fall likely occurred within a short period after creation — weeks or months at most. Scripture does not give an exact year, only that it preceded the first conception.",
        scriptureSupport: ["Genesis 3:1–24", "Genesis 4:1"],
      },
    ],
    worldContext: [
      {
        title: "The World Before the Curse",
        approximateYear: "Shortly after ~4004 BC",
        civilization: "Pre-Fall Creation",
        notes:
          "Before the Fall, the world had no physical death, no suffering, no thorns or thistles (Genesis 3:18), and no enmity between man and animal (Genesis 1:29–30). This original perfection is the baseline from which all redemption history moves — and to which the New Creation will return and surpass (Revelation 21–22).",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "The Protevangelium: The First Gospel Promise",
        description:
          "In God's curse upon the serpent lies the seed of the entire Gospel: 'I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel' (Genesis 3:15). One born of a woman (Galatians 4:4) would be wounded by Satan (the cross), but would deliver the fatal, decisive blow to the serpent (Hebrews 2:14–15). This single verse is the root from which every subsequent covenant, prophecy, and promise grows. Spurgeon called it 'the sum and summary of the whole Bible.'",
        oldTestamentRef: "Genesis 3:15",
        newTestamentFulfillment: [
          "Galatians 4:4",
          "Hebrews 2:14–15",
          "Romans 16:20",
          "Revelation 12:9–11",
        ],
        scholars: ["John MacArthur", "William MacDonald", "Charles Spurgeon"],
      },
      {
        category: "Object",
        title: "Garments of Skin: The First Sacrifice",
        description:
          "When God clothed Adam and Eve in garments of skin (Genesis 3:21), an innocent animal had to die. This is Scripture's first sacrifice — God Himself providing a covering for sin's shame at the cost of blood. It establishes the irreversible pattern of redemption: sin requires death, atonement requires blood, and God Himself provides the substitute. Every subsequent sacrifice — from Abel to the Levitical system — pointed forward to 'the Lamb of God, who takes away the sin of the world' (John 1:29).",
        oldTestamentRef: "Genesis 3:21",
        newTestamentFulfillment: ["John 1:29", "Hebrews 9:22", "Revelation 7:14"],
        scholars: ["Henry Morris", "John MacArthur", "William MacDonald"],
      },
    ],
    subEvents: [
      {
        id: "the-temptation",
        title: "The Serpent's Temptation",
        summary:
          "The serpent (identified in Revelation 12:9 as Satan) approached Eve and began by questioning God's word: 'Did God actually say...?' He then directly contradicted God — 'You will not surely die' — and tempted Eve with the prospect of becoming like God. This is the first and paradigmatic temptation: doubting God's word, denying God's judgment, and desiring to replace God as the ultimate authority.",
        scriptures: ["Genesis 3:1-5", "2 Corinthians 11:3", "Revelation 12:9"],
        keyPeople: ["eve", "adam"],
      },
      {
        id: "the-disobedience",
        title: "The Act of Disobedience",
        summary:
          "Eve saw, desired, and ate the forbidden fruit — then gave it to Adam who was with her and he ate (Genesis 3:6). Adam's sin is the pivot of human history. Paul emphasizes it was through Adam (not merely Eve) that sin entered the world (Romans 5:12), because Adam bore the federal responsibility as head of the human race. At that moment 'the eyes of both were opened' — not to good and beauty, but to shame, exposure, and alienation.",
        scriptures: ["Genesis 3:6-7", "Romans 5:12", "1 Timothy 2:14"],
        keyPeople: ["adam", "eve"],
      },
      {
        id: "the-curses",
        title: "The Curses and the First Gospel",
        summary:
          "God came to the garden and pronounced three curses: upon the serpent (to crawl, eat dust, and have enmity with the woman's seed), upon Eve (pain in childbirth, struggle in marriage), and upon Adam (thorns, sweat, and death — 'you are dust, and to dust you shall return'). Within the curse on the serpent lies the protevangelium: the seed of the woman will crush the serpent's head. God then clothed them in animal skins — the first sacrifice — and drove them from Eden.",
        scriptures: ["Genesis 3:14-24", "Romans 8:20-22", "Galatians 4:4"],
        keyPeople: ["adam", "eve"],
      },
    ],
    keyPeople: ["adam", "eve"],
    relatedEvents: [
      { eventId: "crucifixion-resurrection", note: "The protevangelium (Gen 3:15) is fulfilled at Golgotha — the seed of the woman is wounded, but the serpent's head is crushed." },
      { eventId: "return-of-christ", note: "Every consequence of the Fall — death, the curse, broken fellowship with God — is permanently reversed at the return of Christ." },
    ],
    tags: ["adam", "eve", "fall", "sin", "serpent", "curse", "protevangelium"],
  },
  {
    id: "creation",
    title: "The Creation of the World",
    period: "creation",
    summary:
      "God created the heavens and the earth and all that is in them in six literal days, resting on the seventh. This is the foundational event of all history, establishing God's absolute sovereignty, the dignity of man made in His image, and the moral order of the created world. The historicity of Genesis 1–2 is the anchor of all subsequent biblical revelation.",
    scriptures: [
      "Genesis 1:1–2:3",
      "John 1:1–3",
      "Colossians 1:16",
      "Hebrews 11:3",
    ],
    dateOptions: [
      {
        label: "Ussher Chronology",
        yearBC: 4004,
        scholars: ["Archbishop James Ussher", "John MacArthur", "Henry Morris"],
        reasoning:
          "Calculated by adding the literal genealogical figures in Genesis 5 and 11 and cross-referencing with known biblical anchor dates. Ussher's Annals of the World (1650) placed creation at 4004 BC. This reading takes the genealogies as consecutive and complete with no generational gaps.",
        scriptureSupport: ["Genesis 5", "Genesis 11", "Luke 3:23–38"],
      },
      {
        label: "Young Earth with Genealogical Gaps",
        rangeBC: [20000, 6000],
        scholars: ["William Henry Green", "Francis Schaeffer"],
        reasoning:
          "The Hebrew word 'yalad' (begat) in genealogies can sometimes denote a more distant ancestor, as Matthew 1:1 calls Jesus the 'son of David.' This allows gaps of undetermined length in the Genesis genealogies while still affirming a literal six-day creation and a young human race.",
        scriptureSupport: ["Genesis 5", "Genesis 11", "Matthew 1:1"],
      },
      {
        label: "Old Earth / Day-Age Theory",
        scholars: ["Hugh Ross", "Gleason Archer (later works)"],
        reasoning:
          "The Hebrew 'yom' (day) can mean an indefinite period, as in Genesis 2:4 where it refers to the entire creation week. Each day represents a long geological age, reconciling the Genesis narrative with the apparent age of the universe (~13.8 billion years). This view maintains biblical authority while allowing old-earth science. MacArthur and Morris strongly oppose this interpretation.",
        scriptureSupport: ["Genesis 1", "Psalm 90:4", "2 Peter 3:8"],
      },
    ],
    worldContext: [
      {
        title: "Before Written Human History",
        approximateYear: "Pre-3200 BC",
        civilization: "Pre-Literate World",
        notes:
          "No secular historical record predates approximately 3200 BC (early Sumerian cuneiform writing). Everything before this horizon comes from Scripture and general revelation. The absence of secular corroboration does not weaken the biblical record — it simply marks the boundary of human documentation.",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "Adam: Federal Head and Type of the Second Adam",
        description:
          "Paul calls Adam 'a type of the one who was to come' (Romans 5:14). As the first federal head of humanity, Adam's one act of disobedience brought condemnation and death to all in him. Christ, the Last Adam (1 Corinthians 15:45), is the new federal head whose one act of obedience brings justification and life to all who are in Him (Romans 5:18–19). Adam was formed from dust and given a bride taken from his own side while he slept; Christ was buried in the earth and His bride — the Church — was born from His pierced side (John 19:34; Ephesians 5:31–32).",
        oldTestamentRef: "Genesis 1:26–2:25",
        newTestamentFulfillment: [
          "Romans 5:12–21",
          "1 Corinthians 15:45–49",
          "Ephesians 5:31–32",
        ],
        scholars: ["John MacArthur", "William MacDonald", "G.K. Beale"],
      },
      {
        category: "Event",
        title: "The Sabbath Rest: A Type of Salvation's Finished Work",
        description:
          "God rested on the seventh day not from exhaustion but as a declaration of completed, perfect work. The author of Hebrews uses this Sabbath rest as a type of the salvation rest that believers enter by faith — ceasing from their own striving and resting entirely in Christ's finished work (Hebrews 4:9–11). When Jesus cried 'It is finished' (John 19:30), He was echoing the completion of creation — the new creation secured by His obedience.",
        oldTestamentRef: "Genesis 2:1–3",
        newTestamentFulfillment: ["Hebrews 4:1–11", "John 19:30", "Matthew 11:28–30"],
        scholars: ["John MacArthur", "William MacDonald"],
      },
    ],
    subEvents: [
      {
        id: "creation-days-1-3",
        title: "Days 1–3: Light, Sky, and Land",
        summary:
          "On Day 1, God created light and separated it from darkness — the first act of distinction and order. On Day 2, God separated the waters above from the waters below, creating the expanse (sky). On Day 3, God gathered the waters to form seas and land, and commanded the earth to bring forth vegetation — each plant 'according to its kind.' The repetition of 'according to its kind' (ten times in Genesis 1) affirms the fixity of biological kinds — there are no evolutionary transitions between kinds.",
        scriptures: ["Genesis 1:1-13", "Psalm 33:6-9", "John 1:3"],
        keyPeople: [],
      },
      {
        id: "creation-days-4-6",
        title: "Days 4–6: Lights, Creatures, and Man",
        summary:
          "On Day 4, God created the sun, moon, and stars — not as eternal or divine entities (as pagan cosmologies claimed) but as created servants for seasons and signs. On Day 5, God filled the seas and skies with living creatures. On Day 6, God made land animals — and, as the climax of creation, formed man in His own image. Only of man does God say 'Let us make' — a deliberative act signaling the unique dignity of humanity as the image-bearer of the triune God.",
        scriptures: ["Genesis 1:14-31", "Psalm 8:3-8", "Colossians 1:16"],
        keyPeople: [],
      },
      {
        id: "creation-of-adam",
        title: "The Creation of Adam",
        summary:
          "God formed Adam from the dust of the ground and breathed into his nostrils the breath of life — a direct, personal act not used for any other creature. God placed Adam in the Garden of Eden and gave him the first commandment: tend and keep the garden, eat freely of every tree, but not of the Tree of the Knowledge of Good and Evil, 'for in the day you eat of it you shall surely die.' This was the Covenant of Works — obedience bringing life, disobedience bringing death.",
        scriptures: ["Genesis 2:7", "Genesis 2:15-17", "Romans 5:12-14", "1 Corinthians 15:45"],
        keyPeople: ["adam"],
      },
      {
        id: "creation-of-eve",
        title: "The Creation of Eve and the First Marriage",
        summary:
          "God declared it was 'not good' for Adam to be alone — the first 'not good' in creation. He caused Adam to sleep, took a rib from his side, and built it into the woman. Adam's exclamation — 'This at last is bone of my bones and flesh of my flesh' — is Scripture's first poem and expression of joyful recognition. God established marriage: one man and one woman, leaving and cleaving, becoming one flesh. Jesus cited this original design when asked about divorce (Matthew 19:4-6).",
        scriptures: ["Genesis 2:18-25", "Matthew 19:4-6", "Ephesians 5:31-32"],
        keyPeople: ["adam", "eve"],
      },
    ],
    keyPeople: ["adam", "eve"],
    relatedEvents: [
      { eventId: "incarnation", note: "The Word through whom all things were made (John 1:3) enters His own creation as a man — the Creator becomes creature." },
      { eventId: "return-of-christ", note: "The new creation perfects and surpasses the first — no more curse, no more death, God dwelling with His people forever (Revelation 21:1–5)." },
    ],
    tags: ["genesis", "creation", "adam", "eve", "covenant"],
  },

  {
    id: "global-flood",
    title: "The Global Flood",
    period: "pre-flood",
    summary:
      "God destroyed the entire earth with a global flood as judgment for mankind's wickedness, saving only Noah, his family of eight, and representatives of every kind of land creature. The Flood is pivotal to understanding geology, the fossil record, and the distribution of peoples across the earth. Christ Himself affirmed its historical reality and used it as a picture of final judgment (Matthew 24:37–39).",
    scriptures: [
      "Genesis 6:1–9:17",
      "Matthew 24:37–39",
      "1 Peter 3:20",
      "2 Peter 2:5",
      "2 Peter 3:6",
    ],
    dateOptions: [
      {
        label: "Ussher Chronology",
        yearBC: 2349,
        scholars: ["Archbishop James Ussher", "Henry Morris", "Ken Ham"],
        reasoning:
          "Based on the literal reading of the Genesis 5 genealogy — 1,656 years elapsed from Adam to the Flood, placing the event at 2349 BC when added to Ussher's 4004 BC creation date. Henry Morris's The Genesis Flood (1961) is the landmark modern defense of this global Flood chronology.",
        scriptureSupport: ["Genesis 7:6", "Genesis 5"],
      },
      {
        label: "Septuagint-Based Chronology",
        yearBC: 3298,
        scholars: ["Josephus (Antiquities of the Jews)", "Septuagint tradition"],
        reasoning:
          "The Septuagint (Greek Old Testament) adds approximately 100 years to many of the patriarchal ages in Genesis 5, pushing the Flood back to roughly 3298 BC. Josephus used the Septuagint figures in his historical works. This remains a minority view among conservative evangelicals who prefer the Masoretic text.",
        scriptureSupport: ["Genesis 7:6", "Genesis 5 (LXX)"],
      },
    ],
    worldContext: [
      {
        title: "Ancient Flood Traditions Across Cultures",
        approximateYear: "~3000–2000 BC",
        civilization: "Mesopotamia, Near East, and Global",
        notes:
          "Over 200 flood traditions exist across unconnected cultures — the Sumerian Epic of Gilgamesh, the Babylonian Atrahasis Epic, Hindu flood accounts, and Native American traditions. These are best understood as corrupted but genuine memories of the actual historical event recorded in Genesis, passed down through Noah's descendants as the nations dispersed from Babel.",
      },
      {
        title: "End of the Chalcolithic / Early Bronze Age",
        approximateYear: "~3500–2000 BC",
        civilization: "Pre-Dynastic Near East",
        notes:
          "Archaeological layers at sites like Ur and Kish show evidence of massive flood deposits. Sir Leonard Woolley's excavations at Ur uncovered an 8-foot layer of water-laid silt with no artifacts, below which lay an earlier civilization. While this may represent a local event, it illustrates how the geological memory of a great deluge is embedded in the ancient Near Eastern record.",
      },
    ],
    typology: [
      {
        category: "Object",
        title: "The Ark: One Door of Salvation",
        description:
          "The Ark had a single door (Genesis 6:16), and God Himself shut it (Genesis 7:16). All who were inside were saved; all outside perished — without exception. Jesus declared: 'I am the door. If anyone enters by me, he will be saved' (John 10:9). No one boards the ark of salvation by any other way. Peter makes the connection explicit: 'in the days of Noah... eight people were brought safely through water. Baptism... now saves you... through the resurrection of Jesus Christ' (1 Peter 3:20–21). The exclusive door of the Ark is a standing rebuke to every religion of self-salvation.",
        oldTestamentRef: "Genesis 6:16; 7:16",
        newTestamentFulfillment: ["1 Peter 3:20–21", "John 10:9", "Matthew 24:37–39"],
        scholars: ["Henry Morris", "John MacArthur", "William MacDonald"],
      },
      {
        category: "Person",
        title: "Noah: Type of Christ as Preacher of Righteousness",
        description:
          "Peter calls Noah a 'herald of righteousness' (2 Peter 2:5) — one who proclaimed God's word faithfully to an utterly resistant generation, and whose obedient work preserved a remnant through judgment. Christ likewise came as the Righteous One proclaiming repentance to a resistant world, and through His atoning work will preserve His remnant through the final judgment to come. As Noah emerged from the ark into a renewed creation, Christ rose from the tomb as 'the firstborn of the new creation' (Colossians 1:18; 2 Corinthians 5:17).",
        oldTestamentRef: "Genesis 6:9; 8:1–19",
        newTestamentFulfillment: ["2 Peter 2:5", "2 Corinthians 5:17", "Colossians 1:18"],
        scholars: ["John MacArthur", "William MacDonald"],
      },
    ],
    subEvents: [
      {
        id: "corruption-before-flood",
        title: "The World's Corruption — Why God Sent the Flood",
        summary:
          "'The LORD saw that the wickedness of man was great in the earth, and that every intention of the thoughts of his heart was only evil continually' (Genesis 6:5). God was grieved to the heart. This verse is the most complete diagnosis of total depravity before the cross — not occasional sin, not mostly evil, but every intention, continually, only evil. Some scholars see the 'sons of God' in Genesis 6:1-4 as fallen angels who produced the Nephilim; others identify them as the godly line of Seth corrupting itself with the ungodly line of Cain. In either case, the moral collapse was total and the judgment was just.",
        scriptures: ["Genesis 6:1-8", "Romans 3:10-18", "2 Peter 2:5"],
        keyPeople: ["noah"],
      },
      {
        id: "building-the-ark",
        title: "Noah Builds the Ark — 100 Years of Faith",
        summary:
          "God gave Noah precise dimensions: 300 cubits long (approximately 450 feet), 50 cubits wide, 30 cubits high — with three decks and one door. Modern naval architects have confirmed this is a stable hull design for rough seas. Noah built it in the face of a world that had never seen rain of this magnitude (Genesis 2:5-6 suggests a different pre-Flood water cycle). Hebrews says he acted 'in holy fear' — his obedience over decades condemned the world's unbelief and made him heir of righteousness (Hebrews 11:7).",
        scriptures: ["Genesis 6:9-22", "Hebrews 11:7", "1 Peter 3:20"],
        keyPeople: ["noah"],
      },
      {
        id: "flood-waters",
        title: "The Flood Waters — 40 Days and 150 Days",
        summary:
          "Rain fell 40 days and 40 nights and 'the fountains of the great deep burst forth' (Genesis 7:11) — catastrophic geological activity accompanied the rainfall. The waters rose until they covered the highest mountains by 15 cubits, and all land-breathing life outside the ark perished. The waters prevailed on the earth for 150 days. Then God 'remembered Noah' — not that He had forgotten, but that in covenantal faithfulness He acted to rescue. The ark rested on the mountains of Ararat on the 17th day of the 7th month.",
        scriptures: ["Genesis 7:11-24", "Genesis 8:1-4", "2 Peter 3:6"],
        keyPeople: ["noah"],
      },
      {
        id: "noahic-covenant",
        title: "The Noahic Covenant — God's Promise with All Creation",
        summary:
          "After Noah offered burnt offerings, God smelled the pleasing aroma and established the Noahic Covenant — an unconditional covenant with Noah, his descendants, and every living creature on earth. God promised never again to destroy all life by flood. The rainbow is the covenant sign — every time it appears, God is 'remembering' His covenant (Genesis 9:15-16). This is the only covenant in Scripture made with all humanity and all creation — it is the common grace foundation on which all subsequent history rests.",
        scriptures: ["Genesis 8:20-22", "Genesis 9:1-17", "Isaiah 54:9"],
        keyPeople: ["noah"],
      },
    ],
    keyPeople: ["noah"],
    tags: ["noah", "flood", "judgment", "covenant", "rainbow"],
  },

  {
    id: "call-of-abraham",
    title: "The Call of Abraham",
    period: "post-flood-patriarchs",
    summary:
      "God sovereignly called Abram out of Ur of the Chaldees and into the land of Canaan, establishing with him an unconditional covenant that is the backbone of all biblical redemption history. The Abrahamic Covenant (Genesis 12, 15, 17) promises land, seed, and blessing — three elements that find their ultimate fulfillment in Jesus Christ, the Seed of Abraham (Galatians 3:16). This is the hinge event of the Old Testament.",
    scriptures: [
      "Genesis 12:1–3",
      "Genesis 15:1–21",
      "Genesis 17:1–8",
      "Romans 4:1–25",
      "Galatians 3:6–18",
      "Hebrews 11:8–19",
    ],
    dateOptions: [
      {
        label: "Traditional Chronology",
        yearBC: 2091,
        scholars: [
          "Archbishop James Ussher",
          "John MacArthur",
          "Gleason Archer",
        ],
        reasoning:
          "Calculated from the Masoretic Text genealogies placing Abraham's birth approximately 292 years after the Flood (2349 BC). Abraham's departure from Haran is dated to his 75th year (Genesis 12:4), yielding a call date of approximately 2091 BC. This is the most commonly used date among conservative evangelical scholars.",
        scriptureSupport: ["Genesis 12:4", "Acts 7:2–4", "Galatians 3:17"],
      },
      {
        label: "Alternative Evangelical Chronology",
        yearBC: 2166,
        scholars: ["Edwin Thiele", "Eugene Merrill"],
        reasoning:
          "Using slightly different calculations from the Egyptian sojourn period and patriarchal overlaps, some scholars date Abraham's birth to 2166 BC — meaning the call from Haran came around 2091 BC and the covenant of Genesis 15 around 2081 BC. Eugene Merrill's Kingdom of Priests uses this framework throughout.",
        scriptureSupport: ["Genesis 11:26–32", "Genesis 12:1–4"],
      },
    ],
    worldContext: [
      {
        title: "Ur of the Chaldees — Third Dynasty of Ur",
        approximateYear: "~2112–2004 BC",
        civilization: "Mesopotamia — Ur III Dynasty",
        notes:
          "Ur was one of the most sophisticated city-states in the ancient world, with a population estimated at 65,000. Sir Leonard Woolley's excavations (1922–1934) uncovered the Royal Cemetery, a massive ziggurat to the moon god Nanna, and evidence of high literacy and trade. God called Abraham out of this advanced polytheistic culture to follow an invisible God by faith alone — a radical departure from everything he knew.",
      },
      {
        title: "The Land of Canaan — A Crossroads of Nations",
        approximateYear: "~2100–2000 BC",
        civilization: "Canaan — Early Bronze Age",
        notes:
          "Canaan sat at the geographic center of the ancient world, between Mesopotamia, Egypt, Anatolia, and Arabia. God's choice of this land for Abraham was not arbitrary — it positioned Israel at the intersection of world civilizations where the covenantal promises would be visible to all nations.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "Justification by Faith Alone — The Paradigm Case",
        description:
          "Abraham 'believed God, and it was counted to him as righteousness' (Genesis 15:6) — before circumcision (Romans 4:10), before the Mosaic Law (Galatians 3:17), and entirely apart from human merit. Paul cites this as the definitive proof that righteousness has always been reckoned by faith alone, not works: 'For if Abraham was justified by works, he has something to boast about, but not before God' (Romans 4:2). Abraham is therefore the father of all who believe — Jewish and Gentile alike (Romans 4:16–17). The Gospel Paul preached is not a New Testament innovation; God 'preached the gospel beforehand to Abraham, saying, In you shall all the nations be blessed' (Galatians 3:8).",
        oldTestamentRef: "Genesis 15:6",
        newTestamentFulfillment: [
          "Romans 4:1–25",
          "Galatians 3:6–9",
          "James 2:21–23",
        ],
        scholars: ["John MacArthur", "William MacDonald", "Martin Luther"],
      },
      {
        category: "Event",
        title: "Isaac on Moriah: God Does Not Spare His Own Son",
        description:
          "God commanded Abraham to offer his 'only son' Isaac on Mount Moriah (Genesis 22:2) — the most shattering test of faith in Scripture. Abraham obeyed, telling his servants 'we will come again to you' (Genesis 22:5), believing God would raise Isaac from the dead (Hebrews 11:19). At the last moment, the angel stopped his hand and God provided a ram caught in a thicket. At Calvary, no angel stopped the Father's hand — 'He who did not spare his own Son but gave him up for us all' (Romans 8:32). The ram was a temporary substitute; the Lord Jesus Christ is the eternal, final substitute. Charles Spurgeon called Genesis 22 'the gospel in the Old Testament.'",
        oldTestamentRef: "Genesis 22:1–18",
        newTestamentFulfillment: ["Romans 8:32", "Hebrews 11:17–19", "John 3:16"],
        scholars: ["John MacArthur", "William MacDonald", "Charles Spurgeon"],
      },
    ],
    subEvents: [
      {
        id: "abrahams-call",
        title: "The Call from Ur — Leave Everything",
        summary:
          "God appeared to Abram while he still lived in Ur (Acts 7:2-3), before his family moved to Haran. The command was radical: leave your country, your kindred, and your father's house. No map, no destination revealed up front — only the promise of a land God would show him. Hebrews says 'he went out, not knowing where he was going' (Hebrews 11:8). This is the paradigm of saving faith: responding to God's word in obedience before the evidence is complete. Abram was 75 years old when he departed from Haran (Genesis 12:4).",
        scriptures: ["Genesis 12:1-4", "Acts 7:2-3", "Hebrews 11:8"],
        keyPeople: ["abraham"],
      },
      {
        id: "abrahamic-covenant-ratified",
        title: "The Covenant of Genesis 15 — God Alone Passes Through",
        summary:
          "God confirmed His covenant with Abram through a remarkable ceremony: Abram cut animals in half and arranged the pieces, then a deep sleep fell on him and a 'dreadful and great darkness' came over him. God appeared as a smoking fire pot and flaming torch and passed between the pieces alone — a unilateral, unconditional self-oath. In ancient Near Eastern covenant ceremonies, both parties would pass between the pieces, signifying 'may it be done to me as to these animals if I break this covenant.' God alone passed through — the covenant rests entirely on His faithfulness, not Abram's. Abram believed God, and it was counted to him as righteousness (Genesis 15:6).",
        scriptures: ["Genesis 15:1-21", "Romans 4:20-22", "Galatians 3:15-18"],
        keyPeople: ["abraham"],
      },
      {
        id: "covenant-sign-circumcision",
        title: "Circumcision — The Sign of the Covenant",
        summary:
          "When Abram was 99 years old, God appeared again, changed his name to Abraham ('father of a multitude'), and established circumcision as the covenant sign. Every male in Abraham's household was to be circumcised as a sign of belonging to the covenant people. Paul carefully notes that Abraham was first justified by faith in Genesis 15, and only later received circumcision in Genesis 17 — proving that circumcision was a sign and seal of already-existing righteousness, not its cause (Romans 4:10-11). God also changed Sarai's name to Sarah and promised a son by her within a year.",
        scriptures: ["Genesis 17:1-27", "Romans 4:9-12", "Philippians 3:3"],
        keyPeople: ["abraham"],
      },
      {
        id: "binding-of-isaac",
        title: "The Binding of Isaac — The Gospel in the Old Testament",
        summary:
          "God commanded Abraham to offer his son — his only son, Isaac, whom he loved — as a burnt offering on Mount Moriah. Abraham rose early the next morning and set out, telling his servants 'we will come back to you' — Hebrews says he believed God would raise Isaac from the dead (Hebrews 11:19). As the knife was raised, the angel of the LORD stopped him. God provided a ram caught in a thicket as a substitute. Abraham named the place 'The LORD Will Provide' (Jehovah-Jireh). This is the clearest single event in the entire Old Testament typifying the Father offering the Son. Two thousand years later, on the same mountain range (2 Chronicles 3:1), no angel would stop the Father's hand.",
        scriptures: ["Genesis 22:1-19", "2 Chronicles 3:1", "Romans 8:32", "Hebrews 11:17-19"],
        keyPeople: ["abraham", "isaac"],
      },
    ],
    keyPeople: ["abraham", "isaac"],
    relatedEvents: [
      { eventId: "crucifixion-resurrection", note: "Jesus is the singular 'seed of Abraham' through whom all nations are blessed — the Abrahamic covenant finds its fulfillment at the cross (Galatians 3:16)." },
      { eventId: "pentecost", note: "The promise to bless all nations through Abraham's seed is launched into full fulfillment when the Spirit falls on Jews and Gentiles alike." },
    ],
    tags: ["abraham", "covenant", "faith", "promise", "israel"],
  },

  {
    id: "the-exodus",
    title: "The Exodus from Egypt",
    period: "exodus-conquest",
    summary:
      "God delivered His people from 430 years of Egyptian bondage through His servant Moses, demonstrating His supreme power over all the gods of Egypt through ten devastating plagues, climaxing in the Passover. The Exodus is the defining redemptive event of the Old Testament, referenced more than any other single event in the rest of Scripture. It is the supreme type of redemption — and finds its antitype in Jesus Christ, our Passover Lamb (1 Corinthians 5:7).",
    scriptures: [
      "Exodus 1–14",
      "Psalm 105:26–45",
      "Psalm 136:10–15",
      "1 Corinthians 5:7",
      "Hebrews 11:23–29",
    ],
    dateOptions: [
      {
        label: "Early Date",
        yearBC: 1446,
        scholars: [
          "John MacArthur",
          "Gleason Archer",
          "Walter Kaiser",
          "Leon Wood",
          "John J. Davis",
        ],
        reasoning:
          "Based on the literal reading of 1 Kings 6:1, which states Solomon began building the Temple 480 years after the Exodus. Solomon's 4th year is firmly anchored to ~966 BC, placing the Exodus at 1446 BC. Judges 11:26 (300 years from the conquest to Jephthah) also supports this. This places the oppressing Pharaoh as Thutmose III and the Exodus Pharaoh as Amenhotep II of Egypt's 18th Dynasty.",
        scriptureSupport: ["1 Kings 6:1", "Judges 11:26", "Acts 13:20"],
      },
      {
        label: "Late Date",
        yearBC: 1290,
        scholars: [
          "William F. Albright",
          "John Bright",
          "K.A. Kitchen",
          "James K. Hoffmeier",
        ],
        reasoning:
          "Based primarily on Exodus 1:11's mention of the city Raamses, connecting it to the Delta building campaigns of Ramesses II (reigned 1279–1213 BC). Proponents treat the 480 years in 1 Kings 6:1 as a schematic number representing 12 generations of 40 years rather than a literal figure. This is the majority view in critical scholarship, though Kitchen strongly defends the Bible's historical reliability from this date.",
        scriptureSupport: ["Exodus 1:11"],
      },
    ],
    worldContext: [
      {
        title: "New Kingdom Egypt — 18th Dynasty (Early Date context)",
        approximateYear: "~1550–1295 BC",
        civilization: "Egypt — New Kingdom",
        notes:
          "The 18th Dynasty represents Egypt at the absolute peak of its imperial power. Thutmose III is often called the 'Napoleon of ancient Egypt,' having conducted 17 military campaigns into Canaan. The Ipuwer Papyrus (Egyptian) describes catastrophic plagues — darkness, water turning to blood, death, agricultural destruction — which many conservative scholars see as a corroborating Egyptian memory of the plagues of Exodus.",
      },
      {
        title: "New Kingdom Egypt — 19th Dynasty (Late Date context)",
        approximateYear: "~1295–1186 BC",
        civilization: "Egypt — 19th Dynasty",
        notes:
          "Ramesses II ruled 66 years and was Egypt's most prolific builder. His capital Pi-Ramesses in the Nile Delta has been archaeologically confirmed at Qantir. If the Late Date is correct, Ramesses II is likely the Exodus Pharaoh. However, the Merneptah Stele (1208 BC) — the earliest Egyptian reference to Israel — records Israel as already established in Canaan, which fits better with the Early Date.",
      },
    ],
    typology: [
      {
        category: "Ritual",
        title: "The Passover Lamb: Christ Our Passover",
        description:
          "The Passover lamb had to be without blemish (Exodus 12:5), its blood applied to the doorposts so the angel of death would pass over (Exodus 12:13), and not one of its bones was to be broken (Exodus 12:46). Every detail was fulfilled in Christ: 'Christ, our Passover lamb, has been sacrificed' (1 Corinthians 5:7). John the Baptist identified Him: 'Behold, the Lamb of God, who takes away the sin of the world!' (John 1:29). When the soldiers came to break Jesus's legs and found Him already dead, John notes: 'these things took place that the Scripture might be fulfilled: Not one of his bones will be broken' (John 19:36, quoting Exodus 12:46). Every Passover for 1,500 years was a preview of Calvary.",
        oldTestamentRef: "Exodus 12:1–30",
        newTestamentFulfillment: [
          "1 Corinthians 5:7",
          "John 1:29",
          "John 19:36",
          "1 Peter 1:19",
        ],
        scholars: ["John MacArthur", "William MacDonald", "Charles Spurgeon"],
      },
      {
        category: "Person",
        title: "Moses: Type of Christ as Prophet and Mediator",
        description:
          "Moses was the mediator of the Old Covenant, standing between God and the people at Sinai. He foreshadowed Christ, the one Mediator of the New Covenant (1 Timothy 2:5; Hebrews 9:15). Moses interceded for Israel when God would have destroyed them (Exodus 32:11–14); Christ intercedes for His people at the right hand of the Father (Romans 8:34; Hebrews 7:25). God promised through Moses himself: 'The LORD your God will raise up for you a prophet like me from among you, from your brothers — it is to him you shall listen' (Deuteronomy 18:15). Peter and Stephen both apply this prophecy directly and exclusively to Jesus (Acts 3:22; Acts 7:37).",
        oldTestamentRef: "Exodus 2:1–Deuteronomy 34:12",
        newTestamentFulfillment: [
          "Deuteronomy 18:15",
          "Acts 3:22",
          "Hebrews 3:1–6",
          "1 Timothy 2:5",
        ],
        scholars: ["John MacArthur", "William MacDonald", "Gleason Archer"],
      },
    ],
    subEvents: [
      {
        id: "burning-bush",
        title: "The Burning Bush — God's Call to Moses",
        summary:
          "While tending his father-in-law's flock on Horeb (the mountain of God), Moses saw a bush on fire that was not consumed. God spoke from the bush, identifying Himself as the God of Abraham, Isaac, and Jacob, and commissioned Moses to deliver Israel. When Moses asked God's name, God replied: 'I AM WHO I AM' (Exodus 3:14) — the great self-existent, eternal, covenant-keeping name YHWH. Moses's reluctance and God's patient response reveal both human inadequacy and divine sufficiency.",
        scriptures: ["Exodus 3:1-22", "Exodus 4:1-17", "John 8:58", "Acts 7:30-34"],
        keyPeople: ["moses"],
      },
      {
        id: "ten-plagues",
        title: "The Ten Plagues of Egypt",
        summary:
          "God sent ten escalating plagues upon Egypt — each one a direct assault on a specific Egyptian deity — demonstrating His sovereignty over nature, over Pharaoh, and over all the gods of Egypt (Numbers 33:4). The first nine plagues targeted the Nile (blood), the land (frogs, gnats, flies), the livestock, the people's bodies (boils), the atmosphere (hail), the crops (locusts), and the light (darkness). The tenth — the death of all firstborn — was God's final, decisive judgment and required the Passover as the condition of redemption.",
        scriptures: ["Exodus 7:14 - 12:30", "Numbers 33:4", "Psalm 78:43-51", "Romans 9:17"],
        keyPeople: ["moses"],
      },
      {
        id: "the-passover",
        title: "The Passover — The Lamb of God Prefigured",
        summary:
          "On the night of the tenth plague, God commanded every Israelite household to slaughter a lamb without blemish, apply its blood to the doorposts and lintel, and eat it fully roasted with unleavened bread and bitter herbs. When God passed through Egypt and saw the blood, He would 'pass over' that house — the angel of death would not enter. Every detail of the Passover is typological of Christ: the unblemished lamb, the applied blood, the roasted (not boiled) flesh, the broken bones prohibited, the communal meal. Paul declares: 'Christ, our Passover lamb, has been sacrificed' (1 Corinthians 5:7).",
        scriptures: ["Exodus 12:1-51", "Isaiah 53:7", "John 1:29", "1 Corinthians 5:7", "1 Peter 1:18-19"],
        keyPeople: ["moses"],
      },
      {
        id: "red-sea-crossing",
        title: "Crossing the Red Sea — Salvation Through Judgment",
        summary:
          "Trapped between Pharaoh's army and the sea, Israel faced apparent destruction. God commanded Moses to stretch out his staff; the waters parted and Israel crossed on dry ground. When the Egyptian army followed, the waters returned and destroyed them. This deliverance — salvation through water that judged their enemies — is the Old Testament's paradigmatic image of salvation. Paul calls it a 'baptism' into Moses (1 Corinthians 10:1-2). The crossing permanently secured Israel's freedom from Egyptian slavery.",
        scriptures: ["Exodus 14:1-31", "Exodus 15:1-21", "1 Corinthians 10:1-2", "Hebrews 11:29"],
        keyPeople: ["moses"],
      },
    ],
    keyPeople: ["moses"],
    relatedEvents: [
      { eventId: "crucifixion-resurrection", note: "The Passover lamb's blood protected Israel from the angel of death. Christ, our Passover Lamb, sheds His blood to deliver us from eternal death (1 Corinthians 5:7)." },
      { eventId: "incarnation", note: "As God raised up Moses to lead Israel out of physical bondage, He raised up Jesus — the greater Moses — to lead humanity out of bondage to sin and death." },
    ],
    tags: ["moses", "egypt", "passover", "plagues", "red sea", "deliverance"],
  },

  {
    id: "david-becomes-king",
    title: "David Becomes King over All Israel",
    period: "united-kingdom",
    summary:
      "After the failed reign of Saul and years of sovereign preparation in the wilderness, God established David as king over all twelve tribes of Israel in fulfillment of His eternal purpose. The Davidic Covenant (2 Samuel 7) is one of the most theologically significant covenants in Scripture, promising David an eternal throne and kingdom. Every messianic hope in the Old Testament flows through this covenant — and it finds its ultimate, literal fulfillment in Jesus Christ, the Son of David, whose kingdom shall have no end (Luke 1:32–33).",
    scriptures: [
      "1 Samuel 16:1–13",
      "2 Samuel 5:1–10",
      "2 Samuel 7:1–17",
      "Psalm 89:3–4",
      "Luke 1:32–33",
      "Acts 2:29–36",
    ],
    dateOptions: [
      {
        label: "Standard Evangelical Chronology",
        yearBC: 1010,
        scholars: [
          "Edwin Thiele",
          "John MacArthur",
          "Gleason Archer",
          "Eugene Merrill",
        ],
        reasoning:
          "Edwin Thiele's landmark work The Mysterious Numbers of the Hebrew Kings established a precise synchronization of the Israelite and Judahite king lists with Assyrian records. David's accession over all Israel is consistently dated to ~1010 BC across mainstream evangelical scholarship. This date rests on the bedrock of Thiele's anchored chronology.",
        scriptureSupport: ["2 Samuel 5:1–5", "1 Chronicles 11:1–3"],
      },
      {
        label: "Alternative High Chronology",
        yearBC: 1050,
        scholars: ["Various LXX-based chronological reconstructions"],
        reasoning:
          "Some scholars using the Septuagint's variant figures for the Judges period arrive at a slightly earlier date for the onset of the monarchy. The variation does not affect the theological meaning of the Davidic Covenant — it reflects ongoing scholarly refinement of Iron Age chronology in the ancient Near East.",
        scriptureSupport: ["Acts 13:21–22", "1 Samuel 13:1"],
      },
    ],
    worldContext: [
      {
        title: "The Bronze Age Collapse and Iron Age Transition",
        approximateYear: "~1200–1000 BC",
        civilization: "Ancient Near East — Iron Age I",
        notes:
          "Around 1200 BC, nearly every major Bronze Age civilization — the Hittites, Mycenaean Greeks, Ugarit, and Egypt's empire — collapsed in rapid succession. The cause remains debated (invasions, drought, systems collapse). This catastrophe cleared the geopolitical stage, removing the great powers that would have otherwise prevented Israel from establishing a kingdom. David rose in the vacuum.",
      },
      {
        title: "The Philistines — Sea Peoples in Canaan",
        approximateYear: "~1200–1000 BC",
        civilization: "Philistia — Iron Age city-states",
        notes:
          "The Philistines (part of the Sea Peoples migration) settled the southwestern coast of Canaan and became Israel's dominant military threat. Their iron weapons gave them a technological edge (1 Samuel 13:19–22). David's defeat of Goliath and subsequent campaigns permanently broke Philistine power, securing Israel's borders. Archaeology confirms the Philistines' Aegean origins and their five major cities: Gaza, Ashdod, Ashkelon, Gath, and Ekron.",
      },
      {
        title: "Phoenicia — Hiram of Tyre",
        approximateYear: "~980–940 BC",
        civilization: "Phoenicia — Tyre and Sidon",
        notes:
          "Hiram king of Tyre entered a treaty with David (2 Samuel 5:11), providing cedar lumber and skilled craftsmen. The Phoenicians were the master seafarers and traders of the ancient world. This alliance would later enable Solomon's Temple construction and his vast Red Sea trading fleet — demonstrating how God used international relationships to fulfill His covenant promises.",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "David: The Shepherd-King and Type of Christ",
        description:
          "David was the man after God's own heart (1 Samuel 13:14), a shepherd from the tribe of Judah, anointed before his time had come, who suffered years of rejection and persecution before ascending his throne and uniting God's people. The Davidic Covenant promises an eternal throne (2 Samuel 7:13) that David himself knew could only be fulfilled by One greater than himself — 'The LORD said to my Lord: Sit at my right hand' (Psalm 110:1), which Jesus uses to establish that the Messiah is David's Lord, not merely his son (Matthew 22:41–45). At Pentecost, Peter declared this Psalm's fulfillment: 'God raised him up... he foresaw and spoke about the resurrection of the Christ' (Acts 2:30–31). The Son of David sits on an eternal throne — 'and of his kingdom there will be no end' (Luke 1:33).",
        oldTestamentRef: "2 Samuel 7:1–17; Psalm 110",
        newTestamentFulfillment: [
          "Luke 1:32–33",
          "Acts 2:29–36",
          "Matthew 22:41–45",
          "Revelation 5:5",
        ],
        scholars: ["John MacArthur", "William MacDonald", "Charles Spurgeon"],
      },
    ],
    subEvents: [
      {
        id: "anointing-of-david",
        title: "Samuel Anoints David in Secret",
        summary:
          "While Saul still reigned, God sent Samuel to Bethlehem to anoint one of Jesse's sons. God passed over seven older brothers — men of impressive appearance — and chose the youngest, who was out tending sheep. 'The LORD sees not as man sees: man looks on the outward appearance, but the LORD looks on the heart' (1 Samuel 16:7). Samuel anointed David, and the Spirit of the LORD rushed upon him from that day forward.",
        scriptures: ["1 Samuel 16:1-13", "Psalm 78:70-72", "Acts 13:22"],
        keyPeople: ["david", "samuel"],
      },
      {
        id: "david-and-goliath",
        title: "David Defeats Goliath",
        summary:
          "The Philistine champion Goliath of Gath — approximately 9 feet tall — challenged Israel for 40 days. No Israelite soldier would face him. Young David, coming with supplies for his brothers, heard the challenge and volunteered. He refused Saul's armor and went with his sling and five stones. 'You come to me with a sword and with a spear, but I come to you in the name of the LORD of hosts' (1 Samuel 17:45). One stone, one strike — Goliath fell. David is a type of Christ: the humble champion who fights on behalf of his people and wins by divine power, not human might.",
        scriptures: ["1 Samuel 17:1-58"],
        keyPeople: ["david"],
      },
      {
        id: "davidic-covenant",
        title: "The Davidic Covenant — An Eternal Throne",
        summary:
          "After David was established as king and desired to build a house for God, God reversed it: 'I will make you a house' (2 Samuel 7:11). God promised that David's son would build the Temple, and that God would establish his throne forever: 'I will be to him a father, and he shall be to me a son.' If his sons sinned, they would be chastened but not cast off. 'Your throne shall be established forever' (2 Samuel 7:16). This unconditional covenant is the foundation of all messianic expectation. Peter explicitly declares at Pentecost that Jesus is the fulfillment — the eternal Davidic King now reigning at God's right hand (Acts 2:29-36).",
        scriptures: ["2 Samuel 7:1-17", "Psalm 89:3-4", "Luke 1:32-33", "Acts 2:29-36", "Revelation 22:16"],
        keyPeople: ["david"],
      },
    ],
    keyPeople: ["david", "samuel"],
    tags: ["david", "covenant", "kingdom", "messiah", "jerusalem", "temple"],
  },

  // ── SOLOMON'S TEMPLE (united-kingdom) ────────────────────────────────────
  {
    id: "solomons-temple",
    title: "Solomon Builds the Temple",
    period: "united-kingdom",
    summary:
      "In the fourth year of his reign, Solomon began construction of the Temple in Jerusalem on Mount Moriah — the very mountain where Abraham nearly sacrificed Isaac. The Temple became the central dwelling place of God's glory (the Shekinah), the heart of Israel's worship, and the supreme symbol of the Davidic Covenant. Its later destruction by Babylon, and the return of God's presence in the person of Jesus Christ (John 2:19–21), is one of the most powerful theological threads in all of Scripture.",
    scriptures: [
      "1 Kings 6:1–38",
      "2 Chronicles 3:1–17",
      "1 Kings 8:10–11",
      "John 2:19–21",
      "Revelation 21:22",
    ],
    dateOptions: [
      {
        label: "Standard Chronology",
        yearBC: 966,
        scholars: [
          "Edwin Thiele",
          "John MacArthur",
          "Gleason Archer",
          "Eugene Merrill",
        ],
        reasoning:
          "1 Kings 6:1 states construction began 480 years after the Exodus. If the Exodus was 1446 BC, then Solomon's 4th year — when construction began — was ~966 BC. This is one of the most critical chronological anchors in the entire Old Testament, and Thiele's synchronism with Assyrian records confirms it.",
        scriptureSupport: ["1 Kings 6:1", "2 Chronicles 3:1–2"],
      },
    ],
    worldContext: [
      {
        title: "Mount Moriah — The Sacred Site",
        approximateYear: "~966 BC",
        civilization: "Israel — United Kingdom",
        notes:
          "Mount Moriah is explicitly identified in 2 Chronicles 3:1 as the threshing floor of Ornan the Jebusite — and the same place where God stopped Abraham's hand over Isaac (Genesis 22). The Temple Mount thus carries the weight of both the Abrahamic and Davidic covenants. The Dome of the Rock currently stands on this very site.",
      },
      {
        title: "Phoenician Craftsmanship",
        approximateYear: "~966–959 BC",
        civilization: "Phoenicia — Tyre",
        notes:
          "Solomon contracted with Hiram of Tyre for cedar, cypress, gold, and master craftsmen. The Phoenicians were the finest builders and metalworkers of the ancient world. God used the skills of surrounding nations to build the very house where His glory would dwell — a foretaste of how the nations would one day bring their glory into the New Jerusalem (Revelation 21:26).",
      },
    ],
    typology: [
      {
        category: "Institution",
        title: "The Temple: God Dwelling Among Men — Fulfilled in Christ",
        description:
          "The Temple was the place where heaven touched earth — where God's glory (Shekinah) visibly dwelt. When pressed for a sign, Jesus declared: 'Destroy this temple, and in three days I will raise it up' (John 2:19). John explains: 'he was speaking about the temple of his body' (John 2:21). Christ is the true Temple — the exact place where God and man meet, where sacrifice is made, and where atonement is accomplished. The fullness of the Godhead dwells in Him bodily (Colossians 2:9). Because Christ is the Temple, the Holy Spirit now indwells believers — 'your body is a temple of the Holy Spirit' (1 Corinthians 6:19). And in the New Jerusalem, there is no Temple building at all — 'for its temple is the Lord God the Almighty and the Lamb' (Revelation 21:22).",
        oldTestamentRef: "1 Kings 6:1–8:66",
        newTestamentFulfillment: [
          "John 2:19–21",
          "Colossians 2:9",
          "1 Corinthians 6:19",
          "Revelation 21:22",
        ],
        scholars: ["John MacArthur", "William MacDonald", "G.K. Beale"],
      },
    ],
    relatedEvents: [
      { eventId: "crucifixion-resurrection", note: "Jesus declared His body to be the true temple — destroyed on Friday and raised on Sunday (John 2:19–21). Every stone of Solomon's temple points to this." },
      { eventId: "destruction-jerusalem-70ad", note: "The temple Solomon built, rebuilt by Zerubbabel, and renovated by Herod is permanently destroyed in AD 70 — because the true temple had already been raised." },
    ],
    tags: [
      "solomon",
      "temple",
      "jerusalem",
      "glory",
      "shekinah",
      "worship",
      "moriah",
    ],
    subEvents: [
      {
        id: "temple-construction",
        title: "Seven Years of Construction",
        summary:
          "Solomon began construction in the fourth year of his reign, approximately 480 years after the Exodus (1 Kings 6:1). He drafted 30,000 laborers from Israel, 70,000 burden-bearers, and 80,000 stonecutters, with 3,300 overseers (1 Kings 5:13-16). He sent to Hiram of Tyre for cedar and cypress timber and skilled craftsmen. The entire structure was built of dressed stone prepared at the quarry — no hammer, axe, or iron tool was heard at the Temple site (1 Kings 6:7). The Temple was 90 feet long, 30 feet wide, and 45 feet high, with an inner sanctuary of pure gold.",
        scriptures: ["1 Kings 5:1 - 6:38", "2 Chronicles 2:1 - 4:22"],
        keyPeople: ["solomon"],
      },
      {
        id: "temple-dedication",
        title: "The Dedication — The Glory of God Fills the Temple",
        summary:
          "When Solomon finished the Temple and brought the Ark of the Covenant into the Most Holy Place, a cloud filled the house of the LORD so densely that the priests could not stand to minister — the shekinah glory of God had taken up residence (1 Kings 8:10-11). Solomon's dedicatory prayer is one of the greatest prayers in the Old Testament — acknowledging that even the heaven of heavens cannot contain God, yet asking Him to hear prayers directed toward this house. God appeared to Solomon afterward and confirmed He had heard and chosen this place.",
        scriptures: ["1 Kings 8:1-66", "2 Chronicles 5:1 - 7:22", "John 1:14"],
        keyPeople: ["solomon"],
      },
      {
        id: "solomons-fall",
        title: "Solomon's Fall — The Temple's Builder Turns to Idols",
        summary:
          "Despite the Temple, the Davidic Covenant, and two personal appearances from God, Solomon's heart was turned by his 700 wives and 300 concubines to worship Ashtoreth, Milcom, Chemosh, and Molech — the very gods of the nations God had driven out before Israel. God told Solomon the kingdom would be torn from his hand after his death — and only one tribe left to his son 'for the sake of David my servant and for the sake of Jerusalem which I have chosen' (1 Kings 11:13). Solomon's ruin is Scripture's definitive warning that wisdom, wealth, and proximity to sacred things cannot prevent apostasy when the heart is given to idols.",
        scriptures: ["1 Kings 11:1-13", "Deuteronomy 17:17", "Nehemiah 13:26"],
        keyPeople: ["solomon"],
      },
    ],
    keyPeople: ["solomon", "david"],
  },

  // ── LAW AT SINAI (exodus-conquest) ───────────────────────────────────────
  {
    id: "law-at-sinai",
    title: "The Law Given at Sinai",
    period: "exodus-conquest",
    summary:
      "Three months after leaving Egypt, God descended upon Mount Sinai in fire and thunder and gave Israel the Mosaic Law — including the Ten Commandments, the civil code, and the detailed ceremonial system of the Tabernacle. The Law was not a means of salvation but a tutor to lead sinners to Christ (Galatians 3:24), revealing the absolute holiness of God, the total sinfulness of man, and the absolute necessity of a blood atonement.",
    scriptures: [
      "Exodus 19:1–20:21",
      "Exodus 24:1–18",
      "Galatians 3:19–25",
      "Romans 3:20",
      "Hebrews 8:6–13",
    ],
    dateOptions: [
      {
        label: "Early Date — Three Months After the 1446 BC Exodus",
        yearBC: 1446,
        scholars: ["John MacArthur", "Gleason Archer", "Walter Kaiser"],
        reasoning:
          "If the Exodus occurred in 1446 BC (based on 1 Kings 6:1), the giving of the Law at Sinai occurred approximately three months later (Exodus 19:1), in late spring of 1446 BC during Israel's first year of wilderness wandering.",
        scriptureSupport: ["Exodus 19:1", "1 Kings 6:1"],
      },
      {
        label: "Late Date — ~1290 BC",
        yearBC: 1290,
        scholars: ["William F. Albright", "K.A. Kitchen"],
        reasoning:
          "Proponents of the Late Exodus date (1290 BC) place the giving of the Law accordingly. The theological content and eternal significance of the Law are entirely unaffected by which date is correct.",
        scriptureSupport: ["Exodus 19:1", "Exodus 1:11"],
      },
    ],
    worldContext: [
      {
        title: "Ancient Near Eastern Law Code Context",
        approximateYear: "~1750–1200 BC",
        civilization: "Ancient Near East",
        notes:
          "Other ancient law codes existed — Hammurabi's Code (~1754 BC), Hittite Laws, Assyrian laws. The Mosaic Law shares structural similarities (suzerain-vassal treaty form) but differs radically in its theological grounding: the Law is rooted in the character and redemptive acts of a personal, holy God — not in the decrees of a human king. Its ethical demands exceed every contemporary code.",
      },
    ],
    typology: [
      {
        category: "Institution",
        title: "The Law: A Tutor That Drives Us to Christ",
        description:
          "The Mosaic Law was never a means of salvation — 'by works of the law no human being will be justified in his sight, since through the law comes knowledge of sin' (Romans 3:20). Paul calls the Law a 'guardian' whose purpose was to reveal the depth of sin, demonstrate humanity's total inability to meet God's standard (Galatians 3:10), and drive the convicted sinner to Christ as the only hope of righteousness. 'So the law was our guardian until Christ came, in order that we might be justified by faith' (Galatians 3:24). The Law demanded what the flesh could never supply; grace gives what the Law demanded. Christ is 'the end of the law for righteousness to everyone who believes' (Romans 10:4).",
        oldTestamentRef: "Exodus 20:1–17",
        newTestamentFulfillment: [
          "Galatians 3:19–25",
          "Romans 3:20",
          "Romans 10:4",
          "Hebrews 8:6–13",
        ],
        scholars: ["John MacArthur", "William MacDonald", "Martin Luther"],
      },
      {
        category: "Institution",
        title: "The Tabernacle: Every Detail Points to Christ",
        description:
          "The Tabernacle was a portable picture of redemption. Its single entrance (John 10:9), the bronze altar of sacrifice (the cross), the laver of washing (regeneration), the bread of the Presence (Christ the Bread of Life — John 6:35), the lampstand (Christ the Light of the World — John 8:12), the altar of incense (Christ's intercession — Hebrews 7:25), and the veil before the Most Holy Place (Christ's body — Hebrews 10:20) all find their fulfillment in Him. The author of Hebrews calls the entire system 'a copy and shadow of heavenly things' (Hebrews 8:5). When Christ died, the Temple veil was torn from top to bottom (Matthew 27:51) — the way into God's presence stood open forever.",
        oldTestamentRef: "Exodus 25:1–40:38",
        newTestamentFulfillment: [
          "Hebrews 8:1–9:28",
          "John 1:14",
          "Hebrews 10:19–22",
          "Matthew 27:51",
        ],
        scholars: ["John MacArthur", "William MacDonald", "A.W. Pink"],
      },
    ],
    subEvents: [
      {
        id: "ten-commandments",
        title: "The Ten Commandments — The Moral Law of God",
        summary:
          "God descended on Mount Sinai in fire, smoke, and thunder — a terrifying theophany that caused the people to tremble and beg Moses to speak for God instead. God then spoke the Ten Commandments (the Decalogue) directly to the people. The first four commands govern the vertical relationship with God (no other gods, no idols, not taking God's name in vain, keeping the Sabbath). The final six govern the horizontal (honor parents, no murder, no adultery, no stealing, no false witness, no coveting). Jesus summarized the entire Law in two commands: love God and love your neighbor (Matthew 22:37-40).",
        scriptures: ["Exodus 20:1-17", "Deuteronomy 5:1-22", "Matthew 22:37-40", "Romans 13:8-10"],
        keyPeople: ["moses"],
      },
      {
        id: "golden-calf",
        title: "The Golden Calf — Idolatry at Sinai",
        summary:
          "While Moses was on the mountain receiving the Law, Aaron capitulated to the people's demand and fashioned a golden calf from their jewelry. They declared 'These are your gods, O Israel, who brought you up out of Egypt' — worshipping the created thing rather than the Creator within days of hearing God's own voice forbid idolatry. God told Moses He intended to destroy Israel and start again, but Moses interceded. The incident is Scripture's definitive portrait of the human heart's readiness to exchange God's glory for an idol (Romans 1:23).",
        scriptures: ["Exodus 32:1-35", "Psalm 106:19-23", "Romans 1:23", "1 Corinthians 10:7"],
        keyPeople: ["moses"],
      },
      {
        id: "the-tabernacle",
        title: "The Tabernacle — God Dwelling with His People",
        summary:
          "God gave Moses an extraordinarily detailed blueprint for the Tabernacle (the portable dwelling place of God) — a 46-chapter revelation covering every detail of materials, dimensions, furnishings, and rituals. The Tabernacle had three zones: the Outer Court (accessible to Israelites), the Holy Place (entered only by priests), and the Most Holy Place (entered once a year by the high priest on Yom Kippur). When completed, the cloud of God's glory filled the Tabernacle so completely that Moses could not enter. The author of Hebrews calls the Tabernacle a 'shadow' and 'copy' of the heavenly realities fulfilled in Christ.",
        scriptures: [
          "Exodus 25:1 - 40:38",
          "Hebrews 8:5",
          "Hebrews 9:1-14",
          "John 1:14",
          "Revelation 21:3",
        ],
        keyPeople: ["moses"],
      },
    ],
    keyPeople: ["moses"],
    relatedEvents: [
      { eventId: "incarnation", note: "The Law given through Moses points forward to Christ, who fulfills it perfectly and bears its full curse for His people (Galatians 3:13, Matthew 5:17)." },
    ],
    tags: [
      "moses",
      "sinai",
      "law",
      "ten commandments",
      "tabernacle",
      "covenant",
      "torah",
    ],
  },

  // ── TOWER OF BABEL (post-flood-patriarchs) ───────────────────────────────
  {
    id: "tower-of-babel",
    title: "The Tower of Babel and the Dispersion of Nations",
    period: "post-flood-patriarchs",
    summary:
      "In defiance of God's command to fill the earth, Noah's descendants gathered in the plain of Shinar to build a city and tower to make a name for themselves. God confused their language and scattered them across the earth — an act of both judgment and mercy. This event is the origin of all human languages and ethnic groups, and sets the stage for God's call of Abraham as the beginning of the reversal of Babel — that all nations would once again be united in blessing through the Seed of Abraham.",
    scriptures: [
      "Genesis 11:1–9",
      "Acts 17:26",
      "Deuteronomy 32:8",
      "Revelation 7:9",
    ],
    dateOptions: [
      {
        label: "Ussher Chronology",
        yearBC: 2242,
        scholars: ["Archbishop James Ussher", "Henry Morris"],
        reasoning:
          "Ussher places Babel at approximately 2242 BC, in the days of Peleg (Genesis 10:25) — whose name means 'division' — roughly 107 years after the Flood. The exact date depends on whether Peleg's name directly references the dispersion or the division of territory.",
        scriptureSupport: ["Genesis 10:25", "Genesis 11:1–9"],
      },
      {
        label: "Post-Flood, Pre-Abraham (~2200 BC)",
        yearBC: 2200,
        scholars: ["Various conservative evangelical scholars"],
        reasoning:
          "Most evangelical scholars place Babel in the 2200–2300 BC range based on the Table of Nations (Genesis 10) and its relationship to Shem's genealogy. It clearly falls after the Flood (~2349 BC) and before Abraham's call (~2091 BC).",
        scriptureSupport: ["Genesis 10:1–32", "Genesis 11:1–9"],
      },
    ],
    worldContext: [
      {
        title: "The Plain of Shinar — Ancient Sumer",
        approximateYear: "~2300–2100 BC",
        civilization: "Mesopotamia — Early Bronze Age",
        notes:
          "Shinar corresponds to ancient Sumer in southern Mesopotamia (modern Iraq). The ziggurat — a massive stepped pyramid with a temple at the summit — was the defining monument of Sumerian cities. Ur, Uruk, Nippur, and Lagash all had ziggurats. The Tower of Babel was almost certainly such a structure, representing man's ultimate attempt to reach heaven on his own terms.",
      },
      {
        title: "The Origin of Human Languages",
        approximateYear: "~2300–2100 BC",
        civilization: "Global Dispersion",
        notes:
          "Secular linguistics identifies distinct proto-language families (Proto-Indo-European, Proto-Semitic, Proto-Afroasiatic, etc.) that cannot be traced to a single common root by natural development. The sudden emergence of distinct, unrelated language families is best explained by the divine act of Babel — not by gradual linguistic drift across millennia.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "Babel Reversed at Pentecost",
        description:
          "At Babel, God divided one language into many to scatter a people united in proud self-exaltation (Genesis 11:6–8). At Pentecost, the Spirit enabled one message to be heard in every language simultaneously (Acts 2:6–11), beginning the reversal of Babel — gathering from every nation a people united not in pride but in the person of Christ. What sin shattered, the Spirit restores. Paul anchors the mission to all nations directly in the Abrahamic promise (Galatians 3:8), and John sees the end: 'a great multitude... from every nation, from all tribes and peoples and languages, standing before the throne' (Revelation 7:9).",
        oldTestamentRef: "Genesis 11:1–9",
        newTestamentFulfillment: [
          "Acts 2:5–11",
          "Galatians 3:8",
          "Ephesians 4:3–6",
          "Revelation 7:9",
        ],
        scholars: ["John MacArthur", "D.A. Carson", "G.K. Beale"],
      },
    ],
    subEvents: [
      {
        id: "babels-ambition",
        title: "The Ambition of Babel — 'Let Us Make a Name'",
        summary:
          "The builders of Babel had two goals: build a tower reaching to heaven, and make a name for themselves (Genesis 11:4). Both are the opposite of the calling God gave humanity: fill and scatter across the earth (Genesis 1:28; 9:1). 'Let us make a name for ourselves' is the anti-gospel — the drive for self-glorification rather than God-glorification. The Tower was likely a ziggurat — a massive stepped pyramid with a temple at the top, common in Mesopotamia, representing the meeting place of heaven and earth. But man cannot build his way to God.",
        scriptures: ["Genesis 11:1-4", "Isaiah 14:13-14", "Proverbs 16:18"],
        keyPeople: [],
      },
      {
        id: "gods-judgment-at-babel",
        title: "God Scatters the Nations — The Origin of Languages",
        summary:
          "God descended (the language is anthropomorphic — He is infinite, not limited) and confused the language of the builders so they could no longer understand each other. Construction stopped. People scattered across the earth according to families and languages — this is the origin of all distinct people groups and nations on earth (Acts 17:26). Linguists have noted that all human languages share deep structural similarities suggesting a common origin. The dispersion from Babel explains the rapid worldwide spread of civilization after approximately 2300 BC in the archaeological record.",
        scriptures: ["Genesis 11:5-9", "Deuteronomy 32:8", "Acts 17:26"],
        keyPeople: [],
      },
      {
        id: "babel-reversed-pentecost",
        title: "Babel Reversed — The Miracle of Pentecost",
        summary:
          "Babel divided the nations through language confusion; Pentecost began the reunion of the nations through the Spirit-given gift of tongues (Acts 2:4-11). At Babel, proud self-promotion scattered men; at Pentecost, the gospel of Christ crucified gathered men from every nation under heaven. The nations God scattered at Babel are the same nations being gathered into the one body of Christ — 'a great multitude that no one could number, from every nation, from all tribes and peoples and languages' (Revelation 7:9). Babel is the problem; Pentecost and the New Jerusalem are the answer.",
        scriptures: ["Acts 2:1-11", "Revelation 7:9", "Galatians 3:28"],
        keyPeople: [],
      },
    ],
    keyPeople: [],
    relatedEvents: [
      { eventId: "pentecost", note: "At Babel, God scattered the nations through language confusion. At Pentecost the Spirit reverses the curse — every nation hears the Gospel in their own tongue." },
    ],
    tags: ["babel", "nations", "language", "dispersion", "shinar", "pride"],
  },

  // ── CAIN AND ABEL (pre-flood) ─────────────────────────────────────────────
  {
    id: "cain-and-abel",
    title: "Cain, Abel, and the First Murder",
    period: "pre-flood",
    summary:
      "Adam's two sons each brought an offering to God. God accepted Abel's blood sacrifice — offered in faith (Hebrews 11:4) — and rejected Cain's grain offering. Consumed by jealousy and refusing God's warning, Cain murdered his brother — the first act of physical death in human history. The ground cried out (Genesis 4:10), foreshadowing the blood of Christ that 'speaks better things than the blood of Abel' (Hebrews 12:24).",
    scriptures: [
      "Genesis 4:1–16",
      "Hebrews 11:4",
      "Hebrews 12:24",
      "1 John 3:12",
      "Matthew 23:35",
    ],
    dateOptions: [
      {
        label: "Early Post-Fall Era (Undated)",
        scholars: ["Archbishop James Ussher", "Henry Morris"],
        reasoning:
          "The exact year is not calculable from Scripture. Cain and Abel were born after the expulsion from Eden, and the murder likely occurred sometime during Adam's early centuries. Scripture's purpose here is theological — to reveal the depth of sin's corruption and establish that God requires blood for atonement.",
        scriptureSupport: ["Genesis 4:1–2", "Genesis 4:17–26"],
      },
    ],
    worldContext: [
      {
        title: "The Origin of Human Civilization",
        approximateYear: "Early Post-Fall era",
        civilization: "Antediluvian World",
        notes:
          "Genesis 4 reveals that Cain's descendants were not primitive cave-dwellers but the founders of civilization: Jabal founded nomadic herding, Jubal invented musical instruments, and Tubal-Cain worked bronze and iron (Genesis 4:20–22). Human civilization is thus both a reflection of the Imago Dei and a monument to human pride — advanced technology built in defiance of God, beginning with a city Cain named after his own son.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "Abel's Blood and the Better Sacrifice",
        description:
          "Abel's offering was accepted because it was a blood sacrifice offered in faith (Hebrews 11:4); Cain's grain offering — the fruit of human effort — was rejected. The author of Hebrews makes the typological line explicit: we have come to 'Jesus, the mediator of a new covenant, and to the sprinkled blood that speaks a better word than the blood of Abel' (Hebrews 12:24). Abel's blood cried out for vengeance (Genesis 4:10); Christ's blood cries out for mercy and forgiveness. This is the first link in the long chain of blood sacrifices that spans all of Scripture, each one pointing forward to Calvary.",
        oldTestamentRef: "Genesis 4:1–16",
        newTestamentFulfillment: [
          "Hebrews 11:4",
          "Hebrews 12:24",
          "1 John 3:12",
          "Matthew 23:35",
        ],
        scholars: ["John MacArthur", "William MacDonald", "Charles Spurgeon"],
      },
    ],
    subEvents: [
      {
        id: "two-offerings",
        title: "Two Offerings — Faith and Works",
        summary:
          "Both Cain and Abel brought offerings to the LORD. Abel brought the firstborn of his flock and of their fat portions — the best he had, by faith (Hebrews 11:4). Cain brought an offering of the fruit of the ground. God accepted Abel's and rejected Cain's. The difference was not the type of offering (God later accepted grain offerings under the Law) but the heart behind it: Abel came by faith; Cain did not. John says Cain's deeds were evil (1 John 3:12) — suggesting a pattern of heart-rebellion, not just this one act. God warned Cain that sin was 'crouching at the door' — one of Scripture's most vivid descriptions of temptation as a predatory force.",
        scriptures: ["Genesis 4:1-7", "Hebrews 11:4", "1 John 3:12"],
        keyPeople: ["cain", "abel"],
      },
      {
        id: "first-murder",
        title: "The First Murder — Cain Kills Abel",
        summary:
          "Cain's rejected offering did not drive him to repentance but to rage. God warned him, but Cain refused to listen. He lured Abel into the field and killed him. God confronted Cain: 'Where is Abel your brother?' — as He had confronted Adam: 'Where are you?' Cain's answer — 'Am I my brother's keeper?' — is the first recorded lie in human history after the serpent's deception, and one of Scripture's most chilling examples of hardened conscience. Abel's blood cried out from the ground for justice. Jesus said Cain's murder of Abel was the beginning of a long line of righteous blood shed by religious hypocrites (Matthew 23:35).",
        scriptures: ["Genesis 4:8-12", "Matthew 23:35", "1 John 3:12"],
        keyPeople: ["cain", "abel"],
      },
      {
        id: "birth-of-seth",
        title: "Seth — The Seed Line Continues",
        summary:
          "After Abel's murder, God gave Adam and Eve another son, Seth, in place of Abel (Genesis 4:25). Eve said 'God has appointed for me another offspring instead of Abel.' Seth's birth is theologically critical: it is through the line of Seth that the godly seed continues — Enoch, Noah, Shem, Terah, Abraham, all the way to Jesus Christ. Two lines now exist in human history: the line of Cain (civilization built on self-sufficiency, Gen 4:17-24) and the line of Seth ('At that time people began to call upon the name of the LORD,' Gen 4:26). This is the background to the problem of Genesis 6 and the Flood.",
        scriptures: ["Genesis 4:25-26", "Genesis 5:1-32", "Luke 3:38"],
        keyPeople: ["adam", "eve"],
      },
    ],
    keyPeople: ["cain", "abel", "adam", "eve"],
    tags: ["cain", "abel", "murder", "sacrifice", "blood", "judgment"],
  },

  // ── JUDGES ────────────────────────────────────────────────────────────────
  {
    id: "deborah-and-barak",
    title: "Deborah, Barak, and the Battle at the Kishon",
    period: "judges",
    summary:
      "Under twenty years of oppression by Jabin king of Canaan and his general Sisera with his 900 iron chariots, God raised up Deborah — a prophetess and the only female judge in Israel's history — to call the nation back to Him. She summoned Barak and commissioned him to lead Israel's army against Sisera, promising divine victory: 'Has not the LORD gone out before you?' (Judges 4:14). God routed Sisera's entire force when the Kishon River flooded at a critical moment (Judges 5:21), and the general was killed not by a warrior but by a tent peg in the hands of a woman named Jael (Judges 4:21). The Song of Deborah in Judges 5 is considered one of the oldest surviving poems in the Hebrew Bible, celebrating God alone as the divine warrior of Israel.",
    scriptures: [
      "Judges 4:1–5:31",
      "Judges 4:14",
      "Judges 5:21",
      "Hebrews 11:32",
      "1 Samuel 12:11",
    ],
    dateOptions: [
      {
        label: "Standard Chronology",
        yearBC: 1209,
        scholars: ["Edwin Thiele", "Leon Wood", "Eugene Merrill"],
        reasoning:
          "Working back from the well-anchored date of the Exodus (1446 BC) and the data in Judges, conservative scholars place Deborah's judgeship around 1209 BC. The 20-year Canaanite oppression (Judges 4:3) preceded this, placing the oppression beginning around 1229 BC.",
        scriptureSupport: ["Judges 4:3", "Judges 5:31"],
      },
    ],
    worldContext: [
      {
        title: "Canaanite City-States and Iron Technology",
        approximateYear: "~1200 BC",
        civilization: "Canaan — Late Bronze / Early Iron Age",
        notes:
          "Sisera's 900 iron chariots represented a decisive military advantage in an age when Israel had no iron weapons (cf. 1 Samuel 13:19–22). The Late Bronze Age collapse (~1200 BC) was weakening Canaanite power across the region, and God used this providential moment for Israel's deliverance. Archaeologists have confirmed chariot-riding Canaanite rulers at sites like Hazor, Megiddo, and Taanach — exactly the region of Deborah's battle.",
      },
    ],
    subEvents: [
      {
        id: "deborah-judges",
        title: "Deborah — Prophetess and Judge",
        summary:
          "Deborah is one of only two women in the Old Testament explicitly called a prophetess who exercised judicial authority (the other is Huldah). She held court under a palm tree between Ramah and Bethel, and the people came to her for judgment (Judges 4:5). Her authority was not self-appointed but God-given. She summoned Barak and delivered to him God's battle plan — 10,000 men to Mount Tabor and God would draw out Sisera and his 900 iron chariots. Barak refused to go without her — a hesitation Deborah accepted but noted would cost him the honor of the victory, for a woman would get the glory.",
        scriptures: ["Judges 4:1-10", "Judges 5:7"],
        keyPeople: [],
      },
      {
        id: "sisera-defeated",
        title: "The Battle and the Defeat of Sisera",
        summary:
          "God threw Sisera's army into panic before Barak, and Sisera abandoned his iron chariot and fled on foot. Every soldier died by the sword — not one was left. Sisera fled to the tent of Jael, the wife of Heber the Kenite. She invited him in, gave him milk, covered him, and when he fell asleep drove a tent peg through his temple. Just as Deborah had prophesied: 'the LORD will sell Sisera into the hand of a woman' (Judges 4:9). The Canaanite general who had oppressed Israel for 20 years was not defeated by military might but by God working through two women.",
        scriptures: ["Judges 4:14-24", "Judges 5:24-27"],
        keyPeople: [],
      },
      {
        id: "song-of-deborah",
        title: "The Song of Deborah — One of the Oldest Hebrew Poems",
        summary:
          "Judges 5 records the Song of Deborah, widely regarded by Old Testament scholars as one of the oldest pieces of Hebrew literature preserved in Scripture (possibly 12th century BC). It celebrates the victory in vivid, exultant poetry, praises those tribes that answered the call, and rebukes those who stayed behind. The song climaxes with the image of Sisera's mother waiting in vain for her son to return, unknowingly mourning the very moment Jael's tent peg sealed his fate. The song closes: 'So may all your enemies perish, O LORD. But your friends be like the sun as he rises in his might.'",
        scriptures: ["Judges 5:1-31"],
        keyPeople: [],
      },
    ],
    keyPeople: [],
    tags: ["deborah", "barak", "sisera", "jael", "judges", "deliverance", "canaan"],
  },
  {
    id: "gideon-and-the-300",
    title: "Gideon and the 300: God's Strength in Weakness",
    period: "judges",
    summary:
      "After seven years of devastating Midianite raids — Israel's harvests destroyed, their people driven into caves (Judges 6:2) — God called the reluctant Gideon while he was secretly threshing wheat in a winepress out of fear (Judges 6:11). God's first words to him were deliberate: 'The LORD is with you, O mighty man of valor' (Judges 6:12). To ensure Israel could not boast in their own strength (Judges 7:2), God reduced Gideon's army from 32,000 to a mere 300 men. Armed with nothing but torches, trumpets, and clay jars, these 300 surrounded the Midianite camp at night and shattered the jars — and God turned every Midianite sword against his fellow (Judges 7:22). The battle cry rings through Scripture: 'A sword for the LORD and for Gideon!' (Judges 7:20). Paul echoes this principle centuries later: 'God chose the weak things of the world to shame the strong' (1 Corinthians 1:27).",
    scriptures: [
      "Judges 6:1–8:35",
      "Judges 6:12",
      "Judges 7:2",
      "Judges 7:20–22",
      "1 Corinthians 1:27",
      "Hebrews 11:32",
    ],
    dateOptions: [
      {
        label: "Standard Chronology",
        yearBC: 1162,
        scholars: ["Edwin Thiele", "Leon Wood", "Eugene Merrill"],
        reasoning:
          "Based on the sequential chronology of the Judges period, Gideon's victory falls approximately 1162 BC. The 40 years of peace that followed Gideon's victory (Judges 8:28) provides a fixed block for dating surrounding judges.",
        scriptureSupport: ["Judges 8:28", "Judges 6:1"],
      },
    ],
    worldContext: [
      {
        title: "Midianite and Amalekite Raiding Confederacy",
        approximateYear: "~1169–1162 BC",
        civilization: "Midian and the Arabian Steppe",
        notes:
          "The Midianites and Amalekites were nomadic raiders from the Arabian Desert who used camel-mounted warfare — a revolutionary military technology of the era — to devastate settled agricultural communities. The Bible's description of them as 'like locusts in abundance' with camels 'as the sand by the seashore' (Judges 7:12) is corroborated by ancient Near Eastern records of similar raids. Their defeat ended this threat permanently (Judges 8:28).",
      },
    ],
    subEvents: [
      {
        id: "gideons-call",
        title: "Gideon's Call — Least of the Least",
        summary:
          "The angel of the LORD appeared to Gideon while he was threshing wheat in a winepress — hiding from the Midianites. 'The LORD is with you, O mighty man of valor,' the angel said. Gideon's response was honest doubt: if the LORD is with us, why has all this happened to us? God called him to deliver Israel. Gideon's objection: 'My clan is the weakest in Manasseh, and I am the least in my father's house' (Judges 6:15). This is precisely why God chose him — so that Israel would not boast in their own strength (1 Corinthians 1:27-29). After seeking two confirming signs with a fleece, Gideon obeyed.",
        scriptures: ["Judges 6:11-40", "1 Corinthians 1:27-29"],
        keyPeople: [],
      },
      {
        id: "army-reduced",
        title: "Army Reduced to 300 — God's Purpose",
        summary:
          "Gideon began with 32,000 soldiers. God said: too many. If Israel defeated Midian with this army, they would say 'My own hand has saved me' (Judges 7:2). God first sent home all who were afraid — 22,000 left, 10,000 remained. Still too many. God used the water test: those who lapped water from their hand like a dog remained; those who knelt to drink were dismissed. Only 300 remained. With 300 men and torches hidden in clay jars, God would rout an army 'like locusts for abundance' — so vast the camels could not be counted (Judges 7:12). The reduction is a theology lesson: God's glory cannot be shared with human military prowess.",
        scriptures: ["Judges 7:1-8", "2 Corinthians 4:7"],
        keyPeople: [],
      },
      {
        id: "midian-routed",
        title: "The Rout of Midian — Trumpets, Torches, and Jars",
        summary:
          "At Gideon's signal at the change of the middle watch, the 300 blew trumpets, smashed their clay jars, held up blazing torches, and shouted 'A sword for the LORD and for Gideon!' The Midianite camp threw itself into panic and chaos — God set every man's sword against his comrade. The enemy fled, the Israelite tribes pursued, and two Midianite kings were captured and killed. The clay jars containing torches is one of Scripture's clearest pictures of 2 Corinthians 4:7: 'We have this treasure in jars of clay, to show that the surpassing power belongs to God and not to us.'",
        scriptures: ["Judges 7:16-25", "2 Corinthians 4:7"],
        keyPeople: [],
      },
    ],
    keyPeople: [],
    tags: ["gideon", "midian", "300", "weakness", "faith", "deliverance", "judges"],
  },
  {
    id: "samson",
    title: "Samson: Strength, Failure, and Final Redemption",
    period: "judges",
    summary:
      "Samson was consecrated as a Nazirite from his mother's womb (Judges 13:5) and divinely empowered to begin delivering Israel from 40 years of Philistine domination. His life is Scripture's most candid portrait of a man gifted by God but mastered by his own passions — his fatal weakness was his appetite for what God had forbidden. He revealed the secret of his Nazirite vow to Delilah, was shorn by his enemies, and woke to find 'he did not know that the LORD had left him' (Judges 16:20) — one of the most sobering statements in all of Scripture. Yet in his final moment, blind and chained in the Philistine temple, Samson cried out to God — and God answered. He killed more Philistines in his death than in his life (Judges 16:30). He appears in the Hebrews 11 hall of faith (Hebrews 11:32) not as a moral example, but as evidence that God's purposes are not ultimately defeated even by His servants' failures.",
    scriptures: [
      "Judges 13:1–16:31",
      "Judges 13:5",
      "Judges 16:20",
      "Judges 16:28–30",
      "Hebrews 11:32",
    ],
    dateOptions: [
      {
        label: "Standard Chronology",
        yearBC: 1075,
        scholars: ["Edwin Thiele", "Leon Wood"],
        reasoning:
          "Samson's 20-year judgeship (Judges 16:31) is typically dated ~1075–1055 BC in conservative chronologies, during the period of Philistine domination that preceded the Samuel-Saul transition. His life overlaps with the early priesthood of Eli.",
        scriptureSupport: ["Judges 16:31", "Judges 13:1"],
      },
    ],
    worldContext: [
      {
        title: "The Philistines and the Iron Age",
        approximateYear: "~1200–1000 BC",
        civilization: "Philistia — Five City-States",
        notes:
          "The Philistines (Sea Peoples from the Aegean) controlled the southwestern coastal plain with five major cities: Gaza, Ashdod, Ashkelon, Gath, and Ekron. They monopolized iron production and weaponry, creating a strategic advantage over Israel (1 Samuel 13:19–22). Samson's repeated attacks — burning their grain fields, slaughtering their warriors — were the first sustained resistance against this iron-age superpower that would eventually be broken under David.",
      },
    ],
    subEvents: [
      {
        id: "samson-nazirite-vow",
        title: "Samson's Birth and Nazirite Calling",
        summary:
          "An angel of the LORD appeared to the wife of Manoah, who was barren, and announced she would conceive a son who was to be a Nazirite from the womb — set apart to God, never to drink wine or touch a corpse or cut his hair (Numbers 6:1-8). The angel told her: 'he shall begin to save Israel from the hand of the Philistines' (Judges 13:5). Samson's supernatural strength was not inherent to him physically but was a Spirit-given sign of his Nazirite consecration — whenever he violated or compromised that set-apartness, he walked in the flesh. His life is a sobering portrait of extraordinary gifting combined with carnal indulgence.",
        scriptures: ["Judges 13:1-25", "Numbers 6:1-8", "Hebrews 11:32"],
        keyPeople: [],
      },
      {
        id: "samson-exploits",
        title: "Samson's Exploits — Spirit-Given Strength",
        summary:
          "The Spirit of the LORD rushed upon Samson repeatedly throughout his ministry: he tore a lion with his bare hands (Judges 14:6), struck down 30 Philistines at Ashkelon (Judges 14:19), broke new ropes as if they were burnt flax (Judges 15:14), and killed 1,000 Philistines with the jawbone of a donkey. Yet each episode of supernatural strength is shadowed by a moral compromise — a Philistine wife, prostitutes, riddles motivated by bet-winnings. Samson's character trajectory illustrates the danger of spiritual power divorced from spiritual character.",
        scriptures: ["Judges 14:1 - 15:20"],
        keyPeople: [],
      },
      {
        id: "samson-and-delilah",
        title: "Delilah's Betrayal and Samson's Final Victory",
        summary:
          "Delilah, paid by five Philistine lords 1,100 pieces of silver each, persistently pressed Samson for the secret of his strength. After three failed attempts, 'she pressed him hard with her words day after day and urged him, until his soul was vexed to death' (Judges 16:16). He told her. She had his head shaved while he slept. 'He did not know that the LORD had left him' (Judges 16:20) — one of the saddest verses in Scripture. Imprisoned, blinded, and grinding grain, Samson prayed one final prayer of faith. His last act — pulling down the temple of Dagon on 3,000 Philistines — killed more in his death than in his life. He is in the Hebrews 11 Hall of Faith (Heb 11:32).",
        scriptures: ["Judges 16:1-31", "Hebrews 11:32"],
        keyPeople: [],
      },
    ],
    keyPeople: [],
    tags: ["samson", "nazirite", "philistines", "delilah", "weakness", "faith", "judges"],
  },
  {
    id: "ruth",
    title: "Ruth: Loyalty, the Kinsman-Redeemer, and the Messianic Line",
    period: "judges",
    summary:
      "Set in 'the days when the judges ruled' (Ruth 1:1) — a period of moral chaos — the book of Ruth is a pastoral gem of covenant faithfulness. A Moabite widow, Ruth clung to her Israelite mother-in-law Naomi with words that have echoed through the ages: 'Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God' (Ruth 1:16). Her kinsman-redeemer Boaz paid the full price to restore both Naomi's land and her dead son's name — a vivid type of Christ, who redeems the utterly destitute at His own cost (Leviticus 25:25, Galatians 3:13). Ruth the Moabitess — a Gentile outsider — became the great-grandmother of David (Ruth 4:17–22) and stands in the direct genealogical line to Jesus Christ (Matthew 1:5), a testimony that God's covenant has always reached beyond ethnic Israel to embrace all who come in faith.",
    scriptures: [
      "Ruth 1:1–4:22",
      "Ruth 1:16",
      "Ruth 4:17–22",
      "Leviticus 25:25",
      "Galatians 3:13",
      "Matthew 1:5",
    ],
    dateOptions: [
      {
        label: "During the Period of the Judges",
        yearBC: 1100,
        scholars: ["Gleason Archer", "Eugene Merrill", "Leon Wood"],
        reasoning:
          "The book's opening phrase 'in the days when the judges ruled' (Ruth 1:1) and the genealogy ending with David (Ruth 4:17–22) places the events approximately 1100 BC, during the early to middle period of the judges. David's birth (~1040 BC) places his great-grandparents (Boaz and Ruth) roughly three to four generations earlier.",
        scriptureSupport: ["Ruth 1:1", "Ruth 4:17–22", "Matthew 1:5–6"],
      },
    ],
    worldContext: [
      {
        title: "Moab — Israel's Neighbor and Enemy",
        approximateYear: "~1100 BC",
        civilization: "Moab — Transjordan",
        notes:
          "The Moabites were descendants of Lot (Genesis 19:37) and long-standing adversaries of Israel — the Moabite king Balak had hired Balaam to curse Israel (Numbers 22–24), and Moabite women had seduced Israelite men into idolatry at Baal-Peor (Numbers 25). The Law even excluded Moabites from the assembly of Israel to the tenth generation (Deuteronomy 23:3). Ruth's inclusion in the covenant people — and in the Messianic line — is a thunderclap of grace, demonstrating that faith, not ethnicity, is the basis of covenant membership (Galatians 3:28).",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "Boaz: The Kinsman-Redeemer as a Type of Christ",
        description:
          "The Hebrew 'go'el' (kinsman-redeemer) had to meet three qualifications: he must be of the same family (kinship), willing to redeem, and able to pay the price. Boaz met all three. Christ our Redeemer meets all three perfectly: He took on human flesh to become our kinsman (Hebrews 2:14–17); He was willing — 'No one takes my life from me; I lay it down of my own accord' (John 10:18); and He has infinite merit to pay. The nearer kinsman in Ruth 4:6 refused — a picture of every other would-be savior that falls short. 'Christ redeemed us from the curse of the law by becoming a curse for us' (Galatians 3:13). And like Ruth the Moabitess — a foreigner with no claim — we were 'strangers to the covenants of promise' (Ephesians 2:12), brought near entirely by the Redeemer's work.",
        oldTestamentRef: "Ruth 2:1–4:22",
        newTestamentFulfillment: [
          "Galatians 3:13",
          "Hebrews 2:14–17",
          "Ephesians 2:12–13",
          "John 10:18",
        ],
        scholars: ["John MacArthur", "William MacDonald", "Charles Spurgeon"],
      },
    ],
    subEvents: [
      {
        id: "naomis-loss",
        title: "Naomi's Loss — Return to Bethlehem",
        summary:
          "During a famine in Israel, Elimelech took his wife Naomi and their two sons to Moab. Elimelech died. Both sons married Moabite women — Orpah and Ruth. Then both sons died. Naomi, bereft of husband and sons in a foreign land, heard that the LORD had visited His people in Bethlehem and decided to return. She urged her daughters-in-law to go back to their mothers' homes. Orpah kissed her and left. But Ruth clung to her with those immortal words: 'Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God' (Ruth 1:16). Ruth's confession is one of the most beautiful declarations of covenant faith in Scripture.",
        scriptures: ["Ruth 1:1-22"],
        keyPeople: ["ruth"],
      },
      {
        id: "ruth-gleans",
        title: "Ruth Gleans in Boaz's Field",
        summary:
          "In Bethlehem, Ruth asked Naomi to let her glean in the fields after the reapers — the provision God gave for the poor in the Law (Leviticus 19:9-10; 23:22). 'As it happened' (Ruth 2:3) — the language of divine providence — she ended up in the field of Boaz, a wealthy man of the clan of Elimelech. Boaz noticed her, asked who she was, and showed extraordinary kindness: telling his workers to leave extra grain intentionally, to let her drink from their water, and not to rebuke or harm her. When Ruth asked why, Boaz said he had heard all she had done for Naomi after her husband's death. His kindness foreshadows the grace of the greater Kinsman-Redeemer.",
        scriptures: ["Ruth 2:1-23", "Leviticus 19:9-10"],
        keyPeople: ["ruth"],
      },
      {
        id: "boaz-redeems",
        title: "Boaz Acts as Kinsman-Redeemer",
        summary:
          "The go'el (kinsman-redeemer) was an institution in Israel: the nearest male relative had both the right and responsibility to buy back land, redeem an enslaved relative, or marry the widow of a kinsman to preserve his name and inheritance (Leviticus 25:25; Deuteronomy 25:5-10). A nearer kinsman existed but declined (Ruth 4:6), surrendering his right to Boaz. Boaz publicly redeemed Naomi's land and married Ruth at the city gate, before witnesses. Boaz is one of Scripture's clearest types of Christ as Redeemer: he was a near kinsman (able), willing, and able to pay the full price. Christ became flesh (near kinsman), was willing, and paid the ultimate price of His own blood.",
        scriptures: ["Ruth 3:1 - 4:22", "Leviticus 25:25", "Galatians 4:4-5", "Hebrews 2:14-17"],
        keyPeople: ["ruth"],
      },
    ],
    keyPeople: ["ruth"],
    tags: ["ruth", "boaz", "naomi", "kinsman-redeemer", "moab", "messiah", "gentiles", "faith"],
  },

  // ── DIVIDED KINGDOM ───────────────────────────────────────────────────────
  {
    id: "kingdom-divides",
    title: "The Kingdom Divides Under Rehoboam",
    period: "divided-kingdom",
    summary:
      "Solomon's heart had turned from God in his latter years — his 700 wives and 300 concubines drew him into idolatry (1 Kings 11:3–4), and God declared that the kingdom would be torn from his house and given to one of his servants (1 Kings 11:11). When Solomon's son Rehoboam refused the counsel of the elders and answered the people harshly — 'My father disciplined you with whips, but I will discipline you with scorpions' (1 Kings 12:11) — ten northern tribes rallied under Jeroboam son of Nebat and the nation split forever. This fulfilled God's word precisely through the prophet Ahijah (1 Kings 11:29–39). Jeroboam immediately established golden calves at Bethel and Dan with the satanic echo of Aaron's sin: 'Here are your gods, O Israel, who brought you up out of Egypt' (1 Kings 12:28, cf. Exodus 32:4). The division was the beginning of a long spiral that would end in exile for both kingdoms.",
    scriptures: [
      "1 Kings 11:1–43",
      "1 Kings 12:1–33",
      "1 Kings 11:11",
      "1 Kings 12:11",
      "1 Kings 12:28",
      "2 Chronicles 10:1–19",
    ],
    dateOptions: [
      {
        label: "Standard Chronology",
        yearBC: 930,
        scholars: [
          "Edwin Thiele",
          "John MacArthur",
          "Gleason Archer",
          "Eugene Merrill",
        ],
        reasoning:
          "The division of the kingdom in 930 BC is one of the best-anchored dates in Old Testament chronology, derived from Thiele's synchronization of the Hebrew king lists with the Assyrian Eponym Chronicles. Solomon's 40-year reign (1 Kings 11:42) beginning ~970 BC places his death and Rehoboam's accession at 930 BC.",
        scriptureSupport: ["1 Kings 11:42", "1 Kings 14:20–21"],
      },
    ],
    worldContext: [
      {
        title: "Egypt Under Shishak — Opportunistic Invasion",
        approximateYear: "~925 BC",
        civilization: "Egypt — 22nd Dynasty",
        notes:
          "Five years after the division, Pharaoh Shishak (Shoshenq I) of Egypt invaded Judah and plundered the Temple treasury (1 Kings 14:25–26) — fulfilling Solomon's own warning about covenant unfaithfulness (1 Kings 9:6–9). Shishak's victory stele at the temple of Amun in Karnak lists over 150 Palestinian cities he conquered, including towns in both Israel and Judah, providing independent archaeological corroboration of this biblical event.",
      },
    ],
    subEvents: [
      {
        id: "rehoboam-folly",
        title: "Rehoboam Rejects Wise Counsel",
        summary:
          "When Solomon died, the people sent Jeroboam to ask Rehoboam to lighten the heavy forced labor his father had imposed. The elders who had served Solomon advised: 'If you will be a servant to this people today and serve them, and speak good words to them when you answer them, then they will be your servants forever' (1 Kings 12:7). Rehoboam rejected their counsel and consulted his young friends instead, who told him to threaten even harsher treatment. Rehoboam took the young men's advice. This was, Scripture says, 'a turn of affairs brought about by the LORD' to fulfill His word to Jeroboam through the prophet Ahijah (1 Kings 12:15). Leadership pride is God's instrument of judgment.",
        scriptures: ["1 Kings 12:1-15", "Proverbs 11:14", "Proverbs 15:22"],
        keyPeople: ["solomon"],
      },
      {
        id: "ten-tribes-split",
        title: "Ten Tribes Secede — Israel and Judah Forever Divided",
        summary:
          "When Rehoboam answered harshly, ten tribes cried 'What portion do we have in David? We have no inheritance in the son of Jesse. To your tents, O Israel!' (1 Kings 12:16) and made Jeroboam king over Israel (the ten northern tribes). Only Judah and Benjamin remained with the house of David. Rehoboam assembled 180,000 men to fight but God sent the prophet Shemaiah: 'You shall not go up or fight against your relatives. Return home, for this thing is from me' (1 Kings 12:24). The division was not a failure of God's plan but its fulfillment — and it set the stage for both the Assyrian exile (722 BC) and the Babylonian exile (586 BC).",
        scriptures: ["1 Kings 12:16-24", "1 Kings 11:29-39"],
        keyPeople: [],
      },
      {
        id: "jeroboams-golden-calves",
        title: "Jeroboam's Golden Calves — The Sin That Defined the North",
        summary:
          "Jeroboam feared that if the people kept going to Jerusalem to worship, their hearts would return to Rehoboam. So he made two golden calves, placed one in Bethel and one in Dan, and said: 'You have gone up to Jerusalem long enough. Behold your gods, O Israel, who brought you up out of Egypt' (1 Kings 12:28) — an exact echo of Aaron's words at Sinai (Exodus 32:4). He also built high places, appointed non-Levitical priests, and changed the festival dates. This is 'the sin of Jeroboam the son of Nebat, which he made Israel to sin' — a phrase repeated 17 times in 1 and 2 Kings. Every subsequent northern king is measured by whether he departed from this pattern of worship.",
        scriptures: ["1 Kings 12:25-33", "Exodus 32:4", "Hosea 13:2"],
        keyPeople: [],
      },
    ],
    keyPeople: ["solomon"],
    tags: ["rehoboam", "jeroboam", "solomon", "division", "golden calves", "idolatry"],
  },
  {
    id: "elijah-mount-carmel",
    title: "Elijah and the Prophets of Baal on Mount Carmel",
    period: "divided-kingdom",
    summary:
      "In the darkest spiritual hour of the northern kingdom, under Ahab and his Phoenician queen Jezebel who had systematically murdered God's prophets and established Baal worship as the state religion, God raised up the prophet Elijah. After three years of divine drought — announced by Elijah in 1 Kings 17:1 — the confrontation came on Mount Carmel. Elijah's challenge was simple and devastating: 'How long will you waver between two opinions? If the LORD is God, follow him; but if Baal is God, follow him' (1 Kings 18:21). Four hundred and fifty prophets of Baal cried out all day in vain. Elijah repaired the broken altar of the LORD with twelve stones (one for each tribe, still one nation before God — 1 Kings 18:31) and prayed a single thirty-eight-word prayer. Fire fell from heaven and consumed the sacrifice, the wood, the stones, the soil, and the water (1 Kings 18:38). The people fell on their faces: 'The LORD — he is God! The LORD — he is God!' (1 Kings 18:39). James later cites Elijah's prayers as the supreme pattern of effective intercession (James 5:17–18).",
    scriptures: [
      "1 Kings 18:1–46",
      "1 Kings 17:1",
      "1 Kings 18:21",
      "1 Kings 18:31",
      "1 Kings 18:38–39",
      "James 5:17–18",
      "Romans 11:2–4",
    ],
    dateOptions: [
      {
        label: "Standard Chronology — Ahab's Reign",
        yearBC: 860,
        scholars: ["Edwin Thiele", "John MacArthur", "Gleason Archer"],
        reasoning:
          "Ahab reigned over Israel from approximately 874–853 BC (Thiele). The three-year drought (1 Kings 18:1) with the Carmel confrontation falls within this window, most likely around 860 BC. Ahab's reign is cross-referenced with Shalmaneser III of Assyria's records (Battle of Qarqar, 853 BC).",
        scriptureSupport: ["1 Kings 16:29–33", "1 Kings 18:1"],
      },
    ],
    worldContext: [
      {
        title: "Phoenician Baal Worship — Melqart of Tyre",
        approximateYear: "~870–850 BC",
        civilization: "Phoenicia — Tyre",
        notes:
          "Jezebel was the daughter of Ithobaal, king of Tyre and priest of Melqart (the Phoenician version of Baal). Her marriage to Ahab was a political alliance that brought state-sponsored paganism into Israel's royal court. Melqart was the storm-and-fertility god, worshipped with sacred prostitution and child sacrifice — making the contest on Carmel not merely theological debate but a clash between the living God and a demon-backed counterfeit (1 Corinthians 10:20). The Phoenician Melqart stele (discovered 1939) is the earliest extrabiblical text to mention the name of the God of Israel in connection with a foreign deity.",
      },
    ],
    subEvents: [
      {
        id: "elijah-announces-drought",
        title: "Elijah Announces the Drought",
        summary:
          "Elijah the Tishbite burst onto the scene with no introduction or backstory — simply 'As the LORD, the God of Israel lives, before whom I stand, there shall be neither dew nor rain these years, except by my word' (1 Kings 17:1). A 3.5-year drought followed (Luke 4:25; James 5:17). During this period God miraculously sustained Elijah: ravens brought him bread and meat at the Brook Cherith (a direct supernatural provision); when the brook dried up, God sent him to Zarephath in Sidon where a widow's jar of flour and jug of oil never ran out (1 Kings 17:14-16). God then raised the widow's dead son through Elijah's fervent prayer.",
        scriptures: ["1 Kings 17:1-24", "James 5:17-18", "Luke 4:25-26"],
        keyPeople: ["elijah"],
      },
      {
        id: "mount-carmel-contest",
        title: "Mount Carmel — Fire from Heaven",
        summary:
          "After three years, God sent Elijah to confront Ahab. Elijah challenged the 450 prophets of Baal and 400 prophets of Asherah to a contest: two bulls, two altars, no fire — whichever God answers by fire is God. The Baal prophets called out all morning and into the afternoon, limping around the altar, cutting themselves with swords and lances until the blood gushed out — but there was no voice, no answer (1 Kings 18:26-29). Elijah repaired the broken altar of the LORD with twelve stones, dug a trench, drenched the sacrifice with four jars of water three times, then prayed a single, calm prayer. Fire fell and consumed the burnt offering, the wood, the stones, the dust, and licked up the water in the trench. The people fell on their faces: 'The LORD, he is God.' The 450 Baal prophets were killed.",
        scriptures: ["1 Kings 18:1-40", "Romans 11:3-4"],
        keyPeople: ["elijah"],
      },
      {
        id: "elijah-flees-depression",
        title: "Flight to Horeb — God Meets Elijah in Depression",
        summary:
          "Immediately after one of the greatest spiritual victories in Scripture, Elijah ran for his life from Jezebel's death threat. He sat under a broom tree, asked to die, and said 'It is enough; now, O LORD, take away my life, for I am no better than my fathers' (1 Kings 19:4). An angel touched him twice and gave him food for the journey. He traveled 40 days to Horeb, hid in a cave, and complained to God twice. God did not rebuke him — He asked 'What are you doing here, Elijah?' Wind, earthquake, and fire passed by, but the LORD was not in any of them. Then a low whisper — and God renewed his commission. This passage is one of Scripture's most compassionate portraits of God meeting His servant in spiritual exhaustion.",
        scriptures: ["1 Kings 19:1-18", "Romans 11:2-4"],
        keyPeople: ["elijah"],
      },
    ],
    keyPeople: ["elijah"],
    relatedEvents: [
      { eventId: "incarnation", note: "Malachi promised Elijah would return before the Day of the Lord. Jesus identifies John the Baptist as this Elijah — the forerunner who prepared His way (Matthew 11:14)." },
    ],
    tags: ["elijah", "ahab", "jezebel", "baal", "carmel", "fire", "prayer", "prophet"],
  },
  {
    id: "fall-northern-kingdom",
    title: "The Fall of the Northern Kingdom to Assyria",
    period: "divided-kingdom",
    summary:
      "After 200 years, 19 kings, and not a single monarch who did right in the sight of the LORD, God's long-threatened judgment fell on the northern kingdom of Israel. The Assyrian king Shalmaneser V besieged Samaria for three years (2 Kings 17:5); his successor Sargon II completed the conquest in 722 BC and deported the population throughout the Assyrian Empire (2 Kings 17:6). Scripture is ruthlessly clear that this was not merely geopolitics: 'This happened because the people of Israel had sinned against the LORD their God... and had feared other gods' (2 Kings 17:7). The ten northern tribes were scattered and largely absorbed into surrounding nations — the 'lost tribes' of Israel. Their removal from the land fulfilled the covenant curses of Deuteronomy 28:36–37 precisely, and stands as a permanent warning that God takes His covenant seriously: 'Do not be deceived: God is not mocked, for whatever one sows, that will he also reap' (Galatians 6:7).",
    scriptures: [
      "2 Kings 17:1–41",
      "2 Kings 17:6–7",
      "2 Kings 17:13–18",
      "Deuteronomy 28:36–37",
      "Amos 5:27",
      "Hosea 13:16",
      "Galatians 6:7",
    ],
    dateOptions: [
      {
        label: "722 BC — Sargon II's Conquest",
        yearBC: 722,
        scholars: [
          "Edwin Thiele",
          "K.A. Kitchen",
          "John MacArthur",
          "Gleason Archer",
        ],
        reasoning:
          "The fall of Samaria to Assyria in 722 BC is one of the most precisely dated events in Old Testament history, confirmed by multiple Assyrian annals including Sargon II's own inscriptions boasting of carrying away 27,290 inhabitants of Samaria. The Assyrian Eponym Chronicles pinpoint the year exactly.",
        scriptureSupport: [
          "2 Kings 17:3–6",
          "2 Kings 18:9–10",
          "Isaiah 10:5–11",
        ],
      },
    ],
    worldContext: [
      {
        title: "The Neo-Assyrian Empire at Its Peak",
        approximateYear: "~745–612 BC",
        civilization: "Assyria — Neo-Assyrian Empire",
        notes:
          "Under Tiglath-Pileser III, Shalmaneser V, and Sargon II, Assyria became the most powerful and feared empire in the ancient world. Their policy of mass deportation — relocating conquered peoples and replacing them with foreigners — was deliberate cultural destruction designed to prevent rebellion. Sargon II's annals at Khorsabad boast: 'I besieged and conquered Samaria, led away as booty 27,290 inhabitants of it.' This extrabiblical inscription is a direct archaeological confirmation of 2 Kings 17:6.",
      },
    ],
    subEvents: [
      {
        id: "northern-kingdom-idolatry",
        title: "200 Years of Unbroken Idolatry",
        summary:
          "Not one of the 19 kings who ruled the northern kingdom of Israel (930–722 BC) is described as doing 'what was right in the eyes of the LORD.' Every single king continued or exceeded the sin of Jeroboam's golden calves. The most wicked was Ahab, whose marriage to Jezebel of Sidon introduced Baal worship on a national, institutionalized scale — complete with a temple of Baal, 450 Baal prophets, and the murder of the LORD's prophets. God sent prophet after prophet — Elijah, Elisha, Hosea, Amos — to warn of coming judgment. The patience of God in delaying judgment for 200 years is itself a display of longsuffering grace.",
        scriptures: ["1 Kings 16:29-33", "2 Kings 17:7-18", "Hosea 4:1-3", "Amos 3:1-8"],
        keyPeople: ["elijah", "isaiah"],
      },
      {
        id: "assyrian-conquest",
        title: "The Assyrian Conquest — Tiglath-Pileser and Shalmaneser",
        summary:
          "The Assyrian Empire was the most feared military power of the 8th century BC. Tiglath-Pileser III (745–727 BC) began deporting Israelites from the Transjordan and northern Galilee regions. His successor Shalmaneser V besieged Samaria for three years. The city fell to Sargon II in 722/721 BC. 2 Kings 17:6 records: 'The king of Assyria carried the Israelites away to Assyria and placed them in Halah, and on the Habor, the river of Gozan, and in the cities of the Medes.' The Assyrian policy was systematic deportation and population transfer — designed to prevent further rebellion by removing a people from their homeland.",
        scriptures: ["2 Kings 15:29", "2 Kings 17:3-6", "Isaiah 10:5-6"],
        keyPeople: ["isaiah"],
      },
      {
        id: "ten-tribes-disappear",
        title: "The Ten Lost Tribes and the Samaritans",
        summary:
          "The Assyrians repopulated Samaria with peoples from Babylon, Cuthah, Avva, Hamath, and Sepharvaim, who intermarried with the remaining Israelites and created a mixed religion of sorts — worshipping both YHWH and their pagan gods (2 Kings 17:29-41). These became the Samaritans — the despised half-breeds of Jesus's day. The ten tribes of the north largely disappeared into the nations and never returned as distinct tribal entities. God had warned: 'I will remove Judah also out of my sight, as I have removed Israel' (2 Kings 23:27) — judgment was coming for the south as well.",
        scriptures: ["2 Kings 17:24-41", "John 4:9", "Ezra 4:1-3"],
        keyPeople: [],
      },
    ],
    keyPeople: ["elijah", "isaiah"],
    tags: ["assyria", "samaria", "sargon", "exile", "judgment", "northern kingdom", "ten tribes"],
  },
  {
    id: "isaiah-suffering-servant",
    title: "Isaiah: The Suffering Servant Prophecy",
    period: "divided-kingdom",
    summary:
      "Written approximately 700 years before the crucifixion, Isaiah 52:13–53:12 is the most detailed and stunning Messianic prophecy in the entire Old Testament. Isaiah describes a Servant who would be disfigured beyond human recognition (52:14), despised and rejected by men (53:3), struck by God and afflicted (53:4), pierced for our transgressions, crushed for our iniquities (53:5), led like a lamb to slaughter without opening his mouth (53:7), cut off from the land of the living for the transgression of my people (53:8), and assigned a grave with the wicked — yet with the rich in his death (53:9). He would see the result of his anguish and be satisfied (53:11) and justify many by bearing their iniquities (53:11). No other explanation fits this passage except Jesus of Nazareth — crucified, buried in a rich man's tomb (Matthew 27:57–60), and risen. Jesus Himself applied this text to Himself directly (Luke 22:37), as did Philip in Acts 8:32–35 and Peter in 1 Peter 2:22–25. Jewish interpreters prior to Christ frequently read this passage Messianically.",
    scriptures: [
      "Isaiah 52:13–53:12",
      "Isaiah 53:3–5",
      "Isaiah 53:7–9",
      "Isaiah 53:11",
      "Luke 22:37",
      "Acts 8:32–35",
      "1 Peter 2:22–25",
      "Matthew 27:57–60",
    ],
    dateOptions: [
      {
        label: "Isaiah's Ministry — ~740–700 BC",
        yearBC: 700,
        scholars: [
          "John MacArthur",
          "Gleason Archer",
          "Alec Motyer",
          "J. Alec Motyer",
        ],
        reasoning:
          "Isaiah ministered under four Judean kings: Uzziah, Jotham, Ahaz, and Hezekiah (Isaiah 1:1), placing his ministry from ~740 BC to at least 701 BC (the Assyrian crisis of Hezekiah's reign, Isaiah 36–39). The unity of Isaiah (chapters 1–66 as one work by one prophet) is defended by the Dead Sea Isaiah Scroll and the explicit citation of 'Isaiah' as the source of chapters 40–66 in the New Testament (John 12:38–41).",
        scriptureSupport: ["Isaiah 1:1", "Isaiah 6:1", "John 12:38–41"],
      },
    ],
    worldContext: [
      {
        title: "The Dead Sea Isaiah Scroll",
        approximateYear: "~125 BC (copy date)",
        civilization: "Qumran — Second Temple Period",
        notes:
          "The Great Isaiah Scroll (1QIsa-a), discovered at Qumran in 1947, is a complete copy of Isaiah dating to ~125 BC — over a century before Christ. It contains Isaiah 53 in virtually identical form to our modern Hebrew text, demolishing any argument that the chapter was written after the crucifixion. The text that predicted a pierced Servant bearing the sins of many was circulating in the Jewish community centuries before Jesus of Nazareth was born.",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "The Suffering Servant: Direct Prophecy of Substitutionary Atonement",
        description:
          "Isaiah 53 is the theological heart of the entire Old Testament — the explicit, verbal prophecy of what all the sacrificial types had been pointing to. An innocent Servant would bear the guilt of others, die in their place, and justify them: 'He was wounded for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his stripes we are healed' (Isaiah 53:5). 'Out of the anguish of his soul he shall see and be satisfied; by his knowledge shall the righteous one, my servant, make many to be accounted righteous, and he shall bear their iniquities' (Isaiah 53:11). When Philip met the Ethiopian eunuch reading this very passage, 'he opened his mouth, and beginning with this Scripture he told him the good news about Jesus' (Acts 8:35). There is no other interpretation.",
        oldTestamentRef: "Isaiah 52:13–53:12",
        newTestamentFulfillment: [
          "Acts 8:32–35",
          "1 Peter 2:22–25",
          "Romans 4:25",
          "Matthew 8:17",
        ],
        scholars: [
          "John MacArthur",
          "William MacDonald",
          "Alec Motyer",
          "Charles Spurgeon",
        ],
      },
    ],
    subEvents: [
      {
        id: "isaiah-vision",
        title: "Isaiah's Call Vision — Holy, Holy, Holy",
        summary:
          "In the year that King Uzziah died, Isaiah saw the Lord seated on His throne, high and lifted up. Seraphim cried 'Holy, holy, holy is the LORD of hosts; the whole earth is full of his glory' (Isaiah 6:3). Isaiah's response was immediate ruin: 'Woe is me! For I am lost; for I am a man of unclean lips.' A seraph touched a burning coal to his mouth: 'Your guilt is taken away, and your sin atoned for.' Then God asked 'Whom shall I send?' and Isaiah responded 'Here I am! Send me.' John 12:41 identifies who Isaiah saw in this vision: 'Isaiah said these things because he saw his glory' — the pre-incarnate Christ. Seeing the holiness of God always produces awareness of personal sinfulness, which grace then cleanses, which then produces willing service.",
        scriptures: ["Isaiah 6:1-13", "John 12:41", "Revelation 4:8"],
        keyPeople: ["isaiah"],
      },
      {
        id: "servant-songs",
        title: "The Four Servant Songs — A Portrait of the Messiah",
        summary:
          "Isaiah contains four distinct 'Servant Songs' (Isaiah 42:1-9; 49:1-13; 50:4-11; 52:13-53:12) that progressively reveal the identity and work of God's Servant. He is chosen, Spirit-anointed, gentle with the bruised reed, a light to the nations, called from the womb, obedient despite suffering, given as a covenant to the people. The fourth Song (52:13-53:12) reveals the Servant's substitutionary suffering in the most complete terms in the entire Old Testament: despised, rejected, bearing our griefs, wounded for our transgressions, bruised for our iniquities, the LORD laying on him the iniquity of us all, making his soul an offering for sin. Jesus read from the first Servant Song to announce His mission (Luke 4:18-21; Isaiah 61:1-2).",
        scriptures: ["Isaiah 42:1-9", "Isaiah 49:1-13", "Isaiah 52:13 - 53:12", "Luke 4:18-21"],
        keyPeople: ["isaiah"],
      },
      {
        id: "isaiah-53-details",
        title: "Isaiah 53 — The Gospel Before Calvary",
        summary:
          "Written approximately 700 years before Christ, Isaiah 53 reads less like prophecy and more like an eyewitness account of the crucifixion. He was despised and rejected by men (the crowds turned against Him). He was a man of sorrows, acquainted with grief (Gethsemane, the cross). He was wounded for our transgressions, crushed for our iniquities (penal substitution). The punishment that brought us peace was upon him (propitiation). By his stripes we are healed (justification). The LORD has laid on him the iniquity of us all (imputation). He was cut off from the land of the living — yet he will see his offspring, prolong his days (resurrection). These are not loose metaphors but specific, identifiable events in the life, death, and resurrection of Jesus Christ. The Ethiopian eunuch was reading this passage when Philip ran to explain it (Acts 8:32-35).",
        scriptures: ["Isaiah 53:1-12", "Acts 8:30-35", "1 Peter 2:24", "Romans 4:25"],
        keyPeople: ["isaiah"],
      },
    ],
    keyPeople: ["isaiah"],
    relatedEvents: [
      { eventId: "incarnation", note: "Isaiah 7:14 and 9:6 precisely predict the virgin birth and divine nature of the coming King, fulfilled in Jesus of Nazareth." },
      { eventId: "crucifixion-resurrection", note: "Isaiah 53 describes the crucifixion — betrayal, silence, substitution, burial, and resurrection — in such detail it reads as eyewitness testimony, written 700 years before the fact." },
    ],
    tags: ["isaiah", "suffering servant", "prophecy", "messiah", "atonement", "substitution"],
  },

  // ── EXILE ─────────────────────────────────────────────────────────────────
  {
    id: "fall-of-jerusalem",
    title: "The Destruction of Jerusalem and Solomon's Temple",
    period: "exile",
    summary:
      "After decades of warnings through Jeremiah ('I have spoken persistently to you, but you have not listened' — Jeremiah 7:13), God's judgment finally fell. Nebuchadnezzar besieged Jerusalem, starved the city for 18 months, breached the walls, and in the fifth month of 586 BC burned Solomon's Temple to the ground (2 Kings 25:8–9). The Ark of the Covenant disappears from history at this point. King Zedekiah watched his sons killed before his eyes, then had his own eyes put out and was carried in chains to Babylon (2 Kings 25:7). The bulk of Judah's surviving population was deported. Jeremiah's Lamentations captures the raw devastation of the holy city's fall: 'Is it nothing to you, all you who pass by? Look and see if there is any sorrow like my sorrow, which was brought upon me, which the LORD inflicted on the day of his fierce anger' (Lamentations 1:12). The destruction of the Temple — God's dwelling place — was the greatest catastrophe in Israel's history to that point, and yet God had promised through Jeremiah that after 70 years He would bring His people back (Jeremiah 25:11–12; 29:10).",
    scriptures: [
      "2 Kings 24:1–25:30",
      "Jeremiah 7:13",
      "Jeremiah 25:11–12",
      "Jeremiah 29:10",
      "2 Chronicles 36:11–21",
      "Lamentations 1:1–22",
      "Lamentations 1:12",
      "Ezekiel 10:1–22",
    ],
    dateOptions: [
      {
        label: "586 BC — Confirmed by Babylonian Chronicles",
        yearBC: 586,
        scholars: [
          "Edwin Thiele",
          "K.A. Kitchen",
          "Rodger Young",
          "John MacArthur",
        ],
        reasoning:
          "The destruction of Jerusalem in 586 BC is one of the most precisely documented events in the Old Testament, confirmed by both the Babylonian Chronicles (specifically the Chronicle of Nebuchadnezzar) and the biblical narrative in 2 Kings 25 and Jeremiah 52. The Babylonian Chronicle records the siege and fall in Nebuchadnezzar's 18th year, which synchronizes to 586 BC.",
        scriptureSupport: [
          "2 Kings 25:8",
          "Jeremiah 52:12–13",
          "2 Chronicles 36:19",
        ],
      },
    ],
    worldContext: [
      {
        title: "The Neo-Babylonian Empire Under Nebuchadnezzar",
        approximateYear: "~605–562 BC",
        civilization: "Babylon — Neo-Babylonian Empire",
        notes:
          "Nebuchadnezzar II is one of antiquity's greatest conquerors and builders. His Babylon was the wonder of the ancient world — with its massive Ishtar Gate (now in the Pergamon Museum, Berlin), the hanging gardens, and a population of perhaps 200,000. He besieged Jerusalem three times (605, 597, 586 BC), each time taking more captives. The Lachish Letters — clay tablets discovered at the Judean city of Lachish — contain military dispatches from around the time of the Babylonian advance, including one chilling line: 'We cannot see the signals of Azekah' — the signals had stopped, the city had fallen.",
      },
    ],
    subEvents: [
      {
        id: "three-deportations",
        title: "Three Waves of Deportation (605–586 BC)",
        summary:
          "Babylon's conquest of Jerusalem was not a single event but three distinct deportations. In 605 BC Nebuchadnezzar came for the first time and took hostages including Daniel and his three friends (Daniel 1:1-4). In 597 BC he returned and deported King Jehoiachin and 10,000 of Judah's leading citizens including Ezekiel (2 Kings 24:10-16). In 586 BC he returned a third time after a two-year siege, destroyed the city and the Temple, and took the remaining people captive. Jeremiah had prophesied all of this for decades. God was not caught off guard — He had announced the exile and its duration (70 years) through His prophets long before it occurred (Jeremiah 25:11-12).",
        scriptures: ["Daniel 1:1-4", "2 Kings 24:10-16", "2 Kings 25:1-21", "Jeremiah 25:11-12"],
        keyPeople: ["jeremiah", "daniel"],
      },
      {
        id: "temple-destroyed",
        title: "The Temple Destroyed — God's Presence Departs",
        summary:
          "The Temple Solomon built — the dwelling place of God's glory, the center of Israel's covenant life — was burned to the ground by Nebuchadnezzar's commander Nebuzaradan in the fifth month of 586 BC (2 Kings 25:8-9). Before the Temple fell, Ezekiel had a vision of the glory of God departing step by step from the Temple (Ezekiel 10:18-19; 11:22-23) — God was not conquered; He withdrew. The holy vessels were carried to Babylon (later used for a drunken feast by Belshazzar in Daniel 5). The destruction of the Temple was the ultimate visible sign that the Mosaic Covenant had been violated beyond recovery — the only solution would be the New Covenant.",
        scriptures: ["2 Kings 25:8-21", "Ezekiel 10:18-19", "Ezekiel 11:22-23", "Jeremiah 31:31-34"],
        keyPeople: ["jeremiah", "daniel"],
      },
      {
        id: "lamentations",
        title: "Lamentations — The Theology of Holy Grief",
        summary:
          "Jeremiah wrote five dirges (Lamentations) over the destroyed city. The book is written as an acrostic — each verse beginning with a successive letter of the Hebrew alphabet, suggesting that all grief from A to Z is being poured out. Yet in the center of the book (Lamentations 3:21-23) stands one of Scripture's most remarkable declarations of hope: 'This I call to mind, and therefore I have hope: The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.' The Hebrew word 'chesed' (steadfast love/lovingkindness) — God's covenant faithfulness — endures even when His judgment falls. The darkest chapters of human history do not extinguish the faithfulness of God.",
        scriptures: ["Lamentations 1-5", "Lamentations 3:21-23"],
        keyPeople: ["jeremiah"],
      },
    ],
    keyPeople: ["jeremiah", "daniel"],
    relatedEvents: [
      { eventId: "destruction-jerusalem-70ad", note: "Jerusalem falls to Babylon in 586 BC and to Rome in AD 70, both times for covenant unfaithfulness. Jesus explicitly predicted the second fall and connected it to the first (Luke 21:20–24)." },
    ],
    tags: ["nebuchadnezzar", "babylon", "jerusalem", "temple", "exile", "judgment", "lamentations"],
  },
  {
    id: "daniel-in-babylon",
    title: "Daniel: Faithfulness in the Courts of Babylon",
    period: "exile",
    summary:
      "Among the first exiles taken to Babylon in 605 BC was Daniel, a young man of royal lineage who 'resolved that he would not defile himself with the king's food or with the wine that he drank' (Daniel 1:8) — a small act of consecration that set the trajectory for a lifetime of uncompromising faithfulness. Through the interpretation of dreams, Daniel revealed God's blueprint for all of human history: the succession of world empires (Babylon, Persia, Greece, Rome) and the ultimate establishment of God's eternal kingdom (Daniel 2:44–45; 7:13–14). From the fiery furnace (Daniel 3) to the lions' den (Daniel 6), the book demonstrates that Nebuchadnezzar's boast — 'Is not this great Babylon, which I have built?' (Daniel 4:30) — is always answered: 'The Most High rules the kingdom of men and gives it to whom he will' (Daniel 4:32). Daniel's prophecy of the 70 Weeks (Daniel 9:24–27) is widely regarded as the most precise chronological Messianic prophecy in all of Scripture, identifying the exact timeframe from Artaxerxes' decree to the cutting off of the Messiah.",
    scriptures: [
      "Daniel 1:1–12:13",
      "Daniel 1:8",
      "Daniel 2:44–45",
      "Daniel 4:30–32",
      "Daniel 7:13–14",
      "Daniel 9:24–27",
      "Matthew 24:15",
      "Revelation 13:1–10",
    ],
    dateOptions: [
      {
        label: "Daniel's Ministry ~605–535 BC",
        yearBC: 605,
        scholars: [
          "John MacArthur",
          "Gleason Archer",
          "Robert Anderson",
          "Leon Wood",
        ],
        reasoning:
          "Daniel was taken to Babylon in the third year of Jehoiakim (Daniel 1:1), which was 605 BC (Nebuchadnezzar's first year). His ministry continued through the reigns of Nebuchadnezzar, Belshazzar, Darius the Mede, and into the reign of Cyrus (Daniel 1:21; 10:1), spanning roughly 70 years. The historical unity and early dating of Daniel is defended against critical scholars by Archer's A Survey of Old Testament Introduction.",
        scriptureSupport: ["Daniel 1:1", "Daniel 1:21", "Daniel 10:1"],
      },
    ],
    worldContext: [
      {
        title: "The Four World Empires in Prophecy and History",
        approximateYear: "~605 BC–476 AD",
        civilization: "Babylon → Persia → Greece → Rome",
        notes:
          "Nebuchadnezzar's dream (Daniel 2) and Daniel's own vision (Daniel 7) describe four successive world empires: Babylon (gold/lion), Persia (silver/bear), Greece (bronze/leopard), and Rome (iron/beast). History confirmed each transition with remarkable precision. The prophecy has been so accurate that liberal scholars assume it must have been written after the events — a conclusion driven by antisupernaturalist presuppositions rather than evidence. The book of Daniel circulated among the Qumran community centuries before Rome rose to its biblical prominence.",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "Daniel: Faithful Under Accusation, Vindicated from Death",
        description:
          "Daniel's life follows a pattern remarkably parallel to Christ's: perfectly faithful where others fell, falsely accused by jealous enemies who could find 'no ground for complaint or any fault' in him (Daniel 6:4 — cf. Pilate: 'I find no guilt in this man,' Luke 23:4), condemned to death by a law the king himself could not reverse, cast into the pit, the entrance sealed with a stone. Yet Daniel emerged alive, to the astonishment of his enemies. The sealed stone over the lions' den (Daniel 6:17) mirrors the sealed tomb of Christ (Matthew 27:66). Both emerged vindicated — and in both cases, the enemies who plotted the death were themselves destroyed.",
        oldTestamentRef: "Daniel 6:1–28",
        newTestamentFulfillment: [
          "Matthew 27:62–66",
          "Matthew 28:1–7",
          "Luke 23:4",
          "Acts 2:24",
        ],
        scholars: ["John MacArthur", "William MacDonald"],
      },
    ],
    subEvents: [
      {
        id: "daniels-integrity",
        title: "Daniel Refuses the King's Food — Faithfulness from Day One",
        summary:
          "When Daniel and his three friends were brought into Nebuchadnezzar's court for three years of training, they were assigned the king's food and wine. Daniel purposed in his heart that he would not defile himself with the king's food — likely because it had been offered to idols or violated dietary Law. He requested a ten-day test: vegetables and water instead of the king's rich food. At the end of ten days they appeared healthier than those who ate the royal food. God gave these four men knowledge, understanding, and wisdom — and Daniel the ability to understand visions and dreams. Their integrity in an apparently small matter of diet was the foundation of everything else that followed.",
        scriptures: ["Daniel 1:1-21", "Matthew 25:21"],
        keyPeople: ["daniel"],
      },
      {
        id: "nebuchadnezzars-statue",
        title: "Nebuchadnezzar's Dream — Four World Empires",
        summary:
          "Nebuchadnezzar dreamed of a great statue with a gold head, silver chest and arms, bronze belly and thighs, iron legs, and feet of iron mixed with clay. A stone cut without hands struck the feet, destroyed the statue, and became a mountain filling the whole earth. Daniel interpreted: the four metals represent four successive world empires (Babylon, Medo-Persia, Greece, Rome). The stone is the kingdom of God that will shatter all human kingdoms and stand forever — the Messianic Kingdom. This prophecy, written in the 6th century BC, accurately predicted the sequence of the next 600 years of world history and points to the ultimate establishment of Christ's eternal kingdom.",
        scriptures: ["Daniel 2:31-45", "Luke 1:33", "Revelation 11:15"],
        keyPeople: ["daniel"],
      },
      {
        id: "fiery-furnace",
        title: "The Fiery Furnace — A Fourth Man in the Fire",
        summary:
          "When Nebuchadnezzar erected a 90-foot gold statue and commanded all peoples to bow, Shadrach, Meshach, and Abednego refused. Brought before the king, they did not hedge: 'Our God is able to deliver us. But even if he does not, be it known to you, O king, that we will not serve your gods' (Daniel 3:17-18). Thrown into a furnace heated seven times hotter than usual, they walked in the fire unbound — and a fourth figure appeared with them, 'like a son of the gods.' When they came out, not a hair was singed and they did not even smell of smoke. This is one of Scripture's clearest pre-incarnation appearances of Christ — the Son of God present in the fire with His people.",
        scriptures: ["Daniel 3:1-30", "Isaiah 43:2", "Hebrews 13:5"],
        keyPeople: ["daniel"],
      },
      {
        id: "seventy-weeks",
        title: "The 70 Weeks Prophecy — The Most Precise Messianic Timeline",
        summary:
          "In response to Daniel's prayer of confession for Israel's sin, the angel Gabriel delivered the 70 Weeks prophecy. Seventy 'sevens' (heptads, widely understood as years) are decreed for Israel. The decree to restore Jerusalem begins the clock; after 7 + 62 = 69 weeks (483 years), the Anointed One will be 'cut off.' Many scholars, from Sir Robert Anderson to Harold Hoehner, have calculated that 483 prophetic years from Artaxerxes's decree in 444 BC (Nehemiah 2:1) brings us precisely to Jesus's triumphal entry — the very day He presented Himself as Messiah to Jerusalem before being 'cut off' at the cross. The 70th week remains a matter of significant interpretive debate.",
        scriptures: ["Daniel 9:24-27", "Nehemiah 2:1", "Luke 19:41-44"],
        keyPeople: ["daniel"],
      },
    ],
    keyPeople: ["daniel"],
    relatedEvents: [
      { eventId: "destruction-jerusalem-70ad", note: "Daniel 9:26 predicted that the city and sanctuary would be destroyed after the Anointed One was cut off — fulfilled within a generation of the crucifixion." },
      { eventId: "return-of-christ", note: "Daniel 7:13–14 gives the vision of the Son of Man receiving eternal dominion — Jesus quotes this directly at His trial before the high priest (Matthew 26:64)." },
    ],
    tags: ["daniel", "babylon", "nebuchadnezzar", "70 weeks", "prophecy", "faithfulness", "exile"],
  },
  {
    id: "ezekiel-dry-bones",
    title: "Ezekiel and the Valley of Dry Bones",
    period: "exile",
    summary:
      "Ezekiel ministered to the exiles in Babylon by the Chebar River, receiving dramatic visions that revealed the most terrible truth of the exile: the glory of God — the Shekinah — had departed from the Temple (Ezekiel 10:18–19) because of Israel's unrepentant idolatry. In the most memorable vision of his ministry, God transported Ezekiel to a valley filled with dry bones — a picture of Israel's spiritual death in exile — and commanded him: 'Prophesy to these bones' (Ezekiel 37:4). As Ezekiel spoke, there was a rattling, the bones came together, flesh and skin covered them — and then the breath of God entered them and they lived (Ezekiel 37:10). God interpreted the vision Himself: 'These bones are the whole house of Israel... I will put my Spirit within you, and you shall live' (Ezekiel 37:11, 14). This vision has a near fulfillment in the return from exile and an ultimate fulfillment in the national regeneration of Israel that all the prophets anticipate (Romans 11:25–27). No less than three chapters earlier, God had promised the New Covenant: 'I will give you a new heart, and a new spirit I will put within you' (Ezekiel 36:26).",
    scriptures: [
      "Ezekiel 37:1–28",
      "Ezekiel 37:4",
      "Ezekiel 37:10–14",
      "Ezekiel 36:25–27",
      "Ezekiel 10:18–19",
      "Romans 11:25–27",
      "John 3:5–8",
    ],
    dateOptions: [
      {
        label: "During Ezekiel's Exile Ministry ~593–571 BC",
        yearBC: 593,
        scholars: ["John MacArthur", "Gleason Archer", "Charles Dyer"],
        reasoning:
          "Ezekiel dates many of his prophecies precisely by year, month, and day relative to Jehoiachin's exile (e.g., Ezekiel 1:1 — 'the thirtieth year, the fourth month, the fifth day'). His ministry spanned from 593 BC (the 5th year of Jehoiachin's captivity) to at least 571 BC (Ezekiel 29:17). The valley of dry bones vision is undated but falls within this window.",
        scriptureSupport: [
          "Ezekiel 1:1–3",
          "Ezekiel 29:17",
          "Ezekiel 40:1",
        ],
      },
    ],
    worldContext: [
      {
        title: "Jewish Exiles at Tel-Abib on the Chebar Canal",
        approximateYear: "~593–570 BC",
        civilization: "Babylon — Exile Community",
        notes:
          "Archaeological excavations in Iraq have identified Jewish communities along the Chebar (Kabaru) canal near Nippur, including administrative tablets from the time of Nebuchadnezzar listing Jewish workers and merchants by name. Far from being isolated, the Jewish exiles maintained community life, kept records, and remembered Zion (Psalm 137:1). Ezekiel's role as prophet to these exiles — comforting them with visions of future restoration while also confronting their ongoing idolatry — was essential to preserving the covenant community during the darkest period of Israel's history.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "The Valley of Dry Bones: Type of Spiritual Resurrection",
        description:
          "The valley of dry bones is God's own commentary on the condition of fallen humanity — dead, scattered, and utterly without natural hope (Ephesians 2:1). The life that entered those bones came entirely from outside them, by the word and breath of God alone. This is regeneration: 'The hour is coming, and is now here, when the dead will hear the voice of the Son of God, and those who hear will live' (John 5:25). Jesus told Nicodemus: 'Unless one is born of the Spirit, he cannot enter the kingdom of God' (John 3:6). Three chapters before the valley vision, Ezekiel had already announced the New Covenant that would make it possible: 'I will give you a new heart, and a new spirit I will put within you' (Ezekiel 36:26) — fulfilled at Pentecost and in every new birth since.",
        oldTestamentRef: "Ezekiel 37:1–14",
        newTestamentFulfillment: [
          "John 5:25–29",
          "Ephesians 2:1–5",
          "John 3:5–8",
          "Romans 8:11",
        ],
        scholars: ["John MacArthur", "William MacDonald"],
      },
    ],
    subEvents: [
      {
        id: "ezekiels-call",
        title: "Ezekiel's Call Vision — The Glory Moves",
        summary:
          "Ezekiel was a priest deported to Babylon in 597 BC. His call vision (Ezekiel 1) is one of the most complex and overwhelming theophanies in Scripture: four living creatures, four wheels within wheels with eyes around their rims ('full of eyes all around'), crystal expanse overhead, and above it all a throne of sapphire with the appearance of the likeness of the glory of God. The complexity and movement of the vision communicates that the glory of God is not fixed to Jerusalem's Temple — it moves, it is sovereign, it cannot be contained. God was with His people in Babylon. This vision became the foundation of the Jewish mystical tradition (Merkavah mysticism) and foreshadows John's throne-room vision in Revelation 4.",
        scriptures: ["Ezekiel 1:1-28", "Revelation 4:1-8"],
        keyPeople: [],
      },
      {
        id: "valley-of-dry-bones",
        title: "The Valley of Dry Bones — National Resurrection",
        summary:
          "God brought Ezekiel in a vision to a valley full of very dry bones — representing the house of Israel: 'Our bones are dried up, and our hope is lost; we are clean cut off' (Ezekiel 37:11). God commanded Ezekiel to prophesy over the bones. As he prophesied, bones came together, sinews and flesh covered them, skin covered them — but there was no breath. Then Ezekiel prophesied to the breath/Spirit, and breath entered them and they lived — a vast army. The immediate meaning is the restoration of Israel from Babylonian exile. But the imagery of resurrection, Spirit-given life, and national regathering carries eschatological weight — pointing to Israel's final national restoration (Romans 11:25-27) and ultimately to the bodily resurrection of all believers.",
        scriptures: ["Ezekiel 37:1-14", "Romans 11:25-27", "John 5:25-29"],
        keyPeople: [],
      },
      {
        id: "new-covenant-ezekiel",
        title: "Ezekiel's New Covenant Promise — A New Heart and Spirit",
        summary:
          "Ezekiel 36:25-27 is one of the clearest pre-New-Testament descriptions of regeneration: 'I will sprinkle clean water on you, and you shall be clean from all your uncleannesses... And I will give you a new heart, and a new spirit I will put within you. And I will remove the heart of stone from your flesh and give you a heart of flesh. And I will put my Spirit within you, and cause you to walk in my statutes.' This is not moral improvement — it is a supernatural new creation. The same promise Jeremiah made regarding the New Covenant law written on the heart (Jeremiah 31:31-34) is here described in terms of the Spirit's indwelling transforming power. Jesus referred to this passage when He told Nicodemus he must be 'born of water and the Spirit' (John 3:5).",
        scriptures: ["Ezekiel 36:24-27", "Jeremiah 31:31-34", "John 3:5", "Titus 3:5"],
        keyPeople: [],
      },
    ],
    keyPeople: [],
    relatedEvents: [
      { eventId: "crucifixion-resurrection", note: "The valley of dry bones is the Old Testament's clearest picture of bodily resurrection — the same Spirit who animated those bones raised Jesus from the tomb." },
      { eventId: "return-of-christ", note: "The full restoration Ezekiel envisions awaits the return of Christ, when the dead in Him rise and Israel is permanently restored." },
    ],
    tags: ["ezekiel", "dry bones", "resurrection", "restoration", "new covenant", "spirit", "exile"],
  },

  // ── RETURN ────────────────────────────────────────────────────────────────
  {
    id: "decree-of-cyrus",
    title: "The Decree of Cyrus — Isaiah's Prophecy Fulfilled",
    period: "return",
    summary:
      "In 538 BC, Cyrus the Great of Persia issued a proclamation allowing Jewish exiles throughout his empire to return to their homeland and rebuild the Temple in Jerusalem (Ezra 1:1–4). This fulfilled to the letter Isaiah's prophecy written approximately 150 years earlier — which named Cyrus by name before his birth: 'He is my shepherd, and shall fulfill all my purpose; saying of Jerusalem, She shall be built, and of the temple, Your foundation shall be laid' (Isaiah 44:28). The same chapter declares: 'I am the LORD... who says of Cyrus, He is my shepherd' (Isaiah 44:24, 28). That a pagan Persian king would be named by a Hebrew prophet over a century before his birth is one of the most dramatic fulfillments of predictive prophecy in all of Scripture — and one of the strongest evidences for the divine inspiration of Isaiah. The Cyrus Cylinder, discovered in Babylon in 1879 and now in the British Museum, confirms that Cyrus did indeed allow exiled peoples to return to their homelands — exactly as the Bible records.",
    scriptures: [
      "Ezra 1:1–11",
      "Isaiah 44:24–45:7",
      "Isaiah 44:28",
      "Isaiah 45:1",
      "2 Chronicles 36:22–23",
      "Jeremiah 25:11–12",
      "Jeremiah 29:10",
    ],
    dateOptions: [
      {
        label: "538 BC — First Year of Cyrus over Babylon",
        yearBC: 538,
        scholars: [
          "Edwin Thiele",
          "K.A. Kitchen",
          "John MacArthur",
          "Gleason Archer",
        ],
        reasoning:
          "Cyrus conquered Babylon in 539 BC; his first full year of rule over Babylon was 538 BC, precisely when Ezra 1:1 places his decree ('In the first year of Cyrus king of Persia...'). This is confirmed by the Babylonian Chronicle of Nabonidus and the Cyrus Cylinder, making it one of the most securely dated events in the return period.",
        scriptureSupport: [
          "Ezra 1:1",
          "2 Chronicles 36:22",
          "Isaiah 44:28",
        ],
      },
    ],
    worldContext: [
      {
        title: "The Cyrus Cylinder — Archaeological Confirmation",
        approximateYear: "~538 BC",
        civilization: "Persia — Achaemenid Empire",
        notes:
          "The Cyrus Cylinder (discovered at Babylon, 1879) is a clay barrel inscribed with Cyrus's own account of his conquest of Babylon and his policy of repatriating displaced peoples and restoring their temples. It reads: 'I returned to these sanctuaries... the images of the gods... and established for them permanent sanctuaries... I assembled all their former inhabitants and returned to them their habitations.' While it does not mention the Jews specifically, it confirms the policy that Ezra 1 describes. Cynics who deny predictive prophecy must account for why Isaiah named Cyrus before his birth — by name, in print, a century and a half in advance.",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "Cyrus: A Type of Christ as Liberator and Anointed One",
        description:
          "God called Cyrus 'my shepherd' and 'my anointed' (Isaiah 44:28; 45:1) — the same Hebrew word as Messiah. Though Cyrus did not know God (Isaiah 45:4–5), he was sovereignly used to proclaim liberty to captives and release from bondage — foreshadowing Christ who came to 'proclaim liberty to the captives and recovering of sight to the blind, to set at liberty those who are oppressed' (Luke 4:18, quoting Isaiah 61:1). As Cyrus's decree freed exiles to return to their earthly home, Christ's atoning work is the eternal decree that frees captives from sin and restores them to their true home in God. The fact that God could use a pagan king as His anointed instrument is itself a demonstration of absolute divine sovereignty (Isaiah 45:5–7).",
        oldTestamentRef: "Isaiah 44:24–45:7",
        newTestamentFulfillment: [
          "Luke 4:18–19",
          "Galatians 5:1",
          "John 8:36",
          "Romans 8:2",
        ],
        scholars: ["John MacArthur", "Gleason Archer"],
      },
    ],
    subEvents: [
      {
        id: "cyrus-decree",
        title: "Cyrus Issues the Decree — Isaiah's Prophecy Fulfilled",
        summary:
          "In his first year as king of Babylon (539/538 BC), Cyrus issued a decree allowing all exiled peoples — including the Jews — to return to their homelands and rebuild their temples. The biblical text explains why: 'the LORD stirred up the spirit of Cyrus king of Persia' (Ezra 1:1). Isaiah had named Cyrus as the one who would authorize Jerusalem's rebuilding approximately 150 years before he was born (Isaiah 44:28; 45:1) — one of the most remarkable predictive prophecies in the entire Bible. The Cyrus Cylinder, discovered in 1879, confirms the historical accuracy of this decree.",
        scriptures: ["Ezra 1:1-4", "Isaiah 44:28", "Isaiah 45:1", "2 Chronicles 36:22-23"],
        keyPeople: ["ezra"],
      },
      {
        id: "first-return-zerubbabel",
        title: "The First Return Under Zerubbabel",
        summary:
          "The first wave of returning exiles (approximately 50,000 people) was led by Zerubbabel, the governor, and Jeshua (Joshua), the high priest (Ezra 2:1-2). They returned with the Temple vessels Nebuchadnezzar had taken (Ezra 1:7-11). They immediately rebuilt the altar and restored the burnt offerings before the Temple foundation was even laid (Ezra 3:1-6). When the Temple foundation was laid, some shouted for joy and some wept — the older generation remembered Solomon's Temple and this seemed pathetically small. The prophet Haggai encouraged them: 'The glory of this latter house shall be greater than the former' (Haggai 2:9) — a prophecy fulfilled when Jesus taught in Herod's Temple.",
        scriptures: ["Ezra 1:5 - 3:13", "Haggai 2:3-9", "Luke 2:46-47"],
        keyPeople: ["ezra"],
      },
      {
        id: "second-temple-completed",
        title: "The Second Temple Completed",
        summary:
          "Samaritan opposition and discouragement halted the Temple construction for approximately 16 years. God raised up the prophets Haggai and Zechariah to stir the people to resume building (Ezra 5:1-2). Under their preaching, the work resumed and was completed in the sixth year of Darius (516 BC) — 70 years after the Temple's destruction in 586 BC, exactly as Jeremiah had prophesied (Jeremiah 25:11-12). The Second Temple lacked the Ark of the Covenant, the shekinah glory, Urim and Thummim, and the sacred fire — yet it was greater in one sense: Jesus walked in its courts. Herod's later renovation transformed it into one of the wonders of the ancient world.",
        scriptures: ["Ezra 5:1 - 6:22", "Zechariah 4:6-9", "John 2:20", "Matthew 21:12-13"],
        keyPeople: ["ezra"],
      },
    ],
    keyPeople: ["ezra"],
    tags: ["cyrus", "ezra", "return", "prophecy", "isaiah", "temple", "babylon", "persia"],
  },
  {
    id: "nehemiah-walls",
    title: "Nehemiah Rebuilds Jerusalem's Walls",
    period: "return",
    summary:
      "In 445 BC, Nehemiah — the Jewish cupbearer to Persian King Artaxerxes I — received heartbreaking news: Jerusalem's walls were broken down and its gates burned, leaving the returned exiles in disgrace (Nehemiah 1:3). He wept, fasted, and prayed for days (Nehemiah 1:4–11), then asked the king for permission to return and rebuild — an act of faith that required him to approach the most powerful ruler in the world with a personal request. Artaxerxes granted him passage and timber (Nehemiah 2:7–8) — Nehemiah noted it was 'the gracious hand of my God upon me' (Nehemiah 2:8). Despite fierce opposition from Sanballat, Tobiah, and Geshem who ridiculed and threatened the builders, Nehemiah armed the workers and pressed forward — 'half of my servants worked on construction, and half held the spears, shields, bows, and coats of mail' (Nehemiah 4:16). The entire wall was completed in 52 days (Nehemiah 6:15), and even the enemies recognized this could only have been done with God's help (Nehemiah 6:16). This decree of Artaxerxes in 445 BC is the starting point of Daniel's 70 Weeks prophecy (Daniel 9:25 — 'from the going out of the word to restore and build Jerusalem').",
    scriptures: [
      "Nehemiah 1:1–6:19",
      "Nehemiah 1:3–4",
      "Nehemiah 2:8",
      "Nehemiah 4:16",
      "Nehemiah 6:15–16",
      "Daniel 9:25",
    ],
    dateOptions: [
      {
        label: "445 BC — 20th Year of Artaxerxes I",
        yearBC: 445,
        scholars: [
          "Robert Anderson",
          "Harold Hoehner",
          "John MacArthur",
          "Gleason Archer",
        ],
        reasoning:
          "Nehemiah 2:1 places his request in the 20th year of Artaxerxes I (Longimanus). Artaxerxes I reigned 465–424 BC, placing the decree in 445 BC. This date is critical because Robert Anderson's The Coming Prince (1894) and Harold Hoehner's Chronological Aspects of the Life of Christ demonstrated that exactly 483 prophetic years (173,880 days) from this decree brings you to the triumphal entry of Jesus into Jerusalem in 33 AD — a fulfillment of Daniel 9:25 to the day.",
        scriptureSupport: [
          "Nehemiah 2:1",
          "Daniel 9:25",
          "Luke 19:41–44",
        ],
      },
    ],
    worldContext: [
      {
        title: "Jerusalem Under Persian Governance",
        approximateYear: "~445 BC",
        civilization: "Persia — Province of Yehud",
        notes:
          "Jerusalem was a small, vulnerable province (Yehud Medinata) on the western edge of the Persian Empire, surrounded by hostile neighbors. Archaeological surveys confirm that the population of Persian-period Jerusalem was far smaller than pre-exilic Judah — perhaps only 20,000–30,000 people. The wall Nehemiah rebuilt was defensive necessity for a community that felt deeply exposed. Its 52-day construction was a genuine miracle given the opposition, the size of the task, and the small workforce available.",
      },
    ],
    subEvents: [
      {
        id: "nehemiahs-prayer",
        title: "Nehemiah Hears the News — Four Months of Prayer",
        summary:
          "When Nehemiah's brother Hanani reported that the returned exiles were in great trouble and the walls of Jerusalem lay in ruins, Nehemiah sat down and wept, mourned, fasted, and prayed for days. His prayer in Nehemiah 1:5-11 is a model of intercessory prayer: adoration of God's greatness, confession of national sin (including his own family's), appeal to God's covenantal promises (Deuteronomy 30:1-5), and specific petition. For four months he prayed before the opportunity came to ask the king. When it did, his 'quick prayer' to God before answering (Nehemiah 2:4) shows that four months of praying had made him a man of instantaneous prayer.",
        scriptures: ["Nehemiah 1:1 - 2:8", "Deuteronomy 30:1-5"],
        keyPeople: ["nehemiah"],
      },
      {
        id: "walls-built",
        title: "52 Days — The Walls Rebuilt",
        summary:
          "Nehemiah arrived with timber and letters of safe passage from Artaxerxes. He surveyed the walls by night before telling anyone his plan. He organized the people by families and sections — every person built the section of wall nearest their own house, giving everyone a personal stake in the work. Sanballat and Tobiah mocked and threatened; there was a plot to attack. Nehemiah responded with prayer and practical action: 'We prayed to our God and set a guard as a protection' (Nehemiah 4:9). Workers built with one hand holding a tool and the other a sword. The entire wall was completed in 52 days — an achievement their enemies recognized was 'accomplished with the help of our God' (Nehemiah 6:16).",
        scriptures: ["Nehemiah 2:11 - 6:16"],
        keyPeople: ["nehemiah"],
      },
      {
        id: "ezra-reads-law",
        title: "Ezra Reads the Law — A Revival Under the Word",
        summary:
          "With the walls complete, all the people gathered in the public square and asked Ezra to bring out the Book of the Law. Ezra stood on a wooden platform above the people, opened the Book, and all the people rose to their feet. He read from early morning until midday and the people wept as they heard the Law — their grief at recognizing how far they had fallen from God's standard. Ezra and the Levites helped the people understand what was being read, 'giving the sense, so that the people understood the reading' (Nehemiah 8:8). This is the model of expository preaching: read the text, explain it, apply it. The result was genuine revival, the keeping of the Feast of Tabernacles, and a renewed covenant before God.",
        scriptures: ["Nehemiah 8:1-18", "Nehemiah 9:1-38"],
        keyPeople: ["nehemiah", "ezra"],
      },
    ],
    keyPeople: ["nehemiah", "ezra"],
    tags: ["nehemiah", "walls", "jerusalem", "artaxerxes", "70 weeks", "daniel", "prayer", "return"],
  },
  {
    id: "esther",
    title: "Esther: Providence Without a Miracle",
    period: "return",
    summary:
      "Set in the court of King Ahasuerus (Xerxes I) of Persia, the book of Esther is unique in Scripture: the name of God is never mentioned — yet His providential hand is unmistakable on every page. When the wicked Haman plotted the genocide of every Jew throughout the 127-province Persian Empire (Esther 3:13), Mordecai challenged his orphaned cousin and queen Esther with one of the Bible's most famous statements of sovereign providence: 'Who knows whether you have not come to the kingdom for such a time as this?' (Esther 4:14). Esther risked her life to approach the king uninvited, saying simply: 'If I perish, I perish' (Esther 4:16). Through a series of seemingly coincidental reversals — the king's sleepless night, the reading of a court record (Esther 6:1–2), Haman's own gallows — the Jews were delivered and Haman was hanged. The feast of Purim (Esther 9:26–28) was established as a permanent annual memorial, still celebrated by Jewish communities worldwide. The book teaches that God governs all events — even those in which He is never visibly present — for the protection of His covenant people.",
    scriptures: [
      "Esther 1:1–10:3",
      "Esther 3:13",
      "Esther 4:14",
      "Esther 4:16",
      "Esther 6:1–2",
      "Esther 9:26–28",
      "Romans 8:28",
    ],
    dateOptions: [
      {
        label: "~483–473 BC — Reign of Xerxes I",
        yearBC: 483,
        scholars: [
          "Edwin Thiele",
          "K.A. Kitchen",
          "Joyce Baldwin",
          "John MacArthur",
        ],
        reasoning:
          "Ahasuerus is identified with Xerxes I (486–465 BC) based on the matching Persian name forms (Hebrew Ahasuerus = Persian Khshayarsha = Greek Xerxes). The feast of Esther 1 likely corresponds to the great feast Herodotus records as occurring before Xerxes' Greek campaign (~483 BC). Esther's elevation to queen and Haman's plot fall within 483–473 BC.",
        scriptureSupport: ["Esther 1:1–3", "Esther 2:16–17"],
      },
    ],
    worldContext: [
      {
        title: "The Persian Empire Under Xerxes",
        approximateYear: "~486–465 BC",
        civilization: "Persia — Achaemenid Empire",
        notes:
          "Xerxes I is known from Greek historians for his massive but failed invasion of Greece (480 BC — the battles of Thermopylae, Salamis, and Plataea). Herodotus confirms the enormous feast described in Esther 1, which he records as the planning council for the Greek invasion. Archaeological excavations at Persepolis have uncovered the Apadana (audience hall) and treasury records from Xerxes' reign, including references to the precise administrative structure of '127 provinces' that Esther describes.",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "Esther: A Type of Christ's Intercession",
        description:
          "Esther risked her life to approach the king uninvited on behalf of her condemned people — interceding when no one else could. She is a type of Christ our great Intercessor, who entered the presence of the heavenly Father not merely risking His life but giving it, to secure the pardon of those under sentence of death. 'He always lives to make intercession for them' (Hebrews 7:25). As Esther fully identified with her condemned people — 'If I perish, I perish' (Esther 4:16) — Christ fully identified with His people in the incarnation: 'he had to be made like his brothers in every respect, so that he might become a merciful and faithful high priest' (Hebrews 2:17). But where Esther's intercession rested on beauty and the king's favor, Christ's intercession rests on His own blood (Hebrews 9:12) — a far more secure foundation.",
        oldTestamentRef: "Esther 4:1–5:3",
        newTestamentFulfillment: [
          "Hebrews 7:25",
          "Romans 8:34",
          "1 John 2:1–2",
          "Hebrews 2:17–18",
        ],
        scholars: ["John MacArthur", "William MacDonald"],
      },
    ],
    subEvents: [
      {
        id: "esther-becomes-queen",
        title: "Esther Becomes Queen of Persia",
        summary:
          "When Queen Vashti refused to appear before Ahasuerus (Xerxes I) at his banquet, she was deposed. A search was made throughout the empire for beautiful young women; Esther was taken into the royal harem. 'The young woman pleased him and won his favor' (Esther 2:9). She was made queen without anyone knowing she was Jewish, on Mordecai's instruction (Esther 2:10). The reader can see God's sovereign placement: a Jewish woman, elevated to the most powerful court in the world, positioned exactly where she would need to be. 'For such a time as this' (Esther 4:14) is not chance — it is providence.",
        scriptures: ["Esther 2:1-20"],
        keyPeople: ["esther"],
      },
      {
        id: "haman-plots-genocide",
        title: "Haman's Plot — A New Pharaoh, A New Threat",
        summary:
          "Haman the Agagite — an Amalekite (the ancient enemy of Israel) — was elevated to a position of power by Xerxes. When Mordecai refused to bow to him, Haman determined to destroy not just Mordecai but all Jews in the entire Persian Empire. He cast lots (purim) to determine the most auspicious day for the genocide — the 13th of Adar. He paid Xerxes 10,000 talents of silver for permission to kill them all and keep their possessions. An irrevocable edict went out to every province. The Jews wept, fasted, and mourned in sackcloth and ashes. Mordecai sent word to Esther with the charge that would test her faith to the core.",
        scriptures: ["Esther 3:1-15", "Esther 4:1-8"],
        keyPeople: ["esther"],
      },
      {
        id: "esthers-courage",
        title: "'If I Perish, I Perish' — Esther's Courage and the Reversal",
        summary:
          "To approach the king unsummoned was punishable by death — even for the queen. Esther called for a three-day fast, then resolved: 'I will go to the king, though it is against the law, and if I perish, I perish' (Esther 4:16). The king held out his golden scepter. Through a series of banquets and the king's sleepless night — during which he happened to read of Mordecai's earlier service to him — the tables were turned completely. Haman was hanged on the very gallows he had built for Mordecai. The Jews were granted the right to defend themselves, and Haman's 10 sons were hanged. The Feast of Purim was instituted to celebrate this reversal — and is still celebrated by Jewish communities today.",
        scriptures: ["Esther 4:15 - 9:32"],
        keyPeople: ["esther"],
      },
    ],
    keyPeople: ["esther"],
    tags: ["esther", "mordecai", "haman", "xerxes", "purim", "providence", "persia", "genocide"],
  },

  // ── INTERTESTAMENTAL ──────────────────────────────────────────────────────
  {
    id: "alexander-great",
    title: "Alexander the Great and the Hellenization of the World",
    period: "intertestamental",
    summary:
      "In 334 BC, a twenty-two-year-old Macedonian king crossed into Persia and in just thirteen years conquered an empire stretching from Greece to India — the most rapid military campaign in ancient history. Alexander the Great destroyed the Persian Empire, conquered Egypt, and swept through the entire Near East, fulfilling Daniel's vision of 'a male goat [that] came from the west across the face of the whole earth, without touching the ground' (Daniel 8:5). His sudden death at age 32 in 323 BC, before establishing a dynasty, fulfilled Daniel 8:8 — the great horn 'was broken... and in its place four notable horns came up toward the four winds of heaven' (his four generals who divided the empire). Alexander's most lasting legacy was not military but cultural: he spread Koine Greek as a common language across the entire known world. This was no accident of history — it was God's providential preparation for the Gospel. The New Testament was written in Greek; Paul could preach from Athens to Rome in one language; and the Septuagint (the Greek Old Testament) gave Gentiles access to Israel's Scriptures before the coming of Christ.",
    scriptures: [
      "Daniel 8:1–27",
      "Daniel 8:5",
      "Daniel 8:8",
      "Daniel 8:21",
      "Daniel 11:2–4",
      "Zechariah 9:1–8",
    ],
    dateOptions: [
      {
        label: "Alexander's Conquests 334–323 BC",
        yearBC: 334,
        scholars: [
          "Gleason Archer",
          "John MacArthur",
          "D.A. Carson",
          "Leon Wood",
        ],
        reasoning:
          "The historical dating of Alexander's campaigns is among the most precisely documented in ancient history, corroborated by multiple Greek historians (Arrian, Plutarch, Diodorus Siculus), archaeological evidence, and the Egyptian, Persian, and Babylonian records he conquered. Daniel 8:5–8 and 11:2–4 are recognized as prophecies fulfilled by Alexander even by scholars who dispute other biblical prophecies.",
        scriptureSupport: ["Daniel 8:5–8", "Daniel 11:3–4"],
      },
    ],
    worldContext: [
      {
        title: "Greek as the Universal Language of the Ancient World",
        approximateYear: "~323–30 BC",
        civilization: "Hellenistic World",
        notes:
          "After Alexander, Koine (common) Greek became the lingua franca of commerce, government, and philosophy from Egypt to India. When Paul stood on Mars Hill in Athens (Acts 17:22–34) or wrote letters to Corinth and Rome, he was communicating in a language everyone understood. The Septuagint (Greek translation of the Old Testament, ~250 BC) put Israel's Scriptures in the hands of the entire Gentile world — so that when Paul argued from the Scriptures in synagogues across the Roman Empire, Greek-speaking Gentiles could follow along. God's sovereignty over Alexander's conquests was preparation for the Gospel on a global scale.",
      },
    ],
    subEvents: [
      {
        id: "alexander-conquests",
        title: "Alexander's Lightning Conquests (334–323 BC)",
        summary:
          "Alexander crossed into Asia Minor in 334 BC with approximately 40,000 men. In eleven years he conquered the Persian Empire (the largest empire yet seen), Egypt, and pushed as far east as modern Pakistan and India. The key battles — Granicus (334 BC), Issus (333 BC), and Gaugamela (331 BC) — each time saw his smaller, brilliantly led force destroy much larger Persian armies. He founded over 70 cities (many named Alexandria) and deliberately spread Greek language, architecture, philosophy, and culture everywhere he went. He died in Babylon in 323 BC at age 32 from fever — or, as many ancient sources suggest, from the effects of heavy drinking.",
        scriptures: ["Daniel 8:5-8", "Daniel 11:3-4"],
        keyPeople: [],
      },
      {
        id: "alexander-and-jerusalem",
        title: "Alexander and Jerusalem — Jewish Tradition",
        summary:
          "Josephus records (Antiquities 11.317-345) that when Alexander came to Jerusalem, the high priest Jaddua came out in his sacred vestments to meet him. Alexander, awed by the sight, prostrated himself before God's name on the priest's turban. His generals were astonished. Alexander said he had seen this figure in a dream in Macedonia directing him to make his expedition to Asia. He was then shown the book of Daniel, which prophesied that a Greek would destroy the Persian Empire — and Alexander believed it referred to him. He granted the Jews permission to live by their own laws and exempted them from tribute in sabbatical years. Historians debate the accuracy of this account, but Alexander's general policy of tolerance toward Jewish practice is historically established.",
        scriptures: ["Daniel 8:1-8", "Zechariah 9:1-8"],
        keyPeople: [],
      },
      {
        id: "greek-language-providential",
        title: "Hellenism — The Providential Preparation for the Gospel",
        summary:
          "Alexander's greatest legacy for redemptive history was unintentional: the spread of a common Greek language (Koine Greek) across the Mediterranean world. When the New Testament was written, there existed for the first and only time in history a single common language understood from Britain to India. The Septuagint (Greek Old Testament, completed c. 250-150 BC) made the Hebrew Scriptures accessible to the Gentile world. Roman roads (another providential instrument) and the Pax Romana would soon add the infrastructure for rapid gospel travel. Paul wrote all his letters in Greek. The language of commerce and philosophy became the language of the Gospel — a remarkable piece of divine preparation across centuries.",
        scriptures: ["Galatians 4:4", "Romans 10:14-15"],
        keyPeople: [],
      },
    ],
    keyPeople: [],
    tags: [
      "alexander",
      "greece",
      "hellenism",
      "daniel",
      "prophecy",
      "language",
      "intertestamental",
    ],
  },
  {
    id: "maccabean-revolt",
    title: "The Maccabean Revolt and the Abomination of Desolation",
    period: "intertestamental",
    summary:
      "Antiochus IV Epiphanes ('God Manifest') — the Seleucid king who controlled Judea from ~175 BC — launched a systematic campaign to destroy Jewish religion and force Hellenistic conformity. He banned the Torah, circumcision, and Sabbath observance on pain of death; installed a statue of Zeus in the Temple; and sacrificed a pig on the altar in 167 BC — the 'abomination of desolation' foretold by Daniel (Daniel 11:31; 8:13). When the elderly priest Mattathias killed an apostate Jew who was offering sacrifice and a royal official who demanded it (1 Maccabees 2:24–26), it sparked a guerrilla revolt led by his son Judas Maccabeus ('the Hammer'). Against all military odds, the Maccabees liberated Jerusalem in 164 BC and rededicated the Temple — the eight-day rededication celebrated to this day as Hanukkah (John 10:22 — the 'Feast of Dedication'). Jesus used the Antiochian desecration as a type of a future, greater abomination: 'When you see the abomination of desolation spoken of by the prophet Daniel, standing in the holy place... then let those who are in Judea flee to the mountains' (Matthew 24:15–16), pointing to a yet-future fulfillment in the Tribulation period.",
    scriptures: [
      "Daniel 11:21–35",
      "Daniel 8:9–14",
      "Daniel 11:31",
      "Matthew 24:15–16",
      "John 10:22",
      "2 Thessalonians 2:3–4",
      "Revelation 13:14–15",
    ],
    dateOptions: [
      {
        label: "Desecration 167 BC / Rededication 164 BC",
        yearBC: 167,
        scholars: [
          "Gleason Archer",
          "John MacArthur",
          "John Walvoord",
          "Leon Wood",
        ],
        reasoning:
          "The dates of the Antiochian desecration (167 BC) and Maccabean rededication (164 BC) are among the most precisely documented events of the Hellenistic period, confirmed by 1 and 2 Maccabees, Josephus's Antiquities (12.7.6), and multiple Greek/Roman historians. The 2,300 evenings-and-mornings of Daniel 8:14 has been calculated by many scholars as corresponding to the period of desecrated Temple services.",
        scriptureSupport: ["Daniel 8:13–14", "Daniel 11:31"],
      },
    ],
    worldContext: [
      {
        title: "The Seleucid Empire and Jewish Identity Under Threat",
        approximateYear: "~200–164 BC",
        civilization: "Seleucid Syria — Hellenistic Kingdom",
        notes:
          "Antiochus IV's campaign against Judaism was not merely religious persecution but cultural genocide — the first systematic attempt in history to destroy an entire people's religious identity. His actions forged a fierce Jewish national and religious identity that would persist through the Roman period and characterize the Judaism of Jesus's day. The Pharisees as a movement trace their origins to the Hasidim ('pious ones') who resisted Antiochus. Without the Maccabean revolt, there may have been no recognizable Jewish religion into which the Messiah was born.",
      },
    ],
    subEvents: [
      {
        id: "antiochus-desecrates",
        title: "Antiochus Epiphanes Desecrates the Temple",
        summary:
          "Antiochus IV Epiphanes ('God Manifest') — a name his enemies changed to Epimanes ('the madman') — launched a systematic campaign to eradicate Jewish religion. He outlawed Torah observance, Sabbath-keeping, and circumcision on pain of death. He erected an altar to Zeus in the Temple, sacrificed a pig on the altar, and sprinkled its broth in the Holy of Holies (1 Maccabees 1:54, 59). He also placed a statue of Zeus (with his own face) in the Temple. Daniel called this the 'abomination of desolation' (Daniel 11:31) — and Jesus said a future abomination of desolation would signal the end times (Matthew 24:15), showing that Antiochus's act was a historical type of a greater eschatological fulfillment.",
        scriptures: ["Daniel 11:29-35", "Matthew 24:15", "1 Maccabees 1:41-64"],
        keyPeople: [],
      },
      {
        id: "maccabean-uprising",
        title: "Mattathias and Judas Maccabeus — Revolt and Victory",
        summary:
          "An aged priest named Mattathias from Modein refused to sacrifice to an idol and killed a Seleucid officer who tried to force him. He fled to the hills with his five sons and called for all zealous for the Law to follow. His son Judas — nicknamed 'Maccabeus' (the Hammer) — became the military leader. Against enormous odds, using guerrilla tactics in the Judean hills, the Maccabees defeated Seleucid armies far larger than their own. In 164 BC — exactly three years after the Temple's desecration — they retook Jerusalem, cleansed the Temple, and rededicated it. The eight-day celebration of the Temple rededication became the Feast of Dedication (Hanukkah) — the 'Feast of Lights' mentioned in John 10:22 when Jesus walked in Solomon's Porch.",
        scriptures: ["1 Maccabees 2:1 - 4:59", "John 10:22-23"],
        keyPeople: [],
      },
      {
        id: "hasmonean-dynasty",
        title: "The Hasmonean Dynasty — Power Corrupts",
        summary:
          "After the initial Maccabean victory, the Hasmonean family (descendants of Mattathias) established an independent Jewish state and priestly dynasty. But within two generations the dynasty had degenerated into the same kind of political intrigue, fratricide, and alliance with pagan powers that had marked Israel's worst kings. The Hasmoneans seized both the high priesthood and the kingship — a violation of biblical precedent — and ruled with increasing brutality. Their internal civil war in 63 BC invited Roman general Pompey to intervene, who captured Jerusalem after a three-month siege. This ended Jewish political independence and set the stage for Herod the Great and Roman rule — the world into which Jesus was born.",
        scriptures: ["John 11:48", "Luke 3:1"],
        keyPeople: [],
      },
    ],
    keyPeople: [],
    tags: ["maccabees", "antiochus", "abomination", "desolation", "daniel", "hanukkah", "temple"],
  },
  {
    id: "herod-great",
    title: "Herod the Great — The King Who Tried to Kill the Messiah",
    period: "intertestamental",
    summary:
      "Herod the Great — an Idumean (Edomite) appointed king of Judea by Rome in 37 BC — was a figure of contradictions: a magnificent builder who expanded the Jerusalem Temple into one of the wonders of the ancient world, and a paranoid murderer who executed his own wife, three sons, and the male infants of Bethlehem. When the Magi arrived from the East asking 'Where is he who has been born king of the Jews?' (Matthew 2:2), Herod's pretended worship concealed his murderous intent. His slaughter of the innocents of Bethlehem (Matthew 2:16) fulfilled Jeremiah's prophecy to the letter: 'A voice was heard in Ramah, weeping and loud lamentation, Rachel weeping for her children' (Jeremiah 31:15, Matthew 2:18). Of the Temple Herod built — which his own son Archelaus was still completing in Jesus's day — Jesus said with absolute certainty: 'There will not be left here one stone upon another that will not be thrown down' (Matthew 24:2). Herod died of a hideous disease in 4 BC, described in grotesque detail by Josephus, having murdered all who threatened him — including the true King he could never destroy.",
    scriptures: [
      "Matthew 2:1–18",
      "Matthew 2:2",
      "Matthew 2:16",
      "Matthew 24:2",
      "Jeremiah 31:15",
      "Micah 5:2",
      "Luke 1:5",
    ],
    dateOptions: [
      {
        label: "Reign 37–4 BC",
        yearBC: 37,
        scholars: [
          "Harold Hoehner",
          "Jack Finegan",
          "John MacArthur",
          "Gleason Archer",
        ],
        reasoning:
          "Herod's reign of 37–4 BC is thoroughly established by Josephus (Antiquities 14.14.5; 17.8.1) corroborated by Roman historians. Josephus records a lunar eclipse just before Herod's death, which astronomical calculation places in 4 BC. This establishes that Jesus was born no later than 4 BC — and the apparent paradox of 'Christ born before Christ' is explained by a 6th-century calendar error by the monk Dionysius Exiguus who established the BC/AD system.",
        scriptureSupport: [
          "Matthew 2:1",
          "Luke 1:5",
          "Matthew 2:19–20",
        ],
      },
    ],
    worldContext: [
      {
        title: "Herod's Temple — The Wealthiest Building of Its Age",
        approximateYear: "~20 BC–70 AD",
        civilization: "Roman Judea — Herodian Period",
        notes:
          "Herod began expanding the Temple Mount around 20 BC, nearly doubling the platform area with massive retaining walls — the Western Wall (Wailing Wall) still stands today. Josephus records that the Temple's walls were covered in gold plates that reflected the morning sun so brightly travelers could not look at it. The construction used 10,000 workers and stones weighing hundreds of tons, some over 40 feet long. When Jesus told the disciples 'not one stone will be left on another' (Matthew 24:2), they were looking at one of the greatest architectural achievements of the ancient world. It was burned by Titus in 70 AD.",
      },
    ],
    subEvents: [
      {
        id: "herods-rise",
        title: "Herod's Rise — An Idumean on David's Throne",
        summary:
          "Herod was an Idumean (Edomite) — a descendant of Esau — whose father Antipater had gained influence as an administrator under Rome. When the Parthians installed a Hasmonean prince on the Jewish throne in 40 BC, Herod fled to Rome, appealed to the Senate, and was declared King of Judea by the Roman Senate in a single day. He spent the next three years militarily reconquering his own kingdom. His legitimacy was always questioned by the Jewish people — which drove his characteristic paranoia, his execution of rivals (including his wife Mariamne and three of his own sons), and his obsessive building projects to curry popular favor.",
        scriptures: ["Matthew 2:1", "Luke 1:5"],
        keyPeople: [],
      },
      {
        id: "herods-temple",
        title: "Herod's Temple — Grandeur as Political Manipulation",
        summary:
          "Herod's greatest building project began around 20-19 BC: a complete renovation and expansion of Zerubbabel's modest Second Temple into one of the most magnificent structures in the ancient world. He doubled the size of the Temple Mount (the platform is still visible today — the Western Wall is a retaining wall of Herod's construction). The Temple building itself was covered in gold and white marble, visible from miles away. Jewish tradition says 'Whoever has not seen Herod's Temple has never seen a beautiful building' (Talmud Bava Batra 4a). Jesus walked in these courts, taught here, and then said: 'There will not be left here one stone upon another that will not be thrown down' (Matthew 24:2) — fulfilled in AD 70.",
        scriptures: ["John 2:20", "Matthew 24:1-2", "Mark 11:27"],
        keyPeople: [],
      },
      {
        id: "massacre-innocents",
        title: "The Massacre of the Innocents",
        summary:
          "When the Magi arrived in Jerusalem asking about the newborn King of the Jews, Herod was troubled — and all Jerusalem with him. He secretly summoned the Magi, asked them to find the child and report back, then when they did not return he ordered the killing of all male children in Bethlehem and the surrounding region, two years old and under. Matthew sees in this the fulfillment of Jeremiah 31:15: 'A voice was heard in Ramah, weeping and loud lamentation, Rachel weeping for her children; she refused to be comforted, because they are no more.' The flight to Egypt fulfills Hosea 11:1: 'Out of Egypt I called my son.' Every detail of the infancy narrative is woven with Old Testament fulfillment.",
        scriptures: ["Matthew 2:13-18", "Jeremiah 31:15", "Hosea 11:1"],
        keyPeople: [],
      },
    ],
    keyPeople: [],
    tags: ["herod", "magi", "bethlehem", "innocents", "temple", "rome", "messiah", "idumea"],
  },

  // ── NEW TESTAMENT ─────────────────────────────────────────────────────────
  {
    id: "incarnation",
    title: "The Incarnation: The Word Became Flesh",
    period: "new-testament",
    summary:
      "In the fullness of time — when the Roman road system unified travel, Greek unified language, and Pax Romana created relative peace for the spread of a message — 'God sent forth His Son, born of woman, born under the law, to redeem those who were under the law' (Galatians 4:4–5). The eternal Son of God, through whom all things were created (John 1:3; Colossians 1:16), took on human flesh through the virgin Mary (Isaiah 7:14; Matthew 1:22–23) without ceasing to be fully God. He was laid in a manger because there was no room in the inn (Luke 2:7) — the Creator of the universe entering His creation in poverty and obscurity. The angels announced His birth to shepherds — the lowest of the social hierarchy — not to kings or philosophers. John's Gospel opens with the most staggering theological declaration in all of literature: 'In the beginning was the Word, and the Word was with God, and the Word was God... And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth' (John 1:1, 14).",
    scriptures: [
      "Luke 1:26–2:20",
      "Matthew 1:18–2:12",
      "John 1:1–18",
      "John 1:14",
      "Isaiah 7:14",
      "Isaiah 9:6–7",
      "Micah 5:2",
      "Galatians 4:4–5",
      "Colossians 1:15–17",
      "Philippians 2:5–11",
    ],
    dateOptions: [
      {
        label: "~5–4 BC (Before Herod's Death)",
        yearBC: 5,
        scholars: [
          "Harold Hoehner",
          "Jack Finegan",
          "John MacArthur",
          "D.A. Carson",
        ],
        reasoning:
          "Since Herod the Great died in 4 BC (confirmed by Josephus and a lunar eclipse in March 4 BC) and the Magi visited 'in the days of Herod the king' (Matthew 2:1), Jesus must have been born no later than 4 BC, and probably in 5 BC. The apparent paradox arises from a 6th-century calculation error by the monk Dionysius Exiguus when establishing the BC/AD calendar. Most conservative scholars place the birth between 6–4 BC.",
        scriptureSupport: [
          "Matthew 2:1",
          "Luke 2:1–7",
          "Matthew 2:16",
        ],
      },
      {
        label: "~6 BC (Star of Bethlehem Astronomical Dating)",
        yearBC: 6,
        scholars: [
          "Ernest Martin",
          "Rick Larson",
          "Colin Humphreys",
        ],
        reasoning:
          "Several astronomers and historians have proposed specific astronomical events as the Star of Bethlehem — including a Jupiter-Venus conjunction (2 BC), a triple conjunction of Jupiter and Saturn (7 BC), or Halley's Comet (12 BC). The 7 BC triple conjunction in Pisces is favored by many because it occurs in the constellation associated with Israel in ancient astrology and would have been visible to Magi trained in Babylonian astronomy. A 6 BC birth harmonizes with this while remaining before Herod's death.",
        scriptureSupport: ["Matthew 2:2", "Numbers 24:17"],
      },
    ],
    worldContext: [
      {
        title: "The Roman Empire Under Augustus Caesar",
        approximateYear: "~27 BC–14 AD",
        civilization: "Rome — Pax Romana",
        notes:
          "Augustus Caesar's reign inaugurated 200 years of relative peace in the Mediterranean world — the Pax Romana ('Roman peace'). He was worshipped as a god throughout the empire and called 'Savior' and 'Lord' on inscriptions across the Greek-speaking world. Luke's Gospel deliberately juxtaposes this imperial propaganda with the birth of the true Savior: Augustus ordered a census that sent Joseph and Mary to Bethlehem (Luke 2:1), and it was to humble shepherds — not Caesar's court — that angels announced 'a Savior, who is Christ the Lord' (Luke 2:11). The Roman road system (Via Appia, Via Egnatia, etc.) and maritime routes that allowed Augustus to govern his empire would within decades carry Paul to Rome with the Gospel.",
      },
    ],
    subEvents: [
      {
        id: "annunciation",
        title: "The Annunciation — Gabriel Comes to Mary",
        summary:
          "The angel Gabriel was sent to Nazareth to a virgin named Mary, betrothed to a man named Joseph of the house of David. Gabriel announced that she would conceive by the Holy Spirit and bear a son to be called Jesus — 'He will be great and will be called the Son of the Most High. And the Lord God will give to him the throne of his father David, and he will reign over the house of Jacob forever, and of his kingdom there will be no end' (Luke 1:32-33). Mary's response — 'How will this be, since I am a virgin?' — was a question of mechanism, not unbelief. Her submission — 'Behold, I am the servant of the Lord; let it be to me according to your word' (Luke 1:38) — is one of Scripture's great examples of trusting faith.",
        scriptures: ["Luke 1:26-38", "Isaiah 7:14", "Matthew 1:18-25"],
        keyPeople: ["mary", "john-the-baptist"],
      },
      {
        id: "birth-of-jesus",
        title: "The Birth in Bethlehem — Fulfillment of Micah 5:2",
        summary:
          "The Emperor Augustus issued a census decree that set the entire Roman world in motion. Joseph and Mary traveled to Bethlehem — his ancestral city. There was no room in the inn. The Son of God was born in a feeding trough in a stable. Angels announced the birth to shepherds — not to kings or priests, but to men at the bottom of the social hierarchy, doing night work. 'Glory to God in the highest, and on earth peace among those with whom he is pleased!' (Luke 2:14). The town of Bethlehem had been named seven centuries earlier by Micah (Micah 5:2). The census of the most powerful ruler on earth was God's instrument to get a woman from Nazareth to Bethlehem in time for the birth.",
        scriptures: ["Luke 2:1-20", "Micah 5:2", "Matthew 2:1-12"],
        keyPeople: ["mary"],
      },
      {
        id: "jesus-at-twelve",
        title: "Jesus at 12 — 'I Must Be About My Father's Business'",
        summary:
          "When Jesus was 12 years old, His family went to Jerusalem for the Passover. On the return journey they discovered He was not in the group. After three days of searching, they found Him in the Temple sitting among the teachers — 'listening to them and asking them questions, and all who heard him were amazed at his understanding and his answers' (Luke 2:46-47). When Mary said 'Your father and I have been searching for you in great distress,' He replied: 'Did you not know that I must be in my Father's house [about my Father's business]?' This is the first recorded statement of Jesus in Scripture — a claim of divine Sonship and divine priority. Luke adds that He went home and was submissive to them, and 'increased in wisdom and in stature and in favor with God and man.'",
        scriptures: ["Luke 2:41-52"],
        keyPeople: ["mary"],
      },
      {
        id: "baptism-of-jesus",
        title: "The Baptism of Jesus — The Trinity Revealed",
        summary:
          "John baptized Jesus in the Jordan, though John protested he needed to be baptized by Jesus. Jesus submitted to identify with sinners He had come to save — not because He had sin, but to 'fulfill all righteousness' (Matthew 3:15). As He came up out of the water, the heavens opened, the Spirit descended as a dove, and the Father spoke: 'This is my beloved Son, with whom I am well pleased' (Matthew 3:17). This is one of the clearest trinitarian theophanies in Scripture: the Spirit descended, the Father spoke, the Son stood — three distinct persons, one God. It also marks the beginning of Jesus's public ministry and the Spirit's anointing for His messianic work (Isaiah 61:1; Luke 4:18).",
        scriptures: ["Matthew 3:13-17", "Mark 1:9-11", "Luke 3:21-22", "John 1:29-34"],
        keyPeople: ["john-the-baptist", "mary"],
      },
    ],
    keyPeople: ["mary", "john-the-baptist"],
    relatedEvents: [
      { eventId: "the-fall", note: "The incarnation is the beginning of God's answer to Genesis 3 — the second Adam comes to undo what the first Adam did (Romans 5:19)." },
      { eventId: "isaiah-suffering-servant", note: "Isaiah 7:14, 9:6, and 53 each predict the birth, divine nature, and suffering of the coming Servant — all fulfilled in Jesus." },
    ],
    tags: [
      "incarnation",
      "birth",
      "virgin",
      "bethlehem",
      "magi",
      "shepherds",
      "augustus",
      "word",
      "christmas",
    ],
  },
  {
    id: "crucifixion-resurrection",
    title: "The Crucifixion and Resurrection of Jesus Christ",
    period: "new-testament",
    summary:
      "The crucifixion of Jesus of Nazareth on the cross at Golgotha under the Roman prefect Pontius Pilate was simultaneously the greatest crime in human history and the supreme act of divine grace. It was not a tragedy that overtook God's plan — it was the plan: 'This Jesus, delivered up according to the definite plan and foreknowledge of God, you crucified and killed by the hands of lawless men' (Acts 2:23). On the cross, the sinless Son of God bore the full weight of God's wrath against sin for all who believe: 'For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God' (2 Corinthians 5:21). His cry of dereliction — 'My God, my God, why have you forsaken me?' (Matthew 27:46, Psalm 22:1) — is the only moment in eternity that the Father turned from the Son. Three days later, on the first day of the week, the tomb was empty. The resurrection is the cornerstone of the Christian faith: 'If Christ has not been raised, your faith is futile and you are still in your sins' (1 Corinthians 15:17). Over 500 eyewitnesses saw Him alive after His resurrection (1 Corinthians 15:6). His enemies could not produce a body. The disciples were transformed from terrified fugitives into bold martyrs who died proclaiming what they had seen.",
    scriptures: [
      "Matthew 26:1–28:20",
      "John 18:1–21:25",
      "Isaiah 53:1–12",
      "Psalm 22:1–31",
      "Acts 2:23",
      "2 Corinthians 5:21",
      "1 Corinthians 15:1–58",
      "1 Corinthians 15:17",
      "Romans 4:25",
      "Philippians 2:8–11",
    ],
    dateOptions: [
      {
        label: "Friday, April 3, 33 AD",
        yearAD: 33,
        scholars: [
          "Harold Hoehner",
          "John MacArthur",
          "D.A. Carson",
          "Colin Humphreys",
        ],
        reasoning:
          "33 AD is the majority date among conservative evangelical scholars, supported by astronomical calculation of Passover dates (Nisan 14 fell on a Friday in 33 AD), the 15th year of Tiberius Caesar placing John the Baptist's ministry beginning around 29 AD (Luke 3:1–2), a 3–3.5 year ministry for Jesus, and Sir Robert Anderson's calculation of Daniel's 69 weeks. Harold Hoehner's Chronological Aspects of the Life of Christ is the definitive defense of this date.",
        scriptureSupport: [
          "Luke 3:1–2",
          "John 2:20",
          "John 19:31",
          "Daniel 9:25–26",
        ],
      },
      {
        label: "Friday, April 7, 30 AD",
        yearAD: 30,
        scholars: [
          "Jack Finegan",
          "F.F. Bruce",
          "I. Howard Marshall",
        ],
        reasoning:
          "Some scholars prefer 30 AD based on a slightly different calculation of Tiberius's 15th year and John's ministry beginning. Passover also fell on a Friday in 30 AD. The difference between 30 and 33 AD does not affect any theological truth — both dates are within the span of Pilate's governorship (26–36 AD) and Caiaphas's high priesthood (18–36 AD).",
        scriptureSupport: [
          "Luke 3:1",
          "John 18:13",
          "Matthew 27:2",
        ],
      },
    ],
    worldContext: [
      {
        title: "Roman Crucifixion — The Most Shameful Death in the Ancient World",
        approximateYear: "~30–33 AD",
        civilization: "Roman Empire — Judean Province",
        notes:
          "Roman crucifixion was specifically designed to be the most humiliating and painful form of execution available — reserved for slaves, rebels, and the worst criminals. The Roman orator Cicero called it 'the most cruel and disgusting penalty.' Victims were typically stripped naked, publicly displayed, and could take days to die from asphyxiation and shock. The Apostle Paul's proclamation of a crucified Messiah was therefore 'a stumbling block to Jews and foolishness to Gentiles' (1 Corinthians 1:23) — no one in the ancient world would invent such a story. The Alexamenos graffito (~2nd century AD) — a crude drawing mocking a Christian worshipping a crucified donkey-headed figure — is the earliest known artistic depiction of the crucifixion, confirming the cultural shame that surrounded it.",
      },
      {
        title: "The Pontius Pilate Inscription",
        approximateYear: "~26–36 AD",
        civilization: "Roman Empire — Judea",
        notes:
          "Until 1961, Pontius Pilate was known only from the New Testament and a few ancient writers. That year, a limestone dedication stone was discovered at Caesarea Maritima bearing the inscription: 'Pontius Pilatus, Prefect of Judea.' This confirmed not only Pilate's existence but his exact title ('Prefect,' not 'Procurator' as previously assumed), exactly as Luke 3:1 implies with the Greek word for governor. The New Testament's historical precision continues to be confirmed by archaeology.",
      },
    ],
    subEvents: [
      {
        id: "last-supper-gethsemane",
        title: "The Last Supper and Gethsemane",
        summary:
          "On the night He was betrayed, Jesus took bread and wine and established the Lord's Supper — 'This is my body... This cup is the new covenant in my blood. Do this in remembrance of me' (1 Corinthians 11:24-25). He was inaugurating the New Covenant Jeremiah had promised (Jeremiah 31:31-34). Then in the Garden of Gethsemane He prayed with such intensity that His sweat became like drops of blood — a medical phenomenon called hematidrosis, associated with extreme stress. He prayed three times: 'Father, if it be possible, let this cup pass from me. Nevertheless, not as I will, but as you will' (Matthew 26:39). The cup was not the physical death but the bearing of divine wrath for sin. An angel strengthened Him. Judas arrived with the soldiers and betrayed Him with a kiss.",
        scriptures: ["Matthew 26:26-50", "Luke 22:39-48", "1 Corinthians 11:23-26", "Jeremiah 31:31-34"],
        keyPeople: ["peter", "paul"],
      },
      {
        id: "trials-of-jesus",
        title: "The Six Trials — A Mockery of Justice",
        summary:
          "Jesus underwent six trials: three Jewish (before Annas, before Caiaphas and the Sanhedrin, before the full Sanhedrin at dawn) and three Roman (before Pilate, before Herod Antipas, and again before Pilate). The Jewish trials violated their own laws — trials could not begin at night, a verdict of guilty required a night's delay, and the sentence was not unanimous as required. Pilate declared Jesus innocent three times (John 18:38; 19:4; 19:6) yet still handed Him over to death. Herod mocked Him. The soldiers flogged Him with a flagellum — leather straps embedded with bone and metal designed to tear flesh. He was crowned with thorns and mocked as a king. The innocent was condemned; the guilty were released (Barabbas was set free in Jesus's place — the clearest illustration of substitution).",
        scriptures: ["Matthew 26:57 - 27:31", "John 18:12 - 19:16", "Isaiah 53:7"],
        keyPeople: ["peter"],
      },
      {
        id: "crucifixion",
        title: "The Crucifixion — The Wrath of God Satisfied",
        summary:
          "Jesus was crucified at Golgotha ('Place of the Skull') at approximately 9 AM and died at approximately 3 PM. From noon until 3 PM — three hours of supernatural darkness over all the land. At 3 PM Jesus cried 'My God, my God, why have you forsaken me?' (Psalm 22:1) — not a cry of despair but a theological declaration: He was experiencing the God-forsakenness that sinners deserve. Then: 'It is finished' (tetelestai — a Greek accounting term meaning 'paid in full'). At the moment of His death the Temple veil — 60 feet high, 4 inches thick — was torn from top to bottom (God's act, not man's), opening the way into the Most Holy Place. The earth shook, rocks split, tombs opened. The Roman centurion said: 'Truly this man was the Son of God.'",
        scriptures: ["Matthew 27:33-56", "John 19:17-30", "Psalm 22:1-31", "Hebrews 10:19-22"],
        keyPeople: ["mary", "peter"],
      },
      {
        id: "resurrection",
        title: "The Resurrection — Death Defeated",
        summary:
          "On the first day of the week, before dawn, the stone was rolled away — not to let Jesus out (He had already risen) but to let the witnesses in. The grave clothes were still lying in position, the face cloth rolled up separately (John 20:6-7). Jesus appeared over forty days to more than 500 people (1 Corinthians 15:6). He appeared to Mary Magdalene (who mistook Him for the gardener — until He said her name), to the disciples on the road to Emmaus (explaining from Moses and the Prophets the things concerning Himself), to the eleven, to doubting Thomas ('My Lord and my God!'), and finally to Paul on the road to Damascus. Paul argues: if Christ has not been raised, our faith is futile and we are still in our sins. But He has been raised — 'the firstfruits of those who have fallen asleep' (1 Corinthians 15:20).",
        scriptures: ["Matthew 28:1-20", "John 20:1-31", "1 Corinthians 15:1-58", "Romans 1:4"],
        keyPeople: ["mary", "peter", "paul"],
      },
    ],
    keyPeople: ["peter", "mary", "paul"],
    relatedEvents: [
      { eventId: "the-fall", note: "The cross is God's decisive answer to Genesis 3 — the serpent is crushed (Romans 16:20), the curse is reversed, and the way back to God is opened." },
      { eventId: "isaiah-suffering-servant", note: "Isaiah 53 describes the cross with such precision that Philip uses it to explain the Gospel to the Ethiopian eunuch on the road (Acts 8:32–35)." },
      { eventId: "the-exodus", note: "Christ is the Passover Lamb — His blood shed so that judgment passes over all who shelter in Him, just as Israel sheltered under the blood on the doorposts (1 Corinthians 5:7)." },
    ],
    tags: [
      "crucifixion",
      "resurrection",
      "atonement",
      "pilate",
      "passover",
      "empty tomb",
      "gospel",
    ],
  },
  {
    id: "pentecost",
    title: "Pentecost and the Birth of the Church",
    period: "new-testament",
    summary:
      "Fifty days after the Passover of Christ's crucifixion, as 120 disciples were gathered in prayer in Jerusalem (Acts 1:15), the risen and ascended Christ poured out the Holy Spirit in fulfillment of the Father's promise (Acts 1:4–5; John 14:16–17; Joel 2:28–32). With the sound of a rushing mighty wind and visible tongues of fire, every believer was filled with the Holy Spirit and began proclaiming 'the mighty works of God' (Acts 2:11) in the native languages of Jews who had gathered from every nation under heaven for the feast. This miraculous reversal of Babel (Genesis 11:7–9) — where God confused languages — was God beginning to unite all nations in the blessing of Abraham (Galatians 3:14). Peter's sermon that day, anchoring the events in Scripture (Joel 2, Psalm 16, Psalm 110), proclaimed the resurrection as vindication of the crucified Jesus as both Lord and Christ. 'What shall we do?' the crowd cried (Acts 2:37) — and 3,000 souls were baptized that day (Acts 2:41), the first fruits of the New Covenant harvest.",
    scriptures: [
      "Acts 2:1–47",
      "Acts 1:4–5",
      "Acts 1:15",
      "Acts 2:11",
      "Acts 2:37–41",
      "Joel 2:28–32",
      "John 14:16–17",
      "John 16:7",
      "Galatians 3:14",
      "Genesis 11:7–9",
    ],
    dateOptions: [
      {
        label: "~30 or 33 AD — 50 Days After Passover",
        yearAD: 33,
        scholars: [
          "John MacArthur",
          "D.A. Carson",
          "F.F. Bruce",
          "I. Howard Marshall",
        ],
        reasoning:
          "Pentecost falls on Sivan 6, fifty days after Passover (Leviticus 23:15–16). Since the crucifixion was on Passover (~30 or 33 AD), Pentecost follows exactly 50 days later. The date depends on which year of crucifixion one accepts.",
        scriptureSupport: [
          "Leviticus 23:15–16",
          "Acts 2:1",
          "Acts 1:3",
        ],
      },
    ],
    worldContext: [
      {
        title: "The Jewish Feast of Pentecost — Shavuot",
        approximateYear: "~1446 BC (origin) — ongoing",
        civilization: "Israel / Jewish Diaspora",
        notes:
          "Pentecost (Shavuot) was one of three pilgrimage feasts requiring Jewish men to come to Jerusalem (Deuteronomy 16:16). This explains why Jews 'from every nation under heaven' (Acts 2:5) were present to witness the outpouring of the Spirit — Parthians, Medes, Elamites, Mesopotamians, Egyptians, Romans, and others (Acts 2:9–11). Jewish tradition also associates Shavuot with the giving of the Law at Sinai. The Spirit's outpouring at Pentecost is thus the fulfillment of the Law's purpose: what the Law commanded but could not empower, the Spirit now writes on the heart (Jeremiah 31:33; 2 Corinthians 3:6–8).",
      },
    ],
    subEvents: [
      {
        id: "upper-room-waiting",
        title: "Ten Days of Prayer in the Upper Room",
        summary:
          "After the Ascension, Jesus told the disciples to wait in Jerusalem for 'the promise of the Father' — the baptism of the Holy Spirit (Acts 1:4-5). One hundred and twenty disciples devoted themselves to prayer in the upper room, including the eleven apostles, the women, and Jesus's brothers (Acts 1:14-15). They were not idle: they replaced Judas with Matthias, using Scripture to guide the process (Acts 1:20). These ten days of united, expectant prayer are a model for corporate prayer before major movements of God. The Holy Spirit did not come because they prayed hard enough — He came because Jesus had promised, and He is faithful.",
        scriptures: ["Acts 1:4-26", "Luke 24:49", "John 14:16-17"],
        keyPeople: ["peter", "paul"],
      },
      {
        id: "spirit-poured-out",
        title: "The Spirit Poured Out — Sound, Fire, and Tongues",
        summary:
          "Suddenly a sound like a mighty rushing wind filled the entire house. Tongues of fire appeared and rested on each of them individually. All 120 were filled with the Holy Spirit and began to speak in other tongues — real human languages they had not learned — 'as the Spirit gave them utterance' (Acts 2:4). Jews from at least 15 distinct regions heard them declaring the mighty works of God in their own native languages. This was not ecstatic babbling but a miraculous language-speaking sign — a direct reversal of Babel. Some mocked ('They are drunk'); Peter stood to explain. The sign was for the Jews present (1 Corinthians 14:22) and would never need to be repeated at the same scale — the Church had been born.",
        scriptures: ["Acts 2:1-13", "Joel 2:28-32", "Genesis 11:1-9"],
        keyPeople: ["peter"],
      },
      {
        id: "peters-pentecost-sermon",
        title: "Peter's Sermon — 3,000 Converted",
        summary:
          "Peter stood with the eleven and addressed the crowd. His sermon was thoroughly scriptural: he quoted Joel 2:28-32, Psalm 16:8-11, and Psalm 110:1 — three texts all pointing to the resurrection and exaltation of Christ. His central argument: God raised Jesus from the dead, which David had prophesied; Jesus has been exalted to God's right hand, poured out the Spirit; therefore the house of Israel must know: 'God has made him both Lord and Christ, this Jesus whom you crucified' (Acts 2:36). The crowd was 'cut to the heart' — the Greek word katanussō means pierced, stabbed. They cried 'What shall we do?' Peter: 'Repent and be baptized... for the forgiveness of your sins, and you will receive the gift of the Holy Spirit.' Three thousand were baptized that day. The Church had begun.",
        scriptures: ["Acts 2:14-41", "Joel 2:28-32", "Psalm 16:8-11", "Psalm 110:1"],
        keyPeople: ["peter"],
      },
    ],
    keyPeople: ["peter", "paul"],
    relatedEvents: [
      { eventId: "tower-of-babel", note: "At Babel God divided the nations through language confusion; at Pentecost the Spirit unites them — every tongue declares the wonders of God." },
      { eventId: "call-of-abraham", note: "The ancient promise to bless all nations through Abraham is now launched: the Spirit falls on Gentiles as well as Jews, making one new humanity in Christ." },
    ],
    tags: [
      "pentecost",
      "holy spirit",
      "church",
      "peter",
      "acts",
      "tongues",
      "3000",
      "new covenant",
    ],
  },
  {
    id: "destruction-jerusalem-70ad",
    title: "The Destruction of Jerusalem — 70 AD",
    period: "new-testament",
    summary:
      "Forty years after Jesus wept over Jerusalem and prophesied its destruction with specific detail — 'the days will come upon you when your enemies will set up a barricade around you and surround you and hem you in on every side and tear you down to the ground, you and your children within you. And they will not leave one stone upon another in you' (Luke 19:43–44) — Roman general Titus besieged the city during Passover of 70 AD, trapping hundreds of thousands of pilgrims inside. After a five-month siege of starvation, cannibalism, internal faction warfare, and slaughter, the Romans breached the walls, burned the Temple, and demolished the city. The Jewish historian Josephus records 1.1 million dead and 97,000 taken captive. Jesus's prophecy in Matthew 24:2 was fulfilled with terrible precision: not one stone of the Temple was left on another. This event also fulfilled Daniel 9:26 — 'the people of the ruler who will come will destroy the city and the sanctuary.' It permanently ended the Mosaic sacrificial system, demonstrating that the one ultimate sacrifice of Christ had made all others obsolete (Hebrews 10:1–14).",
    scriptures: [
      "Matthew 24:1–35",
      "Luke 19:41–44",
      "Luke 21:20–24",
      "Matthew 24:2",
      "Daniel 9:26",
      "Hebrews 10:1–14",
      "Zechariah 14:1–2",
    ],
    dateOptions: [
      {
        label: "70 AD — Precisely Recorded",
        yearAD: 70,
        scholars: [
          "John MacArthur",
          "D.A. Carson",
          "R.C. Sproul",
          "F.F. Bruce",
        ],
        reasoning:
          "The destruction of Jerusalem in 70 AD is among the most precisely documented events in ancient history, recorded in elaborate detail by Josephus (The Jewish War, Books 5–6), confirmed by Tacitus (Histories 5.13), Suetonius, and Dio Cassius. The Arch of Titus in Rome, erected ~82 AD, depicts the spoils of the Temple (including the menorah) being carried in triumph — a permanent monument to the fulfillment of Jesus's prophecy.",
        scriptureSupport: [
          "Matthew 24:2",
          "Luke 21:20–24",
          "Daniel 9:26",
        ],
      },
    ],
    worldContext: [
      {
        title: "The Arch of Titus — Rome's Monument to Fulfilled Prophecy",
        approximateYear: "82 AD",
        civilization: "Roman Empire",
        notes:
          "The Arch of Titus, still standing at the entrance to the Roman Forum, depicts Roman soldiers carrying the Temple menorah, the silver trumpets, and the Table of Showbread from Jerusalem. It is the oldest surviving visual record of Jerusalem's Temple artifacts, and it stands as an unintentional monument to the fulfillment of Jesus's words. Jewish tradition holds that observant Jews do not walk under the Arch, in mourning for the Temple. For the Christian, it stands as evidence that Jesus's prophetic word is utterly reliable — and therefore every other word He spoke can be trusted absolutely.",
      },
    ],
    subEvents: [
      {
        id: "jesus-prophecy-fulfilled",
        title: "Jesus's Prophecy — 'Not One Stone Left'",
        summary:
          "As Jesus left the Temple two days before His crucifixion, His disciples pointed to the magnificent Herodian stones: 'Look, Teacher, what wonderful stones and what wonderful buildings!' Jesus replied: 'Do you see these great buildings? There will not be left here one stone upon another that will not be thrown down' (Mark 13:2). On the Mount of Olives He gave the Olivet Discourse — instructions about signs of the coming judgment and the end of the age. He said 'when you see the abomination of desolation... those in Judea must flee to the mountains' (Matthew 24:15-16). The Christians in Jerusalem, according to early church historian Eusebius, remembered this command and fled to Pella before the siege began — and survived. The prophecy was specific, literal, and historically verified.",
        scriptures: ["Mark 13:1-2", "Matthew 24:1-28", "Luke 21:20-24"],
        keyPeople: ["peter", "paul"],
      },
      {
        id: "siege-of-jerusalem",
        title: "Titus Besieges Jerusalem (AD 66–70)",
        summary:
          "The Jewish revolt began in AD 66. The Roman general Vespasian began suppressing it systematically, then left for Rome when Nero died. His son Titus completed the job. By spring of AD 70 Titus surrounded Jerusalem with four legions (approximately 60,000 soldiers). The city was packed with Passover pilgrims who could not escape. Josephus records horrific suffering within the city — famine so severe that families fought over scraps of food and ate leather. Three Jewish factions fought each other inside the walls while the Romans besieged from outside. The population of approximately 1.1 million were trapped. Josephus, an eyewitness, recorded 1.1 million dead and 97,000 taken captive — though modern historians debate these figures, they indicate catastrophic losses.",
        scriptures: ["Luke 21:20-24", "Deuteronomy 28:49-57"],
        keyPeople: ["paul"],
      },
      {
        id: "temple-destroyed-70ad",
        title: "The Temple Burned — Ninth of Av, AD 70",
        summary:
          "On the 9th of Av (Tisha B'Av), AD 70 — the same day the First Temple had been destroyed in 586 BC — the Second Temple was burned. Josephus says the fire was set against Titus's orders, but the Roman soldiers' rage could not be stopped. The Temple was looted and burned, the city demolished, and every stone of the Temple thrown down — the gold melted between the stones, and soldiers dismantled the entire platform stone by stone to retrieve it, fulfilling Jesus's prophecy to the letter. The menorah and sacred vessels were carried to Rome (visible on the Arch of Titus). Josephus records that Titus was so astonished by the construction of the Temple that he regretted its destruction. The Jewish sacrificial system ended permanently. The book of Hebrews, likely written before AD 70, argues the whole system had been superseded by Christ — its physical end confirmed the theological point.",
        scriptures: ["Matthew 24:2", "Daniel 9:26", "Luke 19:41-44", "Hebrews 8:13"],
        keyPeople: ["paul"],
      },
    ],
    keyPeople: ["peter", "paul"],
    relatedEvents: [
      { eventId: "fall-of-jerusalem", note: "The pattern repeats: Jerusalem falls to foreign powers in 586 BC and AD 70, both times for rejecting God's word. Jesus made the connection explicit in Luke 21." },
      { eventId: "daniel-in-babylon", note: "Daniel 9:26 and Jesus's own prediction (Matthew 24:2) converge in AD 70 when Titus destroys the city and the temple — within a generation of the crucifixion." },
    ],
    tags: [
      "jerusalem",
      "70 ad",
      "titus",
      "temple",
      "destruction",
      "prophecy",
      "daniel",
      "fulfilled",
    ],
  },


  // ── SECOND COMING ─────────────────────────────────────────────────────────
  {
    id: "return-of-christ",
    title: "The Return of Christ",
    period: "second-coming",
    summary:
      "The Lord Jesus Christ — who ascended into heaven visibly and bodily before His disciples' eyes — will return in the same manner: visibly, bodily, and gloriously (Acts 1:11). He will come as Judge of the living and the dead, as King of kings and Lord of lords, to raise His people from the dead, to finally and completely destroy death and Satan, and to establish the new heavens and new earth in which righteousness dwells. Every eye will see Him. Every knee will bow. Every tongue will confess that Jesus Christ is Lord. The date is known only to the Father — but the promise is as certain as the resurrection that guarantees it.",
    scriptures: [
      "Acts 1:11",
      "Matthew 24:30–31",
      "1 Thessalonians 4:16–17",
      "Revelation 19:11–16",
      "Philippians 2:10–11",
      "1 Corinthians 15:52–54",
      "Revelation 21:1–5",
    ],
    dateOptions: [
      {
        label: "Known Only to the Father — ???",
        scholars: [],
        reasoning:
          "Jesus explicitly stated that no one knows the day or the hour — not the angels, not the Son in His earthly ministry, but the Father alone (Matthew 24:36). Every generation of the Church has been called to live in readiness, not calculation. The return is certain; the timing is hidden.",
        scriptureSupport: ["Matthew 24:36", "Acts 1:7", "1 Thessalonians 5:2"],
      },
    ],
    worldContext: [],
    typology: [
      {
        category: "Fulfillment",
        title: "The Final and Ultimate Fulfillment",
        description:
          "Every type in the Old Testament, every covenant, every prophecy — all of it converges at the return of Christ. The Passover Lamb who was slain returns as the Lion of Judah who conquers. The Suffering Servant returns as the Glorious King. The bridegroom who went away returns for His bride. Adam lost paradise; the last Adam restores it and surpasses it.",
        oldTestamentRef: "Daniel 7:13–14",
        newTestamentFulfillment: [
          "Revelation 19:11–16",
          "1 Corinthians 15:24–28",
          "Revelation 21:1–5",
        ],
      },
    ],
    keyPeople: [],
    subEvents: [
      {
        id: "resurrection-of-the-dead",
        title: "The Resurrection of the Dead",
        summary:
          "At the last trumpet, the dead in Christ will rise first — their bodies gloriously transformed and reunited with their spirits. Then the living who remain will be caught up to meet the Lord. This is not the end of material existence but its transformation — the redemption of the body that all creation has been groaning toward (Romans 8:22–23).",
        scriptures: ["1 Thessalonians 4:16–17", "1 Corinthians 15:51–54", "Romans 8:23"],
        keyPeople: [],
      },
      {
        id: "final-judgment",
        title: "The Final Judgment",
        summary:
          "Every human being who has ever lived will stand before the judgment seat of Christ. The books will be opened — and also the Book of Life (Revelation 20:12). Those whose names are written in the Lamb's Book of Life enter eternal life; those whose names are not found face the second death. The Judge of all the earth will do right — perfectly, finally, and irrevocably.",
        scriptures: ["Revelation 20:11–15", "Matthew 25:31–46", "2 Corinthians 5:10"],
        keyPeople: [],
      },
      {
        id: "new-creation",
        title: "The New Heavens and New Earth",
        summary:
          "The last two chapters of Scripture describe not the end of the world but its renewal: a new heaven and new earth, the New Jerusalem descending as a bride, the Tree of Life available to all, no more curse, no more death, no more tears. 'Behold, I am making all things new' (Revelation 21:5). The story that began in a garden ends in a city — and the glory of the last state surpasses the glory of the first beyond all measure.",
        scriptures: ["Revelation 21:1–22:5", "2 Peter 3:13", "Isaiah 65:17–19"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "the-fall", note: "Every consequence of Eden's curse — death, suffering, corruption, exile from God's presence — is finally and permanently reversed at the King's return." },
      { eventId: "daniel-in-babylon", note: "The Son of Man who receives eternal dominion in Daniel 7:13–14 is the same Jesus who will return on the clouds of heaven, as He declared at His trial (Matthew 26:64)." },
    ],
    tags: ["second coming", "return", "judgment", "resurrection", "new creation", "eschatology", "hope"],
  },

  // ── PRE-FLOOD ──────────────────────────────────────────────
  {
    id: "enoch",
    title: "Enoch Walks with God",
    period: "pre-flood",
    summary:
      "In a genealogy filled with death — 'and he died… and he died' — Enoch breaks the pattern. He walked with God, and God took him. Without tasting death, Enoch was translated into the divine presence. His life is a preview of resurrection hope and a testimony that the remedy for Eden's curse is intimacy with God Himself.",
    dateOptions: [
      {
        label: "Traditional",
        yearBC: 3000,
        scholars: ["Ussher"],
        reasoning:
          "Ussher's chronology places Enoch's life around 3382–3017 BC based on the Genesis 5 genealogy.",
        scriptureSupport: ["Genesis 5:21–24"],
      },
    ],
    scriptures: ["Genesis 5:21–24", "Hebrews 11:5–6", "Jude 14–15"],
    worldContext: [
      {
        title: "Sumerian King Lists",
        approximateYear: "~3000 BC",
        civilization: "Mesopotamia",
        notes:
          "Ancient Near Eastern king lists describe antediluvian rulers with extraordinarily long reigns, echoing the Genesis genealogies. Enoch's lifespan of 365 years is notably the shortest of the pre-flood patriarchs.",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "Enoch as Type of the Raptured Church",
        description:
          "Enoch was taken to God without death, prefiguring those 'who are alive and remain' at the coming of the Lord (1 Thessalonians 4:17). His translation is a picture of resurrection hope for all who walk with God.",
        oldTestamentRef: "Genesis 5:24",
        newTestamentFulfillment: ["1 Thessalonians 4:17", "Hebrews 11:5"],
      },
    ],
    subEvents: [
      {
        id: "enoch-birth",
        title: "Birth of Enoch",
        summary:
          "Enoch is born to Jared at age 162. His very name, possibly meaning 'dedicated' or 'initiated,' signals his distinctive place in redemptive history.",
        scriptures: ["Genesis 5:18"],
        keyPeople: [],
      },
      {
        id: "enoch-fathered-methuselah",
        title: "Enoch Fathers Methuselah",
        summary:
          "At age 65, Enoch fathers Methuselah — whose name may mean 'his death shall bring it' — and afterward walked with God for 300 more years. Many scholars believe the flood came the very year Methuselah died, encoding divine patience in a name.",
        scriptures: ["Genesis 5:21–22"],
        keyPeople: [],
      },
      {
        id: "enoch-translated",
        title: "Enoch Is Taken by God",
        summary:
          "At 365 years old, Enoch 'was not, for God took him.' The abrupt language signals something entirely different from the pattern 'and he died.' Hebrews 11:5 clarifies: he was translated so that he did not see death — by faith he pleased God.",
        scriptures: ["Genesis 5:24", "Hebrews 11:5"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "global-flood", note: "Methuselah, Enoch's son, lived longer than any other recorded human — his death immediately preceded the flood." },
      { eventId: "return-of-christ", note: "Enoch's translation without death is one of Scripture's clearest previews of the bodily rapture of the living saints at Christ's return." },
    ],
    keyPeople: ["enoch"],
    tags: ["enoch", "translation", "walk with god", "antediluvian", "genealogy", "pre-flood"],
  },

  // ── POST-FLOOD PATRIARCHS ───────────────────────────────────
  {
    id: "hagar-and-ishmael",
    title: "Hagar and Ishmael",
    period: "post-flood-patriarchs",
    summary:
      "When Sarah remained barren, she gave her Egyptian servant Hagar to Abraham — a common ancient practice, but one that bypassed God's promise. The son born, Ishmael, was flesh's solution to a divine delay. God heard Hagar twice in the wilderness — once when she fled from Sarah's harshness, once when she and her son were dying of thirst — and promised Ishmael a great nation. Yet the child of promise would not be Ishmael but Isaac.",
    dateOptions: [
      {
        label: "Traditional",
        rangeBC: [2100, 2000],
        scholars: ["Wenham", "Hamilton"],
        reasoning:
          "Abraham's sojourn in Canaan is traditionally dated to the Middle Bronze Age, roughly 2100–2000 BC.",
        scriptureSupport: ["Genesis 16:1–16"],
      },
    ],
    scriptures: ["Genesis 16:1–16", "Genesis 21:8–21", "Galatians 4:21–31"],
    worldContext: [
      {
        title: "Nuzi Tablets and Surrogacy",
        approximateYear: "~2100 BC",
        civilization: "Mesopotamia",
        notes:
          "Nuzi tablets from ancient Mesopotamia document legal customs where a barren wife could provide her handmaid to her husband, and the child born was considered the wife's heir. Sarah's action follows exactly this practice.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "Hagar and Sarah as Two Covenants",
        description:
          "Paul allegorizes Hagar as the Mosaic covenant (Sinai) producing bondage, and Sarah as the covenant of promise (Jerusalem above) producing freedom. The natural-born child cannot inherit with the child of promise.",
        oldTestamentRef: "Genesis 16; 21",
        newTestamentFulfillment: ["Galatians 4:21–31"],
      },
    ],
    subEvents: [
      {
        id: "hagar-flees",
        title: "Hagar Flees to the Wilderness",
        summary:
          "Pregnant and harshly treated by Sarah, Hagar flees toward Egypt. The Angel of the Lord finds her at a spring and speaks to her — the first annunciation in Scripture — promising that her son Ishmael will be a wild donkey of a man, his hand against everyone. She calls the LORD 'El Roi' — the God who sees.",
        scriptures: ["Genesis 16:6–13"],
        keyPeople: [],
      },
      {
        id: "ishmael-born",
        title: "Ishmael Is Born",
        summary:
          "Hagar bears a son when Abraham is 86 years old. He is named Ishmael ('God hears') in keeping with the angel's word. For 13 years Abraham regards Ishmael as his heir — until God appears again and announces that Sarah will bear a son.",
        scriptures: ["Genesis 16:15–16"],
        keyPeople: [],
      },
      {
        id: "hagar-in-wilderness",
        title: "Hagar and Ishmael Cast Out",
        summary:
          "After Isaac is weaned, Sarah sees Ishmael mocking and demands Hagar and Ishmael be sent away. God tells Abraham to obey Sarah, promising to make Ishmael a nation because he is Abraham's son. In the wilderness their water runs out. God hears the boy's cry and opens Hagar's eyes to see a well — 'I will make him a great nation.'",
        scriptures: ["Genesis 21:9–21"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "call-of-abraham", note: "Hagar's story is the direct consequence of Sarah and Abraham taking matters into their own hands rather than trusting God's timeline for the promised child." },
      { eventId: "binding-of-isaac", note: "The same Abraham who sent Ishmael away was later asked to offer Isaac — the child of promise — on Moriah." },
    ],
    keyPeople: ["hagar"],
    tags: ["hagar", "ishmael", "abraham", "sarah", "promise", "wilderness", "el roi", "covenant"],
  },
  {
    id: "sodom-and-gomorrah",
    title: "Sodom and Gomorrah",
    period: "post-flood-patriarchs",
    summary:
      "Three visitors — one of whom is the LORD — appear at Abraham's tent and announce that Sarah will conceive within a year. They then turn toward Sodom, whose sin has 'become very grave.' In one of Scripture's most remarkable scenes, Abraham intercedes for the city — if there are fifty righteous… forty-five… forty… thirty… twenty… ten? There were not even ten. Angels rescue Lot and his family. Fire and sulfur rain down from heaven. The cities of the plain become a smoking ruin — a warning for all subsequent generations.",
    dateOptions: [
      {
        label: "Archaeological",
        rangeBC: [2100, 1900],
        scholars: ["Collins", "Bryant Wood"],
        reasoning:
          "Steven Collins proposes Tall el-Hammam (Jordan) as Sodom, which shows destruction evidence from ~1650 BC. Others date the event to the Middle Bronze Age, ~2000 BC.",
        scriptureSupport: ["Genesis 19:24–25"],
      },
    ],
    scriptures: ["Genesis 18:16–33", "Genesis 19:1–29", "Luke 17:28–30", "2 Peter 2:6–8", "Jude 7"],
    worldContext: [
      {
        title: "Cities of the Plain",
        approximateYear: "~2000 BC",
        civilization: "Canaan",
        notes:
          "The cities of Sodom, Gomorrah, Admah, Zeboiim, and Zoar were clustered in a region likely in or near the southern Dead Sea valley — a region that may have been exceptionally fertile before its destruction.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "Lot's Rescue as a Type of Salvation before Judgment",
        description:
          "Lot's deliverance before the destruction of Sodom is a pattern repeated throughout Scripture: Noah saved before the flood, Israel passed over at Passover, Rahab's household spared. Judgment comes, but God rescues the righteous first.",
        oldTestamentRef: "Genesis 19:16–17",
        newTestamentFulfillment: ["Luke 17:28–30", "2 Peter 2:6–9"],
      },
    ],
    subEvents: [
      {
        id: "three-visitors",
        title: "Three Visitors at Abraham's Tent",
        summary:
          "Three men — later revealed as two angels and the LORD Himself — visit Abraham at Mamre. Abraham prepares a feast and offers hospitality. Sarah overhears the promise that she will have a son, and laughs. The LORD asks: 'Is anything too hard for the LORD?'",
        scriptures: ["Genesis 18:1–15"],
        keyPeople: [],
      },
      {
        id: "abrahams-intercession",
        title: "Abraham's Intercession for Sodom",
        summary:
          "God shares His plan to investigate Sodom with Abraham. Abraham draws near and intercedes in an extraordinary dialogue — pressing God from fifty righteous to ten. It is one of the Bible's greatest pictures of intercessory prayer: daring, persistent, and anchored in the character of God as Judge of all the earth.",
        scriptures: ["Genesis 18:16–33"],
        keyPeople: [],
      },
      {
        id: "lot-and-angels",
        title: "Lot Rescued by Angels",
        summary:
          "The two angels arrive in Sodom at evening. Lot insists they stay with him. The men of the city surround the house demanding the visitors be handed over. The angels strike the crowd with blindness, take Lot and his family by the hand, and command them to flee without looking back. Lot's wife looks back and becomes a pillar of salt.",
        scriptures: ["Genesis 19:1–26"],
        keyPeople: [],
      },
      {
        id: "cities-destroyed",
        title: "Fire and Sulfur Rain Down",
        summary:
          "The LORD rains fire and sulfur on Sodom and Gomorrah. The cities, the entire plain, all the inhabitants, and everything growing are destroyed. Abraham looks toward Sodom the next morning and sees only dense smoke rising like smoke from a furnace. The cities of the plain ceased to exist.",
        scriptures: ["Genesis 19:24–29"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "global-flood", note: "Sodom's destruction mirrors the flood: both are divine judgments on widespread wickedness, and both feature the rescue of a single family before the judgment falls." },
      { eventId: "the-exodus", note: "Peter and Jude both cite Sodom as the paradigmatic divine judgment, making it the background for understanding every subsequent act of holy punishment." },
    ],
    keyPeople: ["lot"],
    tags: ["sodom", "gomorrah", "lot", "abraham", "judgment", "fire", "intercession", "angels"],
  },
  {
    id: "binding-of-isaac",
    title: "The Binding of Isaac (Akedah)",
    period: "post-flood-patriarchs",
    summary:
      "The greatest test of Abraham's faith — and Scripture's most searching preview of Calvary. God commands Abraham to offer Isaac, the long-awaited son of promise, as a burnt offering on Moriah. Abraham obeys without hesitation, rising early the next morning. At the moment of sacrifice, the Angel of the LORD stops his hand: 'Now I know that you fear God.' A ram caught in a thicket is provided in Isaac's place. Abraham names the place 'The LORD Will Provide' — and the promise is renewed with the most solemn oath in Scripture.",
    dateOptions: [
      {
        label: "Traditional",
        rangeBC: [2050, 1950],
        scholars: ["Wenham", "Sarna"],
        reasoning:
          "Placed within Abraham's sojourn in Canaan, Isaac's birth (~25 years after the call) and the Akedah when Isaac is a young man give a rough date in the early second millennium BC.",
        scriptureSupport: ["Genesis 22:1–19"],
      },
    ],
    scriptures: ["Genesis 22:1–19", "Hebrews 11:17–19", "John 3:16", "Romans 8:32"],
    worldContext: [
      {
        title: "Child Sacrifice in the Ancient Near East",
        approximateYear: "~2000 BC",
        civilization: "Canaan",
        notes:
          "Child sacrifice was practiced by Canaanite and some Semitic peoples in the ancient Near East. God's command tests whether Abraham will obey, but crucially, God stops the sacrifice — directly repudiating child sacrifice and providing an animal substitute instead.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "Isaac as Type of Christ",
        description:
          "Isaac is the beloved, only son. He carries the wood of sacrifice on his own shoulders. He is offered on Moriah — the same mountain range as Calvary (2 Chronicles 3:1). A substitute takes his place. Hebrews says Abraham received Isaac back as from the dead, 'in a figure.' Every detail anticipates the Father offering His only Son.",
        oldTestamentRef: "Genesis 22:1–14",
        newTestamentFulfillment: ["John 3:16", "Romans 8:32", "Hebrews 11:17–19"],
      },
      {
        category: "Object",
        title: "The Ram in the Thicket",
        description:
          "The ram caught in the thorns and sacrificed in Isaac's place is a vivid type of Christ — crowned with thorns, given as a substitute sacrifice to release those who deserved death.",
        oldTestamentRef: "Genesis 22:13",
        newTestamentFulfillment: ["John 1:29", "1 Corinthians 5:7"],
      },
    ],
    subEvents: [
      {
        id: "abraham-rises-early",
        title: "Abraham Rises Early",
        summary:
          "God commands Abraham to take Isaac to the land of Moriah. Abraham rises early — not delaying, not bargaining — and sets out with two servants and the wood for the offering. His obedience is immediate. On the third day he sees the mountain from a distance.",
        scriptures: ["Genesis 22:1–4"],
        keyPeople: [],
      },
      {
        id: "isaac-carries-the-wood",
        title: "Isaac Carries the Wood",
        summary:
          "Abraham places the wood for the burnt offering on Isaac's shoulders. Isaac notices the fire and wood but no lamb: 'Where is the lamb for a burnt offering?' Abraham answers: 'God will provide for himself the lamb, my son.' They walk up together — one of Scripture's most poignant verses.",
        scriptures: ["Genesis 22:5–8"],
        keyPeople: [],
      },
      {
        id: "the-ram-provided",
        title: "The Angel Stops Abraham — the Ram Is Provided",
        summary:
          "At the moment Abraham raises the knife, the Angel of the LORD calls from heaven: 'Do not lay your hand on the boy.' A ram caught in a thicket by its horns takes Isaac's place. Abraham names the place Yahweh-Yireh — 'The LORD Will Provide' — a name that echoes through all of redemptive history.",
        scriptures: ["Genesis 22:9–14"],
        keyPeople: [],
      },
      {
        id: "oath-renewed",
        title: "The Covenant Oath Renewed",
        summary:
          "The Angel of the LORD calls a second time and swears by Himself — the most solemn form of divine commitment — to bless Abraham and multiply his offspring as the stars and sand, promising that through his offspring all nations of the earth will be blessed. This is the unconditional capstone of the Abrahamic covenant.",
        scriptures: ["Genesis 22:15–18", "Hebrews 6:13–17"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "call-of-abraham", note: "The Akedah is the culmination of the Abrahamic covenant — the faith that was counted as righteousness in Genesis 15 is now tested to its uttermost and vindicated." },
      { eventId: "crucifixion-resurrection", note: "The sacrifice of Isaac on Moriah is the most direct Old Testament type of the Father offering His Son on the very same mountain range." },
    ],
    tags: ["abraham", "isaac", "moriah", "sacrifice", "akedah", "faith", "substitution", "provision"],
  },
  {
    id: "jacob-and-esau",
    title: "Jacob, Esau, and the Stolen Blessing",
    period: "post-flood-patriarchs",
    summary:
      "The story of the twin brothers born to Isaac and Rebekah is a story of divine election and human frailty working together. Before birth, God declares: 'The older will serve the younger.' Esau despises his birthright for a bowl of stew. Jacob deceives his blind father to receive Esau's blessing. Jacob flees to Haran, where God appears to him at Bethel, renewing the Abrahamic covenant. After 20 years, Jacob returns to face Esau — and first must wrestle with God, receiving a new name: Israel.",
    dateOptions: [
      {
        label: "Traditional",
        rangeBC: [2000, 1850],
        scholars: ["Wenham", "Hamilton"],
        reasoning:
          "Jacob and Esau's story falls within the patriarchal age of the Middle Bronze Age, with Jacob's time in Haran often dated ~1929–1909 BC on the traditional chronology.",
        scriptureSupport: ["Genesis 25–33"],
      },
    ],
    scriptures: ["Genesis 25:19–34", "Genesis 27:1–45", "Genesis 32:22–32", "Romans 9:10–13", "Hebrews 12:16–17"],
    worldContext: [
      {
        title: "Birthright and Blessing in the ANE",
        approximateYear: "~2000 BC",
        civilization: "Ancient Near East",
        notes:
          "Both birthright (inheritance rights) and paternal blessing were legally binding in the ancient Near East. The Nuzi tablets confirm that verbal blessings spoken before witnesses could not legally be revoked — explaining Isaac's inability to simply transfer the blessing back to Esau.",
      },
    ],
    typology: [
      {
        category: "Pattern",
        title: "Election of the Younger Son",
        description:
          "God consistently chooses the younger over the older in the patriarchal narratives — Abel over Cain, Isaac over Ishmael, Jacob over Esau, Judah and Joseph over Reuben. This pattern subverts human conventions and signals that divine election is by grace, not natural order — culminating in Christ who brings blessing through unexpected weakness.",
        oldTestamentRef: "Genesis 25:23",
        newTestamentFulfillment: ["Romans 9:10–13", "1 Corinthians 1:27–29"],
      },
    ],
    subEvents: [
      {
        id: "esau-sells-birthright",
        title: "Esau Sells His Birthright",
        summary:
          "Esau returns famished from hunting. Jacob offers him bread and lentil stew in exchange for the birthright. Esau swears to give it and eats. 'Thus Esau despised his birthright' — a single verse that Hebrews calls the defining tragedy of his life.",
        scriptures: ["Genesis 25:29–34", "Hebrews 12:16–17"],
        keyPeople: [],
      },
      {
        id: "jacob-steals-blessing",
        title: "Jacob Deceives Isaac for the Blessing",
        summary:
          "Rebekah overhears Isaac planning to bless Esau before his death. She devises a plan: Jacob will dress as Esau and receive the blessing first. Jacob obeys, deceives the blind Isaac, and receives the blessing of Abraham. When Esau returns, both he and Isaac tremble violently — the deed cannot be undone.",
        scriptures: ["Genesis 27:1–40"],
        keyPeople: [],
      },
      {
        id: "jacobs-ladder",
        title: "Jacob's Ladder at Bethel",
        summary:
          "Fleeing Esau, Jacob sleeps at a place he will name Bethel ('House of God'). He dreams of a stairway reaching from earth to heaven, with angels ascending and descending. The LORD stands above it and repeats the Abrahamic promises — this land, countless offspring, and 'in you all the families of the earth shall be blessed.' Jacob awakes in awe and makes a vow.",
        scriptures: ["Genesis 28:10–22", "John 1:51"],
        keyPeople: [],
      },
      {
        id: "wrestling-with-god",
        title: "Jacob Wrestles God at Peniel",
        summary:
          "The night before meeting Esau, Jacob wrestles alone with a mysterious man until dawn. The man cannot prevail against Jacob and wrenches his hip. Jacob demands a blessing before releasing him. The man gives him a new name: Israel — 'he struggles with God' — and Jacob calls the place Peniel: 'I have seen God face to face, and yet my life has been delivered.' He walks away limping, but blessed.",
        scriptures: ["Genesis 32:22–32", "Hosea 12:3–4"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "call-of-abraham", note: "Every covenant promise given to Abraham — land, descendants, blessing to all nations — is explicitly renewed to Jacob at Bethel and again at his return to Canaan." },
      { eventId: "joseph-in-egypt", note: "Jacob's twelve sons, born of his two wives and two concubines, become the twelve tribes of Israel — and Joseph, the favored son, carries the story forward." },
    ],
    keyPeople: ["jacob", "rebekah"],
    tags: ["jacob", "esau", "birthright", "blessing", "bethel", "israel", "peniel", "rebekah"],
  },
  {
    id: "joseph-in-egypt",
    title: "Joseph in Egypt",
    period: "post-flood-patriarchs",
    summary:
      "Joseph is his father's favorite son, gifted with prophetic dreams and a coat of many colors. His brothers' jealousy turns murderous — they sell him to Ishmaelite traders for twenty pieces of silver. In Egypt he serves faithfully, is falsely accused and imprisoned, interprets dreams for two officials and then for Pharaoh himself. In a single day he rises from prison to second-in-command of Egypt. When famine drives his brothers to buy grain, Joseph — now unrecognizable in royal garb — engineers their repentance over three visits before finally revealing himself in tears: 'I am Joseph your brother.' The family is reunited in Goshen, and Israel goes down to Egypt.",
    dateOptions: [
      {
        label: "Early Date",
        rangeBC: [1900, 1700],
        scholars: ["Kitchen", "Hoffmeier"],
        reasoning:
          "Kenneth Kitchen places Joseph in Egypt during the Hyksos period (~1650–1550 BC) or earlier Middle Kingdom, when Semitic officials rising to prominence in Egypt is well attested.",
        scriptureSupport: ["Genesis 37–50"],
      },
    ],
    scriptures: ["Genesis 37:1–36", "Genesis 39–41", "Genesis 45:1–15", "Genesis 50:20", "Acts 7:9–14"],
    worldContext: [
      {
        title: "Semitic Officials in Egypt",
        approximateYear: "~1800 BC",
        civilization: "Egypt",
        notes:
          "Egyptian records from the Middle Kingdom and Second Intermediate Period document Semitic (Asiatic) immigrants rising to administrative prominence in Egypt. A papyrus from ~1800 BC even lists a household of 79 Asiatic servants.",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "Joseph as Type of Christ",
        description:
          "Joseph is the most comprehensive Christ-type in the Old Testament. He is the beloved son, betrayed by his brothers for silver, falsely condemned, exalted to the right hand of power, becomes the savior of the world, dispenses bread of life, and is finally recognized by the very brothers who rejected him — weeping and forgiving. Every act maps onto Christ's story.",
        oldTestamentRef: "Genesis 37–50",
        newTestamentFulfillment: ["Matthew 26:15", "Acts 2:23–24", "John 6:35", "Romans 8:28"],
      },
    ],
    subEvents: [
      {
        id: "joseph-sold",
        title: "Joseph Sold into Slavery",
        summary:
          "Joseph's brothers throw him into a pit, then sell him to Ishmaelite traders for twenty pieces of silver. They dip his robe in goat blood and present it to Jacob, who tears his garments and mourns: 'It is my son's robe. A fierce animal has devoured him.' Jacob refuses to be comforted.",
        scriptures: ["Genesis 37:17–35"],
        keyPeople: [],
      },
      {
        id: "potiphars-house",
        title: "Potiphar's House and False Accusation",
        summary:
          "In Egypt, Joseph serves Potiphar, captain of Pharaoh's guard. The LORD is with him and he prospers. Potiphar's wife repeatedly propositions Joseph; when he flees she grabs his garment and cries rape. Joseph is thrown into prison — but 'the LORD was with Joseph and showed him steadfast love.'",
        scriptures: ["Genesis 39:1–20"],
        keyPeople: [],
      },
      {
        id: "josephs-dreams",
        title: "Joseph Interprets Dreams and Rises",
        summary:
          "In prison Joseph interprets the dreams of Pharaoh's cupbearer (restored) and baker (executed). Two years later, Pharaoh is troubled by dreams no one can interpret. The cupbearer remembers Joseph. Joseph interprets the dreams as seven years of plenty followed by seven years of famine — wisdom from God. Pharaoh strips off his signet ring and puts it on Joseph's hand: 'Only in the throne will I be greater than you.'",
        scriptures: ["Genesis 40–41"],
        keyPeople: [],
      },
      {
        id: "joseph-reveals-himself",
        title: "Joseph Reveals Himself to His Brothers",
        summary:
          "After two visits testing his brothers, Joseph can no longer control himself. He sends out every Egyptian servant and weeps aloud. 'I am Joseph! Is my father still alive?' His brothers are terrified — but Joseph says: 'Do not be distressed or angry with yourselves because you sold me here, for God sent me before you to preserve life.' What you meant for evil, God meant for good.",
        scriptures: ["Genesis 45:1–15", "Genesis 50:19–21"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "the-exodus", note: "Israel's descent to Egypt under Joseph sets the stage for 430 years of slavery, from which Moses will lead the Exodus — just as God promised Abraham in Genesis 15:13." },
      { eventId: "crucifixion-resurrection", note: "Joseph's betrayal for silver, unjust suffering, exaltation to glory, and recognition by those who rejected him mirror the full arc of Christ's redemptive work." },
    ],
    keyPeople: ["joseph"],
    tags: ["joseph", "egypt", "betrayal", "dreams", "providence", "famine", "reconciliation", "typology"],
  },

  // ── EXODUS & CONQUEST ──────────────────────────────────────
  {
    id: "moses-birth-and-calling",
    title: "Moses: Birth, Calling, and the Plagues",
    period: "exodus-conquest",
    summary:
      "A new Pharaoh arises who does not know Joseph. He enslaves Israel and orders the murder of all Hebrew infant boys. Into this death sentence a Levite mother places her son in a basket on the Nile. Pharaoh's own daughter draws him out of the water and raises him in the palace — as a Hebrew nursed by his own mother. Moses grows up, kills an Egyptian taskmaster, flees to Midian, and meets God in a burning bush. From the bush God speaks the covenant name I AM — and sends Moses back to Egypt to demand the release of His people. Ten plagues fall. The firstborn of Egypt die. Israel is delivered.",
    dateOptions: [
      {
        label: "Early Date (15th century)",
        yearBC: 1446,
        scholars: ["Archer", "Kitchen", "Hoffmeier"],
        reasoning:
          "1 Kings 6:1 states the Exodus occurred 480 years before Solomon began building the temple (966 BC), placing it at 1446 BC. Judges 11:26 provides a corroborating 300-year gap from Conquest to Jephthah.",
        scriptureSupport: ["1 Kings 6:1", "Judges 11:26", "Acts 7:30"],
      },
      {
        label: "Late Date (13th century)",
        rangeBC: [1280, 1260],
        scholars: ["Bright", "Noth"],
        reasoning:
          "Some scholars identify the Pharaoh of the Exodus as Ramesses II (r. 1279–1213 BC), based on reference to the store city Ramesses (Genesis 47:11; Exodus 1:11).",
        scriptureSupport: ["Exodus 1:11"],
      },
    ],
    scriptures: ["Exodus 1:1–4:17", "Exodus 7:1–12:36", "Acts 7:17–36", "Hebrews 11:23–28"],
    worldContext: [
      {
        title: "Egyptian Slave Labor and Monument Building",
        approximateYear: "~1400–1200 BC",
        civilization: "Egypt",
        notes:
          "Egyptian papyri confirm that Semitic slaves were employed in large-scale building projects. The Leiden Papyrus (Ramesses II era) records Israelite-like workers delivering bricks without straw being provided — a direct parallel to Exodus 5:7–18.",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "Moses as Prophet and Deliverer",
        description:
          "Moses is the foundational type of the Prophet-Deliverer. Rescued from waters at birth; Israel later passes through the sea. He mediates the covenant, intercedes for the people, climbs the mountain to meet God, and prefigures Christ as the prophet God will raise up 'like Moses' (Deuteronomy 18:15).",
        oldTestamentRef: "Deuteronomy 18:15",
        newTestamentFulfillment: ["Acts 3:22", "John 6:14", "John 5:45–47"],
      },
      {
        category: "Event",
        title: "The Burning Bush and Divine Self-Disclosure",
        description:
          "God's revelation of His name I AM (Yahweh) at the burning bush is the central Old Testament disclosure of divine identity. Jesus' 'I AM' statements in John deliberately echo this moment, claiming the same divine identity.",
        oldTestamentRef: "Exodus 3:14",
        newTestamentFulfillment: ["John 8:58", "John 18:6"],
      },
    ],
    subEvents: [
      {
        id: "basket-on-the-nile",
        title: "Moses in the Basket",
        summary:
          "When Pharaoh commands the drowning of all Hebrew infant boys, Jochebed places the infant Moses in a pitch-waterproofed basket in the Nile reeds. Miriam watches. Pharaoh's daughter finds him, is moved with compassion, and unknowingly hires Moses' own mother to nurse him. He is given the name Moses ('drawn out') and raised in the palace of the very man who sought his death.",
        scriptures: ["Exodus 2:1–10", "Hebrews 11:23"],
        keyPeople: [],
      },
      {
        id: "burning-bush",
        title: "The Burning Bush",
        summary:
          "Forty years after fleeing Egypt, Moses is tending sheep on Horeb — the mountain of God — when a bush burns without being consumed. God calls from the bush: 'I AM WHO I AM.' He reveals Himself as the God of Abraham, Isaac, and Jacob, who has heard Israel's groaning and is sending Moses to deliver them. Moses objects repeatedly; God answers every objection with 'I will be with you.'",
        scriptures: ["Exodus 3:1–4:17", "Acts 7:30–34"],
        keyPeople: [],
      },
      {
        id: "ten-plagues",
        title: "The Ten Plagues",
        summary:
          "God sends ten plagues against Egypt, each targeting a major Egyptian deity: water to blood (Khnum/Hapi), frogs (Heket), gnats, flies, livestock death (Apis bull), boils (Sekhmet), hail (Nut), locusts (Osiris), darkness (Ra), death of firstborn (Pharaoh himself, considered divine). With each plague, Pharaoh's heart hardens — sometimes by his own choice, sometimes by God's direct action — deepening the display of God's glory.",
        scriptures: ["Exodus 7:14–11:10"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "the-exodus", note: "The plagues and Passover are the direct prelude to the Exodus itself — the ten plagues culminating in the death of the firstborn and the first Passover night." },
      { eventId: "law-at-sinai", note: "The same Moses who met God in the burning bush on Horeb returns there with all Israel and receives the Law — the covenant relationship begun at the bush is now formalized at the mountain." },
    ],
    keyPeople: ["moses"],
    tags: ["moses", "burning bush", "plagues", "i am", "pharaoh", "calling", "exodus", "slavery"],
  },
  {
    id: "wilderness-wandering",
    title: "The Wilderness Wandering",
    period: "exodus-conquest",
    summary:
      "Israel spends 40 years in the wilderness — not because the journey required it, but because of unbelief. When twelve spies return from Canaan, ten report giants and walled cities. The congregation weeps and talks of returning to Egypt. God decrees that the generation that refused to trust Him will not enter the land — they will die in the desert. Yet God does not abandon them: manna falls every morning, water comes from a rock, the cloud and fire never leave. A generation dies; a generation is raised. Moses' own unbelief at the waters of Meribah bars even him from Canaan.",
    dateOptions: [
      {
        label: "Traditional",
        rangeBC: [1446, 1406],
        scholars: ["Archer", "Kitchen"],
        reasoning:
          "Forty years in the wilderness between the Exodus (~1446 BC) and the Conquest (~1406 BC) is stated explicitly in Numbers and Deuteronomy.",
        scriptureSupport: ["Numbers 14:33–34", "Deuteronomy 2:7"],
      },
    ],
    scriptures: ["Numbers 13–14", "Numbers 20:1–13", "Deuteronomy 8:1–5", "Hebrews 3:7–4:11", "1 Corinthians 10:1–13"],
    worldContext: [
      {
        title: "The Sinai Peninsula",
        approximateYear: "~1440 BC",
        civilization: "Egypt / Midian",
        notes:
          "The Sinai Peninsula was crossed by Egyptian trade and military routes. Inscriptions at Serabit el-Khadim (Egyptian turquoise mines in Sinai) may contain early Semitic writing from this period. The wilderness conditions described in Exodus and Numbers match the geography of the region.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "Manna — Bread from Heaven",
        description:
          "God provides manna — fine flake-like bread that appears on the ground each morning — to feed Israel for 40 years. Jesus identifies Himself as the true bread from heaven that the manna only foreshadowed: 'I am the bread of life. Your fathers ate the manna in the wilderness, and they died.'",
        oldTestamentRef: "Exodus 16:31–35",
        newTestamentFulfillment: ["John 6:31–35", "John 6:48–51"],
      },
      {
        category: "Object",
        title: "The Bronze Serpent on the Pole",
        description:
          "When serpents bite the complaining Israelites, God commands Moses to make a bronze serpent and raise it on a pole: whoever looks at it lives. Jesus explicitly interprets this as a type of His own crucifixion and the faith that brings eternal life.",
        oldTestamentRef: "Numbers 21:8–9",
        newTestamentFulfillment: ["John 3:14–15"],
      },
    ],
    subEvents: [
      {
        id: "twelve-spies",
        title: "The Twelve Spies and the People's Unbelief",
        summary:
          "Moses sends twelve spies into Canaan. After 40 days, Caleb and Joshua urge immediate entry: 'We are well able.' The other ten discourage the people: 'We seemed to ourselves like grasshoppers.' The congregation weeps all night and talks of choosing a new leader to return to Egypt. God's patience reaches its limit.",
        scriptures: ["Numbers 13–14"],
        keyPeople: [],
      },
      {
        id: "manna-from-heaven",
        title: "Manna and Quail from Heaven",
        summary:
          "When Israel grumbles for food in the wilderness, God provides quail in the evening and manna ('What is it?') each morning — a fine, flake-like substance tasting like honey wafers. The manna cannot be stored overnight (it breeds worms) except on Friday when a double portion must be gathered for the Sabbath. The lesson: daily dependence on God.",
        scriptures: ["Exodus 16:1–35", "Numbers 11:7–9"],
        keyPeople: [],
      },
      {
        id: "water-from-rock",
        title: "Water from the Rock",
        summary:
          "Twice Israel quarrels for water. At Rephidim, God commands Moses to strike the rock and water flows. At Meribah, God commands him to speak to the rock; Moses strikes it twice in anger instead. Water flows — but Moses and Aaron are barred from Canaan for failing to honor God as holy before the people. Paul says the rock that followed Israel was Christ.",
        scriptures: ["Exodus 17:1–7", "Numbers 20:1–13", "1 Corinthians 10:4"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "law-at-sinai", note: "The wilderness wandering begins immediately after the Law is given at Sinai — the same people who experienced Sinai are the ones who fail to enter the land." },
      { eventId: "conquest-of-canaan", note: "The wilderness generation dies; Joshua leads their children — those 20 years old or younger at Kadesh-Barnea — into the Promised Land." },
    ],
    keyPeople: ["moses"],
    tags: ["wilderness", "manna", "spies", "caleb", "joshua", "unbelief", "water from rock", "40 years"],
  },
  {
    id: "conquest-of-canaan",
    title: "The Conquest of Canaan",
    period: "exodus-conquest",
    summary:
      "Moses dies within sight of the Promised Land on Mount Nebo. Joshua crosses the Jordan — which stops flowing at flood stage — and leads Israel in the conquest of Canaan. Jericho falls to shouts and trumpets, not swords. The sun stands still at Gibeon. City after city is defeated. Yet the conquest is never fully complete: Israel fails to drive out all the Canaanites, a failure that will haunt them for centuries. The land is divided among the tribes. Joshua's farewell sermon demands a definitive choice: 'Choose this day whom you will serve. But as for me and my house, we will serve the LORD.'",
    dateOptions: [
      {
        label: "Early Date",
        yearBC: 1406,
        scholars: ["Archer", "Kitchen", "Waltke"],
        reasoning:
          "Working back from 1 Kings 6:1 (480 years to Solomon's temple in 966 BC) gives 1446 BC for the Exodus and ~1406 BC for the conquest after 40 wilderness years.",
        scriptureSupport: ["1 Kings 6:1", "Joshua 3:15–17"],
      },
    ],
    scriptures: ["Joshua 1–6", "Joshua 10:12–14", "Joshua 24:14–15", "Hebrews 11:30–31"],
    worldContext: [
      {
        title: "Late Bronze Age Collapse",
        approximateYear: "~1200 BC",
        civilization: "Canaan",
        notes:
          "Numerous Canaanite cities show destruction layers in the Late Bronze Age (1550–1200 BC). Hazor, one of the greatest Canaanite cities, shows significant destruction in this period — consistent with Joshua 11:10–11. The precise cause of many destructions remains debated among archaeologists.",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "Joshua as Type of Jesus",
        description:
          "Joshua (Hebrew: Yeshua — the same name as Jesus) leads God's people into their inheritance after Moses (the Law) could not. The book of Hebrews explicitly uses Joshua's failure to give 'rest' to argue that a greater Joshua — Jesus — leads His people into the true Sabbath rest.",
        oldTestamentRef: "Joshua 1:6",
        newTestamentFulfillment: ["Hebrews 4:8–10", "Matthew 1:21"],
      },
      {
        category: "Person",
        title: "Rahab — Faith Saves an Outsider",
        description:
          "Rahab is a Gentile prostitute who shelters the spies and confesses faith in Israel's God: 'The LORD your God, he is God in the heavens above and on the earth beneath.' The scarlet cord in her window — the sign of her deliverance — is a vivid type of the blood of Christ that marks out the saved from judgment.",
        oldTestamentRef: "Joshua 2:12–21",
        newTestamentFulfillment: ["Hebrews 11:31", "James 2:25", "Matthew 1:5"],
      },
    ],
    subEvents: [
      {
        id: "jordan-crossing",
        title: "Crossing the Jordan",
        summary:
          "Just as the Red Sea parted for Moses, the Jordan River — at flood stage — stops flowing when the feet of the priests carrying the ark touch the water. All Israel crosses on dry ground. Twelve stones are taken from the riverbed as a memorial. The event is designed to produce the same faith in Joshua's generation that the Red Sea produced in Moses' generation.",
        scriptures: ["Joshua 3:1–4:24"],
        keyPeople: [],
      },
      {
        id: "fall-of-jericho",
        title: "The Fall of Jericho",
        summary:
          "God commands an unusual battle plan: march around Jericho once a day for six days, seven times on the seventh day, then blow the trumpets and shout. The walls collapse. Rahab and her household — marked by a scarlet cord — are the only survivors. Hebrews 11:30 credits the walls' fall to faith; Joshua 6 shows it was entirely God's doing, not military force.",
        scriptures: ["Joshua 6:1–27", "Hebrews 11:30"],
        keyPeople: [],
      },
      {
        id: "sun-stands-still",
        title: "The Sun Stands Still at Gibeon",
        summary:
          "During the battle with the Amorite kings, Joshua prays and the sun stops in the middle of the sky for about a full day. 'There has been no day like it before or since, when the LORD heeded the voice of a man, for the LORD fought for Israel.' The text records it as an act of divine response to believing prayer.",
        scriptures: ["Joshua 10:12–14"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "the-exodus", note: "The Conquest is the completion of the Exodus promise — God delivers Israel not just from Egypt but all the way into the land He swore to Abraham, Isaac, and Jacob." },
      { eventId: "deborah-and-barak", note: "The incomplete conquest (Israel's failure to drive out all the Canaanites) directly produces the cycle of apostasy and deliverance that characterizes the book of Judges." },
    ],
    keyPeople: ["joshua"],
    tags: ["joshua", "jericho", "canaan", "conquest", "rahab", "jordan", "promised land", "tribes"],
  },

  // ── UNITED KINGDOM ─────────────────────────────────────────
  {
    id: "samuel-and-saul",
    title: "Samuel, Saul, and the Demand for a King",
    period: "united-kingdom",
    summary:
      "Hannah, barren and weeping at the tabernacle, vows her son to God if He will give her a child. God gives her Samuel — who grows up in Shiloh under Eli and becomes the last and greatest of the judges. In old age, Samuel's corrupt sons prompt Israel's elders to demand a king 'like all the nations.' God says: 'They have not rejected you; they have rejected me as their king.' He gives them what they ask for: Saul, tall and impressive — everything a king should look like. Yet Saul's reign is marked by impatience, disobedience, and self-will, and God rejects him as king before his reign is half over.",
    dateOptions: [
      {
        label: "Traditional",
        rangeBC: [1050, 1010],
        scholars: ["Kitchen", "Merrill"],
        reasoning:
          "The united monarchy is conventionally dated to ~1050–930 BC. Saul's reign (~1050–1010 BC) is followed by David's (~1010–970 BC) and Solomon's (~970–930 BC).",
        scriptureSupport: ["1 Samuel 8:1–22", "Acts 13:21"],
      },
    ],
    scriptures: ["1 Samuel 1:1–2:11", "1 Samuel 8:1–22", "1 Samuel 15:1–35", "Acts 13:20–22"],
    worldContext: [
      {
        title: "Iron Age I in Canaan",
        approximateYear: "~1050 BC",
        civilization: "Canaan / Philistia",
        notes:
          "The transition from the Late Bronze Age to Iron Age I (~1200–1000 BC) sees the emergence of the Philistine culture in coastal Canaan. The Philistines' iron technology gave them a military advantage over Israel (1 Samuel 13:19–22), creating the military pressure that partly drove Israel's demand for a king.",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "Samuel as Priestly Prophet and Kingmaker",
        description:
          "Samuel combines the roles of prophet, priest, and judge — foreshadowing Christ who is Prophet, Priest, and King perfectly united in one person. His role of anointing kings with oil anticipates the Spirit's anointing of Jesus as the ultimate Messiah ('Anointed One').",
        oldTestamentRef: "1 Samuel 16:13",
        newTestamentFulfillment: ["Acts 10:38", "Luke 4:18"],
      },
    ],
    subEvents: [
      {
        id: "hannah-and-samuel",
        title: "Hannah's Prayer and the Birth of Samuel",
        summary:
          "Hannah is deeply distressed and weeps bitterly at the tabernacle, praying silently. Eli the priest mistakes her for drunk. She vows her son to the LORD for life. God remembers her. She conceives and bears Samuel. When he is weaned, she brings him to Shiloh and prays one of the Old Testament's most prophetic hymns — later echoed almost word for word in Mary's Magnificat.",
        scriptures: ["1 Samuel 1:9–2:11", "Luke 1:46–55"],
        keyPeople: [],
      },
      {
        id: "israel-demands-king",
        title: "Israel Demands a King",
        summary:
          "When Samuel's sons take bribes and pervert justice, the elders of Israel approach Samuel and demand a king 'like all the nations.' Samuel prays in distress. God responds: 'They have not rejected you; they have rejected me from being king over them.' He commands Samuel to warn them of what a king will do — take their sons, daughters, fields, and flocks. They insist. God says: 'Obey their voice.'",
        scriptures: ["1 Samuel 8:1–22"],
        keyPeople: [],
      },
      {
        id: "saul-anointed",
        title: "Saul Anointed as First King",
        summary:
          "God directs Samuel to Saul — tall, handsome, a head taller than any other Israelite. Samuel anoints him privately with oil, then presents him publicly at Mizpah by lot. Saul is found hiding among the baggage. Despite a rocky start, he begins well and wins a major victory over the Ammonites.",
        scriptures: ["1 Samuel 9:15–10:1", "1 Samuel 10:17–27", "1 Samuel 11:1–15"],
        keyPeople: [],
      },
      {
        id: "saul-rejected",
        title: "Saul Rejected as King",
        summary:
          "Saul disobeys God twice: he presumptuously offers a sacrifice before Samuel arrives (1 Samuel 13), then spares King Agag and the best livestock against God's explicit command (1 Samuel 15). Samuel's verdict: 'Because you have rejected the word of the LORD, he has also rejected you from being king.' He will never see Samuel again. Samuel mourns — and God directs him to Bethlehem, to a man named Jesse.",
        scriptures: ["1 Samuel 13:8–14", "1 Samuel 15:10–35"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "david-becomes-king", note: "God's rejection of Saul is followed immediately by the anointing of David — the man after God's own heart — setting up the Davidic covenant that runs to Christ." },
      { eventId: "david-and-goliath", note: "The contrast between Saul and David is sharpest at Goliath's challenge: Saul, the tall warrior king, hides in his tent while the shepherd boy David runs to the battle." },
    ],
    keyPeople: ["samuel", "saul"],
    tags: ["samuel", "saul", "hannah", "king", "monarchy", "anointing", "rejection", "prophet"],
  },
  {
    id: "david-and-goliath",
    title: "David and Goliath",
    period: "united-kingdom",
    summary:
      "A Philistine giant named Goliath of Gath stands before Israel's army morning and evening for forty days, challenging any Israelite to single combat. The army of Saul trembles. When the teenage shepherd David arrives with bread for his brothers, he hears the challenge and is indignant: 'Who is this uncircumcised Philistine, that he should defy the armies of the living God?' Armed with five smooth stones and a sling — and the name of the LORD — David runs toward Goliath and kills him with a single stone. The Philistines flee. David's victory is the first act of a life defined by this pattern: small human, great God, stunning victory.",
    dateOptions: [
      {
        label: "Traditional",
        yearBC: 1025,
        scholars: ["Merrill", "Kitchen"],
        reasoning:
          "Placed early in David's career before Saul's jealousy made him a fugitive; conventionally dated around 1025 BC within the early united monarchy.",
        scriptureSupport: ["1 Samuel 17:1–54"],
      },
    ],
    scriptures: ["1 Samuel 17:1–54", "1 Samuel 17:45–47"],
    worldContext: [
      {
        title: "Philistine Military Culture",
        approximateYear: "~1025 BC",
        civilization: "Philistia",
        notes:
          "The Philistines were Sea Peoples who settled the coastal plain of Canaan around 1200 BC. They brought iron technology and a military culture featuring champion warriors. Goliath's armor — bronze helmet, scale armor, bronze greaves, javelin — matches descriptions of Sea People warriors in Egyptian reliefs.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "David's Victory as Type of Christ's Defeat of Satan",
        description:
          "David faces the great enemy as the representative of God's people and wins a victory that all Israel shares — they did not fight, yet they share the spoil. This is the pattern of Christ's victory over sin and death: He fights as our champion, and we share the victory through union with Him.",
        oldTestamentRef: "1 Samuel 17:47",
        newTestamentFulfillment: ["Colossians 2:15", "Hebrews 2:14"],
      },
    ],
    subEvents: [
      {
        id: "goliaths-challenge",
        title: "Goliath Defies Israel",
        summary:
          "Goliath stands over nine feet tall, wearing armor weighing 125 pounds, with a spear shaft like a weaver's beam. Morning and evening for forty days he calls for a champion. 'When Saul and all Israel heard these words of the Philistine, they were dismayed and greatly afraid.'",
        scriptures: ["1 Samuel 17:1–11"],
        keyPeople: [],
      },
      {
        id: "david-arrives",
        title: "David Arrives with Bread",
        summary:
          "Jesse sends David with food for his soldier brothers. When David arrives, Goliath gives his challenge. David asks: 'What shall be done for the man who kills this Philistine and takes away the reproach from Israel? For who is this uncircumcised Philistine, that he should defy the armies of the living God?' His oldest brother Eliab rebukes him for pride. David is undeterred.",
        scriptures: ["1 Samuel 17:17–30"],
        keyPeople: [],
      },
      {
        id: "david-defeats-goliath",
        title: "David Defeats Goliath",
        summary:
          "Saul tries to dress David in his own armor; David takes it off. He chooses five smooth stones from the brook and goes out to meet Goliath with his sling. Goliath curses him by his gods. David's answer: 'You come to me with a sword and with a spear and with a javelin, but I come to you in the name of the LORD of hosts, the God of the armies of Israel, whom you have defied.' He runs — runs — toward Goliath, slings a stone that sinks into his forehead, and cuts off his head with Goliath's own sword.",
        scriptures: ["1 Samuel 17:40–54"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "samuel-and-saul", note: "David's courage at Goliath shows the contrast with Saul — the tall king who should have fought instead cowers in his tent." },
      { eventId: "david-becomes-king", note: "Goliath's defeat is the event that catapults David to national fame and begins the chain of events leading to his kingship — and Saul's jealousy." },
    ],
    tags: ["david", "goliath", "philistines", "faith", "victory", "sling", "champion", "giant"],
  },
  {
    id: "david-bathsheba-nathan",
    title: "David, Bathsheba, and Nathan",
    period: "united-kingdom",
    summary:
      "At the height of his power, David remains in Jerusalem while his armies fight. From his rooftop he sees Bathsheba bathing and sends for her. She conceives. David tries to cover it up by recalling her husband Uriah from battle, then by engineering his death on the front line. David takes Bathsheba as his wife and the matter 'seems right' in David's eyes — but not in God's. The prophet Nathan comes to David with a parable about a rich man who stole a poor man's only lamb. David burns with anger at the rich man. Nathan says: 'You are the man.' David confesses immediately: 'I have sinned against the LORD.' The consequences are severe — the child will die; the sword will not depart from David's house. Yet God's forgiveness is immediate: 'The LORD also has put away your sin.'",
    dateOptions: [
      {
        label: "Traditional",
        yearBC: 990,
        scholars: ["Merrill", "Bergen"],
        reasoning:
          "Placed mid-reign of David, after the Ammonite war began (2 Samuel 10) — David's sin with Bathsheba occurs while Joab besieges Rabbah of the Ammonites.",
        scriptureSupport: ["2 Samuel 11:1"],
      },
    ],
    scriptures: ["2 Samuel 11:1–12:25", "Psalm 51:1–17", "Romans 4:6–8"],
    worldContext: [
      {
        title: "Royal Prerogative in the Ancient Near East",
        approximateYear: "~990 BC",
        civilization: "Israel",
        notes:
          "Ancient Near Eastern kings exercised near-absolute authority over subjects, including the right to requisition people and property. Samuel had warned this would happen (1 Samuel 8:11–17). The Bathsheba episode illustrates exactly the abuse of royal power that Samuel predicted.",
      },
    ],
    typology: [
      {
        category: "Doctrine",
        title: "David's Confession as Pattern of Gospel Repentance",
        description:
          "Psalm 51 — David's response to Nathan — is the deepest expression of repentant faith in the Old Testament. It anchors forgiveness not in ritual ('You do not delight in sacrifice') but in a broken and contrite heart, and looks forward to the Spirit's work of inner transformation. Paul cites David as the paradigm of justification by faith in Romans 4.",
        oldTestamentRef: "Psalm 51:1–12",
        newTestamentFulfillment: ["Romans 4:6–8", "Acts 2:38"],
      },
    ],
    subEvents: [
      {
        id: "david-and-bathsheba",
        title: "David Sins with Bathsheba",
        summary:
          "King David stays in Jerusalem while his armies fight the Ammonites. One evening he walks on his roof and sees Bathsheba, wife of Uriah the Hittite, bathing. He inquires about her, sends for her, and sleeps with her. She conceives. When David learns, he recalls Uriah from battle hoping he will sleep with his wife and the pregnancy will be credited to him. Uriah refuses — he will not enjoy domestic comforts while his fellow soldiers are in the field.",
        scriptures: ["2 Samuel 11:1–13"],
        keyPeople: [],
      },
      {
        id: "uriah-murdered",
        title: "Uriah Is Killed",
        summary:
          "When Uriah will not cooperate, David writes a letter to Joab — carried by Uriah himself — commanding that Uriah be placed in the fiercest fighting and then abandoned. Uriah is killed. David takes Bathsheba as his wife. The chapter ends with a single devastating sentence: 'But the thing that David had done displeased the LORD.'",
        scriptures: ["2 Samuel 11:14–27"],
        keyPeople: [],
      },
      {
        id: "nathan-confronts-david",
        title: "Nathan's Parable and David's Confession",
        summary:
          "God sends Nathan to David with a parable of a rich man who steals a poor man's only lamb. David is enraged. Nathan says: 'You are the man.' He lists every sin — taking Uriah's wife, killing Uriah with the sword of the Ammonites. David confesses immediately and fully: 'I have sinned against the LORD.' Nathan answers: 'The LORD also has put away your sin; you shall not die.' But the sword will not depart from David's house. The child born to Bathsheba dies on the seventh day.",
        scriptures: ["2 Samuel 12:1–23", "Psalm 51:1–17"],
        keyPeople: [],
      },
      {
        id: "solomon-born",
        title: "Solomon Born to David and Bathsheba",
        summary:
          "David comforts Bathsheba after the death of their first child. She conceives again and bears a son named Solomon. 'And the LORD loved him and sent a message by Nathan the prophet. So he called his name Jedidiah ('beloved of the LORD'), because of the LORD.' Out of David's greatest failure, the LORD brings forward the son who will build the Temple and sit on the throne as a type of Christ.",
        scriptures: ["2 Samuel 12:24–25"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "david-becomes-king", note: "The Bathsheba episode is the turning point of David's reign — everything before is ascent; the sword that never departs his house drives everything after." },
      { eventId: "solomons-temple", note: "Solomon, the son born from David and Bathsheba after their sin and sorrow, is the one God designates to build the Temple — grace building on repentance." },
    ],
    keyPeople: ["david"],
    tags: ["david", "bathsheba", "uriah", "nathan", "sin", "repentance", "psalm 51", "forgiveness", "solomon"],
  },

  // ── NEW TESTAMENT ───────────────────────────────────────────
  {
    id: "jesus-baptism-and-temptation",
    title: "The Baptism and Temptation of Jesus",
    period: "new-testament",
    summary:
      "Before Jesus' public ministry begins, two defining events mark His identity and mission. At His baptism in the Jordan, the heavens tear open: the Spirit descends as a dove and the Father speaks — 'This is my beloved Son, with whom I am well pleased.' The Trinity is manifest over the waters. Immediately, the Spirit drives Jesus into the wilderness for 40 days of fasting and temptation by the devil. Where Israel failed for 40 years in the wilderness, Jesus succeeds perfectly. He answers every temptation with Scripture, refuses the devil's kingdoms, and emerges from the wilderness in the power of the Spirit.",
    dateOptions: [
      {
        label: "Traditional",
        yearAD: 26,
        scholars: ["Harold Hoehner", "John Nolland"],
        reasoning:
          "If Jesus was born ~6–4 BC and began His ministry 'at about thirty years of age' (Luke 3:23), His baptism falls around AD 26–29. Most conservative scholars favor AD 26–27 or 29–30.",
        scriptureSupport: ["Luke 3:23"],
      },
    ],
    scriptures: ["Matthew 3:13–4:11", "Mark 1:9–13", "Luke 3:21–22", "Luke 4:1–13", "John 1:29–34"],
    worldContext: [
      {
        title: "John the Baptist's Ministry",
        approximateYear: "AD 26",
        civilization: "Roman Judea",
        notes:
          "Luke 3:1–2 provides a historical timestamp for John's ministry: the fifteenth year of Tiberius Caesar (AD 28/29 by most reckonings), Pontius Pilate governing Judea. John's baptism of repentance drew enormous crowds and was recognized as prophetically significant across Judea.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "Jesus' 40 Days Recapitulating Israel's 40 Years",
        description:
          "Jesus deliberately relives Israel's wilderness experience. Each of His three answers to Satan quotes Deuteronomy — the book of the wilderness. Where Israel was tested for 40 years and failed, Jesus is tested for 40 days and does not fail. He is the perfect Israel, succeeding where the nation stumbled, fulfilling what Israel was called to be.",
        oldTestamentRef: "Deuteronomy 6:13–16; 8:3",
        newTestamentFulfillment: ["Matthew 4:1–11", "Hebrews 4:15"],
      },
      {
        category: "Event",
        title: "Baptism as New Creation",
        description:
          "The Spirit hovering over the waters of baptism echoes Genesis 1:2 — the Spirit over the waters of creation. The Father's voice echoes Psalm 2 ('You are my Son') and Isaiah 42:1 ('my chosen, in whom my soul delights'). Jesus' baptism is the launching of the new creation, with the Second Adam inaugurating a new humanity.",
        oldTestamentRef: "Isaiah 42:1",
        newTestamentFulfillment: ["Matthew 3:16–17", "2 Corinthians 5:17"],
      },
    ],
    subEvents: [
      {
        id: "baptism-of-jesus",
        title: "The Baptism of Jesus",
        summary:
          "Jesus comes from Galilee to the Jordan to be baptized by John. John resists: 'I need to be baptized by you, and do you come to me?' Jesus answers: 'Let it be so now, for thus it is fitting for us to fulfill all righteousness.' As Jesus comes up from the water, the heavens are opened, the Spirit descends like a dove, and the Father speaks: 'This is my beloved Son, with whom I am well pleased.' The Trinitarian God is fully revealed over the new creation waters.",
        scriptures: ["Matthew 3:13–17", "John 1:32–34"],
        keyPeople: [],
      },
      {
        id: "temptation-bread",
        title: "First Temptation: Bread from Stones",
        summary:
          "After 40 days of fasting, the devil says: 'If you are the Son of God, command these stones to become loaves of bread.' Jesus answers: 'Man shall not live by bread alone, but by every word that comes from the mouth of God' (Deuteronomy 8:3). Where Israel complained for bread in the wilderness, Jesus refuses to use His power for physical comfort outside the Father's will.",
        scriptures: ["Matthew 4:1–4", "Deuteronomy 8:3"],
        keyPeople: [],
      },
      {
        id: "temptation-kingdoms",
        title: "Third Temptation: The Kingdoms of the World",
        summary:
          "The devil shows Jesus all the kingdoms of the world in a moment and offers them: 'All these I will give you, if you will fall down and worship me.' Jesus answers: 'Be gone, Satan! For it is written, You shall worship the Lord your God and him only shall you serve.' The kingdoms of the world will one day belong to the Son — but the path is the cross, not a shortcut through Satan.",
        scriptures: ["Matthew 4:8–11", "Deuteronomy 6:13"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "wilderness-wandering", note: "Jesus' 40-day temptation directly recapitulates Israel's 40-year wilderness testing — and every response Jesus gives comes from Deuteronomy, the book of the wilderness." },
      { eventId: "incarnation", note: "Jesus' baptism is the public launch of the ministry the Incarnation prepared for — the Father affirms the Son's identity before the work of redemption begins." },
    ],
    keyPeople: ["john-the-baptist"],
    tags: ["baptism", "temptation", "wilderness", "jesus", "john the baptist", "trinity", "holy spirit", "devil"],
  },
  {
    id: "jesus-ministry-miracles",
    title: "The Ministry and Miracles of Jesus",
    period: "new-testament",
    summary:
      "For roughly three years Jesus travels through Galilee and Judea — teaching in synagogues, healing the sick, casting out demons, feeding thousands, raising the dead, and calling twelve men to follow Him. He proclaims the arrival of the Kingdom of God in word (Sermon on the Mount, parables) and deed (miracles as signs of the Kingdom). Crowds follow; the religious establishment opposes. He heals lepers, opens blind eyes, restores withered hands, stills storms, walks on water, and raises Lazarus four days in the tomb. He calls Himself the bread of life, the light of the world, the good shepherd, the resurrection and the life. He heals on the Sabbath deliberately to reveal that He is Lord of the Sabbath.",
    dateOptions: [
      {
        label: "Traditional",
        rangeAD: [26, 30],
        scholars: ["Hoehner", "Carson"],
        reasoning:
          "Jesus' public ministry lasted approximately 3 years (at least three Passovers are mentioned in John). Most scholars place it between AD 26/27 and AD 30.",
        scriptureSupport: ["John 2:13", "John 6:4", "John 11:55"],
      },
    ],
    scriptures: ["Matthew 5–7", "Matthew 8:1–17", "Mark 10:45", "Luke 4:18–19", "John 11:38–44"],
    worldContext: [
      {
        title: "Galilee under Roman Rule",
        approximateYear: "AD 27–30",
        civilization: "Roman Empire",
        notes:
          "Galilee in Jesus' day was a heavily populated, culturally mixed region under the tetrarchy of Herod Antipas. The fishing villages of Capernaum, Bethsaida, and Chorazin were prosperous. Jesus' ministry was notably public and drew attention from Jerusalem's religious leadership who traveled north to investigate Him.",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "Jesus as the True Prophet Greater Than Moses",
        description:
          "Moses gave the Law on a mountain; Jesus gives the new covenant teaching on a mountain (Sermon on the Mount). Moses fed Israel with manna; Jesus multiplies loaves and calls Himself the Bread of Life. Moses struck water from a rock; Jesus offers living water. He is the prophet Moses promised: 'The LORD your God will raise up for you a prophet like me from among you.'",
        oldTestamentRef: "Deuteronomy 18:15",
        newTestamentFulfillment: ["John 6:14", "Acts 3:22", "Matthew 5:17"],
      },
    ],
    subEvents: [
      {
        id: "sermon-on-the-mount",
        title: "The Sermon on the Mount",
        summary:
          "Jesus sits on a hillside in Galilee and teaches what the Kingdom of God looks like from the inside — not external religious performance but transformed hearts. The Beatitudes describe the character of Kingdom citizens. He deepens the Law beyond external commands to inner attitudes. He commands a righteousness surpassing the Pharisees — and reveals it is rooted in relationship with 'your Father in heaven.'",
        scriptures: ["Matthew 5:1–7:29"],
        keyPeople: [],
      },
      {
        id: "feeding-five-thousand",
        title: "Feeding Five Thousand",
        summary:
          "Five thousand men (plus women and children) follow Jesus to a desolate place. The disciples have five loaves and two fish. Jesus takes them, gives thanks, breaks them, and gives them to the disciples to distribute. All eat and are satisfied. Twelve baskets of broken pieces remain. John records that the crowd wants to make Jesus king by force — He withdraws, then walks to them on the water.",
        scriptures: ["John 6:1–15", "John 6:35"],
        keyPeople: [],
      },
      {
        id: "raising-of-lazarus",
        title: "The Raising of Lazarus",
        summary:
          "Lazarus, a friend of Jesus, dies and is in the tomb four days when Jesus arrives. Martha says: 'If you had been here, my brother would not have died.' Jesus says: 'I am the resurrection and the life.' He weeps at the tomb. He commands the stone rolled away. He calls in a loud voice: 'Lazarus, come out.' The dead man comes out bound in burial clothes. Many believe. The chief priests immediately begin plotting to kill Jesus.",
        scriptures: ["John 11:1–53"],
        keyPeople: [],
      },
      {
        id: "transfiguration",
        title: "The Transfiguration",
        summary:
          "Jesus takes Peter, James, and John to a high mountain. He is transfigured before them — His face shines like the sun, His clothes become dazzling white. Moses and Elijah appear and speak with Him about His coming death. The Father speaks from a bright cloud: 'This is my beloved Son, with whom I am well pleased; listen to him.' Peter offers to make three tents. They fall on their faces in terror. Jesus touches them: 'Rise, and have no fear.'",
        scriptures: ["Matthew 17:1–9", "2 Peter 1:16–18"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "jesus-baptism-and-temptation", note: "The ministry begins with the baptism's divine commissioning and ends at Calvary — the Transfiguration is the midpoint, where Jesus is revealed in glory and confirmed in His mission toward the cross." },
      { eventId: "crucifixion-resurrection", note: "Every miracle, every parable, every 'I AM' statement points toward and prepares for the defining moment of Jesus' ministry: His death and resurrection." },
    ],
    keyPeople: ["peter", "mary-mother-of-jesus"],
    tags: ["miracles", "teaching", "sermon on the mount", "lazarus", "transfiguration", "feeding", "kingdom", "ministry"],
  },
  {
    id: "last-supper-and-gethsemane",
    title: "The Last Supper and Gethsemane",
    period: "new-testament",
    summary:
      "On the night of Passover, Jesus gathers His twelve disciples in an upper room in Jerusalem. He washes their feet — the act of a slave — as an object lesson in servant leadership. He institutes the Lord's Supper: 'This is my body… this cup is the new covenant in my blood.' He prays for His disciples and for all future believers in John 17 — the High Priestly Prayer. Then He leads them to Gethsemane, where He falls to the ground in agony and prays: 'Not my will, but yours be done.' An angel strengthens Him. His sweat is like drops of blood. Judas arrives with a crowd. Jesus is arrested while His disciples scatter.",
    dateOptions: [
      {
        label: "Nisan 14, AD 30",
        yearAD: 30,
        scholars: ["Hoehner", "Carson", "France"],
        reasoning:
          "Most conservative scholars date the crucifixion to Friday, 3 April AD 30 (Julian calendar) or 7 April AD 33. The Last Supper was the previous evening — Thursday night of Passover week.",
        scriptureSupport: ["John 13:1", "Luke 22:7–8"],
      },
    ],
    scriptures: ["Matthew 26:17–56", "Luke 22:14–53", "John 13:1–17:26"],
    worldContext: [
      {
        title: "Passover Pilgrimage to Jerusalem",
        approximateYear: "AD 30",
        civilization: "Roman Judea",
        notes:
          "Josephus reports that Jerusalem swelled to over one million pilgrims during Passover. The city was tense — Pilate came up from Caesarea with extra troops. Against this backdrop, the Passover lamb eaten in the upper room gives way to Jesus presenting Himself as the true Passover Lamb.",
      },
    ],
    typology: [
      {
        category: "Ritual",
        title: "The Lord's Supper Fulfilling the Passover",
        description:
          "Jesus institutes the Lord's Supper at Passover, declaring Himself the Passover Lamb — the body broken and blood shed for the deliverance of God's people. Every element of the Passover meal finds its fulfillment in Him: the lamb, the unleavened bread, the cup of redemption. Paul says 'Christ our Passover has been sacrificed' (1 Corinthians 5:7).",
        oldTestamentRef: "Exodus 12:1–14",
        newTestamentFulfillment: ["1 Corinthians 5:7", "1 Corinthians 11:23–26"],
      },
    ],
    subEvents: [
      {
        id: "washing-of-feet",
        title: "Jesus Washes the Disciples' Feet",
        summary:
          "Knowing that the Father had given all things into His hands, Jesus rises from supper, wraps a towel around Himself, and begins washing the disciples' feet — a task performed only by slaves. Peter protests violently: 'You shall never wash my feet.' Jesus answers: 'If I do not wash you, you have no share with me.' Then He explains: 'I, your Lord and Teacher, have washed your feet, you also ought to wash one another's feet.'",
        scriptures: ["John 13:1–17"],
        keyPeople: [],
      },
      {
        id: "lords-supper-instituted",
        title: "The Lord's Supper Instituted",
        summary:
          "During the Passover meal Jesus takes bread, gives thanks, breaks it, and says: 'This is my body, which is given for you. Do this in remembrance of me.' Then He takes the cup: 'This cup that is poured out for you is the new covenant in my blood.' He announces that one at the table will betray Him. Judas goes out into the night.",
        scriptures: ["Luke 22:14–23", "1 Corinthians 11:23–26"],
        keyPeople: [],
      },
      {
        id: "high-priestly-prayer",
        title: "The High Priestly Prayer",
        summary:
          "After supper, Jesus prays aloud for His disciples — the longest recorded prayer of Jesus. He prays for Himself (glorify your Son), for His immediate disciples (keep them from the evil one, sanctify them in truth), and for all future believers: 'that they may all be one, just as you, Father, are in me, and I in you, that the world may believe that you have sent me.'",
        scriptures: ["John 17:1–26"],
        keyPeople: [],
      },
      {
        id: "gethsemane",
        title: "The Agony in Gethsemane",
        summary:
          "At Gethsemane, Jesus leaves eight disciples and goes further with Peter, James, and John: 'My soul is very sorrowful, even to death.' He falls on His face and prays three times: 'My Father, if it be possible, let this cup pass from me; nevertheless, not as I will, but as you will.' He finds the disciples sleeping each time. An angel from heaven strengthens Him. His sweat falls like drops of blood. Then Judas arrives with the mob.",
        scriptures: ["Matthew 26:36–56", "Luke 22:39–54"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "the-exodus", note: "The Last Supper is a Passover meal — Jesus interprets the Exodus deliverance as the type and His own death as its fulfillment: the true Lamb of God slain so that death passes over all who shelter in His blood." },
      { eventId: "crucifixion-resurrection", note: "Gethsemane is the final preparation for Calvary — here the Son submits His will to the Father's, and the next hours see that surrender carried to its conclusion on the cross." },
    ],
    keyPeople: ["peter", "mary-mother-of-jesus"],
    tags: ["last supper", "gethsemane", "passover", "lords supper", "foot washing", "high priestly prayer", "arrest", "betrayal"],
  },

  // ── DIVIDED KINGDOM ────────────────────────────────────────
  {
    id: "jonah",
    title: "Jonah and Nineveh",
    period: "divided-kingdom",
    summary:
      "The LORD commands the prophet Jonah son of Amittai to go to Nineveh — the capital of Assyria, Israel's fierce enemy — and call it to repentance. Jonah flees in the opposite direction, boards a ship, and is thrown overboard in a storm. A great fish swallows him. Three days and nights inside the fish, Jonah prays and is vomited onto dry land. He goes to Nineveh. He preaches a five-word sermon and the entire city, from king to cattle, repents in sackcloth. God relents from disaster. Jonah is furious. God teaches him about mercy that extends beyond Israel — even to the Assyrians.",
    dateOptions: [
      {
        label: "8th Century BC",
        rangeBC: [786, 746],
        scholars: ["Wiseman", "Waltke"],
        reasoning:
          "2 Kings 14:25 places Jonah son of Amittai in the reign of Jeroboam II (793–753 BC), making him a contemporary of Amos and an 8th-century prophet. The Nineveh he visited was the Assyrian capital before it reached its peak under Sennacherib.",
        scriptureSupport: ["2 Kings 14:25"],
      },
    ],
    scriptures: ["Jonah 1:1–4:11", "Matthew 12:39–41", "Luke 11:29–32"],
    worldContext: [
      {
        title: "Assyria at Jeroboam II's Time",
        approximateYear: "~760 BC",
        civilization: "Assyrian Empire",
        notes:
          "Nineveh was one of the great cities of the ancient world, situated on the Tigris River. In the 8th century BC, Assyria was between periods of expansion — the weakness in this era may explain why Jonah's preaching achieved such a dramatic response. Within a century, Assyria would destroy the northern kingdom of Israel.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "Three Days in the Fish — Sign of the Resurrection",
        description:
          "Jesus Himself identifies the sign of Jonah as the defining sign of His messiahship: 'Just as Jonah was three days and three nights in the belly of the great fish, so will the Son of Man be three days and three nights in the heart of the earth.' Jonah's deliverance from the fish is a type of resurrection.",
        oldTestamentRef: "Jonah 1:17",
        newTestamentFulfillment: ["Matthew 12:39–41", "Luke 11:29–32"],
      },
      {
        category: "Event",
        title: "Gentile Repentance — Foreshadow of the Great Commission",
        description:
          "Nineveh's repentance previews the New Testament inclusion of Gentiles in salvation. Jesus says the men of Nineveh will rise in judgment and condemn the generation that rejected Him — they repented at Jonah's preaching, and one greater than Jonah is here.",
        oldTestamentRef: "Jonah 3:5–10",
        newTestamentFulfillment: ["Matthew 28:19–20", "Romans 9:24–26"],
      },
    ],
    subEvents: [
      {
        id: "jonah-flees",
        title: "Jonah Flees to Tarshish",
        summary:
          "Jonah boards a ship at Joppa heading to Tarshish — the opposite direction from Nineveh. A great storm arises. The sailors pray to their gods and throw cargo overboard. Jonah is below decks asleep. The captain wakes him. Lots are cast; the lot falls on Jonah. He confesses: 'I fear the LORD, the God of heaven, who made the sea and the dry land' — and tells them to throw him into the sea. They do. The storm stops immediately.",
        scriptures: ["Jonah 1:1–16"],
        keyPeople: [],
      },
      {
        id: "jonah-in-fish",
        title: "Jonah in the Belly of the Fish",
        summary:
          "A great fish swallows Jonah. For three days and three nights he is in its belly. From there he prays a psalm of thanksgiving — not a prayer of repentance but of gratitude, for he has already been delivered from drowning by the fish. 'Salvation belongs to the LORD.' The fish vomits Jonah onto dry land.",
        scriptures: ["Jonah 1:17–2:10"],
        keyPeople: [],
      },
      {
        id: "nineveh-repents",
        title: "Nineveh Repents",
        summary:
          "Jonah walks one day's journey into the city calling: 'Yet forty days, and Nineveh shall be overthrown!' The people believe God. The king of Nineveh removes his robe, puts on sackcloth, sits in ashes, and issues a royal decree calling all people and animals to fast and cry out to God. God sees their turning from evil and relents from the disaster He had planned.",
        scriptures: ["Jonah 3:1–10"],
        keyPeople: [],
      },
      {
        id: "jonah-angry",
        title: "Jonah Is Angry — God Teaches About Mercy",
        summary:
          "Jonah's reaction to Nineveh's salvation is fury: 'I knew you would do this. That is why I fled.' He asks to die. God provides a shade plant, then kills it. Jonah is angry again. God's closing question is one of Scripture's most searching: 'Should I not pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left?' The book ends without Jonah's answer — and invites the reader to answer.",
        scriptures: ["Jonah 4:1–11"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "fall-northern-kingdom", note: "The Nineveh that repented at Jonah's preaching is the same Assyrian empire that destroyed the northern kingdom of Israel within decades — a sobering display of God's sovereign use of mercy and judgment alike." },
      { eventId: "crucifixion-resurrection", note: "Jesus calls His own death and resurrection 'the sign of Jonah' — the supreme fulfillment of Jonah's three days and nights." },
    ],
    keyPeople: [],
    tags: ["jonah", "nineveh", "repentance", "fish", "three days", "mercy", "gentiles", "prophet"],
  },
  {
    id: "elisha-ministry",
    title: "Elisha the Prophet",
    period: "divided-kingdom",
    summary:
      "After Elijah's translation in a chariot of fire, his disciple Elisha receives a double portion of his spirit. Elisha's ministry of roughly 50 years spans the reigns of six kings of Israel and is characterized by a remarkable stream of miracles: purifying poisoned water, multiplying oil for a widow, raising a child from the dead, healing Naaman the Aramean general of leprosy, making iron float, feeding a hundred men with twenty loaves, blinding an Aramean army, and seeing it encircled by the chariots of heaven. He represents God's grace poured out not only on Israel but on Gentiles — and Jesus later uses his ministry as a key example of God's sovereign reach beyond the covenant nation.",
    dateOptions: [
      {
        label: "8th–9th Century BC",
        rangeBC: [850, 800],
        scholars: ["Merrill", "Wiseman"],
        reasoning:
          "Elisha's call follows Elijah's ministry during Ahab's reign (~874–853 BC) and his ministry continues into the reign of Jehoash (~798–782 BC). He ministers for approximately 50 years.",
        scriptureSupport: ["1 Kings 19:19–21", "2 Kings 13:14–21"],
      },
    ],
    scriptures: ["2 Kings 2:1–25", "2 Kings 4:1–37", "2 Kings 5:1–27", "2 Kings 6:8–23", "Luke 4:27"],
    worldContext: [
      {
        title: "Aram-Israel Conflict",
        approximateYear: "~850 BC",
        civilization: "Syria (Aram)",
        notes:
          "The kingdom of Aram (Damascus) was Israel's most persistent enemy in the 9th century BC. Multiple Aramean military campaigns against Israel and Ben-Hadad's sieges of Samaria form the backdrop for several of Elisha's miracles, including the blinding of the Aramean army and his role as an intelligence source for the king of Israel.",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "Elisha's Miracles as Signs of the New Creation",
        description:
          "Elisha's miracles are remarkable in scale and number — feeding multitudes with little, raising the dead, healing the outcast. Jesus performs strikingly similar miracles: multiplying loaves (cf. 2 Kings 4:42–44), raising the dead (cf. 2 Kings 4:32–35), healing lepers (cf. 2 Kings 5). The pattern points forward to the One who would do these things finally and perfectly.",
        oldTestamentRef: "2 Kings 4:42–44",
        newTestamentFulfillment: ["John 6:1–14", "Luke 7:11–15"],
      },
    ],
    subEvents: [
      {
        id: "elijah-mantle-passed",
        title: "Elijah Taken Up — Elisha Receives His Mantle",
        summary:
          "As Elijah and Elisha walk by the Jordan, a chariot of fire separates them and Elijah goes up in a whirlwind. His mantle falls. Elisha takes it, strikes the water, and the Jordan parts again. The company of prophets who watched say: 'The spirit of Elijah rests on Elisha.' His first miracle — dividing the Jordan — announces continuity of divine power.",
        scriptures: ["2 Kings 2:9–15"],
        keyPeople: [],
      },
      {
        id: "widow-oil-multiplied",
        title: "The Widow's Oil Multiplied",
        summary:
          "A widow of a prophet's son is about to lose her two sons to slavery for debt. She has nothing but a jar of oil. Elisha tells her to gather empty vessels from neighbors — as many as she can — and pour from her jar. She pours; the oil keeps flowing until all the vessels are full. She sells the oil, pays the debt, and lives on the rest. Grace abounds beyond what is asked.",
        scriptures: ["2 Kings 4:1–7"],
        keyPeople: [],
      },
      {
        id: "naaman-healed",
        title: "Naaman the Leper Healed",
        summary:
          "Naaman, commander of the Aramean (Syrian) army and a great man — but a leper — hears from a captured Israelite girl that the prophet in Samaria can heal him. He arrives with horses and chariots and a fortune in gifts. Elisha sends a messenger: 'Go wash in the Jordan seven times.' Naaman is furious at the simplicity. His servants persuade him. He dips seven times. His flesh is restored like a little child's. He confesses: 'There is no God in all the earth but in Israel.' Jesus cites this miracle in Luke 4:27 as an example of God's grace to outsiders.",
        scriptures: ["2 Kings 5:1–19", "Luke 4:27"],
        keyPeople: [],
      },
      {
        id: "chariots-of-fire",
        title: "The Chariots of Fire at Dothan",
        summary:
          "The king of Aram surrounds Dothan with horses and chariots to capture Elisha. His servant wakes in terror. Elisha prays: 'LORD, please open his eyes that he may see.' The servant's eyes are opened and he sees the mountains full of horses and chariots of fire around Elisha. Elisha then prays to strike the Aramean army blind, leads them to Samaria, and has them fed and released. The king of Aram raided Israel no more.",
        scriptures: ["2 Kings 6:8–23"],
        keyPeople: [],
      },
    ],
    relatedEvents: [
      { eventId: "elijah-mount-carmel", note: "Elisha is Elijah's disciple and successor — his ministry of miracles and prophecy continues the confrontation with Baal worship that Elijah began at Carmel." },
      { eventId: "incarnation", note: "Jesus performs strikingly similar miracles to Elisha and specifically cites Naaman's healing in his Nazareth sermon to claim continuity with — and superiority to — this prophetic tradition." },
    ],
    keyPeople: ["naaman"],
    tags: ["elisha", "miracles", "naaman", "leprosy", "chariots of fire", "prophet", "widow", "oil", "divided kingdom"],
  },

  // ── JUDGES ─────────────────────────────────────────────────
  {
    id: "othniel-and-ehud",
    title: "The First Judges: Othniel and Ehud",
    period: "judges",
    summary:
      "The book of Judges opens with a tragic downward spiral: Israel disobeys, God hands them over to oppressors, Israel cries out, God raises a deliverer, the land has rest — then the cycle repeats. Othniel, Caleb's nephew, is the first judge — a model deliverer who embodies the Spirit of the LORD. Ehud follows: a left-handed Benjaminite who assassinates the enormously fat Moabite king Eglon with a hidden sword, leads Israel in victory, and gives the land 80 years of peace. These early stories establish the Judges pattern that will end in disaster.",
    dateOptions: [
      {
        label: "Traditional",
        rangeBC: [1380, 1300],
        scholars: ["Block", "Waltke"],
        reasoning:
          "Othniel and Ehud are among the earliest judges, placed in the generation after Joshua's death. Working back from the Conquest (~1406 BC) and the stated years of oppression and rest, the early judges fall in the 14th–13th centuries BC.",
        scriptureSupport: ["Judges 3:8–11", "Judges 3:14–30"],
      },
    ],
    scriptures: ["Judges 2:6–3:6", "Judges 3:7–11", "Judges 3:12–30"],
    worldContext: [
      {
        title: "Iron Age Transition in Canaan",
        approximateYear: "~1350–1200 BC",
        civilization: "Canaan",
        notes:
          "The Late Bronze Age collapse (~1200 BC) brought widespread disruption to Canaanite city-states. During the Judges period, Israel lived among the remnant Canaanite peoples, and the temptation to adopt Canaanite religion — Baal and Asherah worship — was constant and destructive.",
      },
    ],
    typology: [
      {
        category: "Pattern",
        title: "The Judges Cycle — Pattern of Sin, Cry, Deliverance",
        description:
          "The recurring cycle in Judges — apostasy, oppression, repentance, deliverance, rest — is a compressed version of the entire biblical narrative of fall and redemption. Each judge is an imperfect type of the one perfect Deliverer who will break the cycle permanently rather than just delay it.",
        oldTestamentRef: "Judges 2:11–19",
        newTestamentFulfillment: ["Romans 8:2", "Hebrews 7:25"],
      },
    ],
    subEvents: [
      {
        id: "israel-forgets-god",
        title: "Israel Forgets the LORD",
        summary:
          "After Joshua and his generation die, 'there arose another generation after them who did not know the LORD or the work that he had done for Israel.' They abandon the God of their fathers and serve the Baals and Asherahs — the fertility gods of Canaan. The anger of the LORD burns against Israel and he gives them over to plunderers. When they cry out, he raises judges — but when the judge dies, they return to their corrupt ways.",
        scriptures: ["Judges 2:6–23"],
        keyPeople: [],
      },
      {
        id: "othniel-delivers",
        title: "Othniel — The Model Judge",
        summary:
          "Cushan-rishathaim of Mesopotamia oppresses Israel for eight years. Israel cries out. The Spirit of the LORD comes upon Othniel, Caleb's younger brother. He judges Israel, goes to war, and prevails. The land has rest for forty years. Othniel's account is the briefest in Judges — a clean, complete portrait of what a judge is meant to be, against which all subsequent judges are measured and found wanting.",
        scriptures: ["Judges 3:7–11"],
        keyPeople: [],
      },
      {
        id: "ehud-and-eglon",
        title: "Ehud Kills King Eglon",
        summary:
          "Moab oppresses Israel for eighteen years under the very fat King Eglon. God raises Ehud, a left-handed Benjaminite, who crafts a double-edged sword a cubit long and hides it on his right thigh. He brings tribute to Eglon, then tells him he has a secret message from God. The king sends his servants away. Ehud drives the sword into Eglon's belly — and the fat closes over the blade. He escapes, rallies Israel, and 10,000 Moabites die. The land has rest for eighty years.",
        scriptures: ["Judges 3:12–30"],
        keyPeople: [],
      },
    ],
    keyPeople: [],
    relatedEvents: [
      { eventId: "deborah-and-barak", note: "The Judges cycle established with Othniel and Ehud continues through Deborah, Gideon, Jephthah, and Samson — each deliverer more flawed than the last." },
      { eventId: "conquest-of-canaan", note: "The Judges period opens with the generation after Joshua's death — the same incomplete conquest that allowed Canaanite religion to remain is now pulling Israel into apostasy." },
    ],
    tags: ["othniel", "ehud", "judges", "cycle", "deliverer", "spirit", "moab", "eglon"],
  },
  {
    id: "jephthah",
    title: "Jephthah and His Vow",
    period: "judges",
    summary:
      "Jephthah is the son of a prostitute, driven out by his half-brothers and living as an outlaw. When Ammon threatens Israel, the elders of Gilead go to him in desperation — they need a military leader. Jephthah negotiates carefully: if God gives him victory, he will lead them. He first tries diplomacy with Ammon, then fights — and the Spirit of the LORD comes upon him. He defeats twenty cities. But before battle he makes a rash vow: whatever first comes out of his house on his return will belong to the LORD. His daughter comes out dancing. He tears his clothes. She accepts her fate with dignity. Jephthah is in Hebrews 11's hall of faith — a deeply flawed man used by God.",
    dateOptions: [
      {
        label: "Traditional",
        rangeBC: [1100, 1070],
        scholars: ["Block", "Merrill"],
        reasoning:
          "Working from the Conquest and stated years of oppression and rest in Judges, Jephthah judges Israel around 1100–1070 BC, contemporary with the Ammonite threat before Samuel.",
        scriptureSupport: ["Judges 11:26"],
      },
    ],
    scriptures: ["Judges 10:6–12:7", "Hebrews 11:32"],
    worldContext: [
      {
        title: "Ammonite Expansion",
        approximateYear: "~1100 BC",
        civilization: "Ammon",
        notes:
          "The Ammonites, descendants of Lot's son Ben-Ammi (Genesis 19:38), occupied the territory east of Israel across the Jordan. Their aggression in this period represents one of several regional threats that Israel faced during the decentralized Judges era.",
      },
    ],
    typology: [
      {
        category: "Pattern",
        title: "Jephthah — Grace Through the Unlikely",
        description:
          "Jephthah is rejected by his own family, lives as an outcast, and is called back in crisis. His inclusion in Hebrews 11 alongside Abraham and Moses shows that God's hall of faith includes the broken and the rejected. Christ Himself was 'despised and rejected' (Isaiah 53:3), yet through Him deliverance comes.",
        oldTestamentRef: "Judges 11:2–3",
        newTestamentFulfillment: ["Hebrews 11:32", "Isaiah 53:3"],
      },
    ],
    subEvents: [
      {
        id: "jephthah-called-back",
        title: "The Outcast Called Back",
        summary:
          "Jephthah's half-brothers drove him from his inheritance. He fled to Tob and gathered worthless men around him. When Ammon threatens, the elders of Gilead come: 'Come and be our leader.' Jephthah responds with pointed irony: 'Did you not hate me and drive me out of my father's house? Why have you come to me now when you are in distress?' They offer him leadership. He accepts — and first tries diplomacy, sending a detailed legal brief to the king of Ammon. Ammon refuses.",
        scriptures: ["Judges 11:1–28"],
        keyPeople: [],
      },
      {
        id: "jephthah-vow",
        title: "The Rash Vow and Its Cost",
        summary:
          "The Spirit of the LORD comes upon Jephthah and he crosses into Ammon. Before the battle, he makes a vow: 'If you will give the Ammonites into my hand, then whatever comes out from the doors of my house to meet me when I return… shall be the LORD's.' He wins — twenty cities defeated. He returns home. His daughter — his only child — comes out dancing with tambourines. He tears his clothes. She tells him he must do what he vowed. She asks for two months to weep for her virginity in the mountains. Then she returns to her father, who does what he vowed.",
        scriptures: ["Judges 11:29–40"],
        keyPeople: [],
      },
    ],
    keyPeople: [],
    relatedEvents: [
      { eventId: "samson", note: "Jephthah and Samson are the last major judges before Samuel — both flawed figures who nevertheless accomplish God's deliverances, and both whose personal failures contribute to the era's tragedy." },
      { eventId: "samuel-and-saul", note: "Jephthah explicitly appeals to the 300-year history of Israel in the land (Judges 11:26) — a key chronological anchor for the whole period of the Judges." },
    ],
    tags: ["jephthah", "vow", "daughter", "ammon", "judges", "spirit", "faith", "outcast", "hebrews 11"],
  },

  // ── UNITED KINGDOM ─────────────────────────────────────────
  {
    id: "solomons-reign",
    title: "Solomon's Wisdom and the Height of the Kingdom",
    period: "united-kingdom",
    summary:
      "Solomon's reign is the golden age of Israel — the fulfillment of the Davidic promise in its most glorious earthly form. God appears to the young king at Gibeon: 'Ask what I shall give you.' Solomon asks for wisdom to govern God's people. God gives him wisdom beyond all other men — and also riches, honor, and length of days. His fame spreads to every nation. The Queen of Sheba comes to test him with hard questions and leaves overwhelmed: 'The half was not told me.' He writes 3,000 proverbs and 1,005 songs. Israel dwells in safety, each man under his vine and fig tree. But the seeds of disaster are already present: 700 wives, 300 concubines, and foreign altars built for their gods.",
    dateOptions: [
      {
        label: "Traditional",
        rangeBC: [970, 930],
        scholars: ["Kitchen", "Merrill", "Thiele"],
        reasoning:
          "Solomon's 40-year reign is conventionally dated 970–930 BC. Edwin Thiele's synchronization of the Hebrew and Assyrian king lists is the most widely accepted chronology for this period.",
        scriptureSupport: ["1 Kings 11:42", "Acts 13:21"],
      },
    ],
    scriptures: ["1 Kings 3:1–28", "1 Kings 4:29–34", "1 Kings 10:1–13", "1 Kings 11:1–13", "Ecclesiastes 1:1–18"],
    worldContext: [
      {
        title: "Phoenician Trade Networks",
        approximateYear: "~960 BC",
        civilization: "Phoenicia / Mediterranean",
        notes:
          "Solomon's commercial empire leveraged Phoenician maritime expertise. His partnership with Hiram of Tyre gave Israel access to Mediterranean trade routes and the timber and craftsmen needed for the Temple. Fleet trade from Ezion-geber brought gold, silver, ivory, apes, and peacocks from Ophir (likely southeastern Arabia or East Africa).",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "Solomon as Type of the Peaceful King",
        description:
          "Solomon's name means 'peace' (shalom). He builds what David could not because David was a man of war. His reign of peace, wisdom, and universal tribute anticipates the Messianic kingdom where nations will bring their glory to the King of Kings and every man will sit under his vine without fear. Jesus is 'greater than Solomon' (Matthew 12:42) — the true Wisdom of God incarnate.",
        oldTestamentRef: "1 Kings 4:25",
        newTestamentFulfillment: ["Matthew 12:42", "1 Corinthians 1:30", "Revelation 21:24–26"],
      },
    ],
    subEvents: [
      {
        id: "solomons-request",
        title: "Solomon Asks for Wisdom",
        summary:
          "At the high place of Gibeon, God appears to Solomon in a dream: 'Ask what I shall give you.' Solomon acknowledges his own inadequacy — 'I am but a little child; I do not know how to go out or come in' — and asks for 'an understanding mind to govern your people, that I may discern between good and evil.' God is pleased: because he asked for wisdom rather than long life, riches, or the death of his enemies, God gives him all of these besides. The dream-encounter becomes the paradigm for asking God for wisdom (James 1:5).",
        scriptures: ["1 Kings 3:4–15", "James 1:5"],
        keyPeople: [],
      },
      {
        id: "two-mothers-one-child",
        title: "Solomon's Judgment: Two Mothers, One Child",
        summary:
          "Two prostitutes claim the same living infant — the other baby died. Solomon commands the child cut in two. The real mother cries out: 'Give her the living child!' The other says: 'Let it be neither mine nor yours.' Solomon instantly knows the truth. When Israel hears, they fear the king, 'because they perceived that the wisdom of God was in him to do justice.'",
        scriptures: ["1 Kings 3:16–28"],
        keyPeople: [],
      },
      {
        id: "queen-of-sheba",
        title: "The Queen of Sheba",
        summary:
          "The queen of Sheba hears the fame of Solomon and comes to test him with hard questions — arriving with camels loaded with spices, gold, and precious stones. Solomon answers every question she asks; nothing is hidden from him. She is overwhelmed: 'The half was not told me. Your wisdom and prosperity surpass the report I heard.' She gives him 120 talents of gold and blesses the LORD who put Solomon on the throne. Jesus cites her journey as evidence of the eagerness to seek wisdom — 'and behold, something greater than Solomon is here.'",
        scriptures: ["1 Kings 10:1–13", "Matthew 12:42"],
        keyPeople: [],
      },
      {
        id: "solomons-heart-turned",
        title: "Solomon's Heart Is Turned Away",
        summary:
          "Despite unprecedented wisdom, Solomon does what Deuteronomy 17:16–17 explicitly forbade the king to do: he multiplies horses (from Egypt), silver and gold, and wives — 700 princesses and 300 concubines. In his old age his wives turn his heart to their gods: Ashtoreth of the Sidonians, Milcom of the Ammonites, Chemosh of the Moabites. Solomon builds high places for their gods. The LORD is angry. He announces the kingdom will be torn from his son's hand — leaving one tribe for David's sake. The golden age ends in apostasy.",
        scriptures: ["1 Kings 11:1–13", "Deuteronomy 17:16–17"],
        keyPeople: [],
      },
    ],
    keyPeople: ["solomon"],
    relatedEvents: [
      { eventId: "solomons-temple", note: "The Temple built in Solomon's early years stands as the greatest achievement of his reign and the fulfillment of David's deepest desire — before his apostasy in old age." },
      { eventId: "kingdom-divides", note: "Solomon's refusal to listen to the people's complaints about forced labor, combined with his apostasy, directly causes the kingdom's division under his son Rehoboam." },
    ],
    tags: ["solomon", "wisdom", "queen of sheba", "temple", "wealth", "apostasy", "united kingdom", "sheba"],
  },

  // ── DIVIDED KINGDOM ────────────────────────────────────────
  {
    id: "hezekiah",
    title: "Hezekiah: Faith in the Face of Assyria",
    period: "divided-kingdom",
    summary:
      "Hezekiah is the greatest reforming king of Judah — 'He trusted in the LORD, the God of Israel, so that there was none like him among all the kings of Judah after him, nor among those before him.' He destroys the high places, smashes the bronze serpent that Israel had been burning incense to, and reopens the Temple. His supreme test comes when Sennacherib of Assyria invades Judah, captures 46 cities, and sends his field commander to mock God before Jerusalem's walls: 'Do not let your God in whom you trust deceive you.' Hezekiah takes the threatening letter and spreads it before the LORD. The angel of the LORD kills 185,000 Assyrian soldiers in a single night.",
    dateOptions: [
      {
        label: "Traditional",
        rangeBC: [715, 686],
        scholars: ["Thiele", "Kitchen", "Merrill"],
        reasoning:
          "Edwin Thiele's chronology places Hezekiah's sole reign at 715–686 BC. His fourteenth year (when Sennacherib invaded) would be 701 BC — corroborated by Assyrian records including Sennacherib's own annals describing the siege of Jerusalem.",
        scriptureSupport: ["2 Kings 18:1–3", "2 Kings 18:13"],
      },
    ],
    scriptures: ["2 Kings 18:1–20:21", "Isaiah 36:1–39:8", "2 Chronicles 29–32"],
    worldContext: [
      {
        title: "Sennacherib's Annals",
        approximateYear: "701 BC",
        civilization: "Assyrian Empire",
        notes:
          "Sennacherib's own Prism (Taylor Prism, now in the British Museum) confirms his invasion of Judah, his capture of 46 walled cities, and his siege of Jerusalem — but notably does not claim to have captured Jerusalem. He boasts of shutting Hezekiah up 'like a bird in a cage.' The abrupt withdrawal matches the biblical account of supernatural disaster.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "Hezekiah's Prayer — Intercession That Moves God",
        description:
          "Hezekiah spreads the threatening letter before the LORD and prays: 'O LORD, our God, save us, please, so that all the kingdoms of the earth may know that you alone are the LORD.' God responds through Isaiah immediately: 'I will defend this city to save it, for my own sake and for the sake of my servant David.' His prayer is the model of faith-filled intercession — bringing the specific threat to a sovereign God.",
        oldTestamentRef: "2 Kings 19:14–19",
        newTestamentFulfillment: ["Philippians 4:6", "Matthew 7:7–8"],
      },
    ],
    subEvents: [
      {
        id: "hezekiah-reforms",
        title: "Hezekiah's Religious Reforms",
        summary:
          "In the first month of his reign, Hezekiah opens the Temple doors that Ahaz had shut, commissions the Levites to purify it, and restores the Passover — celebrated for the first time in generations, with a second week added because of the enthusiasm. He destroys the high places, smashes the Asherah poles, and breaks in pieces the bronze serpent ('Nehushtan') that Israel had been worshiping since Moses' day. He trusts the LORD above every predecessor or successor.",
        scriptures: ["2 Kings 18:1–8", "2 Chronicles 29:1–31:21"],
        keyPeople: [],
      },
      {
        id: "sennacherib-threatens",
        title: "Sennacherib's Threat",
        summary:
          "Sennacherib sends his field commander (the Rabshakeh) with a large army to Jerusalem. The Rabshakeh stands at the conduit of the upper pool and shouts in Hebrew so all the people on the wall can hear: 'Do not let Hezekiah deceive you… Has any god of any nation ever delivered his land from the hand of the king of Assyria?' Hezekiah's officials beg him to speak Aramaic. The Rabshakeh refuses — and says even louder that Hezekiah is leading them to starvation. The people are silent.",
        scriptures: ["2 Kings 18:17–37", "Isaiah 36:1–22"],
        keyPeople: [],
      },
      {
        id: "hezekiah-spreads-letter",
        title: "Hezekiah Spreads the Letter Before the LORD",
        summary:
          "Sennacherib sends a letter mocking God. Hezekiah takes it to the Temple and spreads it before the LORD: 'O LORD God of Israel, enthroned above the cherubim, you are the God, you alone… incline your ear and hear. Open your eyes and see. And now, O LORD our God, save us from his hand, that all the kingdoms of the earth may know that you alone are the LORD.' Isaiah brings God's answer: 'By the way that he came, by the same he shall return.' That night the angel of the LORD strikes 185,000 Assyrians dead. Sennacherib withdraws and is later killed by his own sons.",
        scriptures: ["2 Kings 19:14–37", "Isaiah 37:14–36"],
        keyPeople: [],
      },
      {
        id: "hezekiahs-illness",
        title: "Hezekiah's Illness and Extended Life",
        summary:
          "Hezekiah falls ill and is told by Isaiah to set his house in order — he will die. He turns his face to the wall and prays, weeping bitterly. Before Isaiah leaves the city, God sends him back: 'I have heard your prayer, I have seen your tears. Behold, I will heal you… I will add fifteen years to your life.' The sign is the sundial moving backward ten steps. Hezekiah's psalm of thanksgiving is one of the most honest expressions of clinging to life in Scripture.",
        scriptures: ["2 Kings 20:1–11", "Isaiah 38:1–22"],
        keyPeople: [],
      },
    ],
    keyPeople: ["hezekiah"],
    relatedEvents: [
      { eventId: "isaiah-suffering-servant", note: "Hezekiah was Isaiah's king — many of Isaiah's greatest prophecies were given during and around Hezekiah's reign, including the Servant Songs and Immanuel promise." },
      { eventId: "fall-northern-kingdom", note: "Sennacherib's invasion of Judah occurs just 21 years after Assyria destroyed the northern kingdom — Jerusalem's deliverance showed that trust in God, not tribute, is the nation's only security." },
    ],
    tags: ["hezekiah", "sennacherib", "assyria", "prayer", "reform", "angel", "faith", "judah"],
  },
  {
    id: "jeremiah",
    title: "Jeremiah: The Weeping Prophet",
    period: "divided-kingdom",
    summary:
      "God calls Jeremiah before his birth: 'Before I formed you in the womb I knew you, and before you were born I consecrated you; I appointed you a prophet to the nations.' Jeremiah ministers for 40 years — from the reign of Josiah through the fall of Jerusalem — and is rejected, beaten, imprisoned, and thrown into a cistern for faithfully proclaiming what no one wants to hear: Babylon is coming, and resistance is futile. He weeps over his people; he calls Jerusalem to repentance; he alone announces the New Covenant. He watches the city he loved burn and writes Lamentations in the ruins.",
    dateOptions: [
      {
        label: "Traditional",
        rangeBC: [627, 585],
        scholars: ["Longman", "Kidner", "Thompson"],
        reasoning:
          "Jeremiah's call is dated to the thirteenth year of Josiah (627 BC). His ministry continues through Jehoiakim, Jehoiachin, and Zedekiah to after Jerusalem's fall in 586 BC — approximately 40 years of prophetic ministry.",
        scriptureSupport: ["Jeremiah 1:2–3"],
      },
    ],
    scriptures: ["Jeremiah 1:1–10", "Jeremiah 31:31–34", "Jeremiah 20:7–18", "Lamentations 1:1–22", "Hebrews 8:6–13"],
    worldContext: [
      {
        title: "Neo-Babylonian Rise",
        approximateYear: "~612–586 BC",
        civilization: "Babylonian Empire",
        notes:
          "Babylon under Nabopolassar and Nebuchadnezzar II defeated Assyria (Nineveh fell 612 BC), then Egypt at Carchemish (605 BC), and then systematically subjugated the Levant. Jeremiah correctly identified Babylon as the instrument of God's judgment decades before Jerusalem fell.",
      },
    ],
    typology: [
      {
        category: "Person",
        title: "Jeremiah as Suffering Prophet",
        description:
          "Jeremiah's life is the closest parallel to Christ's passion in the Old Testament. He is innocent, obedient, and rejected by his own people; falsely accused and wrongly condemned; weeps over the city that refuses his message; and intercedes for those who hate him. His Confessions are the most personal anticipation of Gethsemane in Scripture.",
        oldTestamentRef: "Jeremiah 11:18–20",
        newTestamentFulfillment: ["Matthew 16:14", "Luke 19:41–44"],
      },
      {
        category: "Institution",
        title: "The New Covenant Promise",
        description:
          "Jeremiah 31:31–34 is the only explicit 'New Covenant' announcement in the entire Old Testament. It promises a covenant written on the heart, not stone; full forgiveness; and direct knowledge of God. Hebrews quotes this passage at length as the theological centerpiece of Christ's high priesthood.",
        oldTestamentRef: "Jeremiah 31:31–34",
        newTestamentFulfillment: ["Hebrews 8:6–13", "Luke 22:20", "2 Corinthians 3:3"],
      },
    ],
    subEvents: [
      {
        id: "jeremiahs-call",
        title: "The Call of Jeremiah",
        summary:
          "God tells Jeremiah he was consecrated as a prophet before birth. Jeremiah protests: 'Behold, I do not know how to speak, for I am only a youth.' God touches his mouth — 'I have put my words in your mouth' — and gives him a commission that sounds more like a demolition order: to pluck up, break down, destroy, overthrow, build, and plant. He appoints him over nations and kingdoms.",
        scriptures: ["Jeremiah 1:1–10"],
        keyPeople: [],
      },
      {
        id: "jeremiah-confessions",
        title: "The Confessions of Jeremiah",
        summary:
          "Jeremiah's 'Confessions' are a series of raw, anguished prayers where he wrestles with God over the cost of his call: 'Cursed be the day on which I was born!' He has been beaten, put in stocks, mocked, and rejected. He accuses God of deceiving him. Yet he cannot stop: 'If I say I will not mention him or speak any more in his name, there is in my heart as it were a burning fire shut up in my bones, and I am weary with holding it in, and I cannot.' These prayers are the most honest wrestling with prophetic calling in Scripture.",
        scriptures: ["Jeremiah 11:18–20", "Jeremiah 15:15–21", "Jeremiah 20:7–18"],
        keyPeople: [],
      },
      {
        id: "new-covenant-announced",
        title: "The New Covenant Announced",
        summary:
          "In the midst of impending judgment, Jeremiah announces the most radical promise in the Old Testament: 'Behold, the days are coming, declares the LORD, when I will make a new covenant with the house of Israel.' Unlike the Mosaic covenant, this one will not be broken — God will write His law on their hearts, be their God directly, and forgive their iniquity completely and finally. The author of Hebrews quotes this passage in full to show that Christ has made the old covenant obsolete.",
        scriptures: ["Jeremiah 31:31–34", "Hebrews 8:6–13"],
        keyPeople: [],
      },
      {
        id: "jeremiah-in-cistern",
        title: "Jeremiah Thrown in the Cistern",
        summary:
          "When Jeremiah preaches that Babylon will capture Jerusalem and that resistance is futile, the officials throw him into an empty cistern — he sinks into the mud. An Ethiopian eunuch named Ebed-melech pleads with the king to rescue him. The king relents. Ebed-melech pulls Jeremiah out with ropes and rags. The story is a parable in miniature of the whole: rejected by his own, rescued by a foreigner, continuing to speak truth regardless of the cost.",
        scriptures: ["Jeremiah 38:1–13"],
        keyPeople: [],
      },
    ],
    keyPeople: ["jeremiah"],
    relatedEvents: [
      { eventId: "fall-of-jerusalem", note: "Jeremiah witnesses the fall he had prophesied for 40 years — and writes Lamentations in the ruins, weeping over the very city whose destruction he had been unable to prevent." },
      { eventId: "crucifixion-resurrection", note: "Some of the crowd thought Jesus was Jeremiah (Matthew 16:14) — they recognized in His weeping, suffering, and rejection the profile of the great weeping prophet." },
    ],
    tags: ["jeremiah", "weeping prophet", "new covenant", "lamentations", "suffering", "babylon", "call", "prophecy"],
  },

  // ── EXILE ──────────────────────────────────────────────────
  {
    id: "fiery-furnace",
    title: "The Fiery Furnace",
    period: "exile",
    summary:
      "Nebuchadnezzar builds a golden image ninety feet high and commands every official in Babylon to bow before it when the music plays. Three young Jewish men — Shadrach, Meshach, and Abednego — refuse. Informed by Chaldean officials, Nebuchadnezzar summons them in fury. Their answer is one of Scripture's most magnificent statements of faith: 'Our God whom we serve is able to deliver us from the burning fiery furnace… but if not, be it known to you, O king, that we will not serve your gods.' He heats the furnace seven times hotter and throws them in. The soldiers who throw them in are killed by the heat. But Nebuchadnezzar looks into the furnace and sees four men walking, unbound — 'and the appearance of the fourth is like a son of the gods.'",
    dateOptions: [
      {
        label: "Traditional",
        yearBC: 587,
        scholars: ["Baldwin", "Longman"],
        reasoning:
          "The fiery furnace account occurs during Nebuchadnezzar's reign (605–562 BC). If the golden image celebrated a military victory, it may relate to the defeat of Egypt at Carchemish or the fall of Jerusalem. The traditional placement is mid-to-late in Nebuchadnezzar's reign.",
        scriptureSupport: ["Daniel 3:1"],
      },
    ],
    scriptures: ["Daniel 3:1–30"],
    worldContext: [
      {
        title: "Babylonian Imperial Cult",
        approximateYear: "~580 BC",
        civilization: "Babylonian Empire",
        notes:
          "Royal images and the requirement to bow before them were features of Babylonian imperial religion. Nebuchadnezzar's golden image may have been a colossal statue depicting him as divine king. The forced worship was both a religious and political act — refusal was high treason.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "The Fourth Man in the Fire",
        description:
          "The mysterious 'fourth man' in the furnace whose appearance is 'like a son of the gods' is one of the most striking theophanies (divine appearances) in the Old Testament. Many theologians identify this as a Christophany — a pre-incarnate appearance of Christ who enters into the suffering of His people, ensuring that the fire has no power over them.",
        oldTestamentRef: "Daniel 3:25",
        newTestamentFulfillment: ["Isaiah 43:2", "Hebrews 13:5"],
      },
      {
        category: "Event",
        title: "But If Not — Faith Beyond Deliverance",
        description:
          "The 'but if not' of Daniel 3:18 is one of Scripture's greatest statements of unconditional faith: they trust God to deliver them — but if He does not, they still will not bow. This is faith that honors God regardless of outcome, anticipating the faith of Gethsemane: 'Not as I will, but as you will.'",
        oldTestamentRef: "Daniel 3:17–18",
        newTestamentFulfillment: ["Matthew 26:39", "Romans 8:38–39"],
      },
    ],
    subEvents: [
      {
        id: "golden-image-command",
        title: "The Golden Image and the Music",
        summary:
          "Nebuchadnezzar sets up a golden image 90 feet high and 9 feet wide in the plain of Dura. All provincial officials assemble for the dedication. A herald proclaims: when you hear the horn, flute, lyre, trigon, harp, bagpipe, and every kind of music, you shall fall down and worship the golden image. Whoever does not shall be cast into a burning fiery furnace. The music sounds. Every nation and language falls down — except three young Hebrew men.",
        scriptures: ["Daniel 3:1–12"],
        keyPeople: [],
      },
      {
        id: "but-if-not",
        title: "'But If Not' — The Answer Before the King",
        summary:
          "Nebuchadnezzar gives them one last chance, taunting: 'Who is the god who will deliver you out of my hands?' The three answer without hesitation or qualification: 'O Nebuchadnezzar, we have no need to answer you in this matter. Our God whom we serve is able to deliver us from the burning fiery furnace, and he will deliver us out of your hand, O king. But if not, be it known to you, O king, that we will not serve your gods or worship the golden image.' Three words — 'but if not' — that have sustained martyrs and saints ever since.",
        scriptures: ["Daniel 3:13–18"],
        keyPeople: [],
      },
      {
        id: "fourth-man",
        title: "The Fourth Man in the Fire",
        summary:
          "The king heats the furnace seven times hotter than usual. The men are bound fully clothed and thrown in. The soldiers who throw them in are killed by the flame. Nebuchadnezzar rises in astonishment: 'Did we not cast three men bound into the fire?… But I see four men unbound, walking in the midst of the fire, and they are not hurt; and the appearance of the fourth is like a son of the gods.' He calls them out. Not a hair is singed, not a garment scorched, not even the smell of smoke. He blesses their God and decrees that no one may speak against the God of Shadrach, Meshach, and Abednego.",
        scriptures: ["Daniel 3:19–30"],
        keyPeople: [],
      },
    ],
    keyPeople: [],
    relatedEvents: [
      { eventId: "daniel-in-babylon", note: "The fiery furnace (Daniel 3) and the lions' den (Daniel 6) are companion stories of Jewish faithfulness under imperial pressure — together they testify that the God of Israel rules over all empires." },
      { eventId: "return-of-christ", note: "The fourth man who walks with God's servants in the fire anticipates the One who promised: 'I will never leave you nor forsake you' — present with His people in every trial." },
    ],
    tags: ["shadrach", "meshach", "abednego", "fiery furnace", "nebuchadnezzar", "faith", "fourth man", "exile", "babylon"],
  },

  // ── RETURN ─────────────────────────────────────────────────
  {
    id: "ezra-and-the-law",
    title: "Ezra and the Reading of the Law",
    period: "return",
    summary:
      "Ezra is a scribe skilled in the Law of Moses, sent by Artaxerxes to teach the Law in Jerusalem. He arrives to find that the returned exiles — including priests and Levites — have intermarried with the surrounding peoples, compromising the covenant community. He tears his garments and prays in anguish. The community confesses together and separates from the foreign influences. Then, in the Water Gate square, Ezra opens the Book of the Law before the entire assembly — men, women, and all who can understand — and reads from morning until midday. The Levites explain the meaning as he reads. The people weep. Ezra says: 'Do not be grieved, for the joy of the LORD is your strength.'",
    dateOptions: [
      {
        label: "457 BC (Artaxerxes I)",
        yearBC: 457,
        scholars: ["Kidner", "Williamson", "Merrill"],
        reasoning:
          "If Artaxerxes I's seventh year (Ezra 7:7–8) is 457 BC, Ezra arrives in Jerusalem that year. The reading of the Law (Nehemiah 8) comes after Nehemiah's wall-building, placed around 444 BC.",
        scriptureSupport: ["Ezra 7:6–9", "Nehemiah 8:1–3"],
      },
    ],
    scriptures: ["Ezra 7:1–10", "Ezra 9:1–15", "Nehemiah 8:1–18"],
    worldContext: [
      {
        title: "Persian Imperial Policy on Local Law",
        approximateYear: "~457 BC",
        civilization: "Persian Empire",
        notes:
          "The Persian Empire practiced a policy of supporting local religious traditions as a means of maintaining stability in provinces. Artaxerxes' authorization of Ezra to teach the Jewish law and appoint judges was consistent with Persian practice of using local leaders to enforce local customs — providentially serving the restoration of Torah-centered community.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "The Public Reading of the Law — Covenant Renewal",
        description:
          "Ezra's reading of the Law at the Water Gate recapitulates Moses' covenant renewal at Sinai and Josiah's reading of the Book of the Covenant (2 Kings 23). Each covenant renewal is a moment of national hearing, weeping, and recommitment — pointing forward to the final covenant renewal in the new creation where God's law is fully written on every heart.",
        oldTestamentRef: "Nehemiah 8:1–8",
        newTestamentFulfillment: ["Romans 10:17", "Revelation 22:17"],
      },
    ],
    subEvents: [
      {
        id: "ezra-arrives",
        title: "Ezra Arrives in Jerusalem",
        summary:
          "Ezra, 'a scribe skilled in the Law of Moses,' receives a letter from Artaxerxes authorizing him to return with any willing Jews, carry silver and gold for the Temple, appoint judges, and teach the Law. He fasts and prays at the Ahava Canal before departing, ashamed to ask the king for a military escort when he had boasted of God's protection. They arrive in Jerusalem after a four-month journey. The hand of the LORD was on Ezra.",
        scriptures: ["Ezra 7:1–10:44"],
        keyPeople: [],
      },
      {
        id: "mixed-marriages-crisis",
        title: "Ezra's Prayer over Mixed Marriages",
        summary:
          "Officials inform Ezra that priests, Levites, and laypeople have intermarried with surrounding peoples and their abominations. Ezra tears his garment and cloak, pulls hair from his head and beard, and sits in shock until the evening offering. Then he falls on his knees with his hands spread toward heaven and prays one of the most anguished confessional prayers in Scripture: 'O my God, I am ashamed and blush to lift my face to you, my God.' The people weep bitterly with him. They commit to covenant faithfulness.",
        scriptures: ["Ezra 9:1–10:17"],
        keyPeople: [],
      },
      {
        id: "law-read-publicly",
        title: "The Great Public Reading of the Torah",
        summary:
          "All the people gather at the Water Gate and ask Ezra to bring the Book of the Law. He reads from dawn to midday. The people stand. The Levites move through the crowd explaining the meaning of what is being read. The people weep when they hear the Law — but Nehemiah, Ezra, and the Levites tell them: 'This day is holy to the LORD your God; do not mourn or weep… Go your way. Eat the fat and drink sweet wine… Do not be grieved, for the joy of the LORD is your strength.'",
        scriptures: ["Nehemiah 8:1–18"],
        keyPeople: [],
      },
    ],
    keyPeople: ["ezra"],
    relatedEvents: [
      { eventId: "nehemiah-walls", note: "Ezra and Nehemiah are contemporaries — Nehemiah rebuilds the city walls while Ezra rebuilds the people's covenant relationship with God through the Law." },
      { eventId: "decree-of-cyrus", note: "The restoration Cyrus began with a decree is completed in Ezra's generation when the Torah becomes the living constitution of the returned community." },
    ],
    tags: ["ezra", "law", "torah", "reading", "covenant renewal", "water gate", "tears", "joy", "return from exile"],
  },

  // ── NEW TESTAMENT ───────────────────────────────────────────
  {
    id: "triumphal-entry",
    title: "The Triumphal Entry",
    period: "new-testament",
    summary:
      "Five days before His crucifixion, Jesus rides into Jerusalem on a donkey's colt — an animal on which no one has ever sat. The disciples spread their cloaks; others cut palm branches and carpet the road. The crowd shouts: 'Hosanna! Blessed is he who comes in the name of the Lord! Blessed is the coming kingdom of our father David!' The whole city is stirred. The Pharisees say: 'Look, the world has gone after him.' Zechariah had written 500 years earlier: 'Behold, your king is coming to you, humble, and mounted on a donkey.' Jesus weeps over Jerusalem from the Mount of Olives — 'Would that you, even you, had known on this day the things that make for peace! But now they are hidden from your eyes.'",
    dateOptions: [
      {
        label: "Nisan 10, AD 30",
        yearAD: 30,
        scholars: ["Hoehner", "Carson", "France"],
        reasoning:
          "If the crucifixion occurred on Friday, 3 April AD 30, the Triumphal Entry on the preceding Sunday would be 29 March AD 30 — Nisan 10, the day on which Passover lambs were selected (Exodus 12:3). The typological significance of this date is widely noted.",
        scriptureSupport: ["John 12:1", "John 12:12–15"],
      },
    ],
    scriptures: ["Matthew 21:1–17", "Luke 19:28–44", "John 12:12–19", "Zechariah 9:9"],
    worldContext: [
      {
        title: "Roman Triumph and Messianic Expectation",
        approximateYear: "AD 30",
        civilization: "Roman Judea",
        notes:
          "Roman generals entered conquered cities on horses in military triumph. Jesus' deliberate choice of a donkey was a political statement — evoking Zechariah's humble king of peace rather than a military conqueror. The crowd's Hosanna cry ('Save us now') expressed Messianic expectation, though most expected political liberation, not crucifixion.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "Zechariah 9:9 Fulfilled",
        description:
          "Zechariah's prophecy of the humble king on a donkey was written ~520 BC. Jesus deliberately arranges every detail of the entry to fulfill it publicly — sending for the specific animal, riding into Jerusalem, accepting the Messianic acclamation. The crowd shouts from Psalm 118 — the great Passover Hallel psalm. The Lamb enters the city on Nisan 10.",
        oldTestamentRef: "Zechariah 9:9",
        newTestamentFulfillment: ["Matthew 21:4–5", "John 12:15–16"],
      },
    ],
    subEvents: [
      {
        id: "colt-prepared",
        title: "The Colt Prepared",
        summary:
          "Jesus sends two disciples ahead: 'You will find a colt tied, on which no one has ever sat. Untie it and bring it.' When asked by the owners, they say 'The Lord has need of it,' and the owners let it go. Matthew notes this happened to fulfill Zechariah: 'Say to the daughter of Zion, Behold, your king is coming to you, humble, and mounted on a donkey, on a colt, the foal of a beast of burden.'",
        scriptures: ["Matthew 21:1–7", "Zechariah 9:9"],
        keyPeople: [],
      },
      {
        id: "the-procession",
        title: "The Procession and the Crowd's Hosanna",
        summary:
          "The disciples put their cloaks on the colt and Jesus sits on it. The crowd spreads cloaks and palm branches on the road, shouting: 'Hosanna to the Son of David! Blessed is he who comes in the name of the Lord! Hosanna in the highest!' The Pharisees tell Jesus to rebuke His disciples. He answers: 'I tell you, if these were silent, the very stones would cry out.' The whole city is stirred: 'Who is this?' The crowd: 'This is the prophet Jesus, from Nazareth of Galilee.'",
        scriptures: ["Matthew 21:8–11", "Luke 19:37–40"],
        keyPeople: [],
      },
      {
        id: "jesus-weeps-over-jerusalem",
        title: "Jesus Weeps over Jerusalem",
        summary:
          "As Jesus approaches and sees the city, He weeps over it: 'Would that you, even you, had known on this day the things that make for peace! But now they are hidden from your eyes. For the days will come upon you when your enemies will set up a barricade around you and surround you and hem you in on every side and tear you down to the ground, you and your children within you.' This is the fulfillment in 70 AD — Jesus sees it 40 years in advance, and weeps.",
        scriptures: ["Luke 19:41–44"],
        keyPeople: [],
      },
    ],
    keyPeople: [],
    relatedEvents: [
      { eventId: "last-supper-and-gethsemane", note: "The Triumphal Entry begins the Passion Week — just five days separate the crowd's Hosannas from their cries of 'Crucify him.'" },
      { eventId: "destruction-jerusalem-70ad", note: "Jesus weeps over Jerusalem during the Triumphal Entry and predicts its destruction — which came exactly as He described when Rome besieged the city in AD 70." },
    ],
    tags: ["triumphal entry", "palm sunday", "hosanna", "donkey", "zechariah", "jerusalem", "passion week", "messiah"],
  },
  {
    id: "pauls-conversion",
    title: "The Conversion of Paul",
    period: "new-testament",
    summary:
      "Saul of Tarsus is the most determined persecutor of the early church — approving Stephen's stoning, entering house after house to drag men and women to prison, breathing threats and murder against the disciples of the Lord. He travels to Damascus to arrest Christians there. On the road, a blinding light knocks him to the ground and a voice says: 'Saul, Saul, why are you persecuting me?' He asks who it is. 'I am Jesus, whom you are persecuting.' He arrives in Damascus blind, fasting for three days. God sends Ananias — who is terrified — to lay hands on him. His sight is restored. He is baptized. The most determined enemy of the gospel becomes its most relentless apostle.",
    dateOptions: [
      {
        label: "Traditional",
        rangeAD: [33, 35],
        scholars: ["Riesner", "Carson", "Schnabel"],
        reasoning:
          "Paul's conversion is typically placed 2–5 years after the crucifixion (AD 30 or 33). His own account in Galatians 1:17–18 says he spent three years in Arabia before his first Jerusalem visit, suggesting conversion around AD 33–35.",
        scriptureSupport: ["Acts 9:1–19", "Galatians 1:13–17"],
      },
    ],
    scriptures: ["Acts 9:1–22", "Acts 22:3–16", "Acts 26:9–18", "Galatians 1:11–17", "1 Timothy 1:12–16"],
    worldContext: [
      {
        title: "Pharisaism and Zeal for the Law",
        approximateYear: "AD 33",
        civilization: "Roman Judea / Syria",
        notes:
          "Saul was a Pharisee of Pharisees, trained under Gamaliel in Jerusalem, and possessed a burning zeal for ancestral traditions (Galatians 1:14). His persecution of Christians was theologically motivated — he considered the claim that a crucified man was Messiah to be dangerous blasphemy that threatened the entire Jewish covenant community.",
      },
    ],
    typology: [
      {
        category: "Event",
        title: "Paul's Conversion as Pattern of Grace to the Chief of Sinners",
        description:
          "Paul calls himself 'the foremost of sinners' (1 Timothy 1:15–16) and says his conversion was public proof that Christ can save anyone — a display case of grace. His transformation from persecutor to apostle is the New Testament's most dramatic evidence that the gospel is the power of God to salvation for everyone who believes.",
        oldTestamentRef: "Isaiah 49:1",
        newTestamentFulfillment: ["1 Timothy 1:15–16", "Galatians 1:15–16"],
      },
    ],
    subEvents: [
      {
        id: "paul-persecutes-church",
        title: "Saul Ravages the Church",
        summary:
          "After Stephen's martyrdom, Saul leads a systematic persecution of the Jerusalem church — 'ravaging it' by entering house after house, dragging off men and women, committing them to prison. The church scatters to Judea and Samaria. Saul then receives letters from the high priest authorizing him to arrest Christians in Damascus. He sets off — 'breathing threats and murder.'",
        scriptures: ["Acts 8:1–3", "Acts 9:1–2"],
        keyPeople: [],
      },
      {
        id: "the-damascus-road",
        title: "The Damascus Road",
        summary:
          "Approaching Damascus, a light from heaven suddenly flashes. Saul falls to the ground. A voice: 'Saul, Saul, why are you persecuting me?' He asks: 'Who are you, Lord?' The answer: 'I am Jesus, whom you are persecuting. But rise and enter the city, and you will be told what you are to do.' The men with Saul stand speechless — hearing the sound but seeing no one. Saul rises — blind. He is led by hand into Damascus, where he fasts and prays for three days.",
        scriptures: ["Acts 9:3–9"],
        keyPeople: [],
      },
      {
        id: "ananias-and-paul",
        title: "Ananias Sent to Saul",
        summary:
          "God tells Ananias in a vision to go to Saul. Ananias protests — he has heard about this man's destruction in Jerusalem. God answers: 'Go, for he is a chosen instrument of mine to carry my name before the Gentiles and kings and the children of Israel. For I will show him how much he must suffer for the sake of my name.' Ananias goes, lays hands on Saul, and says: 'Brother Saul, the Lord Jesus who appeared to you on the road has sent me so that you may regain your sight and be filled with the Holy Spirit.' Something like scales falls from Saul's eyes. He is baptized.",
        scriptures: ["Acts 9:10–19"],
        keyPeople: [],
      },
    ],
    keyPeople: ["paul"],
    relatedEvents: [
      { eventId: "pentecost", note: "Paul's conversion is the second great turning point of Acts — the first is Pentecost. Together they represent the Spirit's work in the Jewish heartland (Pentecost) and in its most determined opponent (Paul)." },
      { eventId: "pauls-missionary-journeys", note: "Paul's conversion is the necessary prerequisite for all three missionary journeys — the man who formerly destroyed the church becomes the one who plants it across the Roman Empire." },
    ],
    tags: ["paul", "saul", "conversion", "damascus", "ananias", "blindness", "persecutor", "apostle", "grace"],
  },
  {
    id: "pauls-missionary-journeys",
    title: "Paul's Missionary Journeys",
    period: "new-testament",
    summary:
      "Over roughly 15 years, Paul undertakes three missionary journeys and a final voyage to Rome, planting churches across the Roman Empire from Antioch to Spain's doorstep. Commissioned by the Holy Spirit through the Antioch church, he and Barnabas sail to Cyprus and Asia Minor on the first journey. The second journey takes him through Greece — Philippi, Thessalonica, Athens, Corinth. The third returns to strengthen the Asian churches. In every city the pattern repeats: synagogue, proclamation, opposition, conversions, church. He writes 13 letters while traveling and imprisoned. His final journey — as a prisoner — takes him to Rome, where he preaches the Kingdom of God under house arrest.",
    dateOptions: [
      {
        label: "Traditional",
        rangeAD: [47, 62],
        scholars: ["Riesner", "Schnabel", "Hemer"],
        reasoning:
          "Paul's three missionary journeys are commonly dated: First ~AD 47–49, Second ~AD 49–52, Third ~AD 53–57. His imprisonment in Caesarea (~AD 57–59) and Rome (~AD 60–62) are anchored by the proconsulship of Gallio (Acts 18:12), securely dated to AD 51–52.",
        scriptureSupport: ["Acts 13:1–3", "Acts 18:12"],
      },
    ],
    scriptures: ["Acts 13:1–14:28", "Acts 15:36–18:22", "Acts 18:23–21:16", "Romans 15:19"],
    worldContext: [
      {
        title: "Roman Road Network",
        approximateYear: "AD 47–62",
        civilization: "Roman Empire",
        notes:
          "The Roman road system (Via Egnatia, Via Sebaste, etc.) and Mediterranean sea lanes made Paul's journeys physically possible. Roman citizenship (which Paul held) provided legal protections and the ability to appeal to Caesar. The Pax Romana allowed travel across an enormous geographic area with a common language (Greek) for communication.",
      },
    ],
    typology: [
      {
        category: "Fulfillment",
        title: "Acts 1:8 Fulfilled Through Paul",
        description:
          "Jesus' commission — 'you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth' — is structurally fulfilled in Acts. Jerusalem (Acts 1–7), Judea/Samaria (Acts 8–12), and the ends of the earth (Acts 13–28) are the three movements, with Paul as the primary instrument of the third. The gospel reaches Rome — the center of the known world.",
        oldTestamentRef: "Isaiah 49:6",
        newTestamentFulfillment: ["Acts 1:8", "Romans 15:19–20"],
      },
    ],
    subEvents: [
      {
        id: "first-journey",
        title: "First Journey — Cyprus and Asia Minor",
        summary:
          "The Holy Spirit says through prophets at Antioch: 'Set apart for me Barnabas and Saul for the work to which I have called them.' They sail to Cyprus, then to Asia Minor — Pisidian Antioch, Iconium, Lystra, Derbe. At Pisidian Antioch, when Jews reject the gospel, Paul makes the programmatic announcement: 'We are turning to the Gentiles.' At Lystra he is stoned and left for dead — then gets up and goes back into the city. They retrace their steps, appointing elders in every church.",
        scriptures: ["Acts 13:1–14:28"],
        keyPeople: [],
      },
      {
        id: "second-journey-greece",
        title: "Second Journey — Macedonia and Greece",
        summary:
          "Paul receives a vision: a man from Macedonia pleading 'Come over and help us.' He crosses to Europe. At Philippi, Lydia (a dealer in purple cloth) is the first European convert; Paul and Silas are beaten and imprisoned, worship God at midnight, an earthquake opens the jail, and the jailer believes. At Athens Paul preaches on Mars Hill — the 'Unknown God' sermon. At Corinth he works as a tentmaker with Aquila and Priscilla and stays 18 months.",
        scriptures: ["Acts 15:36–18:22", "Acts 16:9–40", "Acts 17:16–34"],
        keyPeople: [],
      },
      {
        id: "third-journey-ephesus",
        title: "Third Journey — Ephesus and Return",
        summary:
          "Paul spends three years in Ephesus — the longest stay anywhere in his ministry. The gospel spreads through the whole province of Asia. Craftsmen who make silver shrines of Artemis riot because their business is threatened: 'Great is Artemis of the Ephesians!' Paul plans to go to Rome via Jerusalem. In Troas he raises Eutychus from the dead after the young man falls asleep and falls from a third-floor window. His farewell to the Ephesian elders at Miletus is the most tender pastoral speech in Acts.",
        scriptures: ["Acts 18:23–21:16", "Acts 19:23–41"],
        keyPeople: [],
      },
      {
        id: "paul-in-rome",
        title: "Paul Arrives in Rome",
        summary:
          "After two years imprisoned in Caesarea, Paul appeals to Caesar. The voyage to Rome involves a catastrophic storm, shipwreck on Malta, and a viper attack that leaves Paul unharmed. He arrives in Rome, where believers come out to meet him on the Appian Way and he weeps with relief. For two years he lives in a rented house under guard, welcoming all who come — 'proclaiming the kingdom of God and teaching about the Lord Jesus Christ with all boldness and without hindrance.' The book of Acts ends on that note.",
        scriptures: ["Acts 27:1–28:31"],
        keyPeople: [],
      },
    ],
    keyPeople: ["paul", "barnabas"],
    relatedEvents: [
      { eventId: "pauls-conversion", note: "Every missionary journey flows from the Damascus Road encounter — Paul's entire ministry is the working out of the commission given there: 'to carry my name before the Gentiles and kings and the children of Israel.'" },
      { eventId: "pentecost", note: "Paul's journeys are the international fulfillment of what Pentecost began in Jerusalem — the Spirit-empowered proclamation spreading to every nation under heaven." },
    ],
    tags: ["paul", "missionary", "journeys", "barnabas", "gentiles", "church planting", "rome", "acts", "gospel"],
  },
]
