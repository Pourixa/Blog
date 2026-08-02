/**
 * Prisma seed script — populates the `post` table with 10 guitar-related
 * blog posts.
 *
 * Usage: npx prisma db seed
 * (see chat for the package.json / prisma.config.ts wiring — it differs
 * depending on your Prisma version)
 *
 * NOTE: This only seeds `post` rows. Your `comment` model's fields weren't
 * given, so comments aren't seeded here — happy to add that if you share it.
 */

const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("@prisma/client");

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const posts = [
  {
    title: '5 Essential Tips Every Beginner Guitarist Should Know',
    text: "<p>Every guitarist remembers the first few weeks: sore fingertips, chords that buzz no matter how hard you press, and the nagging feeling that everyone else is picking it up faster. The truth is that almost every beginner runs into the same handful of obstacles, and getting a few fundamentals right early on saves months of frustration later.</p><h2>1. Posture and Hand Position Come Before Speed</h2><p>It's tempting to chase speed the moment you can hold down a chord, but bad mechanical habits formed in the first few weeks are brutally hard to unlearn later. Sit or stand with the guitar close to your body, keep your fretting-hand thumb roughly behind the neck rather than wrapped over the top, and let your wrist stay relatively straight instead of sharply bent. None of this feels natural at first, and that's fine — it will.</p><h2>2. Tune Before Every Single Session</h2><p>Playing out of tune, even slightly, quietly trains your ear to accept the wrong pitches as normal. A cheap clip-on tuner or a free tuning app removes any excuse here. Get in the habit of tuning up before you play a single note, not as an afterthought once something already sounds off.</p><h2>3. Prioritize Clean Chord Changes Over Flashy Licks</h2><p>It's far more useful to smoothly switch between G, C, D and Em than to half-learn a solo you saw online. Chord changes are the real bottleneck for most beginners, not raw finger strength. Practice switching between two chords slowly and cleanly, gradually increasing speed only once buzzing and muted strings disappear.</p><h2>4. Practice Short and Daily, Not Long and Occasional</h2><p>Fifteen focused minutes every day will beat two exhausted hours once a week, almost every time. Short daily sessions build the muscle memory and calluses your hands need gradually, without the burnout or soreness that comes from cramming.</p><h2>5. Don't Skip Music Theory Entirely</h2><p>You don't need a full theory course to start, but even a basic grasp of how major and minor scales work, or why certain chords sound bright and others sound heavy, makes everything else click faster. Theory turns memorized shapes into something you actually understand.</p><blockquote><p>The guitarists who improve fastest aren't the most talented — they're the ones who fix the boring stuff first.</p></blockquote><p>None of these tips are exciting, and that's kind of the point. The unglamorous fundamentals are what quietly separate guitarists who keep improving for years from those who plateau after six months.</p>",
    likes: 34,
    isPublic: true,
    dateTime: new Date('2026-06-02T09:15:00'),
  },
  {
    title: 'Building Downpicking Endurance for Metal Rhythm Guitar',
    text: "<p>Nothing separates rhythm players in metal quite like downpicking stamina. Riffs built almost entirely from relentless all-downstroke picking demand a kind of muscular endurance that alternate picking simply doesn't require, and that endurance doesn't arrive overnight no matter how motivated you are.</p><h2>Why Downpicking Endurance Matters</h2><p>Guitarists like Dimebag Darrell built entire riffs around aggressive, sustained downstrokes, and that tight, percussive attack is part of what gives certain metal rhythm playing its weight. Alternating up and down strokes is more efficient, but it can't replicate that same relentless, locked-in feel.</p><h2>The Metronome Method</h2><p>Start slow with a metronome, keeping your wrist relaxed rather than tense — tension, not a lack of muscle, is the real enemy of speed. Practice in short, focused bursts of 30 to 60 seconds at a tempo just below your limit, then rest before going again. Only bump the BPM up once the previous tempo feels genuinely effortless, not just barely survivable.</p><h2>Common Mistakes That Slow You Down</h2><ul><li>Locking the whole arm instead of moving from the wrist</li><li>Gripping the pick too tightly, which tires the hand fast</li><li>Practicing at full speed before the slow tempo is clean</li><li>Ignoring palm muting until endurance is already built, then trying to add it all at once</li></ul><h2>A Simple Progression to Follow</h2><p>Isolate palm muting on its own before combining it with sustained downpicking, since layering two new skills at once usually means neither one improves. Give it a few consistent months of short daily bursts and those chugging rhythm parts start to feel natural instead of exhausting.</p><blockquote><p>Endurance is built in the rest between bursts just as much as in the bursts themselves.</p></blockquote><p>Progress here is quiet and unglamorous — you won't feel a dramatic breakthrough most days. But six months of consistent short sessions adds up to a rhythm hand that simply doesn't get tired anymore.</p>",
    likes: 58,
    isPublic: true,
    dateTime: new Date('2026-06-10T14:40:00'),
  },
  {
    title: 'Why You Should Learn Songs by Ear Instead of Tabs',
    text: "<p>Tabs are convenient, and there's nothing wrong with using them occasionally. But leaning on them exclusively skips one of the most valuable skills a guitarist can build: genuine ear training, the kind that pays off in every single song you'll ever try to learn afterward.</p><h2>What Tabs Don't Teach You</h2><p>A tab tells you where to put your fingers, but it doesn't teach you why a riff sounds the way it does, or how to recognize a similar shape the next time it shows up in a completely different song. Relying only on tabs can leave even experienced players unable to figure out a simple riff without looking it up first.</p><h2>How Ear Training Actually Works</h2><p>When you sit down and work out a riff by ear, you're training your brain to recognize intervals, rhythms, and phrasing patterns that repeat constantly across songs and genres. It's slower at first and genuinely frustrating, but the payoff compounds — eventually you'll hear a riff once and already have a rough idea of the shapes involved before you even pick up the guitar.</p><h2>A Simple Way to Start</h2><ul><li>Pick a short, simple riff from a song you already know well</li><li>Slow the track down using an app rather than speeding through it at full tempo</li><li>Isolate just the first two or three notes before moving on</li><li>Resist the urge to look up the tab until you've genuinely tried for several minutes</li></ul><blockquote><p>The goal isn't to never use tabs again — it's to not need them.</p></blockquote><p>Your future self, jamming along to a song you've never practiced with zero prep time, will thank you for every frustrating minute spent training your ear now.</p>",
    likes: 21,
    isPublic: true,
    dateTime: new Date('2026-06-18T11:05:00'),
  },
  {
    title: 'The Minor Pentatonic Scale: Your First Real Soloing Tool',
    text: "<p>If there's one scale every guitarist should learn cold, it's the minor pentatonic. Strip away the theory jargon and it's simply five notes repeated across the neck — and those five notes are responsible for a genuinely enormous share of the rock, blues, and metal solos ever recorded.</p><h2>Why This Scale First</h2><p>The minor pentatonic removes two notes from the full minor scale that are easy to land on awkwardly, leaving a scale where almost any note sounds right against a matching backing track. That forgiving quality makes it the ideal first tool for actually improvising, rather than just running scales up and down.</p><h2>Learning the First Shape</h2><p>Start with a single box shape rooted on the low E or A string, and spend real time simply improvising over a backing track rather than memorizing the shape in isolation. Learn where the root notes physically sit within the shape, since that's what lets you move the whole pattern to any key later.</p><h2>Making It Sound Musical, Not Mechanical</h2><ul><li>Add bends and vibrato early, even if they feel clumsy at first</li><li>Leave space between phrases instead of playing constantly</li><li>Repeat a short phrase with small variations rather than always inventing something new</li><li>Match your phrasing to the rhythm of the backing track, not just the notes</li></ul><h2>Connecting the Shapes</h2><p>Once the first position feels genuinely natural, connect it to the neighboring shapes so you're not stuck in one spot on the fretboard. This is where the scale starts to feel like a single connected system rather than five separate boxes to memorize.</p><blockquote><p>The notes matter less than how expressively you play them.</p></blockquote><p>Plenty of unforgettable solos are built from this one scale and almost nothing else — proof that real command over a simple tool beats a shallow grasp of a complicated one.</p>",
    likes: 45,
    isPublic: true,
    dateTime: new Date('2026-06-25T16:20:00'),
  },
  {
    title: 'Alternate Picking vs Economy Picking: Which Comes First?',
    text: "<p>Every guitarist eventually runs into the alternate-picking-versus-economy-picking debate, usually right around the point where scale runs start to feel like they've hit a speed ceiling. The honest answer is that you need a solid foundation in one before the other will make much sense.</p><h2>What Alternate Picking Actually Is</h2><p>Alternate picking is strict down-up-down-up motion regardless of which strings you're crossing. It's less efficient in certain passages, but it builds the timing, consistency, and control that everything else in your right hand is eventually built on top of.</p><h2>What Economy Picking Adds</h2><p>Economy picking lets your pick glide in the direction of the next string when moving between strings, rather than reversing direction every time. It's more efficient for certain scale and arpeggio patterns, but it only helps once your basic mechanics are already solid — otherwise it just adds a new source of inconsistency.</p><h2>Why Order Matters</h2><p>Trying to learn economy picking too early, before alternate picking is clean and consistent, usually leads to a sloppy picking hand that struggles with both techniques at once instead of mastering either one.</p><h2>A Practical Path Forward</h2><ul><li>Nail alternate picking on scales and simple riffs first</li><li>Use a metronome and resist speeding up until it's genuinely clean</li><li>Introduce economy picking specifically on fast passages that cross strings</li><li>Expect to mix both techniques naturally once each is solid on its own</li></ul><blockquote><p>Technique debates matter far less than time spent with a metronome.</p></blockquote><p>Most advanced players end up using a blend of both anyway, switching between them without thinking. Getting there just requires building the alternate-picking foundation first.</p>",
    likes: 9,
    isPublic: false,
    dateTime: new Date('2026-07-03T08:50:00'),
  },
  {
    title: '5 Pedals Worth Adding to Your Board Before Anything Else',
    text: "<p>Effects pedals can turn into an expensive rabbit hole fast, with entire forums dedicated to debating tiny tonal differences between near-identical boxes. But a small handful of pedals cover almost every tonal need a guitarist actually has before any of that starts to matter.</p><h2>1. A Good Overdrive</h2><p>An overdrive is the single most useful pedal for pushing an amp into natural-sounding grit without needing to blast the volume to unreasonable levels. It's also one of the more transparent effects, meaning it enhances your existing tone rather than replacing it entirely.</p><h2>2. A Reliable Tuner Pedal</h2><p>Unglamorous, but essential — a tuner pedal saves you from ever playing visibly, audibly out of tune on stage, and it doubles as a mute switch between songs, which is reason enough on its own.</p><h2>3. A Delay Pedal</h2><p>Delay adds space and dimension that a completely dry signal can't, whether you want a subtle slap-back for rockabilly-style tones or a full wash of ambience behind a solo.</p><h2>4. A Noise Gate</h2><p>The moment you add high-gain distortion, unwanted hum and hiss become impossible to ignore. A noise gate keeps that under control without you having to constantly adjust your guitar's volume knob between parts.</p><h2>5. A Simple Boost Pedal</h2><p>A boost pedal lets you push solos slightly louder and slightly dirtier without reshaping your entire tone, which is exactly the kind of subtle, useful trick that separates a solo that cuts through the mix from one that gets buried.</p><blockquote><p>Everything else can wait until you actually know what your ears are chasing.</p></blockquote><p>Building a pedalboard around genuine need rather than gear-acquisition impulse saves both money and, more importantly, your actual tone.</p>",
    likes: 67,
    isPublic: true,
    dateTime: new Date('2026-07-10T13:30:00'),
  },
  {
    title: 'How to Build a Practice Routine That Actually Works',
    text: "<p>The difference between guitarists who improve steadily for years and those who plateau after a few months usually comes down to how they structure practice, not how much raw talent they started with.</p><h2>The Four Categories Worth Practicing</h2><ul><li>Technique — scales, picking exercises, and other pure mechanics</li><li>Repertoire — the actual songs you're learning right now</li><li>Ear training — working things out without relying on tabs</li><li>Free improvisation — playing without any specific goal or correct answer</li></ul><p>Even 30 focused minutes split across these four areas beats two unfocused hours of aimless noodling, because each category strengthens a different, mostly independent part of your playing.</p><h2>Tracking What You Actually Work On</h2><p>A quick note in your phone after each session — even just a single sentence — makes it obvious over time which areas keep getting neglected. Most guitarists gravitate naturally toward whatever already feels fun, which usually isn't the thing that needs the most work.</p><h2>Slowing Down When Something Isn't Improving</h2><p>Always warm up before chasing speed, and if a passage still isn't improving after several sessions, the answer is almost never to push harder at full tempo. Slow it down further instead, since repeating the same mistake quickly just cements it more firmly.</p><blockquote><p>Progress lives in the boring, unglamorous repetitions, not the exciting ones.</p></blockquote><p>A practice routine doesn't need to be complicated to work — it just needs to be consistent, honestly tracked, and willing to slow down when something isn't clicking.</p>",
    likes: 15,
    isPublic: true,
    dateTime: new Date('2026-07-15T10:00:00'),
  },
  {
    title: 'Palm Muting: The Secret Behind Tight Rhythm Playing',
    text: "<p>Palm muting is one of those techniques that looks deceptively simple from the outside but takes real, patient time to actually control. Get it right and rhythm playing suddenly sounds tight and percussive; get it wrong and it either does nothing or chokes every note into silence.</p><h2>The Basic Mechanics</h2><p>Rest the edge of your picking-hand palm lightly against the strings, right near the bridge, and experiment from there with how far forward or back you place it.</p><h2>Finding the Right Spot</h2><ul><li>Too close to the bridge and you'll barely mute anything at all</li><li>Too far from the bridge and the notes choke out completely, losing all pitch</li><li>The sweet spot is usually a small window you'll need to feel out by ear</li><li>Small wrist adjustments matter more than big movements here</li></ul><h2>Why It Matters So Much in Metal</h2><p>This technique sits behind almost every driving, chugging metal rhythm riff, adding contrast between muted, percussive notes and fully ringing open ones. Without it, the same riff often sounds flat and one-dimensional.</p><h2>A Simple Way to Practice It</h2><p>Practice alternating between muted and open notes on a single string first, before applying the technique to full riffs. Isolating the movement this way lets your hand learn it without other variables — chord shapes, string changes — getting in the way.</p><blockquote><p>The best palm muting is felt more than it's consciously thought about.</p></blockquote><p>Give this one genuine, dedicated attention rather than treating it as an afterthought, and an entire category of riffs will suddenly feel like they lock into place.</p>",
    likes: 40,
    isPublic: true,
    dateTime: new Date('2026-07-21T17:45:00'),
  },
  {
    title: 'Exploring Alternate Tunings: Drop D and Beyond',
    text: "<p>Standard tuning is only the beginning of what a guitar is capable of. A handful of alternate tunings can completely change how a riff feels under your fingers, sometimes revealing chord shapes and textures that standard tuning makes awkward or impossible.</p><h2>Drop D: The Easiest Entry Point</h2><p>Simply lowering your low E string down a whole step to D instantly gives you access to fat, one-finger power chords using just that string and the two above it — a staple of rock and metal rhythm playing for decades.</p><h2>Going Further: Drop C and Full-Step-Down Tunings</h2><p>From Drop D, tunings like Drop C or full-step-down open up noticeably heavier, darker tones without needing thicker strings right away, though you may eventually want them for tuning stability.</p><h2>Open Tunings Like DADGAD</h2><p>Open tunings rearrange the entire fretboard rather than just lowering one string, encouraging you to find new chord shapes almost by accident rather than falling back on familiar patterns.</p><h2>Why Bother Experimenting</h2><ul><li>Breaks you out of muscle-memory patterns you've relied on for years</li><li>Makes certain heavy or ambient tones far easier to achieve</li><li>Often leads to writing riffs you wouldn't have found in standard tuning</li><li>Costs nothing to try beyond a few minutes of retuning</li></ul><blockquote><p>Sometimes the fastest way to write something new is to make the familiar shapes unfamiliar again.</p></blockquote><p>Even if you return to standard tuning for most of your playing, spending real time in alternate tunings tends to change how you hear the instrument well after you've tuned back up.</p>",
    likes: 3,
    isPublic: false,
    dateTime: new Date('2026-07-27T09:00:00'),
  },
  {
    title: 'Legato Technique: Smoother Lines with Fewer Pick Strokes',
    text: "<p>Legato playing is what gives certain solos that fluid, almost vocal quality — lines that seem to flow together rather than being made up of individually picked notes. It's a major part of the vocabulary of virtuosos like Steve Vai and Joe Satriani, and it rewards patient, deliberate practice more than almost any other lead technique.</p><h2>What Legato Actually Involves</h2><p>Legato is built from hammer-ons, pull-offs, and slides rather than picking every single note. Fewer pick attacks mean a smoother, more connected sound, especially once you're playing at higher speeds where individually picking every note becomes physically limiting.</p><h2>The Most Common Beginner Mistake</h2><p>A sharp volume drop between picked notes and hammered or pulled notes is the single most common issue, and it's almost always caused by weak, rushed fretting-hand fingers rather than any problem with the picking hand.</p><h2>Building the Necessary Finger Strength</h2><ul><li>Practice hammer-ons and pull-offs in isolation before mixing them with picking</li><li>Focus on even volume rather than raw speed at first</li><li>Use a metronome to keep the hammered notes rhythmically even</li><li>Rest when your fretting hand starts to feel fatigued rather than pushing through</li></ul><h2>Applying It to Something You Already Know</h2><p>Once the mechanics feel genuinely solid, try applying legato to a scale run you already know well, rather than immediately writing something brand new around it. This isolates the technique itself as the only new variable.</p><blockquote><p>Legato rewards patience more than any other lead technique — the fingers simply need time.</p></blockquote><p>Give it consistent, dedicated attention over a few months and entire passages that once felt mechanically impossible will start to feel like second nature.</p>",
    likes: 28,
    isPublic: true,
    dateTime: new Date('2026-07-30T15:10:00'),
  },
];

