/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    name: "Nitin",
    technologies:
      "15+ years of extensive experience as a Front End Developer with demonstrated expertise in developing and maintaining web applications using modern UI tools, technologies, and AI-assisted development frameworks. Proficient in leveraging Claude AI and GitHub Copilot to accelerate development workflows, improve code quality, and automate repetitive tasks—increasing team productivity by up to 40%. Experienced in driving projects forward as a development team leader, facilitating projects from concept to launch while mentoring teams on AI-driven development practices. Passionate about continuous learning and staying at the forefront of emerging technologies, including Claude Code, MCP servers, and AI-powered design-to-code automation. Demonstrated ability to integrate AI tools (Claude, Copilot) into development pipelines to streamline code reviews, documentation generation, and PR automation. Eager to tackle more complex problems, lead high-performing teams, and maximize user efficiency through intelligent automation and modern development practices. Seeking opportunities to apply advanced AI development skills with a larger, forward-thinking development team.",
    description: [
      "Implementing web design and development principles to build stable, maintainable software using modern AI-assisted workflows; leveraging Claude AI and Claude Code for intelligent code generation, refactoring, and architectural guidance.",
      "Bringing mockups to life using HTML, CSS, and JavaScript; utilizing Claude AI design-to-code skills to accelerate development from mockups to production-ready components with pixel-perfect accuracy.",
      "Collaborating closely with the team to support projects during all phases of delivery; using Claude Code skills and agents to streamline code reviews, documentation, and technical communication across the team.",
      "Building responsive, reusable components with modern development practices; automating component testing and documentation generation using Claude Code agents and custom skills for improved efficiency and consistency.",
      "Monitoring website performance and rectifying front-end issues using debugging tools and Claude AI for root-cause analysis; leveraging MCP (Model Context Protocol) servers for real-time GitHub integration and PR automation.",
      "Communicating technical issues in an understandable manner to the team and clients; using Claude AI to generate clear bug reports, documentation, and technical summaries that bridge technical and non-technical audiences.",
      "Identifying innovative ideas and proof of concepts with AI-enhanced research and prototyping; using Claude Code to rapidly validate concepts and generate scalable solutions aligned with project requirements.",
      "Providing guidance and troubleshooting support to clients with AI-powered assistance; leveraging Claude Code as a knowledge partner for complex technical problem-solving and architectural decisions.",
      "Maintaining an organized workflow using GitHub and project management tools; automating commit, push, and PR creation workflows using Claude Code skills, custom MCP servers, and git automation to reduce manual overhead.",
      "Testing and quality assurance including unit testing with JEST and Enzyme; using Claude AI agents to generate test cases, identify edge cases, and automate testing workflows for comprehensive coverage.",
      "Documenting bug reports, tickets, and code changes with precision and clarity; leveraging Claude Code to auto-generate documentation, commit messages, and technical summaries from code changes.",
      "ADA-compliant web application development with accessibility best practices; using Claude AI to audit, suggest, and implement accessible components and WCAG-compliant patterns throughout projects.",
      "Automating development workflows using Claude Code skills, rules, and agents; implementing MCP servers for GitHub integration to streamline code commits, pull request creation, and CI/CD automation—reducing manual process time by up to 40%.",
      "Custom AI-driven development skills including design-to-code, commit automation, PR generation, and code review—increasing productivity and code consistency across the development lifecycle.",
    ],
    skills: [
      "Claude AI & Claude Code",
      "AI-Assisted Code Generation & Refactoring",
      "Model Context Protocol (MCP) Integration",
      "Custom Claude Skills & Agents",
      "Prompt Engineering & AI Workflows",
      "AI-Powered Testing & Documentation Automation",
      "Design-to-Code AI Automation",
      "PR & Git Automation with AI",
      "Code Review & Quality Analysis with AI",
      "Object Oriented JavaScript",
      "TypeScript",
      "React, React Native",
      "Redux / Redux Toolkit",
      "HTML5, Webpack 5",
      "Micro Front End (MFE)",
      "Jenkins and CICD",
      "JEST/React Testing Library",
      "Bootstrap",
      "Material UI",
      "CSS 3, Tailwind CSS",
      "Splunk and PostMan",
      "ASP.Net, SQL Server",
      "JAVA, Spring Boot",
    ],
    contact: [
      {
        type: "email",
        imgsrc: "email.svg",
        desc: "nitin@featherglobe.com",
        url: "mailto:nitin@featherglobe.com",
      },
      // { type: "phone", imgsrc: "phone.svg", desc: "+1 510 857 9536" },
      { type: "location", imgsrc: "location.svg", desc: "CA - USA" },
      {
        type: "site",
        imgsrc: "web.svg",
        desc: "featherGlobe",
        url: "http://www.featherglobe.com",
      },
      {
        type: "linkedin",
        imgsrc: "linkedin.svg",
        desc: "LinkedIn",
        url: "http://www.linkedin.com/in/featherglobe",
      },
      {
        type: "git",
        imgsrc: "git.svg",
        desc: "GitHub",
        url: "http://www.github.com/nitin-fed",
      },
      {
        type: "flikr",
        imgsrc: "flikr.svg",
        desc: "Flickr",
        url: "https://www.flickr.com/photos/154195298@N06/",
      },
    ],
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    showHideModal(state, { payload }) {},
  },
});

//export const { showHideModal } = modalSlice.actions;
export default profileSlice.reducer;
