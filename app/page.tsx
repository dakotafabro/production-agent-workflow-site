"use client";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      {/* ── HERO ── */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
            Production Agent Workflow
          </p>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-6 leading-tight">
            Elevate How You Work
            <br />
            <span className="text-[var(--text-secondary)]">With Your Agent.</span>
          </h1>
          <p className="text-base text-[var(--text-secondary)] w-full leading-relaxed">
            A template for organizing your individual context and work style so your agent
            can meet you where you are. You don&apos;t need to change your workflow. You&apos;re
            equipping your agent to work the way you already do.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up delay-1">
          <a
            href="https://github.com/dakotafabro/production-agent-workflow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--bg)] font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Get the Template
          </a>

        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--warning)] uppercase tracking-[0.2em] mb-4">
            The Opportunity
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            Your Agent Needs Your Context
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            When an agent doesn&apos;t have access to your conventions, architecture knowledge,
            and verification habits, common friction points emerge naturally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up delay-1">
          <ProblemCard
            icon={<IconExpand />}
            title="Large PRs"
            description="500+ lines, multiple concerns tangled together. Reviewers can't hold the full context. Reviews take hours instead of minutes."
          />
          <ProblemCard
            icon={<IconCircleX />}
            title="Failing CI"
            description="Push, wait 15 minutes, see the failure, fix, push again. Each cycle burns time and blocks the team."
          />
          <ProblemCard
            icon={<IconGitMerge />}
            title="Merge Conflicts"
            description="Long-lived branches diverge from main. The longer a branch lives, the more painful the merge."
          />
          <ProblemCard
            icon={<IconQuestion />}
            title="Code Nobody Understands"
            description="The agent generated it, the human committed it, but nobody can explain what it does or why."
          />
        </div>

        <p className="text-sm text-[var(--text-muted)] mt-8 animate-fade-up delay-2">
          These aren&apos;t failures of the practitioner. They&apos;re the natural result of an agent
          that doesn&apos;t have enough context about your codebase and workflow. This template
          gives you a place to organize that context.
        </p>
      </section>

      {/* ── THE SHIFT ── */}
      <section id="the-shift" className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
            The Shift
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            Organize Your Context. Elevate Your Output.
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            You already know how you work best. This template helps you encode that knowledge
            so your agent has access to it every session.
          </p>
        </div>

        <div className="overflow-x-auto animate-fade-up delay-1">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left py-3 pr-4 text-[var(--warning)] font-medium">Without Structure</th>
                <th className="text-left py-3 pl-4 text-[var(--accent)] font-medium">With Structure</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <ComparisonRow left="&quot;Generate a feature&quot;" right="Orient on existing patterns, then build one layer" />
              <ComparisonRow left="Push and see if CI passes" right="Run the pre-push checklist locally" />
              <ComparisonRow left="One big PR with everything" right="Stacked PRs, one concern each" />
              <ComparisonRow left="Trust the AI output blindly" right="Understand the full implementation before committing" />
              <ComparisonRow left="No conventions documented" right="Conventions encoded so the agent follows them" />
              <ComparisonRow left="Hope it works" right="Verify it works, then ship" />
            </tbody>
          </table>
        </div>

        <div className="mt-10 p-6 rounded-xl border border-[var(--accent-dim)] bg-[var(--accent-dim)] animate-fade-up delay-2">
          <p className="text-sm text-[var(--accent)] font-medium mb-2">The Core Insight</p>
          <p className="text-[var(--text-primary)] leading-relaxed">
            An agent is only as good as the context you give it. When your agent has access to
            your conventions, architecture knowledge, and verification habits, it becomes a
            collaborator that works the way you already do.
          </p>
        </div>
      </section>

      {/* ── WORKS WITH GOOSE ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
            Why This Works
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            Built for Goose. Works With Any Agent.
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            This template was developed using{" "}
            <a href="https://github.com/block/goose" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">Goose</a>,
            an open-source AI agent that reads AGENTS.md files at session start. The directory
            structure maps directly to how Goose discovers and uses context.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up delay-1">
          <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
            <p className="text-sm font-medium text-[var(--text-primary)] mb-2">How Goose uses it</p>
            <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
              <li><span className="text-[var(--accent)] font-mono">AGENTS.md</span> - read at session start, shapes all behavior</li>
              <li><span className="text-[var(--accent)] font-mono">conventions/</span> - consulted before generating code</li>
              <li><span className="text-[var(--accent)] font-mono">pre-push-checklist</span> - executed before every push</li>
              <li><span className="text-[var(--accent)] font-mono">workflow.md</span> - followed when building features</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
            <p className="text-sm font-medium text-[var(--text-primary)] mb-2">Works with other agents too</p>
            <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
              <li><span className="text-[var(--text-muted)]">Cursor</span> - reads .cursorrules (same concept)</li>
              <li><span className="text-[var(--text-muted)]">Copilot Workspace</span> - reads project context</li>
              <li><span className="text-[var(--text-muted)]">Windsurf</span> - reads .windsurfrules</li>
              <li><span className="text-[var(--text-muted)]">Aider</span> - reads project conventions</li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-[var(--text-muted)] mt-6 animate-fade-up delay-2">
          The conventions are agent-agnostic. The knowledge you encode (architecture, testing, PR workflow)
          is useful regardless of which agent reads it.
        </p>
      </section>

      {/* ── FOR TEAMS ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
            For Teams
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            Individual Context. Collective Benefit.
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            When everyone on a team organizes their individual context, the whole team moves faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up delay-1">
          <div className="flex gap-3 items-start">
            <span className="text-[var(--accent)] mt-0.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <p className="text-sm text-[var(--text-secondary)]">PRs get smaller - the agent knows the scoping rules</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[var(--accent)] mt-0.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <p className="text-sm text-[var(--text-secondary)]">CI passes on first push - the checklist runs locally</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[var(--accent)] mt-0.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <p className="text-sm text-[var(--text-secondary)]">Reviews are faster - the code already follows team patterns</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[var(--accent)] mt-0.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <p className="text-sm text-[var(--text-secondary)]">Onboarding accelerates - new engineers build their world model by mining reviews</p>
          </div>
        </div>
      </section>

      {/* ── THREE LAYERS ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
            What Production Looks Like
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            Three Layers of Context
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            The template organizes your knowledge into three layers. Each one helps your agent
            understand more about how you work and what your codebase expects.
          </p>
        </div>

        <div className="space-y-6 animate-fade-up delay-1">
          <LayerCard
            number="1"
            title="Identity and Boundaries"
            description="Who are you? What can the agent do without asking? What requires your confirmation? This is your AGENTS.md file - the first thing your agent reads."
            file="AGENTS.md"
            example="&quot;The agent can commit to feature branches. It cannot push to main. It cannot post to Slack without confirmation.&quot;"
          />
          <LayerCard
            number="2"
            title="Workflow and Verification"
            description="How does work move from idea to shipped code? What gates exist between 'generated' and 'merged'? The pre-push checklist is the single highest-leverage document."
            file="workflow.md + conventions/pre-push-checklist.md"
            example="Format check, lint, compile, test - all locally, before every push. CI should never be the first time you discover a problem."
          />
          <LayerCard
            number="3"
            title="Conventions and World Model"
            description="What does your codebase expect? Where does logic live? How are things tested? This is the accumulated knowledge that makes your agent effective in your specific codebase."
            file="conventions/"
            example="&quot;Side effects belong in the repository layer. Use cases are thin one-liner delegations. State that derives from other state is computed, not stored.&quot;"
          />
        </div>
      </section>

      {/* ── CONVENTION MINING ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
            The Compound Effect
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            Convention Mining
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            Every code review teaches you something about how your team thinks about code.
            Convention mining is the practice of capturing those insights as they appear so
            they compound into your personal knowledge base - and your agent&apos;s.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-up delay-1">
          <BenefitCard
            title="For You"
            description="Your PRs align with team expectations from the first draft. Fewer review cycles. Faster merges."
          />
          <BenefitCard
            title="For Your Agent"
            description="Encoded conventions mean the agent generates code that follows team patterns instead of inventing new ones."
          />
          <BenefitCard
            title="For the Team"
            description="Implicit knowledge becomes explicit. Onboarding accelerates. New engineers learn the codebase architecture as a system."
          />
        </div>

        <div className="mt-8 p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] animate-fade-up delay-2">
          <p className="text-sm text-[var(--text-primary)] font-medium mb-3">How it works:</p>
          <ol className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li className="flex gap-3">
              <span className="text-[var(--accent)] font-mono text-xs mt-0.5">01</span>
              <span>Notice when a review comment expresses a general principle (not a one-time fix)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--accent)] font-mono text-xs mt-0.5">02</span>
              <span>Capture it in imperative form with source attribution</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--accent)] font-mono text-xs mt-0.5">03</span>
              <span>Categorize it (architecture, testing, PR workflow, security)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--accent)] font-mono text-xs mt-0.5">04</span>
              <span>Cross-reference with existing conventions (don&apos;t duplicate, note tensions)</span>
            </li>
          </ol>
          <p className="text-xs text-[var(--text-muted)] mt-4">
            After a few weeks, your conventions directory reflects how your team actually thinks about code.
          </p>
        </div>
      </section>

      {/* ── DIRECTORY STRUCTURE ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
            The Template
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            What You Get
          </h2>
        </div>

        <div className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] font-mono text-sm animate-fade-up delay-1">
          <pre className="text-[var(--text-secondary)] overflow-x-auto leading-relaxed">
{`~/research/
├── AGENTS.md                    # Agent norms and boundaries
├── workflow.md                  # Idea-to-ship phases
├── world-model.md              # How shared + individual knowledge work together
├── goose.md                    # Why this structure works with Goose
├── prompts.md                  # Copy-paste prompts for your agent
├── setup.sh                    # Interactive setup script
├── conventions/
│   ├── architecture.md          # Layer responsibilities
│   ├── testing.md               # Test design principles
│   ├── pr-workflow.md           # PR size, stacking, review norms
│   ├── pre-push-checklist.md    # Platform-specific verification
│   ├── shipping-safely.md       # Feature flags, prototype lifecycle
│   └── convention-mining.md     # Learning from code reviews
├── references/                  # Platform knowledge
├── active/                      # Current work-in-progress
├── sessions/                    # Session logs (optional)
└── examples/
    └── mobile-android/          # Worked example`}
          </pre>
        </div>

        <div className="mt-8 space-y-4 animate-fade-up delay-2">
          <p className="text-sm text-[var(--text-secondary)]">
            <span className="text-[var(--accent)] font-medium">Start here:</span> Fill in{" "}
            <code className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] text-[var(--text-primary)] text-xs">AGENTS.md</code> and{" "}
            <code className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] text-[var(--text-primary)] text-xs">conventions/pre-push-checklist.md</code>.
            You can be productive in 15 minutes. The rest compounds over weeks.
          </p>
        </div>
      </section>

      {/* ── GET STARTED ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <div className="animate-fade-up">
          <p className="text-xs font-medium text-[var(--accent)] uppercase tracking-[0.2em] mb-4">
            Get Started
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            15 Minutes to a More Impactful Collaboration
          </h2>
        </div>

        <div className="space-y-6 animate-fade-up delay-1">
          <StepCard
            number="1"
            title="Clone the template"
            code="git clone https://github.com/dakotafabro/production-agent-workflow.git ~/research"
          />
          <StepCard
            number="2"
            title="Run the interactive setup"
            code="cd ~/research && ./setup.sh"
            description="The script walks you through identity, boundaries, and platform-specific pre-push commands. It writes your AGENTS.md and pre-push checklist based on your answers."
          />
          <StepCard
            number="3"
            title="Let your agent fill in the rest"
            description="Open prompts.md for copy-paste prompts that help your agent analyze your codebase, CI config, and test suite to populate the remaining conventions."
          />
          <StepCard
            number="4"
            title="Start using it"
            description="Point your agent at the repo. It reads AGENTS.md at session start and knows your context immediately. Over time, mine conventions from code reviews and watch your collaboration deepen."
          />
        </div>

        <div className="mt-10 text-center animate-fade-up delay-2">
          <a
            href="https://github.com/dakotafabro/production-agent-workflow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--bg)] font-medium rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Get the Template
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-[var(--border)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-sm text-[var(--text-secondary)]">
              Built by Dakota Fabro, B.Psy, M.Ed, M.Th (they/them)
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              AAIF Ambassador &middot; Agentic AI Foundation
            </p>
            <div className="flex gap-3 mt-2">
              <a href="https://github.com/dakotafabro" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/dakotafabro" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
          <div className="flex gap-4 text-xs text-[var(--text-muted)]">
            <a href="https://github.com/agentsmd" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
              AGENTS.md
            </a>
            <a href="https://github.com/block/goose" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
              Goose
            </a>
            <a href="https://agentic-ai.org" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
              AAIF
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function IconExpand() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );
}

function IconCircleX() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}

function IconGitMerge() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M6 21V9a9 9 0 0 0 9 9" />
    </svg>
  );
}

function IconQuestion() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function ProblemCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[var(--warning)] w-4 h-4 flex-shrink-0">{icon}</span>
        <h3 className="text-sm font-medium text-[var(--text-primary)]">{title}</h3>
      </div>
      <p className="text-xs text-[var(--text-muted)] leading-relaxed">{description}</p>
    </div>
  );
}

function ComparisonRow({ left, right }: { left: string; right: string }) {
  return (
    <tr className="border-b border-[var(--border)]">
      <td className="py-3 pr-4 text-[var(--text-muted)]">{left}</td>
      <td className="py-3 pl-4 text-[var(--text-primary)]">{right}</td>
    </tr>
  );
}

function LayerCard({ number, title, description, file, example }: { number: string; title: string; description: string; file: string; example: string }) {
  return (
    <div className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-colors">
      <div className="flex items-start gap-4">
        <span className="text-2xl font-light text-[var(--accent)] opacity-50">{number}</span>
        <div className="flex-1">
          <h3 className="text-base font-medium text-[var(--text-primary)] mb-2">{title}</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{description}</p>
          <p className="text-xs text-[var(--text-muted)]">
            <span className="text-[var(--accent)] font-mono">{file}</span>
          </p>
          <p className="text-xs text-[var(--text-muted)] mt-2 italic">{example}</p>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
      <h3 className="text-sm font-medium text-[var(--accent)] mb-2">{title}</h3>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({ number, title, code, description }: { number: string; title: string; code?: string; description?: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent-dim)] flex items-center justify-center">
        <span className="text-xs font-mono text-[var(--accent)]">{number}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1">{title}</h3>
        {code && (
          <pre className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-card)] px-3 py-2 rounded-lg overflow-x-auto">
            {code}
          </pre>
        )}
        {description && (
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
