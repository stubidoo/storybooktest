## Introduction
This is a component library designed to be imported into any React / Gatsby based project. The components have been developed in StoryBook which can be run from the project. 

### Dependancies
The component library's main dependancies are React and <a href='https://emotion.sh/docs/introduction'>Emotion</a>. These will be added during installation if they don't already exist in your project.

## How to maintain this Library
1. Develop and maintain your components in the `/src` folder.
2. Build out a static version of StoryBook and host appropratley for all stakeholders to access.
3. Build the components for distribution, to be used by the organisation in developing web applications.

## How to consume this library in another project
1. Install as a dependancy to your React or Gatsby project - `yarn add horizon-test-storybook`
2. If using Gatsby, be sure to include the <a href="https://www.gatsbyjs.org/docs/emotion/">Gatsby Emotion Plugin</a>
3. Import components to be utilised and start building. 

### Gatsby Example:  

```javascript
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Button } from "horizon-test-storybook"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Gatsby + Horizon</p>
    <p>Now go build something great.</p>
    
    <Button 
      text='Horizon'
    /> 
    
    <br/><br/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
export default IndexPage  

```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs storybook in development


### `yarn test`

Runs react test scripts

### `yarn build`

Builds out the components to the package `/dist` folder

### `yarn build-storybook`

Builds a static version of story book in `storybook-static`

<br/>
<hr/>

## That's All Folks!