import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Input } from "@/components/ui/Input"

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-10 space-y-12 pb-24">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Design System</h1>
        <p className="text-muted">Aethersync visual language implementation playground.</p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-border pb-2">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-primary text-foreground font-medium">Primary</div>
          <div className="p-4 rounded-lg bg-secondary text-foreground font-medium">Secondary</div>
          <div className="p-4 rounded-lg bg-accent text-foreground font-medium">Accent</div>
          <div className="p-4 rounded-lg bg-surface text-foreground font-medium border border-border">Surface</div>
          <div className="p-4 rounded-lg bg-surface-elevated text-foreground font-medium border border-border">Surface Elevated</div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-border pb-2">Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <div className="p-4 bg-surface-elevated rounded-lg">
            <Button variant="glass">Glass</Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-border pb-2">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="flat" className="p-6 space-y-4">
            <h3 className="font-semibold text-lg">Flat Card</h3>
            <p className="text-muted text-sm">Standard flat surface with subtle border.</p>
          </Card>
          <Card variant="elevated" className="p-6 space-y-4">
            <h3 className="font-semibold text-lg">Elevated Card</h3>
            <p className="text-muted text-sm">Elevated surface with shadow.</p>
          </Card>
          <div className="p-6 bg-surface-elevated rounded-xl">
            <Card variant="glass" className="p-6 space-y-4">
              <h3 className="font-semibold text-lg">Glass Card</h3>
              <p className="text-sm">Translucent backdrop blur effect.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-border pb-2">Badges & Inputs</h2>
        <div className="flex gap-4">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        <div className="max-w-sm space-y-4 pt-4">
          <Input placeholder="Default input..." />
          <Input placeholder="Error input..." error />
        </div>
      </section>
    </div>
  )
}
