import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRightIcon, 
  GitHubLogoIcon, 
  CodeIcon, 
  FileTextIcon,
  BoxIcon,
  LayoutIcon, 
  SliderIcon,
  CommitIcon,
  CopyIcon, 
  CheckIcon, 
  DesktopIcon 
} from '@radix-ui/react-icons';
import { useState } from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="fixed w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/40">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-8 w-8 rounded-md"></div>
            <span className="text-xl font-bold tracking-tight">DevStack</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#getting-started" className="text-sm font-medium hover:text-primary transition-colors">Getting Started</a>
            <a href="#tech-stack" className="text-sm font-medium hover:text-primary transition-colors">Tech Stack</a>
            <a href="#api" className="text-sm font-medium hover:text-primary transition-colors">API</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
              <GitHubLogoIcon className="h-4 w-4" />
              <span>GitHub</span>
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-background to-background/80">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="inline bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MERN Stack</span> Starter Kit
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                  Launch your next project in minutes with a fully configured MERN stack development environment.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="gap-2 px-8 shadow-lg">
                  Start Building
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Documentation
                </Button>
              </div>
              
              <div className="w-full max-w-3xl mt-10">
                <CodeSnippet code="npx create-mern-stack-app my-awesome-project" language="bash" />
              </div>
              
              <div className="w-full grid grid-cols-3 sm:grid-cols-6 gap-8 mt-16">
                {['React', 'Node.js', 'MongoDB', 'Express', 'Docker', 'Tailwind'].map((tech) => (
                  <div key={tech} className="flex flex-col items-center">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-3 shadow-sm">
                      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{tech.charAt(0)}</span>
                    </div>
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Background decorations */}
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Modern Development Stack
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                Everything you need to build full-stack applications with best practices baked in.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 bg-gradient-to-br from-background to-muted/30 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section id="getting-started" className="py-24 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Up and Running in Minutes
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                Four simple steps to launch your next project. No configuration required.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-md">
                      {index + 1}
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="text-muted-foreground mt-2">{step.description}</p>
                      </div>
                      <CodeSnippet code={step.code} language="bash" />
                    </div>
                  </div>
                ))}
              </div>
              
              <Card className="mt-16 border border-border/40 shadow-sm">
                <CardHeader>
                  <CardTitle>Ready to Use</CardTitle>
                  <CardDescription>Your development environment is set up and running</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Backend</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-200">API</Badge>
                          <span className="text-sm font-mono">http://localhost:8000/api</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Frontend</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-purple-500/10 text-purple-600 border-purple-200">React</Badge>
                          <span className="text-sm font-mono">http://localhost:3000</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border/40">
                      <h4 className="font-semibold mb-2">API Response Example</h4>
                      <CodeSnippet 
                        code={`{
  "success": true,
  "statusCode": 200,
  "message": "API is running successfully",
  "data": {
    "version": "1.0.0",
    "environment": "development",
    "timestamp": "2025-04-02T10:32:41.291Z"
  }
}`} 
                        language="json" 
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Complete Technology Stack
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                Modern, maintainable, and scalable tools for your next project.
              </p>
            </div>
            
            <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                {stackCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    {category.icon}
                    <span>{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {stackCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-4">
                  <Card className="border-0 shadow-sm">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {category.items.map((item, i) => (
                          <div key={i} className="flex flex-col p-4 rounded-lg border border-border/40 hover:border-border hover:shadow-sm transition-all">
                            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-3">
                              <div className="h-6 w-6 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                                {item.name.charAt(0)}
                              </div>
                            </div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* API Section */}
        <section id="api" className="py-24 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                API Architecture
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                RESTful API with consistent response format and error handling.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Request Example</h3>
                <CodeSnippet 
                  code={`// Using Axios client
import { api } from '../lib/axios';

export const fetchUserData = async (userId) => {
  try {
    const response = await api.get(\`/users/\${userId}\`);
    return response.data;
  } catch (error) {
    // Error handling with consistent format
    return error.response?.data || { 
      success: false, 
      message: 'Network error' 
    };
  }
};`} 
                  language="javascript" 
                  filename="services/userService.js"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Response Format</h3>
                <CodeSnippet 
                  code={`{
  "success": true,
  "statusCode": 200,
  "message": "User retrieved successfully",
  "data": {
    "id": "64a7b3d2c8234f5e608b2d45",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2025-03-15T08:41:23.511Z",
    "updatedAt": "2025-04-01T14:28:05.329Z"
  },
  "meta": {
    "timestamp": "2025-04-02T10:32:41.291Z"
  }
}`} 
                  language="json" 
                  filename="Success Response"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to Supercharge Your Development?
              </h2>
              <p className="text-lg text-muted-foreground">
                Start building your next great idea with our MERN stack toolkit. Focus on creating features, not configuring tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="gap-2 px-8 shadow-lg">
                  Get Started
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// CodeSnippet Component
const CodeSnippet = ({ code, language = '', filename }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg overflow-hidden border border-border/40 bg-muted/30 shadow-sm">
      {filename && (
        <div className="bg-muted/50 px-4 py-2 text-sm font-mono text-muted-foreground border-b border-border/40">
          {filename}
        </div>
      )}
      <div className="relative">
        <pre className="p-4 text-sm overflow-x-auto">
          <code>{code}</code>
        </pre>
        <Button 
          size="sm" 
          variant="ghost" 
          className="absolute top-2 right-2 opacity-70 hover:opacity-100"
          onClick={copyToClipboard}
        >
          {copied ? (
            <CheckIcon className="h-4 w-4 text-green-500" />
          ) : (
            <CopyIcon className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};

// Features data
const features = [
  {
    title: 'Modern React & Node',
    description: 'Latest React 18 with hooks and Node.js environment configured for optimal performance.',
    icon: <CodeIcon className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'MongoDB & Mongoose',
    description: 'Pre-configured database connection with models, schemas, and validation built-in.',
    icon: <FileTextIcon className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'Docker Ready',
    description: 'Containerized development and deployment with multi-stage builds for production.',
    icon: <BoxIcon className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'Authentication',
    description: 'JWT-based authentication system with refresh tokens and secure HTTP-only cookies.',
    icon: <SliderIcon className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'API Architecture',
    description: 'RESTful API with consistent response format, error handling, and validation.',
    icon: <CommitIcon className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'UI Components',
    description: 'Tailwind CSS with preconfigured ShadCN UI components for rapid interface development.',
    icon: <LayoutIcon className="h-6 w-6 text-blue-600" />
  },
];

// Getting started steps
const steps = [
  {
    title: 'Create Your Project',
    code: 'npx create-mern-stack-app my-awesome-project',
    description: 'Initialize a new project with all the dependencies and configurations.'
  },
  {
    title: 'Configure Environment',
    code: 'cd my-awesome-project\nnpm run setup',
    description: 'Set up your environment variables and customize configurations.'
  },
  {
    title: 'Start Development',
    code: 'npm run dev',
    description: 'Launch both frontend and backend in development mode with hot reloading.'
  },
  {
    title: 'Build for Production',
    code: 'npm run build\nnpm run start',
    description: 'Create optimized production builds and start your application.'
  }
];

// Tech stack categories
const stackCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: <DesktopIcon className="h-4 w-4" />,
    items: [
      { name: 'React', description: 'Component library' },
      { name: 'Redux Toolkit', description: 'State management' },
      { name: 'React Router', description: 'Navigation' },
      { name: 'ShadCN UI', description: 'UI components' },
      { name: 'Tailwind CSS', description: 'Utility styling' },
      { name: 'Vite', description: 'Build tool' },
      { name: 'Axios', description: 'HTTP client' },
      { name: 'React Query', description: 'Data fetching' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: <CodeIcon className="h-4 w-4" />,
    items: [
      { name: 'Node.js', description: 'Runtime' },
      { name: 'Express', description: 'Web framework' },
      { name: 'JWT', description: 'Authentication' },
      { name: 'Bcrypt', description: 'Password hashing' },
      { name: 'Joi', description: 'Validation' },
      { name: 'Helmet', description: 'Security' },
      { name: 'Cors', description: 'Cross-origin' },
      { name: 'Winston', description: 'Logging' }
    ]
  },
  {
    id: 'database',
    name: 'Database',
    icon: <FileTextIcon className="h-4 w-4" />,
    items: [
      { name: 'MongoDB', description: 'NoSQL database' },
      { name: 'Mongoose', description: 'ODM for MongoDB' },
      { name: 'Aggregation', description: 'Data pipelines' },
      { name: 'Indexing', description: 'Query optimization' }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: <BoxIcon className="h-4 w-4" />,
    items: [
      { name: 'Docker', description: 'Containerization' },
      { name: 'ESLint', description: 'Linting' },
      { name: 'Prettier', description: 'Formatting' },
      { name: 'Jest', description: 'Testing' },
      { name: 'Husky', description: 'Git hooks' },
      { name: 'CI/CD', description: 'Workflows' },
      { name: 'PM2', description: 'Process manager' },
      { name: 'Nginx', description: 'Web server' }
    ]
  },
];

export default Home;