// Parallel array to `posts` — commentsByPost[i] holds the comments for posts[i].
// The two draft posts (indices 4 and 8) are left empty on purpose.
const commentsByPost = [
  [
    { text: "This is exactly what I needed to hear — I've been so focused on learning solos that I completely skipped clean chord transitions.", dateTime: new Date('2026-06-03T10:20:00') },
    { text: "Any recommendations for a good clip-on tuner? Mine keeps giving weird readings.", dateTime: new Date('2026-06-05T18:45:00') },
    { text: "The daily-short-session tip changed everything for me. Consistency really does beat marathon sessions.", dateTime: new Date('2026-06-09T09:05:00') },
  ],
  [
    { text: "My wrist used to cramp up so bad trying to keep up with faster riffs. The relaxed-wrist tip is huge.", dateTime: new Date('2026-06-11T14:10:00') },
    { text: "How long before you started seeing real improvement with the burst method?", dateTime: new Date('2026-06-13T20:30:00') },
    { text: "Adding palm muting on top of this made me realize how much tension I was still holding.", dateTime: new Date('2026-06-16T08:55:00') },
  ],
  [
    { text: "I always reach for the tab first out of habit. Going to try forcing myself to wait a bit longer next time.", dateTime: new Date('2026-06-19T12:15:00') },
    { text: "Slowing tracks down really is a game changer, wish I'd started doing this years ago.", dateTime: new Date('2026-06-22T16:40:00') },
  ],
  [
    { text: "Box one was my whole world for way too long before I connected it to the rest of the neck.", dateTime: new Date('2026-06-26T11:00:00') },
    { text: "Do you have a follow-up planned for connecting all five shapes?", dateTime: new Date('2026-06-27T15:25:00') },
    { text: "Adding vibrato earlier than I thought I should really did make simple licks sound way better.", dateTime: new Date('2026-06-30T19:10:00') },
    { text: "This is basically how I finally started improvising instead of just running scales up and down.", dateTime: new Date('2026-07-02T09:50:00') },
  ],
  [], // Alternate Picking vs Economy Picking — draft, no comments yet
  [
    { text: "Would add a compressor to this list, but otherwise spot on.", dateTime: new Date('2026-07-11T10:05:00') },
    { text: "The noise gate tip saved me. My high-gain tone was so noisy before that.", dateTime: new Date('2026-07-12T17:20:00') },
    { text: "Which overdrive would you recommend for someone on a tight budget?", dateTime: new Date('2026-07-14T21:00:00') },
  ],
  [
    { text: "Splitting practice into those four categories fixed my biggest problem: only ever practicing the fun stuff.", dateTime: new Date('2026-07-16T08:30:00') },
    { text: "Do you track your sessions in an app or just a plain notes file?", dateTime: new Date('2026-07-17T13:45:00') },
    { text: "Slowing down instead of pushing through mistakes at full speed is something I really needed to hear.", dateTime: new Date('2026-07-19T19:15:00') },
  ],
  [
    { text: "Finding that sweet spot near the bridge took me embarrassingly long, but it clicked eventually.", dateTime: new Date('2026-07-22T10:40:00') },
    { text: "This explains why my muted notes were either ringing out or completely dead with nothing in between.", dateTime: new Date('2026-07-24T16:05:00') },
  ],
  [], // Exploring Alternate Tunings — draft, no comments yet
  [
    { text: "The volume drop between picked and hammered notes was exactly my problem. Never realized it was a fretting hand issue.", dateTime: new Date('2026-07-31T09:20:00') },
    { text: "Applying legato to a scale I already knew first made this so much easier to isolate.", dateTime: new Date('2026-07-31T18:00:00') },
    { text: "Slow and steady really is the only way through this one.", dateTime: new Date('2026-08-01T07:45:00') },
  ],
];

