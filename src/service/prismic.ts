import * as prismic from '@prismicio/client'

export const repositoryName = 'myportfolio2'
const endpoint = prismic.getEndpoint(repositoryName)


export const prismicClient = prismic.createClient(endpoint, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});