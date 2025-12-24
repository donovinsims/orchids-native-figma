import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Container } from "./ui/container";

export default function DesignSystemDemo() {
  return (
    <Container className="py-2xl space-y-2xl">
      <section className="space-y-md">
        <h1 className="text-display-xl">Design System</h1>
        <p className="text-body-md text-text-secondary">
          A production-ready design system built with Tailwind CSS and React.
        </p>
      </section>

      <section className="space-y-lg">
        <h2 className="text-h1 border-b border-border pb-sm">Typography</h2>
        <div className="space-y-md">
          <p className="text-display-xl">Display XL - 48px</p>
          <p className="text-display-lg">Display LG - 36px</p>
          <p className="text-h1">Heading 1 - 24px</p>
          <p className="text-h2">Heading 2 - 20px</p>
          <p className="text-h3">Heading 3 - 18px</p>
          <p className="text-h4">Heading 4 - 16px</p>
          <p className="text-body-md">Body MD - 14px (Default)</p>
          <p className="text-body-sm">Body SM - 12px</p>
          <p className="text-label-md">Label MD - 12px</p>
          <p className="text-caption text-text-tertiary">Caption - 10px</p>
        </div>
      </section>

      <section className="space-y-lg">
        <h2 className="text-h1 border-b border-border pb-sm">Buttons</h2>
        <div className="flex flex-wrap gap-md">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="tertiary">Tertiary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <div className="flex flex-wrap gap-md items-end">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="space-y-lg">
        <h2 className="text-h1 border-b border-border pb-sm">Form Elements</h2>
        <div className="max-w-md space-y-md">
          <div className="space-y-xs">
            <label className="text-label-md">Full Name</label>
            <Input placeholder="Enter your name" />
          </div>
          <div className="space-y-xs">
            <label className="text-label-md">Bio</label>
            <Textarea placeholder="Tell us about yourself" />
          </div>
          <div className="flex items-center gap-sm">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-body-sm cursor-pointer">
              Accept terms and conditions
            </label>
          </div>
          <RadioGroup defaultValue="option-1">
            <div className="flex items-center gap-sm">
              <RadioGroupItem value="option-1" id="option-1" />
              <label htmlFor="option-1" className="text-body-sm cursor-pointer">Option One</label>
            </div>
            <div className="flex items-center gap-sm">
              <RadioGroupItem value="option-2" id="option-2" />
              <label htmlFor="option-2" className="text-body-sm cursor-pointer">Option Two</label>
            </div>
          </RadioGroup>
        </div>
      </section>

      <section className="space-y-lg">
        <h2 className="text-h1 border-b border-border pb-sm">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <Card>
            <CardHeader>
              <CardTitle>Project Alpha</CardTitle>
              <CardDescription>A revolutionary new platform for designers.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body-md">
                This card uses our design tokens for shadows, borders, and spacing.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">View Project</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>Track your progress in real-time.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-background-tertiary rounded-sm border border-border flex items-center justify-center">
                <span className="text-text-tertiary">Chart Placeholder</span>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <span className="text-caption text-text-tertiary">Last updated 2m ago</span>
              <Button variant="ghost" size="sm">Refresh</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </Container>
  );
}
