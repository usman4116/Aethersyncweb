'use client';

import { Reveal } from '@/components/ui/Reveal';

const testimonials = [
  {
    name: 'Abdullah',
    initial: 'A',
    color: 'bg-blue-500',
    text: "AetherSync is the most beautiful code editor I've ever used. And it works as well as it looks. It's by far my best VSCode replacement right now."
  },
  {
    name: 'Junaid',
    initial: 'J',
    color: 'bg-green-500',
    text: "I am impressed with AetherSync. I've used competitors for a while now, I can confidently say AetherSync is my new favorite daily driver. Not only is it quick, it's stylish! I love the way it looks, refreshing to work in and extremely responsive."
  },
  {
    name: 'Abbas',
    initial: 'A',
    color: 'bg-purple-500',
    text: "AetherSync has already reached 2.0, with a brand new look and a big splash. One reason I like AetherSync is its gorgeous, thoughtful design. These nuanced details make it feel like a carefully crafted product."
  },
  {
    name: 'Awais',
    initial: 'A',
    color: 'bg-yellow-500 text-black',
    text: "My team has been using AetherSync for a month. It's been a pretty solid experience for the much bigger and more complex tasks where the agent actually understands our context. Productivity has gone way up."
  },
  {
    name: 'Mubashir',
    initial: 'M',
    color: 'bg-red-500',
    text: "I've been using AetherSync since they launched. Wow, they have one of the greatest developer experiences amongst IDEs and the productivity gain from the agent mode really makes me a 10x engineer. Great product."
  },
  {
    name: 'Ahmad',
    initial: 'A',
    color: 'bg-indigo-500',
    text: "AetherSync is an AI-powered code editor that stands out for its pleasant interface and responsive features. The autonomous mode enables efficient development of complete projects."
  },
  {
    name: 'Hisham',
    initial: 'H',
    color: 'bg-teal-500',
    text: "AetherSync enhances coding efficiency with smart autocompletion, making development faster and smoother!"
  },
  {
    name: 'Momina',
    initial: 'M',
    color: 'bg-pink-500',
    text: "Writing code has never been that easier! AetherSync generates efficient code on the fly. A game-changer for my daily workflow."
  }
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-b border-border py-24 bg-background">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 mb-16 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Loved by Devs
          </h2>
          <p className="text-lg text-text-secondary">
            AetherSync is popular among developers worldwide.
          </p>
        </Reveal>
      </div>

      {/* Auto-scrolling marquee or hide-scrollbar horizontal scroll */}
      <div className="relative w-full flex flex-col gap-6 overflow-hidden">
        
        {/* Row 1 */}
        <div className="flex w-max animate-marquee gap-6 px-6">
          {[...testimonials.slice(0, 4), ...testimonials.slice(0, 4)].map((t, i) => (
            <div key={`r1-${i}`} className="w-[350px] md:w-[400px] shrink-0 rounded-xl border border-white/5 bg-[#111111] p-6 flex flex-col justify-between h-full min-h-[220px]">
              <p className="text-[15px] text-gray-300 leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${t.color} text-white`}>
                  {t.initial}
                </div>
                <span className="font-medium text-gray-200">{t.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 (scrolls opposite or offset) */}
        <div className="flex w-max animate-marquee-reverse gap-6 px-6 ml-[-200px]">
          {[...testimonials.slice(4, 8), ...testimonials.slice(4, 8)].map((t, i) => (
            <div key={`r2-${i}`} className="w-[350px] md:w-[400px] shrink-0 rounded-xl border border-white/5 bg-[#111111] p-6 flex flex-col justify-between h-full min-h-[220px]">
              <p className="text-[15px] text-gray-300 leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${t.color} text-white`}>
                  {t.initial}
                </div>
                <span className="font-medium text-gray-200">{t.name}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
