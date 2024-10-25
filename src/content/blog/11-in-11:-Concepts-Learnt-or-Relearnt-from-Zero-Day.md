---
draft: false
title: "11 in 11: Concepts Learnt or Relearnt from Zero Day"
snippet: "A reflection on valuable lessons learned during 11 months in a new tech role, covering everything from embracing \"comfortable discomfort\" to mastering TypeScript enums, container queries, and the importance of self-care in tech."
image: {
    src: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhhcitqui0sr45io11cs9.jpg",
    alt: "A day in a garden"
}
publishDate: "2024-09-20 12:00"
category: "Reflections, Code"
author: "Me"
tags: [javascript,career, typescript,learning]
---


![Cover Image of a garden](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hhcitqui0sr45io11cs9.jpg)

As of the first of this month, it's been 11 months since I have been in my current position. It took exactly 1 year between "We are sorry " and "Welcome to the team". Eventually, someone will speak to the emotional toll of the job hunt in this current market but not me. This job hunt consisted of upskilling, networking, re-learning and unlearning stuff. Overall, I tracked somewhere in the neighbourhood of 700-ish applications, what I will say is that job-hunt 2023 was different from all the previous timelines. A new career opportunity, as always, brings a new set of challenges but also provides a lot of insights, here are 11 insights learnt thus far :

## 1: Comfortable Discomfort
![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2VndGhydTd0dXZ6ZnI5MXNtZmhsN2xheHhqanB3NjN6MWZ5eXFrdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fhAwk4DnqNgw8/giphy.gif)

