export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f48e94431bda840f8eca271',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vkn56gjd',
                  apiId: 'c7f17a30-a3fc-4830-8eeb-cdc77b4900e7'
                },
                {
                  buildHookId: '5f48e9440f230a0090ea6fce',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2yr6hc89',
                  apiId: '39bf3684-e850-4276-958c-317af1cbd0d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AnnaLinka/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2yr6hc89.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
