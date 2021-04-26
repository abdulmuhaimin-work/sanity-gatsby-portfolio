export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d66926e1aa1e3c410f2d718',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kipcb6nm',
                  apiId: 'fc43b424-eb20-4f92-bded-4cdcfccb9dca'
                },
                {
                  buildHookId: '5d66926eb404e88b52a278e7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-t4fp4gza',
                  apiId: '0d96492c-14c0-4f13-b611-e92ddc8e204a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abdulmuhaimin-work/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://abdulmuhaimin.netlify.app/',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
