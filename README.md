# Chance Chapman's Resume

This is my personal resume website built with [Astro](https://astro.build) as a static site, deployed on AWS Amplify.

## About

Senior Developer with over 20 years of experience in Node.js, PHP, and Web3 technologies. This resume showcases my professional experience, skills, and projects in web development, blockchain solutions, and cloud infrastructure.

## Tech Stack

- **Astro** - Static site generator
- **TypeScript** - Type-safe development
- **CSS** - Custom styling with responsive design
- **AWS Amplify** - Hosting and deployment

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is deployed on AWS Amplify, which automatically builds and deploys from the GitHub repository. The build settings for Amplify:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## Contact

- **Email**: chancechapman@gmail.com
- **LinkedIn**: [Chance Chapman](https://www.linkedin.com/in/chance-chapman-615a66146/)
- **Company**: Triple C Coding