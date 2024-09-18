import { gql } from 'graphql-request';
export const navigationQuery = gql`
query NavigationQuery {
    navigations {
      navigation {
        ... on NavigationPage {
          id
          slug
          title
          redirectUrl
          page {
            content {
              markdown
            }
          }
        }
        ... on NavigationPageGroup {
          id
          title
          slug
          pages {
            title
            slug
            redirectUrl
            page {
              content {
                markdown
              }
            }
          }
        }
      }
    }
  }
  
`;
export const homeQuery = gql`
query HomeQuery {
  homePages {
    headline
    description
    buttons {
      displayText
      destination
      important
    }
    backgroundVideo {
      url
    }
  }
}
`
export const pictureQuery = gql`
query PictureQuery {
  picturesPages {
    pictures {
      title
      images(first: 100) {
        url
        id
        handle
        width
        height
      }
    }
  }
}
`