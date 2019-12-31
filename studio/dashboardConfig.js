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
                  buildHookId: '5e0b15f457bf0468fb681ae1',
                  title: 'Sanity Studio',
                  name: 'scheinerbock-studio',
                  apiId: '57935a12-c039-42e2-bac9-afd77ca85ba2'
                },
                {
                  buildHookId: '5e0b15f4892713e557731856',
                  title: 'Portfolio Website',
                  name: 'scheinerbock',
                  apiId: '0a66ae8b-e0de-44fd-9590-945e24174fa5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brmscheiner/scheinerbock',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://scheinerbock.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
