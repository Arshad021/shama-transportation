const reviews = [
  {quote: "I was very impressed — on time, great communication, and I felt safe.", author: "Amina S."},
  {quote: "Exceptionally clean car. Driver was early and the price beat competitors.", author: "Farhan M."},
  {quote: "JR got me home safely and quickly — will use them again!", author: "Sara K."},
  {quote: "Perfectly professional and courteous, extremely competitive pricing.", author: "Omar R."},
  {quote: "Always on time, very professional and super nice.", author: "Hassan A."},
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-white mb-10">
          What Our Clients Are Saying
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r,i)=>(
            <figure key={i} className="rounded-2xl p-6 bg-white/10">
              <blockquote className="text-lg text-white/90">“{r.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-yellow-500">{r.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