Staying current in software development requires one to embrace a state of "comfortable discomfort" - which lends itself to always learning and adapting. This means on average based on your skill level, will spend anything from 3 to 6 months annually, learning something completely new or digging deeper into what you already know. To strengthen and enhance my skill set, I have done the following :
- Stay updated with key industry figures and organizations through select and curated professional social networks (I limit my focus to LinkedIn and [Twitter](https://x.com/anthonydmays/status/1840790605699637502) ...... TikTok is creeping).
- Compile a mix of digital content - from tech blogs to newsletters and podcasts to keep current on ongoing industry insights and changes.
- Engage with industry events (conferences and meetups), both online and offline, to foster connections and stay current. Don't just go, ask questions, help others and both follow-up and follow through on what was learnt.
- Prioritize deep mastery of the foundationals over surface-level knowledge and or the shiny syndrome.
- Keep an eye on industry shifts without succumbing to 'trend fatigue' or information overload.
- Take time to deepen your expertise in your chosen niche while cultivating a working knowledge of adjacent fields; contribute to diverse open-source projects to broaden your technical perspective.
- Chart your professional development by pinpointing crucial competencies aligned with your career trajectory. Establish concrete learning milestones and carve out dedicated time for skill acquisition and hands-on exploration.
- Keep an eye on emerging trends without feeling pressured to learn everything. Choose a specialization, but maintain a broad understanding of related areas.



## 2:Enums
![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHgyZmZ3eXY0N2lyc3IwM2Z3cXZ1bjgwbjRoZW9tMGFoNzdnYXA1OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Te1T74De6RGNvBRe1x/giphy.gif)

Enums (short for enumerations) are a way to define a set of named constants. They're instrumental in TypeScript for creating more expressive and type-safe code. In my head, they have the same features as objects.  Here is another way of explaining them, _"
imagine you have a box of coloured pencils. You know that in this box, you can only have certain colours - let's say red, blue, green, and yellow. You can't suddenly have a purple pencil appear in the box.
An enum (short for enumeration) in programming is like that box of coloured pencils._ It's a special way to create a group of named values that don't change. Just like you know exactly what colours are in your pencil box, an enum lets programmers define a set of named values that they know will always be the same. My takeaways include :

- TypeScript enums provide compile-time type checking, helping catch errors early.
- Enums are great for representing a fixed set of options, like days of the week, card suits, assets or defined properties of customers.
- They make code more readable and self-documenting.
- When it comes to *enums vs object literals*: enums are more type-safe and can be used in switch statements.
- It is also the same thing for enums vs union types: enums can have associated values, while union types are just a set of possible types.

I also found this [resource](https://www.typescriptlang.org/docs/handbook/enums.html) and this [video](https://youtu.be/VhzId8v3gYA?si=oAfsw-3oY2LaSCRP) to be extremely helpful.

## 3:Container Queries

![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXJlZHNjNjgwbzBna2wybWV3azhqcjR0OHM2bHZ6MXpqNW9yZGl4ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YQGdYTImaB6VN4Hm88/giphy.gif)

Container queries allow you to apply styles based on the size of a containing element, rather than the viewport size. Here are some key points :
- **_Responsive design at the component level_**
Container queries enable truly modular, responsive components that adapt to their container's size.
 This is particularly useful for reusable components that may be placed in different layouts.
- **_Practical examples_**
 A card component that changes layout based on its container width. The navigation menu switches between the horizontal and vertical layouts depending on available space.
- **_Browser support and fallback strategies_**
As of 2023, container queries are supported in most modern browsers. Fallback strategies include using media queries as a base and then enhancing with container queries where supported.

My references were this [CSS tricks article](https://css-tricks.com/css-container-queries/) and this [video](https://youtu.be/8x8lxX5IGHY?si=2qFKm8YYNJ1PkEY3).


## 4:Slots
![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2J6bmZpN3lqZ3JxaHRnMTlwZ2p5MWNndDVrbThxYjJkZGw4anN3ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F14BrsUdpzcc1wsSbV/giphy.gif)

I became aware of slots as we utilize this feature in our codebase and [@abbeyperini's talk](https://youtu.be/DNqwHdxaeJE?si=UuQGssudOpi5cbib) on said topic. Slots can be best described as a powerful feature in web components and some frameworks that allow for flexible content composition.

- **_Using slots in web components_**
Slots allow you to define placeholders in your component that can be filled with custom content.
   - Example:
     ```html
     <my-component>
       <span slot="header">Custom Header</span>
       <p slot="content">Custom Content</p>
     </my-component>
     ```
- **_Implementing named slots in Vue.js_**
Vue.js supports named slots for more granular content distribution. This allows for multiple insertion points in a single component.
- **_Comparing slots to render props in React_**
Slots and render props both allow for flexible composition, but with different syntax and mental models. Slots are more declarative, while render props offer more programmatic control.

## 5:Take Care of You
![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGg0ZnptbjF6aXIxMjl2Y3VrcGVjOWZzbGYyeDQxZmpsYm81d2sxcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SphdK3sFxFYZy/giphy.gif)

## Prioritizing Self-Care in the Tech Community

It's often overlooked, but taking care of yourself is essential, especially in the fast-paced tech world. The culture of hustle and grind can be alluring, and many of us have indulged in that mindset. However, the reality is that pushing yourself too hard can lead to burnout, and your body will inevitably demand a break. Here’s some crucial advice for anyone navigating this landscape:

### Essential Self-Care Tips

- **Sleep**: Prioritize quality sleep to recharge your mind and body. Aim for 7-9 hours per night to enhance focus and productivity.

- **Hobbies**: Engage in activities outside of work that bring you joy and relaxation. Hobbies can provide a much-needed mental escape.

- **Exercise**: Incorporate regular physical activity into your routine. Whether it’s a brisk walk, yoga, or weight training, movement is vital for both physical and mental health.

- **Nutrition**: Fuel your body with balanced meals rich in nutrients. Proper nutrition supports energy levels and cognitive function.

- **Ergonomics**: Set up your workspace to promote good posture and reduce strain. Invest in ergonomic furniture and accessories to protect your health.

### Bonus Tip

- **Get a Check-Up**: Regular health check-ups can help catch potential issues early. Don’t neglect your physical health; it’s just as important as your work performance.

By embracing these self-care practices, you can maintain a healthy balance in your life while thriving in the tech community. Remember, taking care of yourself is not just an option; it's a necessity for long-term success!

## 6:Demonstrated Learning
![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnAyNWE2a3MxaHMwazlxbDhxNHczeDVvN2U3NTRtYmJpYTE0aG10eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jl3M1KvyjMdIjQcBwZ/giphy.gif)
Demonstrating your learning through projects and sharing knowledge is crucial for career growth.

- **Creating a portfolio of projects:**
Build projects that showcase different skills and technologies. Include detailed README files explaining your process and decisions. Host your projects on platforms like GitHub and include live demos where possible. The rules are: make it live, make it testable and make well documented.

- **Preparing and delivering tech talks:**
Start with lightning talks at local meetups to build confidence. Choose topics you're passionate about and have practical experience with. Use tools like reveal.js or Google Slides to create engaging slide decks.

- **Writing blog posts or creating video tutorials:**
Start a technical blog to document your learning journey. Create step-by-step tutorials on solving specific problems. Consider starting a YouTube channel for video content if that suits your style.

## 7:Personal Note Taking (explain it to you => Use examples)

![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXhnMTc4aWVhbDdyaDB4dGpzNXQzMGg1Nm5kOTY2dzVnYnAwd3dqcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4pTqyJ8XMhLZ3ScE/giphy.gif)

Effective note-taking is crucial for retaining and organizing knowledge in the fast-paced world of web development.

- **Effective note-taking techniques:**
Zettelkasten method: Create atomic notes with links between related concepts. Cornell method: Divide notes into main points, details, and summary sections. Mind mapping: Use visual diagrams to connect related ideas.

- **Using code snippets and diagrams:**
Include relevant code snippets in your notes for quick reference. Use tools like Mermaid or PlantUML to create diagrams directly in your markdown notes. Annotate code and diagrams with explanations of key concepts.

- **Tools and apps for organizing notes:**
Paper notebooks, highlighters and a pen will work wonders if that is your style, do it in such a way that it can be used to explain a concept to anyone.
I would look into a tablet with a pen or stylus for note-taking, I Have too many notebooks, as this would help you to have access to all your notes digitally. Other considerations include Notion (an all-in-one workspace with rich formatting and database features),  Obsidian( a markdown-based, with powerful linking and graphing capabilities) and VS Code with appropriate extensions (Keep notes close to your development environment).

## 8:Learning How to Asking For Help (Timeline and Method)
![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDA1bTFmY2o3Zzd2ZWR2Zjc1bHg4eTJvYnY2cW1nMTI3Zmwxb2x5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rK1inID1LeXhcUrjmy/giphy.gif)

Knowing how and when to ask for help is a crucial skill in development.

- **Best practices for asking questions online:**
Search thoroughly before asking to avoid duplicate questions. Provide a minimal, reproducible example of your problem. Clearly state what you've already tried and what results you got.

- **When and how to reach out to seniors or mentors:**
Try to solve the problem yourself first, but don't waste excessive time if stuck. Prepare your question in advance, including context and your attempted solutions. Be respectful of their time and express gratitude for their help.

- **Structuring your question:**
Start with a clear, concise description of the problem. Provide necessary context: environment, relevant code, error messages. Clearly state your expected outcome and what you've tried so far.

## 9:Reading Docs and Books to Understand Stuff (Basic and Complex)
![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXl0bTBzcTlwb2drY213bW9hMjV3ZnhsN3BlanVycWVqdW9nZjZ1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YypqAhlDKiFJknPbnt/giphy.gif)

Efficient reading and comprehension of technical material is a key skill for developers.

- **Techniques for reading technical documentation:**
Skim first to get an overview, then do a deeper read. Use the documentation's search function to find specific information. Practice active reading: take notes, and try out code examples.

- **Selecting appropriate resources:**
For beginners: Look for "Getting Started" guides and tutorials. For intermediate/advanced: Refer to API references and advanced guides. Supplement official docs with community resources like MDN for web technologies.

- **Creating a personal reference library:**
Bookmark useful documentation pages for quick access. Maintain a list of go-to books or online resources for different topics. Use tools like Pocket or Raindrop.io to organize and tag useful articles and resources.

## 10:Styling Choices: Tailwind CSS vs Regular CSS
![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGp6b3lna3FiN2FsYWFveGI4ZGdyY3dhZWZ5cm10YXRwdnd0cml2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3og0Iwmv38WmJBrYvS/giphy.gif)
The choice between utility-first CSS frameworks like Tailwind and traditional CSS depends on various factors. Let it be known that I have a certain amount of dislike for Tailwind due to its accessibility issues.

- **Pros and cons of Tailwind CSS:**
   Pros:
   - Rapid prototyping and development.
   - Consistent design system.
   - Reduced CSS file size in production.
   Cons:
   - Steep learning curve.
   - HTML can become cluttered with classes.
   - Potential loss of semantic meaning in markup.

- **When to use Tailwind vs vanilla CSS:**
   - Use Tailwind for:
     - Rapid prototyping.
     - Projects with consistent, utility-based designs.
     - Teams already familiar with the framework.
   - Use vanilla CSS for:
     - Smaller projects or components.
     - Highly custom designs.
     - When performance is critical and you need fine-grained control.

- **Customizing and extending Tailwind:**
   - Use the `tailwind.config.js` file to customize colours, spacing, breakpoints, etc.
   - Create custom utilities using `@apply` directive in your CSS.
   - Use plugins to extend Tailwind's functionality.

## 11:How to use AI assistants to solve problems
![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXNodWp2cHRzbTYzdmo4Z3F4d3J4ZXdpOGw1ZndtcWJzNWEwNGVxaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9rtpurjbqiqZXbBBet/giphy.gif)

AI assistants can be powerful tools for developers when used effectively. In a lot of ways my questions got better with time, thus I tend to do or observe the following when using "Geeps" or the other cousins :

- **Formulating queries for useful responses:**
Be specific and provide context. Break complex problems into smaller, focused questions. Learn how to use technical terminology or analogies accurately.

- **Leveraging AI for code reviews and refactoring:**
Use the tool to review code snippets for potential improvements.  Ask for explanations of complex code sections that you have either been handed or created, yes it happens.

- **Using AI to explain concepts or debug issues:**
Request step-by-step explanations of difficult concepts, analogies or annotations. Use the tool to describe bugs in detail and ask for potential causes and solutions. Use the tool to brainstorm different approaches to solving a problem.

## Bonus: All Hail Zod
![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVudjdrZmUxaDUxc2t5d3J6dWo2d3hodTFyYjJsNzc5OGRhejFkZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HGa08bNh1Dqla/giphy.gif)


A year or two ago, a friend of mine mentioned Zod in a conversation and explained it to me, sorta kinda made sense to me then. But now the best way is explain Zod is that it is a TypeScript-first schema declaration and validation library. Think of it as a powerful tool that helps you ensure your data is exactly what you expect it to be.
Here's a more detailed breakdown:

_Schema Declaration:_
   Just like we described checking if names are text and ages are numbers, Zod lets you define these rules clearly:

   ```typescript
   import { z } from "zod";

   const friendSchema = z.object({
     name: z.string(),
     age: z.number(),
     email: z.string().email()
   });
   ```

   This schema says: "A friend should have a name that's a string, an age that's a number, and an email that's a valid email string."

_Type Inference:_
   One of Zod's superpowers is that TypeScript can automatically figure out the type from your schema:

   ```typescript
   type Friend = z.infer<typeof friendSchema>;
   // TypeScript now knows Friend is: { name: string; age: number; email: string }
   ```

_Validation:_
   Remember our "friendly robot assistant" that checks if data looks right? Here's how that works in Zod:

   ```typescript
   const result = friendSchema.safeParse({
     name: "Alice",
     age: 12,
     email: "alice@example.com"
   });

   if (result.success) {
     console.log("Data is valid!", result.data);
   } else {
     console.log("Oops, something's wrong:", result.error);
   }
   ```

_Advanced Features:_
   As you get more comfortable, Zod offers more advanced tools:

   - Custom error messages: `z.string().min(3, { message: "Name too short!" })`
   - Transformations: `z.string().transform(s => s.toLowerCase())`
   - Combining schemas: `z.union([z.string(), z.number()])`

_Why Use Zod?_
   - It's TypeScript-first, so it plays really well with TypeScript projects.
   - It has zero dependencies, making it lightweight.
   - It's very flexible and can handle complex data structures.
   - It provides helpful error messages when validation fails.

In practice, Zod is super useful for:
- Validating user input in web forms
- Checking data from API responses
- Ensuring configuration files are correct
- Defining clear contracts between different parts of your application

Think of a LEGO analogy; Zod is like having a master builder's guidebook that not only shows you how pieces should fit together but actively helps you assemble them correctly. It gives you confidence that your data structures are solid, just like a well-built LEGO castle.As you grow as a developer, you'll find Zod or tools like it become an invaluable tool in your toolkit for building robust, type-safe applications.

## Still With Me

![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXhna2RxN2J1cnVxeWVuNnRwZTBrN2l5eGp5djFuNzl0eHdmM25jaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PLPDPB4ESlouA/giphy.gif)

Remember, your journey in tech is uniquely yours. Embrace the challenges, celebrate the victories (no matter how small), and never underestimate the power of perseverance. Remember that even the most daunting job hunts can lead to opportunities for tremendous growth and learning. As you continue on your path, keep pushing your boundaries, stay curious, and most importantly, take care of yourself. The future of tech is bright, and with the insights and attitudes  I outlined here, here is to hoping that you will be better equipped to be a part of it. I can be found on the socials ([LinkedIn](https://www.linkedin.com/in/nerando-johnson/) and [Twitter](https://x.com/nerajno)) and my dms should be open if you want to drop a line.

![](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTEyZWs4OHRuN2E0M3U4a3M1djQ1b2cyZG44bTgxaHYyZ3N6MHd0aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/79ZFYdMsStRYI/giphy.gif)

### Disclaimer

This was originally published on [dev.to](https://dev.to/nerajno/11-things-learnt-from-being-on-board-from-11-months-7d2) in October 2024. I am currently migrating my main source of publication to a personal self-hosted blog (developer growth).




