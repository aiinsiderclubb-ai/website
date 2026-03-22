import BlogPost from "@/components/shared/BlogPost";

export default function GoogleVidsAiEditorPost() {
  return (
    <BlogPost
      emoji="🎬"
      badge="News"
      badgeColor="bg-[#7c3aed]/20 text-[#a78bfa]"
      title="Google Vids: AI Video Editor"
      subtitle="How Gemini-assisted scriptwriting, storyboard generation and editing lower the barrier to business video production."
      date="September 2024"
      readTime="5 min"
      tags={["Google Vids", "Gemini", "Video Editing", "Storyboarding"]}
      relatedPosts={[
        { title: "VEED AI Playground", href: "/blog/veed-ai-playground", sub: "Text-to-video and subtitles" },
        { title: "Website in 5 Minutes with GPT-5", href: "/blog/website-in-5-minutes-gpt5", sub: "Prompt-first creation workflow" },
        { title: "One Person with AI = Mini-Startup", href: "/blog/one-person-mini-startup", sub: "Operate like a small team" },
      ]}
    >
      <h2>Business Video Is Becoming Operational</h2>
      <p>
        Google Vids matters because it turns business video from a specialist bottleneck into a repeatable workflow.
        Instead of starting from a blank timeline, teams can begin with a generated structure and refine from there.
      </p>

      <h2>Where It Fits Best</h2>
      <ul>
        <li>Internal explainers and onboarding videos</li>
        <li>Sales enablement and short product demos</li>
        <li>Training material with fast iteration cycles</li>
        <li>Campaign drafts that need stakeholder review quickly</li>
      </ul>

      <h2>Main Advantage</h2>
      <p>
        The biggest gain is not cinematic quality. It&apos;s reducing the effort required to produce a first structured draft:
        script, outline, visuals, and pacing suggestions in one loop.
      </p>
    </BlogPost>
  );
}
