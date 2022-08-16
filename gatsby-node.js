exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/blog.tsx`)
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path, //这是md文档中三横线包裹的path属性
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
      },
    })
  })
}
