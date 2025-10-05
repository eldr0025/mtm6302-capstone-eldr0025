Ryan Eldred-Neville
041150088
Capstone Project - Part 1 

Capstone Project - Part 2: Description

I designed the landing page the way I did because it is simple yet allows users to clearly see what they can do. For example, if users want to pick the date there is a easy to see and use box that will bring up a calendar/date picker. Or if they want to access the favourites, there is an obvious button that will take them to the favourites section. For the color scheme, I wanted to choose a simple purple and white color scheme that will have lots of contrast to make it accessible for more people, and I wanted the purple to give the idea of the universe theme.

Capstone Project - Part 3: Report

1. Initial Setup

First, I created a project folder containing the main HTML pages (index.html and favourites.html) and CSS files.

Then I created the basic HTML structure, including header, main, and footer elements.

2. Navigation Bar

Second, I built a responsive header with a site title and navigation links. I hid the nav links on mobile by using "display: none".

I fixed issues I had with navigation links by correcting the use of href (removing unnecessary # before file names).

3. Hero Section (Home Page)

Third, I added a main image with a date display and a favourites button.

Then I styled the image to be responsive (width: 100%; height: auto;) so it scaled properly across devices.

I placed interactive elements (date picker, description and favourites button) below the image for usability and to closer match the original APOD website.

4. Favourites Page Layout

Fourth, I created a grid-based layout for displaying saved images.

I used a CSS Grid to switch from a single-column mobile layout to a two-column desktop layout.

Applied object-fit: cover to images so they would align uniformly in the grid without breaking aspect ratios. I had an issue with the images not lining up properly before I added this.

5. Buttons and Navigation

Fifth, I created a call-to-action button displayed on the home page that links to the favourites page using a <button> with JavaScript navigation. I re-purposed this button on the favourites page to be a nav button that brings the user back to the home page as well.

I styled these buttons consistently to match the site’s design language.

6. Footer

Lastly, I added a footer with copyright information.

I ensured the footer was aligned flush with the edges of the page by removing browser default margins. This made a big difference.

----------------

Challenges Faced

Navigation Not Working

Issue: Links using #favourites.html were not navigating.

Solution: Updated them to favourites.html (removing the # so the link points to another page instead of an ID).

Image Scaling Problems

Issue: Images on the favourites page had different sizes, creating an uneven grid.

Solution: Applied object-fit: cover with a fixed height to ensure all images appeared uniform.

Unexpected Gaps at Page Edges

Issue: A gap appeared around the navbar, images, and footer due to default browser body margins.

Solution: Reset the CSS with body { margin: 0; padding: 0; }.

Responsive Layout Adjustments

Issue: Layouts worked on mobile but broke on larger screens.

Solution: Used media queries (@media screen and (min-width: 767px)) to introduce grid layouts, adjust font sizes, and align content properly on desktop.

Positioning Bookmark Button

Issue: Difficulty in aligning the favourites button either below or overlaid on the image.

Solution: Used flex-direction: column to place it below the image, and position: absolute as an alternative for overlay.

I did not use any resources other than referring to Figma to view my wireframes to ensure that I was creating the most accurate prototype I could.