async function getAuthors() {
  const existingUsers = await prisma.user.findMany();
  if (existingUsers.length > 0) return existingUsers;

  // Fallback: no users exist yet, so create one minimal author.
  // If your `user` model has other required fields (email, password, etc.)
  // beyond `username`, add them to the `create` call below.
  try {
    const fallbackUser = await prisma.user.create({
      data: { username: 'shredmaster' },
    });
    return [fallbackUser];
  } catch (err) {
    throw new Error(
      'Could not create a fallback user — your `user` model probably has ' +
        'required fields beyond `username`. Create a user through your app ' +
        'first, or add those fields to the `create` call in getAuthors().'
    );
  }
}

async function main() {
  const authors = await getAuthors();

  const createdPosts = [];
  for (let i = 0; i < posts.length; i++) {
    const author = authors[i % authors.length];
    const created = await prisma.post.create({
      data: {
        ...posts[i],
        userID: author.username,
      },
    });
    createdPosts.push(created);
  }
  console.log(`Seeded ${createdPosts.length} posts across ${authors.length} user(s).`);

  let commentCount = 0;
  for (let i = 0; i < createdPosts.length; i++) {
    const commentsForPost = commentsByPost[i] || [];
    for (let j = 0; j < commentsForPost.length; j++) {
      // Offset by 1 relative to the post-author cycle so, when there are
      // multiple real users, the same person isn't automatically both the
      // post's author and its first commenter.
      const commenter = authors[(i + j + 1) % authors.length];
      await prisma.comment.create({
        data: {
          text: commentsForPost[j].text,
          dateTime: commentsForPost[j].dateTime,
          userID: commenter.username,
          postID: createdPosts[i].id,
        },
      });
      commentCount++;
    }
  }
  console.log(`Seeded ${commentCount} comments.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
